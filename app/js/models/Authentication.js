define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone, template){

    return Backbone.Model.extend({

        registrate: function (data, onSuccess) {

            $.ajax({
                url: "http://localhost:8080/customer/create/",
                type: "POST",
                contentType: "application/json",
                processData: false,
                data: data,
                success: onSuccess,
                error: function () {

                    console.log("error signing up!");
                }


            });
        }
    });
});
