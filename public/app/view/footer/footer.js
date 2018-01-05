define([
  'marionette',

  'hbs!template/footer/footer'
], function(Marionette, footer) {

  return Marionette.ItemView.extend({
    template: footer
  });
});
