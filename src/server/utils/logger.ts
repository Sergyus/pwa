import path from 'path';
import { createLogger, format, transports } from 'winston';

/**
 * Options
 */
const options = {
  file: {
    level: 'info',
    filename: 'info.log',
    dirname: path.resolve('./build/logs'),
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
  },
  errors: {
    level: 'error',
    filename: 'error.log',
    dirname: path.resolve('./build/logs'),
  },
  console: {
    level: 'debug',
    handleExceptions: true,
    format: format.combine(
      format.colorize(),
      format.printf(
        (info) => `${info.timestamp} ${info.level}: ${info.message}`,
      ),
    ),
  },
};

/**
 * Logger
 */
const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: 'DD-MM-YYYY HH:mm:ss:ms' }),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
  transports: [
    new transports.File(options.file),
    new transports.File(options.errors),
  ],
  exitOnError: false,
});

// if (CONFIG.debug) {
//   logger.add(new transports.Console(options.console));
// }

export { logger };
