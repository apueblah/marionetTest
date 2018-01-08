define([
    'backbone'
], function(Backbone) {

    var Form = Backbone.Model.extend({
        name: '',
        email: '',
        url: '',
        date: '',
        telephone: '',
        color: ''

    });

    return Form;
});