const http = require('https');

const options = {
    host: process.env.FRONTEND_DOMAIN,
    port: 3000,
    path: '/',
    method: 'GET',
    timeout: 2000
};

const healthCheck = http.request(options, (response) => {
    console.log(`STATUS: ${response.statusCode}`);
    if (response.statusCode === 200) {
        process.exit(0);
    }
    else {
        process.exit(1);
    }
});

healthCheck.on('error', function (error) {
    console.error('ERROR', error);
    process.exit(1);
});

healthCheck.end();