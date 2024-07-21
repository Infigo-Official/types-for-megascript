/**
 * Represents an order with various properties and methods for order operations.
 */
interface Order {
    /**
     * Gets or sets the ID of the order.
     */
    Id: number;

    /**
     * Gets or sets the status of the order.
     */
    OrderStatus: string;

    /**
     * Gets or sets the shipping status of the order.
     */
    ShippingStatus: string;

    /**
     * Gets or sets the payment status of the order.
     */
    PaymentStatus: string;

    /**
     * Gets or sets the shipping address of the order.
     */
    ShippingAddress: Address;

    /**
     * Gets or sets the billing address of the order.
     */
    BillingAddress: Address;

    /**
     * Gets or sets the customer ID associated with the order.
     */
    CustomerId: number;

    /**
     * Gets or sets the ID of the impersonating user for the order.
     */
    ImpersonatingUserId: number;

    /**
     * Gets or sets additional data for the order.
     */
    AdditionalData: string;

    /**
     * Gets or sets the checkout attributes for the order.
     */
    CheckoutAttributes: any;

    /**
     * Gets or sets the shipping method for the order.
     */
    ShippingMethod: string;

    /**
     * Gets or sets the assigned department ID for the order.
     */
    AssignedDepartmentId?: number;

    /**
     * Gets or sets the order notes.
     */
    OrderNotes: string[];

    /**
     * Gets or sets the order line items.
     */
    OrderLineItems: OrderProductVariant[];

    /**
     * Gets or sets the UTC creation date and time of the order.
     */
    CreatedOnUtc: Date;

    /**
     * Gets or sets the URL for the customer to view the order.
     */
    UrlForCustomer: string;

    /**
     * Gets or sets the tracking number for the order.
     */
    TrackingNumber: string;

    /**
     * Gets or sets extra data for the order.
     */
    ExtraData: any;

    /**
     * Gets or sets custom tag 1 for the order.
     */
    CustomTag1: string;

    /**
     * Gets or sets custom tag 2 for the order.
     */
    CustomTag2: string;

    /**
     * Gets or sets custom tag 3 for the order.
     */
    CustomTag3: string;

    /**
     * Gets or sets custom tag 4 for the order.
     */
    CustomTag4: string;

    /**
     * Gets or sets custom data 1 for the order.
     */
    CustomData1: string;

    /**
     * Gets or sets the delivery by date and time for the order.
     */
    DeliverBy: Date;

    /**
     * Gets or sets the dispatch by date and time for the order.
     */
    DispatchBy: Date;

    /**
     * Captures the order.
     * Returns true if the capture was successful, false otherwise.
     */
    CaptureOrder: () => boolean;

    /**
     * Updates the shipping status of the order.
     * @param shippingStatus The new shipping status.
     * Returns true if the update was successful, false otherwise.
     */
    UpdateShippingStatus: (shippingStatus: string) => boolean;

    /**
     * Updates the payment status of the order.
     * @param paymentStatus The new payment status.
     * Returns true if the update was successful, false otherwise.
     */
    UpdatePaymentStatus: (paymentStatus: string) => boolean;

    /**
     * Gets the invoice for the order.
     * @param keyValues Optional key-values parameter for additional options.
     * Returns a FileInstanceObject representing the invoice.
     */
    GetInvoice: (keyValues?: object) => FileInstance;

    /**
     * Gets the packing slip for the order.
     * @param keyValues Optional key-values parameter for additional options.
     * Returns a FileInstanceObject representing the packing slip.
     */
    GetPackingSlip: (keyValues?: object) => FileInstance;

    /**
     * Updates the custom data for the order.
     * @param keyValues Key-values parameter representing the custom data to update.
     * Returns a ResultObject representing the result of the update.
     */
    UpdateCustomData: (keyValues: object) => ResultObject;

    /**
     * Sets the tracking number for the order.
     * @param trackingNumber The tracking number to set.
     * Returns true if the update was successful, false otherwise.
     */
    SetTrackingNumber: (trackingNumber: string) => boolean;

    /**
     * Sets the status of the order.
     * @param status The new status to set.
     * Returns true if the update was successful, false otherwise.
     */
    SetStatus: (status: string) => boolean;

    /**
     * Cancels the order.
     * @param notifyCustomer Whether to notify the customer about the cancellation.
     * @param notifyMis Whether to notify MIS about the cancellation.
     * Returns true if the cancellation was successful, false otherwise.
     */
    Cancel: (notifyCustomer: boolean, notifyMis: boolean) => boolean;

