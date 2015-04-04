AutoForm.addInputType("bootstrap-wysiwyg", {
  template: "afBootstrap-wysiwyg",
  valueOut: function () {
    return this.cleanHtml();
  }
});

Template["afBootstrap-wysiwyg"].onRendered(function () {
  var inst = this;
  inst.$('#bootstrap-wysiwyg').wysiwyg();
  inst.$('#bootstrap-wysiwyg').html(inst.data.value);
});

Template["afBootstrap-wysiwyg"].events({
  'click .dropdown-menu': function (e) {
    e.stopPropagation();
  }
});
