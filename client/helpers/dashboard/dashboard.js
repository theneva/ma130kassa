var lineChart;
var stackedAreaGraph;


Template.Dashboard.rendered = function () {

    if (!this.rendered) {
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

            if (to < from) {
                console.warn('Invalid period: ' + from + ' - ' + to + '.');

                $fromField.val(previousFrom);
                $toField.val(previousTo);

                return;
            }

            var diff = moment($toField.val()).diff(moment($fromField.val()), 'days');

            previousFrom = from;
            previousTo = to;

            var salesInPeriod = Sales.find({date: {$gt: from, $lte: to}}, {sort: {date: 1}}).fetch();
            var salesInPreviousPeriod = Sales.find({
                date: {
                    $gt: moment(from).subtract(diff, 'days').format('YYYY-MM-DD'),
                    $lte: moment(to).subtract(diff, 'days').format('YYYY-MM-DD')
                }
            }, {sort: {date: 1}}).fetch();

            for (var i = 0; i < salesInPreviousPeriod.length; i++) {
                salesInPreviousPeriod[i].date = moment(salesInPreviousPeriod[i].date).add(diff, 'days').format('YYYY-MM-DD');
            }

            d3.select('#lineChart svg').datum([
                {
                    key: 'Sales selected period',
                    values: getLineChartReadyArray(salesInPeriod)
                },
                {
                    key: 'Sales previous period',
                    values: getLineChartReadyArray(salesInPreviousPeriod)
                }
            ]).call(lineChart);
            lineChart.update();

            //console.log(salesInPeriod);

        });

        createLineChart();
        createBulletChartSales();
        createStackedChart();

        meteorTrackerAutorun();

        this.rendered = true;
    }
};

var isFirstRun = true;

function meteorTrackerAutorun() {

    Tracker.autorun(function () {
        /*        console.log(isFirstRun);
         if (isFirstRun) {
         isFirstRun = false;
         return;
         }*/

        var salesData = Sales.find({}, {sort: {date: 1}}).fetch();

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


        if (stackedAreaGraph) {
            // Stacked
            d3.select('#stackedAreaGraph svg').datum(getStackedChartReadyArray(salesData))
                .call(stackedAreaGraph);
            stackedAreaGraph.update();
        } else {
            setTimeout(function () {
                // Stacked
                d3.select('#stackedAreaGraph svg').datum(getStackedChartReadyArray(salesData))
                    .call(stackedAreaGraph);
                stackedAreaGraph.update();
            }, 3000);
        }


        // Bullet Chart stuff
        updateGraphWhenNewSale();

    });
}


var getLineChartReadyArray = function (salesData) {
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

    var $fromField = $("#line-chart-from-date");
    var $toField = $("#line-chart-to-date");

    var diff = moment($toField.val()).diff(moment($fromField.val()), 'days');

    var now = moment();

    var firstDayInPeriod = moment().subtract(diff, 'days').format('YYYY-MM-DD');
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

        var salesDataInPreviousPeriod = Sales.find({
            date: {
                $gte: moment(today).subtract(diff * 2, 'days').format('YYYY-MM-DD'),
                $lte: moment(today).subtract(diff, 'days').format('YYYY-MM-DD')
            }
        }, {sort: {date: 1}}).fetch();

        for (var i = 0; i < salesDataInPreviousPeriod.length; i++) {
            salesDataInPreviousPeriod[i].date = moment(salesDataInPreviousPeriod[i].date).add(diff, 'days').format('YYYY-MM-DD');
        }

        d3.select('#lineChart svg')
            .datum([
                {
                    // Get the data between today and seven days ago
                    values: getLineChartReadyArray(Sales.find({
                        date: {
                            $gte: firstDayInPeriod,
                            $lte: today
                        }
                    }, {sort: {date: 1}}).fetch()),
                    key: 'Sales selected period'
                },
                {
                    // Get the data between today and seven days ago
                    values: getLineChartReadyArray(salesDataInPreviousPeriod),
                    key: 'Sales previous period'
                }
            ]
        ).call(lineChart);

        return lineChart;
    });
}


// BULLET CHART:::::::
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

function updateGraphWhenNewSale() {
    totalItems = 0;
    dateCount = 0;
    highestSingleDaySaleCount = 0;
    sales = {};

    var data = Sales.find({}, {sort: {date: 1}}).fetch();

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


// ----- STACKED
function createStackedChart() {

    var sales = Sales.find({}, {sort: {date: 1}}).fetch();

    nv.addGraph(function () {
        stackedAreaGraph = nv.models.stackedAreaChart()
            .margin({right: 100})
            .x(function (d) {
                return new Date(d[0])

            })   //We can modify the data accessor functions...
            .y(function (d) {

                return d[1]
            })   //...in case your data is formatted differently.
            .useInteractiveGuideline(true)    //Tooltips which show all data points. Very nice!
            .rightAlignYAxis(true)      //Let's move the y-axis to the right side.
            .transitionDuration(500)
            .showControls(true)       //Allow user to choose 'Stacked', 'Stream', 'Expanded' mode.
            .clipEdge(true);

        //Format x-axis labels with custom function.
        stackedAreaGraph.xAxis
            .tickFormat(function (d) {
                var date = new Date(d);
                return d3.time.format('%Y-%m-%d')(date);
            });

        stackedAreaGraph.yAxis
            .tickFormat(d3.format(',.2f'));

        d3.select('#stackedAreaGraph svg')
            .datum(getStackedChartReadyArray(sales))
            .call(stackedAreaGraph);

        nv.utils.windowResize(stackedAreaGraph.update);

        return stackedAreaGraph;

    });
}

function getStackedChartReadyArray(salesData) {

    var result = _.chain(salesData).groupBy('product_name').map(function (el, key) {
        return {
            key: key,
            values: _.chain(el).countBy('date').map(function (count, date) {
                return [date, count];
            }).value()
        }
    }).value();

    var drinks = [];
    result.forEach(function (d) {
        d.values.forEach(function (e) {
            if (drinks.indexOf(e[0]) == -1) {
                drinks.push(e[0]);
            }
        });
    });

    result.forEach(function (d) {
        drinks.forEach(function (drink) {
            var have = false;
            d.values.forEach(function (e) {
                if (e[0] == drink) {
                    have = true;
                }
            });
            if (!have) {
                d.values.push([drink, 0]);
            }
        });
    });


    for (var i in result) {
        var sale = result[i];

        sale.values.sort();
    }

    return result;

}