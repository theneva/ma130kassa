Template.AssortmentCategoryContent.events({
   'click .button': function (e, t) {
       console.log(this);
       if (this.in_stock > 0) {
           toastr.success('En <b>' + this.title + '</b> er bestilt!');

           //Assortment.update({title: this.title}, {$inc: {"$.assortment.$.total_sales": 1}});
           Sales.insert({product_name: this.title, date: new Date()})

       } else {
           toastr.error('Tomt for <b>' + this.title + '</b>!');
       }
   }
});

Template.AssortmentCategoryContent.helpers({isMedlem: function (item) {
   return item.toUpperCase().indexOf("MEDLEM") > -1;
}});

Template.AssortmentCategoryContent.helpers({inStock: function (item) {
    return item > 0;
}});