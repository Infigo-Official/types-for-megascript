/**
 * Provides logging helpers for MegaScript. Values are serialized to a
 * readable string representation (objects, arrays, dates) before being written.
 */
interface Console {
    /**
     * Writes a value to the MegaScript run log.
     * @param obj The value to log. Objects and arrays are serialized recursively;
     * strings are logged as-is; dates are written in UTC string form.
     */
    Log(obj: any): void;

    /**
     * Writes a value to the MegaScript profiling/trace output.
     * @param obj The value to trace. Serialized the same way as {@link Console.Log}.
     */
    Trace(obj: any): void;
}

/**
 * The global console object for logging and tracing within a MegaScript run.
 */
declare const Console: Console;
