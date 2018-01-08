define([
  'marionette',

  'hbs!template/form/form'
], function(Marionette, formTemplate) {

  return Marionette.ItemView.extend({
    template: formTemplate
  });
});