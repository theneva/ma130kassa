Template.AssortmentCategoryContent.events({
   'click .button': function (e, t) {
       console.log(this.title);
       toastr.success('En <b>' + this.title + '</b> er bestilt!');
   }
});