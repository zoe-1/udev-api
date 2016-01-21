'use strict';

// Load modules

exports.register = (server, options, next) => {

    server.route({
        method: 'GET',
        path: '/login',
        config: {
            description: 'Handles CORS request',
            cors: { origin: ['http://localhost:8000'] },
            handler: function (request, reply) {

                console.log('  ');
                console.log(JSON.stringify(request.info.cors));
                return reply('response to cors');
            }
        }
            // cors: { origin: ['http://169.254.4.171:8000'] },
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