    /**
     * Sets or updates the extra data for the order.
     * @param key The key of the extra data.
     * @param value The value of the extra data. If null, the extra data is deleted.
     */
    SetExtraData: (key: string, value: string | null) => void;

    /**
     * Adds a note to the order.
     * @param note The note to be added to the order.
     * @param displayToCustomer Optional. Indicates whether the note should be displayed to the customer.
     * @returns A boolean indicating success or failure of adding the note.
     */
    AddOrderNotes: (note: string, displayToCustomer?: boolean) => boolean;
}

/**
 * Represents operations related to orders.
 */
interface Orders {
    /**
     * Finds an order by its ID.
     * @param id The ID of the order to find.
     * @returns The order matching the ID, or null if not found.
     */
    FindById: (id: number) =>Order | null;

    /**
     * Finds an order by the ID of its product variant.
     * @param id The ID of the product variant associated with the order.
     * @returns The order associated with the product variant ID, or null if not found.
     */
    FindByOrderProductVariantId: (id: number) => Order | null;

    /**
     * Starts a search operation for orders.
     * @returns An object allowing further specification of the search criteria.
     */
    StartSearch: () => OrderSearch;

    /**
     * Validates a record order model and returns a result.
     * @param order The record order model to validate.
     * @returns A result indicating success or failure of the validation.
     */
    ValidateRecordOrder: (order: RecordOrderModel) => Result;

    /**
     * Records an order based on the provided model and returns a result.
     * @param order The record order model to be recorded.
     * @returns A result indicating success or failure of the record operation.
     */
    RecordOrder: (order: RecordOrderModel) => Result;

    /**
     * Searches orders based on custom tags.
     * @param tagType The type of custom tag to search by.
     * @param phrase The search phrase or keyword.
     * @param pageIndex The index of the page to retrieve (starting from 1).
     * @param pageSize The number of items per page.
     * @param exactMatch Indicates if the search should be an exact match.
     * @param orderAscending Indicates the sorting direction (true for ascending, false for descending).
     * @returns A paged list of orders matching the search criteria.
     */
    SearchOrderByCustomTags: (
        tagType: CustomTagType,
        phrase: string,
        pageIndex: number,
        pageSize: number,
        exactMatch: boolean,
        orderAscending: boolean
    ) => PagedList<Order>;

    /**
     * Searches order product variants based on custom tags.
     * @param tagType The type of custom tag to search by.
     * @param phrase The search phrase or keyword.
     * @param pageIndex The index of the page to retrieve (starting from 1).
     * @param pageSize The number of items per page.
     * @param exactMatch Indicates if the search should be an exact match.
     * @param orderAscending Indicates the sorting direction (true for ascending, false for descending).
     * @returns A paged list of order product variants matching the search criteria.
     */
    SearchOrderProductVariantByCustomTags: (
        tagType: CustomTagType,
        phrase: string,
        pageIndex: number,
        pageSize: number,
        exactMatch: boolean,
        orderAscending: boolean
    ) => PagedList<OrderProductVariant>;
}

/**
 * Represents operations to search for orders.
 */
interface OrderSearch {
    /**
     * Filters orders by their status.
     * @param status The order status to filter by.
     * @returns The updated order search object.
     */
    WithOrderStatus: (status: string) => OrderSearch;

    /**
     * Filters orders by their shipping status.
     * @param status The shipping status to filter by.
     * @returns The updated order search object.
     */
    WithShippingStatus: (status: string) => OrderSearch;

    /**
     * Filters orders by their payment status.
     * @param status The payment status to filter by.
     * @returns The updated order search object.
     */
    WithPaymentStatus: (status: string) => OrderSearch;

    /**
     * Filters orders for a specific customer ID.
     * @param customerId The ID of the customer to filter orders for.
     * @returns The updated order search object.
     */
    ForCustomer: (customerId: number) => OrderSearch;

    /**
     * Filters orders for a specific impersonator customer ID.
     * @param customerId The ID of the impersonator customer to filter orders for.
     * @returns The updated order search object.
     */
    ForImpersonator: (customerId: number) => OrderSearch;

    /**
     * Filters orders placed since a specific date.
     * @param since The date since which orders should be filtered.
     * @returns The updated order search object.
     */
    Since: (since: Date) => OrderSearch;

    /**
     * Filters orders placed until a specific date.
     * @param until The date until which orders should be filtered.
     * @returns The updated order search object.
     */
    Until: (until: Date) => OrderSearch;

