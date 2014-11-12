var lineChart;

Template.Dashboard.rendered = function () {


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

        d3.select('#lineChart svg').datum([{
            key: 'Sales selected period',
            values: getLineChartReadyArray(salesInPeriod, from, to)
        }]).call(lineChart);
        lineChart.update();

        //console.log(salesInPeriod);

    });

    createLineChart();
    createBulletChartSales();
    meteorTrackerAutorun();


};

function meteorTrackerAutorun() {
    Tracker.autorun(function () {

        var salesData = Sales.find().fetch();


        // Line Chart stuff
        var lineData = [];
        lineData.push({
            values: getLineChartReadyArray(salesData),
            key: 'Sales selected period'
        });

        d3.select('#lineChart svg').datum(
            lineData
        ).call(lineChart);
        lineChart.update();

        // Bullet Chart stuff
        updateGraphWhenNewSale();
    });
}

var getLineChartReadyArray = function (salesData, from, to) {
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

function createLineChart() {

    var now = moment();

    var daySevenDaysAgo = moment().subtract(7, 'days').format('YYYY-MM-DD');
    var today = now.format('YYYY-MM-DD');

    lineChart = nv.models.lineChart()
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
            lineChart.update()
        });

        lineChart.xAxis
            .axisLabel('Date')
            .tickFormat(function (d) {
                var date = new Date(d);

                return d3.time.format('%Y-%m-%d')(date);
            })
        ;

        lineChart.yAxis
            .axisLabel('Sales')
            .tickFormat(d3.format('d'))
        ;

        var salesData = Sales.find({
            date: {
                $gte: moment(today).subtract(14, 'days').format('YYYY-MM-DD'),
                $lte: moment(today).subtract(7, 'days').format('YYYY-MM-DD')
            }
        }).fetch();

        for (var i = 0; i < salesData.length; i++) {
            salesData[i].date = moment(salesData[i].date).add(7, 'days').format('YYYY-MM-DD');
        }

        d3.select('#lineChart svg')
            .datum([
                {
                    // Get the data between today and seven days ago
                    values: getLineChartReadyArray(Sales.find({date: {$gte: daySevenDaysAgo, $lte: today}}).fetch()),
                    key: 'Sales selected period'
                },
                {
                    // Get the data between today and seven days ago
                    values: getLineChartReadyArray(salesData),
                    key: 'Sales previous period'
                }
            ]
        ).call(lineChart);

        return lineChart;
    });
}

var bulletChart = nv.models.bulletChart();
var sales = {};
var mean = 0;
var highestSingleDaySaleCount = 0;
var totalItems = 0;
var dateCount = 0;

function createBulletChartSales() {

    nv.addGraph(function () {
        updateGraphWhenNewSale();
    });
}

// BULLET CHARTS:::::::
function updateGraphWhenNewSale() {
    totalItems = 0;
    dateCount = 0;
    highestSingleDaySaleCount = 0;
    sales = {};

    var data = Sales.find().fetch();

    data.forEach(function (sale) {
        addSale(sale);
    });

    for (var date in sales) {
        dateCount++;

        var salesByDate = sales[date];

        var saleCountOnDate = salesByDate.length;
        totalItems += saleCountOnDate;

        if (saleCountOnDate > highestSingleDaySaleCount) {
            highestSingleDaySaleCount = saleCountOnDate;
        }
    }

    console.log('total items: ' + totalItems);
    console.log('date count: ' + dateCount);
    if (dateCount === 0) {
        mean = 0;
    } else {
        mean = totalItems / dateCount;
    }

    updateGraph();
}

function addSale(sale) {
    var date = sale.date;

    if (sales[date]) {
        sales[date].push(sale);
    } else {
        sales[date] = [sale];
    }
}

function updateGraph() {
    var graphData = getGraphData();

    d3.select('#bullet-chart svg')
        .datum(graphData)
        .transition().duration(500)
        .call(bulletChart);

    bulletChart.update();
}

function getGraphData() {
    var now = moment();
    var todayString = now.format('YYYY-MM-DD');
    now.subtract(1, 'day');
    var yesterdayString = now.format('YYYY-MM-DD');

    var saleCountToday = sales[todayString] ? sales[todayString].length : 0;
    var saleCountYesterday = sales[yesterdayString] ? sales[yesterdayString].length : 0;

    return {
        title: "Sales today",
        subtitle: "# units",
        ranges: [0, mean, highestSingleDaySaleCount],
        measures: [saleCountToday],
        markers: [saleCountYesterday]
    }
}