define([
  'marionette'
], function (Marionette) {

  return Marionette.AppRouter.extend({

    appRoutes: {
      "form" : "form",
      "settings" : "settings",
      "*actions" : "index"
    }
  });
});
