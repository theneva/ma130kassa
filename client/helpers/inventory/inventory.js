Template.Inventory.helpers({
    products: function () {
        return Assortment.find();
    },
    isInAssortment: function (itemState) {
        if (itemState) {
            return 'checked';
        }

        return '';
    },
    repurchaseItem: function (item_stock, in_assortment) {
        return !!(item_stock == 0 && in_assortment);
    }
});

Template.Inventory.events({
   'click .checkbox': function (e, t) {

   },
    'click .stock-count': function (e, t) {
        $(e.target).empty().append("\<input type='text' value='" + this.in_stock + "' /> \<input type='submit' class='submit-stock' value='Lagre' /> \<input type='submit' class='remove-input' value='X' />");
    },
    'click .remove-input': function (e, t) {
        e.preventDefault();
        console.log(e.currentTarget);
        $(e.currentTarget).empty().append("asd");
        console.log(e.currentTarget);
    }
});

Template.Inventory.rendered = function () {
        $('.sortable.table').tablesort();
        $('.ui.toggle.checkbox').checkbox();
};