Template.AssortmentCategories.helpers({
    categories: function () {
        var result = Assortment.find();

        //console.log(result);
        //
        //return _.sortBy(result.assortment, function (item) {
        //    console.log(item);
        //     return -item.title;
        //});

        return result;
    }
});




Template.AssortmentCategories.rendered = function () {
    $('.menu .item').tab();
};