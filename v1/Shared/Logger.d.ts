/**
 * Represents different levels of logging.
 */
declare enum LogLevel {
    /**
     * Error level logging, typically used for errors.
     */
    Error = 1,

    /**
     * Warning level logging, typically used for warnings.
     */
    Warning = 2,

    /**
     * Info level logging, typically used for informational messages.
     */
    Info = 3,

    /**
     * Debug level logging, typically used for debugging information.
     */
    Debug = 4
}

/**
 * Interface for a logging system.
 */
interface Logger {
    /**
     * Logs a message at the specified log level.
     * @param logLevel The level at which to log the message.
     * @param message The message to log.
     */
    Log: (logLevel: LogLevel, message: string) => void;

    /**
     * Logs a message at the specified log level using a callback to generate the message.
     * @param logLevel The level at which to log the message.
     * @param callback A callback function that returns the message to log.
     */
    LogWithCallback: (logLevel: LogLevel, callback: () => string) => void;

    /**
     * Sets the current log level. Messages at levels lower than this will be ignored.
     * @param logLevel The level to set for logging.
     */
    SetLogLevel: (logLevel: LogLevel) => void;

    /**
     * Logs a debug-level message.
     * @param message The message to log.
     */
    LogDebug: (message: string) => void;

    /**
     * Logs an info-level message.
     * @param message The message to log.
     */
    LogInfo: (message: string) => void;

    /**
     * Logs a warning-level message.
     * @param message The message to log.
     */
    LogWarning: (message: string) => void;

    /**
     * Logs an error-level message.
     * @param message The message to log.
     */
    LogError: (message: string) => void;
}

/**
 * The global logger instance.
 */

declare const Logger: Logger;
