/**
 * Interface representing the execution parameters for an external API call.
 */
interface Execution {
    /**
     * The source URL for the API call.
     */
    source: string;

    /**
     * The action or endpoint to be called.
     */
    action: string;

    /**
     * Headers to be included in the API request.
     */
    header: {};

    /**
     * Query parameters to be included in the API request.
     */
    query: {};

    /**
     * The body of the API request, which can vary based on the request method.
     */
    body: {};

    /**
     * Additional parameters for the API request.
     */
    parameter: {};

    /**
     * Raw data to be sent in the API request.
     */
    raw: string;

    /**
     * Indicates whether the body should be sent as form data.
     * Optional.
     */
    sendAsForm?: boolean;
}

interface ExternalApi {
    /**
     * Executes an action using the provided execution object and callback function.
     * @param executionObject The object containing execution parameters.
     * @param callback The callback function to handle the response.
     */
    Execute: (executionObject: Execution, callback: (response: string) => void) => void;

    /**
     * Sends a GET request to the specified source and action with the given query parameters.
     * @param source The source URL for the GET request.
     * @param action The action or endpoint to be called.
     * @param query The query parameters to be included in the request.
     * @param callback The callback function to handle the response.
     */
    Get: (source: string, action: string, query: {}, callback: (response: string) => void) => void;

    /**
     * Sends a POST request with form data to the specified source and action.
     * @param source The source URL for the POST request.
     * @param action The action or endpoint to be called.
     * @param body The form data to be sent in the request.
     * @param callback The callback function to handle the response.
     */
    PostForm: (source: string, action: string, body: {}, callback: (response: string) => void) => void;

    /**
     * Sends a POST request with JSON data to the specified source and action.
     * @param source The source URL for the POST request.
     * @param action The action or endpoint to be called.
     * @param body The JSON data to be sent in the request.
     * @param callback The callback function to handle the response.
     */
    PostJson: (source: string, action: string, body: {}, callback: (response: string) => void) => void;

    /**
     * Sends a POST request with raw data to the specified source and action.
     * @param source The source URL for the POST request.
     * @param action The action or endpoint to be called.
     * @param body The raw data to be sent in the request.
     * @param callback The callback function to handle the response.
     */
    PostRaw: (source: string, action: string, body: {}, callback: (response: string) => void) => void;
}
