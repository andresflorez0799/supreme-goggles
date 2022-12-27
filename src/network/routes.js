const test = require('../components/test/test.route');
const login = require('../components/auth/auth.route');

const currentVersion = 'v1';

const routes = (server) => {
    server.use(`/api/${currentVersion}/auth`, login);
    server.use(`/api/${currentVersion}/test`, test);
};

module.exports = routes;
