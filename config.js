/**
 * Copyright © 2017 LTV Co., Ltd
 * Created by luc <luc@ltv.vn> on Feb 03, 2017
 */
const rc = require('rc');

module.exports = rc('menv', {
  port: process.env.PORT || 8080,
  devPort: process.env.DEV_PORT || 8181,
  db: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/menv'
  },
  session: {
    secret: process.env.SESSION_SECRET || 'X1Xyya9zdz123as2df3u2io8n'
  },
  logger: {
    transports: {
      Console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true
      }
    },
    exitOnError: false
  }
});
