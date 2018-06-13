'use strict';

const keys = require("./keys");

exports.DATABASE_URL = process.env.DATABASE_URL || keys.mongoURI;
exports.CLIENT_ORIGIN = process.env.CLIENT_ORIGIN || 'http://localhost:3000' || 'http://localhost:19000';
exports.PORT = process.env.PORT || 5000;