    /**
     * Specifies what additional order data to load.
     * @param property The type of additional data to load (e.g., shipping address, order line items).
     * @returns The updated order search object.
     */
    LoadOrderData: (property: OrderLoadType) => OrderSearch;

    /**
     * Specifies the order in which orders should be returned.
     * @param orderBy The criteria by which to order the orders.
     * @returns The updated order search object.
     */
    OrderBy: (orderBy: OrderOrderBy) => OrderSearch;

    /**
     * Specifies the order in which orders should be returned (descending).
     * @param orderBy The criteria by which to order the orders.
     * @returns The updated order search object.
     */
    OrderByDescending: (orderBy: OrderOrderBy) => OrderSearch;

    /**
     * Retrieves all orders matching the search criteria.
     * @param pageIndex The index of the page to retrieve (starting from 1).
     * @param pageSize The number of orders per page.
     * @returns A paged list of orders matching the search criteria.
     */
    FindAll: (pageIndex: number, pageSize: number) => PagedList<Order>;
}

/**
 * Enum defining types of custom tags.
 */
declare enum CustomTagType {
    /**
     * Represents Custom Tag 1.
     */
    CustomTag1 = 1,

    /**
     * Represents Custom Tag 2.
     */
    CustomTag2 = 2,

    /**
     * Represents Custom Tag 3.
     */
    CustomTag3 = 3,

    /**
     * Represents Custom Tag 4.
     */
    CustomTag4 = 4
}

/**
 * Enum defining types of data to load for an order.
 */
declare enum OrderLoadType {
    /**
     * Load all available data for the order.
     * Binary: all bits set to 1 (~0 in binary)
     */
    All = ~0,

    /**
     * Load no data for the order.
     * Binary: 00000000 (0 in decimal)
     */
    None = 0,

    /**
     * Load shipping address data for the order.
     * Binary: 00000010 (2 in decimal)
     */
    ShippingAddress = 1 << 1,  // 2 in decimal

    /**
     * Load billing address data for the order.
     * Binary: 00000100 (4 in decimal)
     */
    BillingAddress = 1 << 2,  // 4 in decimal

    /**
     * Load checkout attributes data for the order.
     * Binary: 00001000 (8 in decimal)
     */
    CheckoutAttributes = 1 << 3,  // 8 in decimal

    /**
     * Load department data associated with the order.
     * Binary: 00010000 (16 in decimal)
     */
    Department = 1 << 4,  // 16 in decimal

    /**
     * Load order line items data for the order.
     * Binary: 00100000 (32 in decimal)
     */
    OrderLineItems = 1 << 5,  // 32 in decimal

    /**
     * Load extra data associated with the order.
     * Binary: 01000000 (64 in decimal)
     */
    ExtraData = 1 << 6,  // 64 in decimal
}

/**
 * Enum defining criteria for ordering orders.
 */
declare enum OrderOrderBy {
    /**
     * Order orders by their unique identifier (ID).
     */
    Id = 0,

    /**
     * Order orders by their creation date.
     */
    CreatedDate = 1,

    /**
     * Order orders by the customer associated with the order.
     */
    Customer = 2
}

/**
 * Enum defining direction for ordering orders.
 */
declare enum OrderOrderDirection {
    /**
     * Sort orders in ascending order (oldest to newest or alphabetically A to Z).
     */
    Asc,

    /**
     * Sort orders in descending order (newest to oldest or alphabetically Z to A).
     */
    Desc
}

/**
 * Represents a model for updating custom data with optional tags.
 */
interface CustomDataUpdateModel {
    /**
     * The value of Custom Tag 1.
     */
    CustomTag1?: string | null;

    /**
     * The value of Custom Tag 2.
     */
    CustomTag2?: string | null;

    /**
     * The value of Custom Tag 3.
     */
    CustomTag3?: string | null;

    /**
     * The value of Custom Tag 4.
     */
    CustomTag4?: string | null;
}

interface Date {
    /**
     * Converts a Date object to a string.
     */
    [Symbol.toPrimitive](hint: "default"): string;
    /**
     * Converts a Date object to a string.
     */
    [Symbol.toPrimitive](hint: "string"): string;
    /**
     * Converts a Date object to a number.
     */
    [Symbol.toPrimitive](hint: "number"): number;
    /**
     * Converts a Date object to a string or number.
     *
     * @param hint The strings "number", "string", or "default" to specify what primitive to return.
     *
     * @throws {TypeError} If 'hint' was given something other than "number", "string", or "default".
     * @returns A number if 'hint' was "number", a string if 'hint' was "string" or "default".
     */
    [Symbol.toPrimitive](hint: string): string | number;
}