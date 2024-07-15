/**
 * Represents a customer in the system.
 */
export interface Customer {
    /**
     * The unique identifier of the customer.
     */
    Id?: number;

    /**
     * The GUID of the customer.
     */
    Guid?: string;

    /**
     * The username of the customer.
     */
    Username: string;

    /**
     * The email address of the customer.
     */
    Email: string;

    /**
     * The password of the customer.
     */
    Password: string;

    /**
     * Indicates if the customer is active.
     */
    Active?: boolean;

    /**
     * The title of the customer.
     */
    Title: string;

    /**
     * The gender of the customer.
     */
    Gender?: string | null;

    /**
     * The full name of the customer.
     */
    FullName: string;

    /**
     * The first name of the customer.
     */
    FirstName: string;

    /**
     * The last name of the customer.
     */
    LastName: string;

    /**
     * The date of birth of the customer.
     */
    DateOfBirth?: Date;

    /**
     * Custom field 1 for additional customer information.
     */
    Custom1: string;

    /**
     * Custom field 2 for additional customer information.
     */
    Custom2: string;

    /**
     * Custom field 3 for additional customer information.
     */
    Custom3: string;

    /**
     * Indicates if the customer is an administrator.
     */
    IsAdmin: boolean;

    /**
     * The roles assigned to the customer.
     */
    CustomerRoles: string[];

    /**
     * The department identifier or name of the customer.
     */
    Department: number | string;

    /**
     * The timezone identifier for the customer.
     */
    TimeZoneId: string;

    /**
     * Indicates if the customer is tax-exempt.
     */
    IsTaxExempt?: boolean;

    /**
     * The affiliate identifier of the customer.
     */
    AffiliateId?: number;

    /**
     * The print location identifier of the customer.
     */
    PrintLocationId: string;

    /**
     * The name of the print location assigned to the customer.
     */
    PrintLocationName: string;

    /**
     * Additional custom attributes associated with the customer.
     */
    AdditionalAttributes: ICustomerAttributeType[];

    /**
     * The promotion card number associated with the customer.
     */
    PromotionCardNumber: string;

    /**
     * The promotion card points associated with the customer.
     */
    PromotionCardPoints?: number;

    /**
     * The VAT number of the customer.
     */
    VatNumber: string;

    /**
     * The status of the VAT number.
     */
    VatNumberStatus?: number;

    /**
     * The company name of the customer.
     */
    CompanyName: string;

    /**
     * The first address line of the customer.
     */
    AddressLine1: string;

    /**
     * The second address line of the customer.
     */
    AddressLine2: string;

    /**
     * The city of residence of the customer.
     */
    City: string;

    /**
     * The ZIP or postal code of the customer.
     */
    ZipPostalCode: string;

    /**
     * The state or province of residence of the customer.
     */
    StateProvince: string;

    /**
     * The country of residence of the customer.
     */
    Country: string;

    /**
     * The phone number of the customer.
     */
    Phone: string;

    /**
     * The fax number of the customer.
     */
    Fax: string;

    /**
     * The billing address of the customer.
     */
    BillingAddress: Address;

    /**
     * The shipping address of the customer.
     */
    ShippingAddress: Address;

    /**
     * List of addresses associated with the customer.
     */
    Addresses: Address[];

    /**
     * Indicates if workflow trust level is enabled for the customer.
     */
    WorkflowTrustLevelEnabled: boolean;

    /**
     * The workflow trust level assigned to the customer.
     */
    WorkflowTrustLevel?: number;

    /**
     * List of approvers assigned to the customer.
     */
    Approvers: string[];

    /**
     * List of budget managers assigned to the customer.
     */
    BudgetManagers: string[];

    /**
     * Additional administrative content related to the customer.
     */
    AdminContent: string;

    /**
     * The date when the customer account was created.
     */
    CreatedOn?: Date;

    /**
     * The date of the last activity by the customer.
     */
    LastActivityDate?: Date;

    /**
     * The IP address of the customer's last login.
     */
    LastIpAddress: string;

    /**
     * The last visited page by the customer.
     */
    LastVisitedPage: string;

    /**
     * List of MIS (Management Information System) configurations associated with the customer.
     */
    MisConfigurations: MisConfigType[];

    /**
     * Login message displayed to the customer.
     */
    LoginMessage: string;

    /**
     * Indicates if default styling should be applied to the customer interface.
     */
    ApplyDefaultStyling: boolean;

    /**
     * Indicates if the MIS should be notified about the customer.
     */
    NotifyMis: boolean;
}

/**
 * Represents a key-value pair attribute for a customer.
 */
