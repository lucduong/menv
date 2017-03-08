/**
 * Copyright © 2017 LTV Co., Ltd
 * Created by luc <luc@ltv.vn> on Feb 03, 2017
 */
const webpack = require('webpack');
const nodeExternals = require('webpack-node-externals');
const path = require('path');

module.exports = [
  {
    name: 'Server side',
    entry: './app.js',
    output: {
      path: path.join(__dirname, '..', '..', 'build'),
      filename: 'app.js'
    },
    target: 'node',
    externals: [nodeExternals()],
    resolve: {
      modules: ['shared', 'node_modules']
    }
  }
];
