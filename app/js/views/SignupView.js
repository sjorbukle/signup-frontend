define([
    'jquery',
    'underscore',
    'backbone',
    'parsley',
    'parsleyRemote',
    'models/Authentication',
    'text!views/templates/_SignUpView.html'
], function($, _, Backbone, parsley, parsleyRemote, Authentication, template){

    var SignUpView = Backbone.View.extend({

        el: $('#container'),

        template: _.template(template),

        events: {
            'click #register': "validate"
        },

        initialize: function(){

            _.bindAll(this, "showConfirmationMessage");

            this.model = new Authentication();
        },

        render: function(){

            this.$el.append( this.template );

            this.$el.find('form').parsley()
                .addAsyncValidator('mycustom', function (xhr) {
                    return "true" === xhr.responseText;
                });
        },

        validate: function(){
            this.$el.find('.text-center').css("display", "none");
            console.log('validating');
            var form = this.$el.find('#registrationForm');
            var formParsley = form.parsley({
                errorsWrapper: '<div class="parsley-errors-list"></div>',
                errorTemplate: '<div class="alert alert-danger"></div>',
                errorsContainer: function (ParsleyField) {
                    return ParsleyField.$element.parent().parent();
                },
                classHandler: function (ParsleyField) {
                    return ParsleyField.$element.parent();
                }
            });
            var self = this;
            formParsley.asyncValidate().done(function () {

                $('form').parsley().fields.forEach( function(field){
                    field._remoteCache = {};
                });
                var data = JSON.stringify({
                    "username" : form.find('#username').val(),
                    "email" : form.find('#email').val(),
                    "password_hash" : form.find('#passwordPrimary').val()
                });

                self.model.registrate(data, self.showConfirmationMessage);
            });
        },

        showConfirmationMessage: function(){

            this.$el.find('.text-center').css("display", "block");
        }
    });

    return SignUpView;

});
