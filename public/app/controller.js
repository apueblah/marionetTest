define([
  'marionette',
  'app',
  'view/header/header',
  'view/index/index',
  'view/settings/settings',
  'view/footer/footer'
], function (Marionette, App, HeaderView, IndexView, SettingsView, FooterView) {

  return Marionette.Controller.extend({

    initialize: function() {
      App.layout.header.show(new HeaderView());
      App.layout.footer.show(new FooterView());
    },

    index: function() {
      App.layout.content.show(new IndexView());
    },
    settings: function() {
      App.layout.content.show(new SettingsView());
    }
  });
});