export interface ICustomerAttributeType {
    /**
     * The key of the customer attribute.
     */
    Key: string;

    /**
     * The value of the customer attribute.
     */
    Value: string;
}

/**
 * Represents search parameters for customer searches.
 */
export enum SearchParam {
    /**
     * Search parameter for exact match.
     */
    Exact = 0,

    /**
     * Search parameter for contains match.
     */
    Contains = 1
}

/**
 * Represents a search context for customers.
 */
export interface CustomerSearch {
    /**
     * Loads all customers in the search context.
     */
    LoadAll: () => CustomerSearch;

    /**
     * Loads customers by email address in the search context.
     */
    LoadEmail: () => CustomerSearch;

    /**
     * Loads customers by username in the search context.
     */
    LoadUsername: () => CustomerSearch;

    /**
     * Loads customers by department in the search context.
     */
    LoadDepartment: () => CustomerSearch;

    /**
     * Includes inactive customers in the search context.
     */
    IncludeInactive: () => CustomerSearch;

    /**
     * Sets the page index for pagination in the search context.
     * @param pageIndex The page index to set.
     */
    SetPageIndex: (pageIndex: number) => CustomerSearch;

    /**
     * Sets the page size for pagination in the search context.
     * @param pageSize The page size to set.
     */
    SetPageSize: (pageSize: number) => CustomerSearch;

    /**
     * Filters customers by department in the search context.
     */
    InDepartment: () => CustomerSearch;

    /**
     * Filters customers by role in the search context.
     * @param roleSystemname The system name of the role to filter by.
     * @param param Optional search parameter.
     */
    InRole: (roleSystemname: string, param?: SearchParam) => CustomerSearch;

    /**
     * Excludes customers by role in the search context.
     * @param roleSystemname The system name of the role to exclude.
     * @param param Optional search parameter.
     */
    ExceptRole: (roleSystemname: string, param?: SearchParam) => CustomerSearch;

    /**
     * Filters customers by attribute in the search context.
     * @param attributeName The name of the attribute to filter by.
     * @param value The value of the attribute to filter by.
     * @param param Optional search parameter.
     */
    WithAttribute: (attributeName: string, value: string, param?: SearchParam) => CustomerSearch;

    /**
     * Filters customers by first name in the search context.
     * @param firstName The first name to filter by.
     * @param param Optional search parameter.
     */
    InFirstName: (firstName: string, param?: SearchParam) => CustomerSearch;

    /**
     * Filters customers by last name in the search context.
     * @param lastName The last name to filter by.
     * @param param Optional search parameter.
     */
    InLastName: (lastName: string, param?: SearchParam) => CustomerSearch;

    /**
     * Filters customers by email address in the search context.
     * @param email The email address to filter by.
     * @param param Optional search parameter.
     */
    InEmail: (email: string, param?: SearchParam) => CustomerSearch;

    /**
     * Filters customers by external ID in the search context.
     * @param externalId The external ID to filter by.
     * @param param Optional search parameter.
     */
    InExternalId: (externalId: string, param?: SearchParam) => CustomerSearch;

    /**
     * Filters customers by username in the search context.
     * @param username The username to filter by.
     * @param param Optional search parameter.
     */
    InUsername: (username: string, param?: SearchParam) => CustomerSearch;

    /**
     * Loads all customers with detailed information.
     */
    GetAllDetailed: () => PagedList<Customer>;
}

/**
 * Represents an address.
 */
export interface Address {
    /**
     * The first line of the address.
     */
    AddressLine1: string;

    /**
     * The second line of the address.
     */
    AddressLine2: string;

    /**
     * The city of the address.
     */
    City: string;

    /**
     * The ZIP or postal code of the address.
     */
    ZipPostalCode: string;

    /**
     * The state or province of the address.
     */
    StateProvince: string;

    /**
     * The country of the address.
     */
    Country: string;
}

/**
 * Represents a department.
 */
export interface Department {
    /**
     * The identifier of the department.
     */
    Id: number;

    /**
     * The name of the department.
     */
    Name: string;
}

/**
 * Represents a MIS (Management Information System) configuration type.
 */
export interface MisConfigType {
    // Define properties for MIS configuration type
}

/**
 * Represents a paged list.
 */
export interface PagedList<T> {
    /**
     * The total count of items in the paged list.
     */
    TotalCount: number;

    /**
     * The current page index of the paged list.
     */
    PageIndex: number;

    /**
     * The size of each page in the paged list.
     */
    PageSize: number;

    /**
     * The list of items in the current page of the paged list.
     */
    List: T[];
}
