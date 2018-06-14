// keys.js sets of credentials to return

if (process.env.NODE_ENV === 'production') {
  // in production, return production keys
  module.exports = rquire('./prod');
} else {
  // in devlopment, return dev keys
  module.exports = require('./dev');
}