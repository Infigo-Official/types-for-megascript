/**
 * Represents a customer in the system.
 */
interface Customer {
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
    AdditionalAttributes: CustomerAttributeType[];

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
 * Represents a customer interface.
 */

declare const Customer: Customer;

/**
 * Represents a collection of methods to manage customers.
 */
interface Customers {
    /**
     * Provides access to budget-related operations for customers.
     */
    Budgets: Budgets;
    /**
     * Finds a customer by their identifier.
     *
     * @param id - The identifier of the customer.
     * @returns An object representing the customer.
     */
    FindById: (id: number) => Customer;

    /**
     * Finds a customer by their email address.
     *
     * @param email - The email address of the customer.
     * @returns An object representing the customer.
     */
    FindByEmail: (email: string) => Customer;

    /**
     * Finds a customer by their username.
     *
     * @param username - The username of the customer.
     * @returns An object representing the customer.
     */
    FindByUsername: (username: string) => Customer;

    /**
     * Finds a customer by their GUID.
     *
     * @param guid - The GUID of the customer.
     * @returns An object representing the customer.
     */
    FindByGuid: (guid: string) => Customer;

    /**
     * Creates a new customer.
     *
     * @param customer - The customer object to create.
     * @returns A result object indicating the outcome of the operation.
     */
    Create: (customer: Customer) => Result;

    /**
     * Updates an existing customer.
     *
     * @param customer - The customer object to update.
     * @returns A result object indicating the outcome of the operation.
     */
    Update: (customer: Customer) => Result;

    /**
     * Finds customers by their external identifier.
     *
     * @param externalId - The external identifier of the customers.
     * @returns An array of objects representing the customers.
     */
    FindByExternalId: (externalId: string) => Customer[];

    /**
     * Starts a search operation for customers.
     *
     * @returns An object representing the customer search operation.
     */
    StartSearch: () => CustomerSearch;

    /**
     * Updates the external identifier of a customer.
     *
     * @param customerId - The identifier of the customer.
     * @param externalId - The new external identifier to set.
     * @param pluginSystemName - The name of the plugin system.
     * @returns A result object indicating the outcome of the operation.
     */
    UpdateExternalId: (customerId: number, externalId: string, pluginSystemName: string) => Result;

    /**
     * Retrieves the department associated with a customer.
     *
     * @param customerId - The identifier of the customer.
     * @returns An object representing the department associated with the customer.
     */
    GetDepartment: (customerId: number) => Department;

    /**
     * Retrieves the checkout attributes configured on a customer.
     * @param customer The customer to read checkout attributes from (must have a valid Id).
     * @returns An array of the customer's checkout attributes; empty if the customer has none or is not found.
     */
    GetCustomerCheckoutAttributes: (customer: Customer) => MsCheckoutAttribute[];
}


/**
 * Represents a key-value pair attribute for a customer.
 */
interface CustomerAttributeType {
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
declare enum SearchParam {
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
interface CustomerSearch {
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
     * Includes guest customers in the search results. By default guests are excluded.
     * @returns The updated search context.
     */
    IncludeGuests: () => CustomerSearch;

    /**
     * Filters customers by whether they have a MIS external reference.
     * @param hasExternalRef True to return only customers that have an external reference; false for only those without.
     * @returns The updated search context.
     */
    HasExternalRef: (hasExternalRef: boolean) => CustomerSearch;

    /**
     * Filters customers by whether they have placed any orders.
     * @param hasOrders True to return only customers with at least one order; false for only those with none.
     * @returns The updated search context.
     */
    HasOrders: (hasOrders: boolean) => CustomerSearch;

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
     * @param id The unique identifier of the department to filter customers by.
     * @returns The updated search context including only customers from the specified department.
     */
    InDepartment: (id: number) => CustomerSearch;

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

    /**
     * Executes the search and returns a lightweight projection of the matching customers.
     * If no LoadXxx data was requested, all available fields are loaded.
     * @returns A paged list of lightweight customer records.
     */
    GetAll: () => PagedList<MsCustomer>;

    /**
     * Filters customers by a list of unique identifiers.
     * @param ids An array of customer IDs to filter by.
     * @returns The updated search context including only the specified customer IDs.
     */
    InIds: (ids: number[]) => CustomerSearch;
    
    /**
     * Filters customers based on a search term and search column.
     * @param term The search term.
     * @param searchTermColumn The column to search in.
     * @param searchParam Optional. The type of search to perform (exact or contains). Defaults to exact.
     * @returns The updated search context.
     */
    InTerms: (term: string, searchTermColumn: CustomerSearchTermProperty, searchType?: SearchParam) => CustomerSearch;
}

/**
 * Enum representing properties available for customer search.
 */
declare enum CustomerSearchTermProperty {
    /** Search by name. */
    Name = 1,
    /** Search by custom reference. */
    CustomReference = 2,
    /** Search by first name. */
    FirstName = 3,
    /** Search by last name. */
    LastName = 4,
    /** Search by email. */
    Email = 5,
    /** Search by username. */
    Username = 6,
    /** Search by company. */
    Company = 7
}

/**
 * Represents a department.
 */
interface Department {
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
 * Represents a paged list.
 */
interface PagedList<T> {
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

/**
 * Represents the result of an access permission check for a product.
 */
interface MsAccessPermissionCheckResult {
    /**
     * The product for which the permission is checked.
     */
    Product: Product;

    /**
     * Indicates whether the access is allowed for the product.
     */
    IsAllowed: boolean;

    /**
     * Provides the reason or explanation for the permission result.
     */
    Reason: string;
}

/**
 * Represents the context for loading specific details of products
 * when checking access permissions.
 */
interface MSAccessPermissionLoadContext {
    /**
     * Specifies what product details to load.
     */
    ProductLoad: ProductLoadType;

    /**
     * Specifies what product variant details to load.
     */
    ProductVariant: ProductVariantLoadType;
}

/**
 * Lightweight customer projection returned by CustomerSearch.GetAll.
 */
interface MsCustomer {
    /** The unique identifier of the customer. */
    Id: number;

    /** The email address of the customer (populated when email data is loaded). */
    Email: string;

    /** The username of the customer (populated when username data is loaded). */
    UserName: string;

    /** The name of the customer's department (populated when department data is loaded). */
    DepartmentName: string;

    /** The identifier of the customer's department, or null if none (populated when department data is loaded). */
    DepartmentId: number | null;
}

/**
 * A checkout attribute name-value pair configured on a customer.
 */
interface MsCheckoutAttribute {
    /** The name of the checkout attribute. */
    Name: string;

    /** The value of the checkout attribute. */
    Value: string;
}

