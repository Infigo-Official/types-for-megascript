/**
 * Represents an execution object with parameters for an API call.
 */
interface Execution {
    /**
     * The source of the API call.
     */
    source: string;

    /**
     * The action or endpoint of the API call.
     */
    action: string;

    /**
     * Headers for the API call.
     */
    header: Object;

    /**
     * Query parameters for the API call.
     */
    query: Object;

    /**
     * Body parameters for the API call.
     */
    body: Object;

    /**
     * Additional parameters for the API call.
     */
    parameter: Object;

    /**
     * Raw string data for the API call.
     */
    raw: string;

    /**
     * Indicates whether to send the data as form data.
     */
    sendAsForm?: boolean;
}

/**
 * Represents an execution object with parameters for an API call.
 */

declare const Execution: Execution;

/**
 * Represents methods to execute external API calls.
 */
interface ExternalApi {
    /**
     * Executes an API call based on the provided execution object.
     *
     * @param executionObject - Object containing execution parameters.
     * @param callback - Callback function to handle the API response.
     */
    Execute: (executionObject: Execution, callback: (response: string) => void) => void;

    /**
     * Sends a GET request to an external API endpoint.
     *
     * @param source - The source or base URL of the API.
     * @param action - The action or endpoint to request.
     * @param query - Query parameters for the request.
     * @param callback - Callback function to handle the API response.
     */
    Get: (source: string, action: string, query: {}, callback: (response: string) => void) => void;

    /**
     * Sends a POST request to an external API endpoint with form data.
     *
     * @param source - The source or base URL of the API.
     * @param action - The action or endpoint to request.
     * @param body - Form data to send in the request body.
     * @param callback - Callback function to handle the API response.
     */
    PostForm: (source: string, action: string, body: {}, callback: (response: string) => void) => void;

    /**
     * Sends a POST request to an external API endpoint with JSON data.
     *
     * @param source - The source or base URL of the API.
     * @param action - The action or endpoint to request.
     * @param body - JSON data to send in the request body.
     * @param callback - Callback function to handle the API response.
     */
    PostJson: (source: string, action: string, body: {}, callback: (response: string) => void) => void;

    /**
     * Sends a POST request to an external API endpoint with raw data.
     *
     * @param source - The source or base URL of the API.
     * @param action - The action or endpoint to request.
     * @param body - Raw data to send in the request body.
     * @param callback - Callback function to handle the API response.
     */
    PostRaw: (source: string, action: string, body: {}, callback: (response: string) => void) => void;
}
