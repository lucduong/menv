import 'babel-polyfill'
import app from './server'
import config from './config'
import logger from './server/logger'
import chalk from 'chalk'
import moment from 'moment'

const server = app.listen(config.port, () => {
  const port = server.address().port
  logger.info();
  logger.info(chalk.bold(`---------------------[ Server starting at ${moment().format("YYYY-MM-DD HH:mm:ss.SSS")} ]---------------------------`));
  logger.info();
  logger.info(`URL: http://localhost:${port}`)
  logger.info(`PORT: ${port}`)

  // logger.info("");
	// logger.info(config.app.title + " v" + config.app.version + " application started!");
	// logger.info("----------------------------------------------");
	// logger.info("Environment:\t" + chalk.underline.bold(process.env.NODE_ENV));
	// logger.info("IP:\t\t" + config.ip);
	// logger.info("Port:\t\t" + config.port);
	// logger.info("Database:\t\t" + config.db.uri);
	// logger.info("Redis:\t\t" + (config.redis.enabled ? config.redis.uri : "Disabled"));
	// logger.info("");

	logger.info("----------------------------------------------")
})
