'use strict';

const cors = require('cors');

function configure(app) {
    app.use(cors({
        origin: [
            'http://127.0.0.1:3000',
            'http://localhost:3000',
        ],
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'hostsuffix', 'Content-Disposition'],
        preflightContinue: true,
    }));
}

module.exports = configure;
