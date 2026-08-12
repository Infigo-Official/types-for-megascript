/**
 * Provides helper methods for formatting numbers as currency.
 */
interface PriceHelper {
    /**
     * Formats a number instance into a currency string.
     * The number is rounded to 2 decimal places before formatting.
     *
     * @param numberInstance - An object containing the numeric value to format.
     * @returns A string representing the formatted currency value.
     *
     * @example
     * const numberInstance = { value: 1234.5678 };
     * priceHelper.FormatCurrency(numberInstance); // "$1,234.57"
     */
    FormatCurrency(numberInstance: NumberInstance): string;

    /**
     * Returns the currency symbol for a currency code.
     * @param currencyCode The ISO currency code (e.g. "USD", "GBP").
     * @returns The currency symbol, an empty string if the code is empty,
     * or the original code if the currency is not found.
     */
    GetCurrencySymbol(currencyCode: string): string;
}

/**
 * Represents a number instance containing a numeric value.
 */
interface NumberInstance {
    /**
     * The primitive numeric value.
     */
    Value: number;

    /**
     * Converts the number into a string in exponential notation.
     *
     * @param fractionDigits - The number of digits after the decimal point (0-20).
     * @returns The number represented in exponential notation.
     */
    ToExponential(fractionDigits?: number): string;

    /**
     * Converts the number into a string in fixed-point notation.
     *
     * @param fractionDigits - The number of digits after the decimal point (0-20, default: 0).
     * @returns The number represented in fixed-point notation.
     */
    ToFixed(fractionDigits?: number): string;

    /**
     * Returns a locale-aware string representation of the number.
     *
     * @returns The number as a localized string.
     */
    ToLocaleString(): string;

    /**
     * Returns the primitive numeric value of the number instance.
     */
    valueOf(): number;
}
