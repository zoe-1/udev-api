'use strict';

// Load modules
// Thanks to @apoorvakorde for re-writing this script
// and kick starting this. 

const Hapi = require('hapi');
const Hoek = require('hoek');
const Version = require('./version');


// Declare internals

const internals = {};

internals.init = function () {

    const server = new Hapi.Server();
    server.connection({ port: process.env.PORT || 8000 });

    server.register(Version, (err) => {
    
        Hoek.assert(!err, err);

        // start server after plugins are registered.

        server.start((err) => {

            Hoek.assert(!err, err);
            console.log('Server started at: ' + server.info.uri);
        });
    });

};

internals.init();



































































