/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright © 2017 LTV Co., Ltd
 * Created by luc <luc@ltv.vn> on Feb 03, 2017
 */
const rc = __webpack_require__(12);

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


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("winston");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_morgan__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_morgan__);




/**
 * Server configurations
 */
const app = __WEBPACK_IMPORTED_MODULE_1_express___default()();

app.use(__WEBPACK_IMPORTED_MODULE_2_morgan___default()('short'));
app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.urlencoded({ extended: false }));
app.use(__WEBPACK_IMPORTED_MODULE_0_body_parser___default.a.json({ limit: 100000000 }));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use((req, res) => {
  res.status(404).end();
});

app.use((error, req, res) => {
  const statusCode = error.statusCode || 500;
  const err = {
    error: statusCode,
    message: error.message
  };
  if (!res.headersSent) {
    res.status(statusCode).send(err);
  }
});

/* harmony default export */ __webpack_exports__["a"] = app;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_winston__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_winston___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_winston__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_helpers_build_logger_config__ = __webpack_require__(7);




/* harmony default export */ __webpack_exports__["a"] = new __WEBPACK_IMPORTED_MODULE_0_winston___default.a.Logger(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_helpers_build_logger_config__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_1__config___default.a.logger));


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("chalk");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_winston__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_winston___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_winston__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony export (immutable) */ __webpack_exports__["a"] = buildLoggerConfig;



function buildLoggerConfig(config) {
  const loggerConfig = Object.assign({}, config);
  loggerConfig.transports = [];
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["forEach"])(config.transports, (transport, key) => {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_lodash__["isFunction"])(__WEBPACK_IMPORTED_MODULE_0_winston___default.a.transports[key])) {
      loggerConfig.transports.push(new __WEBPACK_IMPORTED_MODULE_0_winston___default.a.transports[key](transport));
    }
  });
  return loggerConfig;
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("rc");

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__server__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__config___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__config__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__server_logger__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chalk__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_chalk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_chalk__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);







const server = __WEBPACK_IMPORTED_MODULE_1__server__["a" /* default */].listen(__WEBPACK_IMPORTED_MODULE_2__config___default.a.port, () => {
  const port = server.address().port
  __WEBPACK_IMPORTED_MODULE_3__server_logger__["a" /* default */].info();
  __WEBPACK_IMPORTED_MODULE_3__server_logger__["a" /* default */].info(__WEBPACK_IMPORTED_MODULE_4_chalk___default.a.bold(`---------------------[ Server starting at ${__WEBPACK_IMPORTED_MODULE_5_moment___default()().format("YYYY-MM-DD HH:mm:ss.SSS")} ]---------------------------`));
  __WEBPACK_IMPORTED_MODULE_3__server_logger__["a" /* default */].info();
  __WEBPACK_IMPORTED_MODULE_3__server_logger__["a" /* default */].info(`URL: http://localhost:${port}`)
  __WEBPACK_IMPORTED_MODULE_3__server_logger__["a" /* default */].info(`PORT: ${port}`)

  // logger.info("");
	// logger.info(config.app.title + " v" + config.app.version + " application started!");
	// logger.info("----------------------------------------------");
	// logger.info("Environment:\t" + chalk.underline.bold(process.env.NODE_ENV));
	// logger.info("IP:\t\t" + config.ip);
	// logger.info("Port:\t\t" + config.port);
	// logger.info("Database:\t\t" + config.db.uri);
	// logger.info("Redis:\t\t" + (config.redis.enabled ? config.redis.uri : "Disabled"));
	// logger.info("");

	__WEBPACK_IMPORTED_MODULE_3__server_logger__["a" /* default */].info("----------------------------------------------")
})


/***/ })
/******/ ]);