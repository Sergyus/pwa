import { createLogger, format, transports } from 'winston';

const { File, Console } = transports;

/**
 * Init Logger
 */
export const logger = createLogger({
  level: 'debug', // info
});

/**
 * Stream
 */
export const stream = {
  write: (message: string): void => {
    logger.info(message);
  },
};

/**
 * For production write to all logs with level `info` and below
 * to `combined.log. Write all logs error (and below) to `error.log`.
 * For development, print to the console.
 */
if (process.env.NODE_ENV === 'production') {
  const fileFormat = format.combine(format.timestamp(), format.json());

  const errTransport = new File({
    filename: './build/logs/error.log',
    format: fileFormat,
    level: 'error',
  });

  const infoTransport = new File({
    filename: './build/logs/combined.log',
    format: fileFormat,
  });

  logger.add(errTransport);
  logger.add(infoTransport);
} else {
  const errorStackFormat = format((info) => {
    if (info.stack) {
      console.warn(info.stack);
      return false;
    }
    return info;
  });

  const consoleTransport = new Console({
    format: format.combine(
      format.colorize(),
      format.simple(),
      errorStackFormat(),
    ),
  });

  logger.add(consoleTransport);
}
