define([
    'jquery',
    'underscore',
    'backbone',
    'views/SignupView'
], function($, _, Backbone, SignupView){
    var AppRouter = Backbone.Router.extend({
        routes: {
            // Define some URL routes
            '': 'signUp',
            'signup': 'signUp'
        },

        signUp: function(){

            var signupView = new SignupView();
            signupView.render();
        }
    });

    var initialize = function(){
        var app_router = new AppRouter();
        Backbone.history.start({pushState: true});
    };
    return {
        initialize: initialize
    };
});
