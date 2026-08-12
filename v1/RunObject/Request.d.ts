/**
 * Represents a request object.
 */
 interface Request {
    /**
     * The HTTP method of the request.
     */
    Method: string;

    /**
     * Form data associated with the request.
     */
    Form: Object;

    /**
     * Query parameters associated with the request.
     */
    Query: Object;

    /**
     * Headers of the request.
     */
    Headers: Object;

    /**
     * Body content of the request.
     */
    Body: string;

    /**
     * Files uploaded as part of the request.
     */
    Files: FileInstance[];

    /**
     * Client's IP address making the request.
     */
    ClientIpAddress: string;

    /**
     * Customer associated with the request.
     */
    Customer: Customer;

    /**
     * Customer impersonator if available.
     */
    Impersonator: Customer | null;

    /**
     * A lightweight ("brief") view of the customer associated with the request, or null if unavailable.
     */
    BriefCustomer: BriefCustomer | null;

    /**
     * Proxies the current request to the given URL and mirrors the response back onto the MegaScript response.
     * When headers or body are omitted, the incoming request's headers/body are used. The request method matches the incoming request.
     * @param url - The absolute URL to proxy to.
     * @param callback - Optional callback invoked with the proxied response before it is written back.
     * @param headers - Optional headers to send; when null the incoming request headers are used.
     * @param body - Optional request body; when null the incoming request body is used.
     */
    Proxy(url: string, callback: ((response: MSApiWebResponse) => void) | null, headers: object | null, body: object | null): void;
}

/**
 * A lightweight view of a customer, as exposed on Request.BriefCustomer.
 */
interface BriefCustomer {
    /** The customer identifier. */
    Id: number | null;
    /** The customer GUID. */
    Guid: string | null;
    /** The username. */
    Username: string;
    /** The email address. */
    Email: string;
    /** Whether the customer account is active. */
    Active: boolean | null;
    /** The customer status. */
    Status: number | null;
    /** The salutation/title. */
    Title: string;
    /** The gender. */
    Gender: string;
    /** The full name. */
    FullName: string;
    /** The first name. */
    FirstName: string;
    /** The last name. */
    LastName: string;
    /** The date of birth. */
    DateOfBirth: Date | null;
    /** Custom field 1. */
    Custom1: string;
    /** Custom field 2. */
    Custom2: string;
    /** Custom field 3. */
    Custom3: string;
    /** Whether the customer is an administrator. */
    IsAdmin: boolean;
    /** The system names of the customer's roles. */
    CustomerRoles: string[];
    /** The customer's department name. */
    Department: string;
    /** The VAT number. */
    VatNumber: string;
    /** The VAT number status. */
    VatNumberStatus: number | null;
    /** The company name. */
    CompanyName: string;
    /** Address line 1. */
    AddressLine1: string;
    /** Address line 2. */
    AddressLine2: string;
    /** The city. */
    City: string;
    /** The postal/zip code. */
    ZipPostalCode: string;
    /** The state or province. */
    StateProvince: string;
    /** The country. */
    Country: string;
    /** The phone number. */
    Phone: string;
    /** The fax number. */
    Fax: string;
    /** The account creation date. */
    CreatedOn: Date | null;
    /** The last activity date. */
    LastActivityDate: Date | null;
}
