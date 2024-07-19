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
}

/**
 * Described a Links interface.
 */

declare const Links: Links;

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
