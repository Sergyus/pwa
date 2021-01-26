import { logger } from './Logger';
import AppError from './AppError';

/**
 * ErrorHandler
 */
export default class ErrorHandler {
  private static instance: ErrorHandler;

  public handleError(err: Error): void {
    logger.error(err.stack);
  }

  public isTrustedError(error: Error): boolean {
    if (error instanceof AppError) {
      return error.isOperational;
    }

    return false;
  }

  public static getInstance(): ErrorHandler {
    if (!ErrorHandler.instance) {
      ErrorHandler.instance = new ErrorHandler();
    }

    return ErrorHandler.instance;
  }
}
