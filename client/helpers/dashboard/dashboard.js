Template.Dashboard.rendered = function () {

    var chart;

    var $fromField = $("#line-chart-from-date");
    var $toField = $("#line-chart-to-date");

    var now = moment();

    // default to current week.
    var previousFrom = moment().subtract(7, 'day').format('YYYY-MM-DD');
    var previousTo = now.format('YYYY-MM-DD');
    $fromField.val(previousFrom);
    $toField.val(previousTo);

    var $datepickers = $('.datepicker');
    $datepickers.datepicker();
    $datepickers.change(function (e) {

        var from = $fromField.val();
        var to = $toField.val();

        if (previousFrom === from && previousTo === to) {
            return;
        }

        // check if the specified date is in the future
        if (new Date(to) > new Date()) {
            console.warn('Invalid period (to date in future): ' + from + ' - ' + to + '.');
            $toField.val(previousTo);
            return;
        }
        console.log(moment(previousTo).diff(moment(previousFrom), 'days'));

        if (to < from) {
            console.warn('Invalid period: ' + from + ' - ' + to + '.');

            $fromField.val(previousFrom);
            $toField.val(previousTo);

            return;
        }

        previousFrom = from;
        previousTo = to;

        var salesInPeriod = Sales.find({date: {$gte: from, $lte: to}}).fetch();

        d3.select('#chart svg').datum([{
            key: 'Current period',
            values: getGraphReadyArray(salesInPeriod, from, to)
        }]).call(chart);
        chart.update();

        //console.log(salesInPeriod);

    });

    chart = nv.models.lineChart()
        .margin({left: 100})  //Adjust chart margins to give the x-axis some breathing room.
        .useInteractiveGuideline(true)  //We want nice looking tooltips and a guideline!
        .transitionDuration(350)  //how fast do you want the lines to transition?
        .showLegend(true)       //Show the legend, allowing users to turn on/off line series.
        .showYAxis(true)        //Show the y-axis
        .showXAxis(true)        //Show the x-axis
        .forceY([0])
    ;

    nv.addGraph(function () {
        nv.utils.windowResize(function () {
            chart.update()
        });
        chart.xAxis.axisLabel('Date').tickFormat(function (d) {
            var date = new Date(d);
            return d3.time.format('%Y-%m-%d')(date);
        });

        chart.yAxis.axisLabel('Sales').tickFormat(d3.format('d'));
        d3.select('#chart svg')
            .datum([
                // 0
                {
                    values: getGraphReadyArray(Sales.find().fetch()),
                    key: 'Current period'
                },
                // 1
                {
                    key: 'Previous period',
                    values: [
                        {x: '2014-11-15', y: 0},
                        {x: '2014-11-16', y: 0},
                        {x: '2014-11-17', y: 2},
                        {x: '2014-11-18', y: 5},
                        {x: '2014-11-19', y: 7}
                    ]
                }
            ]
        ).call(chart);

        console.log('from: ' + $('#line-chart-from-date').val() + ", to: " + $('#line-chart-to-date').val());

        return chart;
    });

    Tracker.autorun(function () {
        console.log("HEI");

        var data = [];

        /*        2014-10-12

         2014-10-16

         for (each date between last sale and this sale) {
         data.push({
         values: {
         x: theDate (Y),
         y: 0
         }
         });
         }*/

        data.push({
            values: getGraphReadyArray(Sales.find().fetch()),
            key: 'Sales'
        });

        d3.select('#chart svg').datum(
            data
        ).call(chart);
        chart.update();
        //d3.selectAll('circle').attr('r', 10).attr('fill-opacity', 1);
    });

};

var getGraphReadyArray = function (salesData, from, to) {
    // MapReduce idea from http://www.boxuk.com/blog/unboxing-map-reduce-and-underscore-js/
    var salesCountByDate = _(salesData)
        .chain()
        .map(function (sale) {
            return sale.date;
        })
        .flatten()
        .reduce(function (counts, item) {
            counts[item] = (counts[item] || 0) + 1;
            return counts;
        }, {}).value();

    var graphReadySales = [];

    for (date in salesCountByDate) {
        var sale = {
            x: new Date(date),
            y: salesCountByDate[date]
        };
        graphReadySales.push(sale);
    }

    //var lastSale = graphReadySales[new Date(to)];
    //if (!lastSale || lastSale.y === 0) {
    //    graphReadySales.push(
    //        {x: new Date(to), y: 0}
    //    );
    //}

    return graphReadySales;
};

Template.Dashboard.events({
    'click #addDataButton': function () {
        //var age = getRandomInt(13, 89);
        //var lastPerson = People.findOne({}, {fields:{x:1},sort:{x:-1},limit:1,reactive:false});
        //if (lastPerson) {
        //    People.insert({x:(lastPerson.x + 1), y:age});
        //} else {
        //    People.insert({x:1, y:age});
        //}
    }
});

