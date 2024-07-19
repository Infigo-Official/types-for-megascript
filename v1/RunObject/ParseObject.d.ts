/**
 * Represents an object for parsing XML and extracting JSON.
 */
interface ParseObject {
    /**
     * Parses XML string into an object.
     * @param xml The XML string to parse.
     * @returns The parsed object.
     */
    ParseXml: (xml: string) => any;

    /**
     * Checks if a string is valid XML.
     * @param xml The string to check.
     * @returns `true` if the string is valid XML, otherwise `false`.
     */
    IsXml: (xml: string) => boolean;

    /**
     * Converts an object to a JSON extractor object.
     * @param obj The object to convert.
     * @returns The JSON extractor object.
     */
    ToJsonExtractor: (obj: any) => JsonExtractorObject;
}

/**
 * Represents an object for extracting JSON tokens.
 */
interface JsonExtractorObject {
    /**
     * Selects a JSON token based on the specified path.
     * @param path The path to select the token.
     * @returns The selected JSON token.
     */
    SelectToken: (path: string) => any;

    /**
     * Selects multiple JSON tokens based on the specified path.
     * @param path The path to select the tokens.
     * @returns An array of selected JSON tokens.
     */
    SelectTokens: (path: string) => any[];
}