Meteor.publish('sales', function () {
   return Sales.find();
});

Meteor.publish('categories', function () {
    return Assortment.find();
});