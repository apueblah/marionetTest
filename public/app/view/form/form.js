define([
  'marionette',
  'models/form',
  'hbs!template/form/form'
], function(Marionette, FormModel, formTemplate) {

  return Marionette.ItemView.extend({
    template: formTemplate,
      models: FormModel
  });
});