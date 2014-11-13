Template.AssortmentCategoryContent.events({
    'click .button': function (e, t) {
        var $targetElement = $(e.target).attr('class');

        var isInfoButton = $targetElement.indexOf("information") > -1;

        // "information" is a class for the info labels, like "ikke-medlem" and "medlem"
        if (!isInfoButton) {
            if (this.in_stock > 0) {
                toastr.success('En <b>' + this.title + '</b> er bestilt!');

                //Assortment.update({title: this.title}, {$inc: {"$.assortment.$.total_sales": 1}});
                Sales.insert({
                    product_name: this.title,
                    date: moment().format('YYYY-MM-DD').substring(0, 10),
                    price: this.price
                });

            } else {
                toastr.error('Tomt for <b>' + this.title + '</b>!');
            }
        }
    }
});

Template.AssortmentCategoryContent.helpers({
    isMedlem: function (item) {
        return item.toUpperCase().indexOf("MEDLEM") > -1;
    }
});

Template.AssortmentCategoryContent.helpers({
    inStock: function (item) {
        return item > 0;
    }
});