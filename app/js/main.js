// bootstrap file, zaduzen za loadanje require-a i ostalih,
// inicijalno bitnih dependecy-a koji se koriste  kroz projekt, te su im definirani aliasi, kako bi ih lakse includali

require.config({
    paths: {
        text: 'libs/text',
        jquery: 'libs/jquery-1.11.1.min',
        underscore: 'libs/underscore',
        backbone: 'libs/backbone',
        bootstrap: 'libs/bootstrap.min',
        parsley: 'libs/parsley.min',
        parsleyRemote: 'libs/parsley.remote.min'
    },

    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: ["underscore", "jquery"],
            exports: "backbone"
        }
    }

});

//main.js takoder load-a app.js modul, koji je glavni modul aplikacije, na koji se dalje preko routera nadogradjuje
require([
    'app',
], function(App){
    App.initialize();
});
