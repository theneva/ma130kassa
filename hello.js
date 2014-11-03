Sales = new Meteor.Collection('sales');
SalesPeople = new Meteor.Collection('salespeople');


if (Meteor.isClient) {

  Handlebars.registerHelper("prettifyDate", function(timestamp) {
    return new Date(timestamp).toString('yyyy-MM-dd')
  });

  Template.layout.helpers({
    salespeople: function () {
      return SalesPeople.find();
    }
  });

  Template.salesDone.helpers({
    sales: function () {
      return Sales.find();
    }
  });

  Template.layout.events({
    'click a': function (e) {
      e.preventDefault();

      var drinkType = e.currentTarget.children[1].innerText;
      var salesPerson = document.getElementById("salesperson").value;

      var date = new Date();

      Sales.insert({
        "drinkType": drinkType,
        "salesPerson": salesPerson,
        "date": date
      });

      console.log(salesPerson);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    Sales.remove({});

  });
}
