Template.AssortmentCategories.helpers({
    categories: function () {
        var result = Assortment.find();

        return result;
    }
});




Template.AssortmentCategories.rendered = function () {
    if (!this.rendered){
        $('.menu .item').tab();

        this.rendered = true;
    }
};