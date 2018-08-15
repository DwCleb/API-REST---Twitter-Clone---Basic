const Raven = require('raven');
const sentryconfig = require('../../config/sentry');

const ravenClient = Raven.config(sentryconfig.sentryDSN).install();

module.exports = ravenClient;
