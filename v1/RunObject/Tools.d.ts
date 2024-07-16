/**
 * Represents a collection of utility methods.
 */
interface ToolsInterface {
    /**
     * Calculates and returns a GUID (Globally Unique Identifier).
     * @returns A string representing the generated GUID.
     */
    CalculateGuid: () => string;

    /**
     * Checks if the provided value is a string.
     * @param a The value to check.
     * @returns `true` if `a` is a string, otherwise `false`.
     */
    IsString: (a: any) => boolean;

    /**
     * Checks if the provided value is a number.
     * @param a The value to check.
     * @returns `true` if `a` is a number, otherwise `false`.
     */
    IsNumber: (a: any) => boolean;

    /**
     * Checks if the provided value is an array.
     * @param a The value to check.
     * @returns `true` if `a` is an array, otherwise `false`.
     */
    IsArray: (a: any) => boolean;

    /**
     * Checks if the provided value is an object.
     * @param a The value to check.
     * @returns `true` if `a` is an object, otherwise `false`.
     */
    IsObject: (a: any) => boolean;

    /**
     * Compares two objects for equality.
     * @param a The first object to compare.
     * @param b The second object to compare.
     * @returns `true` if `a` is equal to `b`, otherwise `false`.
     */
    CompareObjects: (a: any, b: any) => boolean;

    /**
     * Compares two arrays for equality.
     * @param a The first array to compare.
     * @param b The second array to compare.
     * @returns `true` if `a` is equal to `b`, otherwise `false`.
     */
    CompareArray: (a: any[], b: any[]) => boolean;

    /**
     * Compares two values for equality.
     * @param a The first value to compare.
     * @param b The second value to compare.
     * @returns `true` if `a` is equal to `b`, otherwise `false`.
     */
    Compare: (a: any, b: any) => boolean;

    /**
     * Creates a deep copy of an object.
     * @param src The source object to clone.
     * @param _visited Optional internal parameter to track visited objects during cloning.
     * @returns A deep copy of the source object.
     */
    Clone: (src: any, _visited?: any[]) => any;

    /**
     * Merges properties from a source object into a target object.
     * @param target The target object to merge into.
     * @param source The source object whose properties will be merged.
     */
    MergeObject: (target: any, source: any) => void;

    /**
     * Provides methods for CSV manipulation.
     */
    CSV: {
        /**
         * Parses CSV content into a two-dimensional array of values.
         * @param csv The CSV content to parse.
         * @param options Optional parsing options.
         * @returns A two-dimensional array representing the parsed CSV data.
         */
        parse: (csv: string, options?: CSVOptions) => any[][];

        /**
         * Converts a two-dimensional array of values into CSV format.
         * @param table The table of data to stringify.
         * @param options Optional stringification options.
         * @returns A string representing the CSV data.
         */
        stringify: (table: any[][], options?: CSVOptions) => string;

        /**
         * Checks if a CSV table contains a specific column.
         * @param csv The CSV table to check.
         * @param column The name of the column to search for.
         * @returns `true` if the column exists, otherwise `false`.
         */
        has: (csv: any[][], column: string) => boolean | number;

        /**
         * Converts an array of objects into CSV format.
         * @param objects The array of objects to convert.
         * @param options Optional conversion options.
         * @returns A string representing the CSV data.
         */
        toCsv: (objects: any[], options?: CSVOptions) => string;
    };

    /**
     * Provides methods for XML manipulation.
     */
    XML: {
        /**
         * Parses XML content into a JavaScript object.
         * @param xml The XML content to parse.
         * @returns The parsed JavaScript object representing the XML structure.
         */
        parse: (xml: string) => any; // Assuming return type is XmlDocument
    };
}

/**
 * Options for CSV parsing and stringifying.
 */
interface CSVOptions {
    /**
     * The character used to delimit columns in CSV data.
     */
    delimiterChar?: string;

    /**
     * The character used for quoting fields in CSV data.
     */
    quoteChar?: string;

    /**
     * Disables automatic conversion of numeric values during parsing.
     */
    disableNumberConverstion?: boolean;

    /**
     * A function that can act as a reviver for parsed CSV values.
     * @param r The row index of the parsed CSV value.
     * @param c The column index of the parsed CSV value.
     * @param v The parsed value as a string.
     * @returns The transformed value.
     */
    reviver?: (r: number, c: number, v: string) => any;

    /**
     * A function that can act as a replacer for stringifying CSV values.
     * @param r The row index of the CSV value being stringified.
     * @param c The column index of the CSV value being stringified.
     * @param v The value to stringify.
     * @returns The stringified value.
     */
    replacer?: (r: number, c: number, v: any) => any;
}

declare const Tools: ToolsInterface;

