Meteor.publish('sales', function () {
   return Sales.find();
});

Meteor.publish('assortment', function () {
    return Assortment.find();
});