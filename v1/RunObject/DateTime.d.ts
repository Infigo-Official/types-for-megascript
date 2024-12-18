/**
 * Provides methods for formatting date and time objects.
 */
interface DateTime {
    /**
     * Formats a date and time object into a storefront-friendly string.
     * Converts UTC time to the storefront's local time before formatting.
     *
     * @param dateTimeObj - The date and time object to format.
     * @returns A formatted date and time string. Returns an empty string if the input is null.
     *
     */
    FormatDateTime(dateTimeObj: object): string;
}
