'use strict';

// Load modules

exports.register = (server, options, next) => {

    server.route({
        method: 'GET',
        path: '/login',
        config: {
            description: 'Handles CORS request',
            cors: true,
            handler: function (request, reply) {

                console.log(JSON.stringify(request.info));
                return reply('response to cors');
            }
        }
    });

    server.route({
        method: 'POST',
        path: '/login',
        config: {
            description: 'Handles CORS request',
            cors: true,
            handler: function (request, reply) {

                return reply('response to cors');
            }
        }
    });

    return next();
};

exports.register.attributes = {
    name: 'authenticate'
};
