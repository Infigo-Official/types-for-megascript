/**
 * Provides helpers for evaluating and describing CRON expressions in MegaScript.
 * Note: an invalid CRON expression passed to occurrence methods throws an error.
 */
interface Cron {
    /**
     * Gets the next occurrence of a CRON schedule after a given date.
     * @param dateInstance The starting date (converted to UTC internally).
     * @param cronExpression The CRON expression to evaluate.
     * @returns The next occurrence as a Date, or null if the input date is null
     * or no further occurrence exists.
     * @throws If the CRON expression is invalid.
     */
    GetNextOccurence(dateInstance: Date, cronExpression: string): Date | null;

    /**
     * Gets all occurrences of a CRON schedule within a date range.
     * @param from The range start (converted to UTC internally).
     * @param to The range end (converted to UTC internally).
     * @param cronExpression The CRON expression to evaluate.
     * @returns An array of occurrence Dates, or null if either bound is null.
     * @throws If the CRON expression is invalid.
     */
    GetNextOccurrences(from: Date, to: Date, cronExpression: string): Date[] | null;

    /**
     * Returns a human-readable description of a CRON expression.
     * @param cronExpression The CRON expression to describe.
     * @returns A friendly description, or "INVALID CRON EXPRESSION" if it cannot be parsed.
     */
    GetFriendlyText(cronExpression: string): string;

    /**
     * Validates a CRON expression.
     * @param cronExpression The CRON expression to validate.
     * @returns True if the expression can be parsed, otherwise false.
     */
    IsCronValid(cronExpression: string): boolean;
}

/**
 * The global CRON helper object.
 */
declare const Cron: Cron;
