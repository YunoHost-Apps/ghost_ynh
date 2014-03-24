// # Ghost Configuration
// Setup your Ghost install for various environments

var path = require('path'),
    config;

config = {
    production: {
        url: 'http://YNH_DOMAINYNH_LOCATION',
        
        mail: {
          transport: 'SMTP',
          options : {
            host : 'localhost',
            port : '25'
          }
        },

        database: {
          client: 'mysql',
          connection: {
            host     : 'localhost',
            user     : 'YNH_DBUSER',
            password : 'YNH_DBPWD',
            database : 'YNH_DBNAME',
            charset  : 'utf8'
          }
        },
        
        server: {
            // Host to be passed to node's `net.Server#listen()`
            host: '0.0.0.0',
            // Port to be passed to node's `net.Server#listen()`, for iisnode set this to `process.env.PORT`
            port: '2368'
        }
    }
};

// Export config
module.exports = config;
