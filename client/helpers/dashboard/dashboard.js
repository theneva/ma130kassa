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
            toastr.error('You cannot see into the future, dude!');
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
        .margin({left: 70})
        .useInteractiveGuideline(true)
        .transitionDuration(350)
        .showLegend(true)
        .showYAxis(true)
        .showXAxis(true)
        .forceY([0])
    ;

    nv.addGraph(function () {
        nv.utils.windowResize(function () {
            chart.update()
        });

        chart.xAxis
            .axisLabel('Date')
            .tickFormat(function (d) {
                var date = new Date(d);
                return d3.time.format('%Y-%m-%d')(date);
            })
        ;

        chart.yAxis
            .axisLabel('Sales')
            .tickFormat(d3.format('d'))
        ;

        d3.select('#chart svg')
            .datum([
                {
                    values: getGraphReadyArray(Sales.find({date: {$gte: $fromField.val(), $lte: $toField.val()}}).fetch()),
                    key: 'Current period'
                }
            ]
        ).call(chart);

        //console.log('from: ' + $('#line-chart-from-date').val() + ", to: " + $('#line-chart-to-date').val());

        return chart;
    });

    Tracker.autorun(function () {
        var data = [];
        data.push({
            values: getGraphReadyArray(Sales.find().fetch()),
            key: 'Sales'
        });

        d3.select('#chart svg').datum(
            data
        ).call(chart);
        chart.update();
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

    return graphReadySales;
};
