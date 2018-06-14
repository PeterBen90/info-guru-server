'use strict';

const keys = require("./keys");

exports.DATABASE_URL = process.env.DATABASE_URL || keys.mongoURI;
exports.PORT = process.env.PORT || 5000;