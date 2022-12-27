const cors = require('cors');

//... Allowed
const allowedDomains = ['http://localhost:3001', 'http://localhost:4200'];

/**
 * CORS Policy to app
 * @param {*} app
 */
const appCors = (app) => {
    app.use((req, res, next) => {
        const origin = req.headers.origin;
        if (allowedDomains.includes(origin)) {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
        res.header('Access-Control-Allow-Methods', 'GET, OPTIONS, POST, DELETE, PATCH, PUT');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Access-Control-Allow-Credentials', true);
        return next();
    });

    app.use(
        cors({
            origin: function (origin, callback) {
                if (!origin) return callback(null, true);

                if (allowedDomains.indexOf(origin) === -1) {
                    var msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
                    return callback(new Error(msg), false);
                }
                return callback(null, true);
            },
        })
    );
};

module.exports = appCors;
