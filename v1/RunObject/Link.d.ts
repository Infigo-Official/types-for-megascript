/**
 * Represents a collection of methods for generating various types of links.
 */
interface Links {
    /**
     * Generates a link for a Megascript instance.
     *
     * @param parameters - Parameters for generating the Megascript link.
     * @param additionalParameters - Additional parameters for the Megascript link.
     * @returns A string representing the generated Megascript link.
     */
    MegaScriptLink: (parameters: MegascriptLinkParam, additionalParameters: {}) => string;

    /**
     * Generates an impersonation link for a customer.
     *
     * @param customerObj - Customer object or customer identifier for impersonation.
     * @param redirectUrl - Optional URL to redirect after impersonation.
     * @param logoutUrl - Optional URL to redirect for logout after impersonation.
     * @returns A string representing the generated impersonation link.
     */
    ImpersonateLink: (customerObj: Customer | number, redirectUrl?: string, logoutUrl?: string) => string;

    /**
     * Generates an AJAX impersonation link for a customer.
     *
     * @param customerObj - Customer object or customer identifier for impersonation.
     * @param logoutUrl - Optional URL to redirect for logout after impersonation.
     * @returns A string representing the generated AJAX impersonation link.
     */
    ImpersonateLinkAjax: (customerObj: Customer | number, logoutUrl?: string) => string;

    /**
     * Checks if impersonation is allowed for a customer.
     *
     * @param customerObj - Customer object or customer identifier to check.
     * @returns A string indicating the impersonation status.
     */
    CanImpersonate: (customerObj: Customer | number) => string;

    /**
     * Performs an outbound HTTP request. The target host must be whitelisted in the storefront's allowed hosts for MegaScript, otherwise a 403 response is returned.
     *
     * @param url - The absolute URL to request.
     * @param method - The HTTP method. "POST" sends the content body; any other value performs a GET-style download.
     * @param headers - An object of request headers (key/value pairs), or null.
     * @param content - The request body, used for POST requests.
     * @returns The web response.
     */
    WebRequest: (url: string, method: string, headers: object | null, content: object) => MSApiWebResponse;
}

/**
 * Represents the response of an outbound HTTP request made via Links.WebRequest.
 */
interface MSApiWebResponse {
    /** The response body content. */
    Content: string;
    /** The value of the response Content-Type header. */
    ContentType: string;
    /** The HTTP status code of the response. */
    StatusCode: number;
    /** The response headers as key/value pairs. */
    Headers: { [key: string]: string };
}

/**
 * Represents parameters for generating a Megascript link.
 */
interface MegascriptLinkParam {
    /**
     * The name of the Megascript instance.
     */
    instanceName: string;

    /**
     * Optional account ID parameter for the Megascript link.
     */
    accountId?: number;
}
