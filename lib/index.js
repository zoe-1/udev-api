'use strict';

// Load modules
// Thanks to @apoorvakorde for re-writing this script
// kick starting this.

const Hapi = require('hapi');
const Version = require('./version');
const Authenticate = require('./authenticate');


// Declare internals

const internals = {};

exports.init = function (port, next) {

    const server = new Hapi.Server();
    server.connection({ 
       host: '192.168.5.195', 
       port: port,
       routes: { cors: 
           { origin: ['169.254.4.171'] } 
       } 
    });

    server.register([Version, Authenticate], (err) => {

        if (err) {
            return next(err);
        }

        server.start((err) => {

            return next(err, server);
        });
    });
};
