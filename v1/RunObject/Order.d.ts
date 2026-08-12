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
    AddOrderNote: (note: string, displayToCustomer?: boolean) => boolean;

    /** Per-rate tax breakdown for the order, keyed by tax rate. */
    TaxRates: { [rate: string]: number };

    /** The total tax on the order. */
    OrderTax: number;

    /** Order shipping cost excluding tax. */
    OrderShippingExclTax: number;

    /** Order shipping cost including tax. */
    OrderShippingInclTax: number;

    /** The order total. */
    OrderTotal: number;

    /** The purchase order number. */
    PurchaseOrderNumber: string;

    /** The payment method system name. */
    PaymentMethodSystemName: string;

    /** The capture transaction ID. */
    CaptureTransactionId: string;

    /** The authorization transaction ID. */
    AuthorizationTransactionId: string;

    /** The customer currency code. */
    CustomerCurrencyCode: string;

    /** The total order weight. */
    OrderWeight: number;

    /** Order subtotal including tax. */
    OrderSubtotalInclTax: number;

    /** Order subtotal excluding tax. */
    OrderSubtotalExclTax: number;

    /**
     * Ships the order (notifies customer and MIS).
     * @returns True if the order was shipped successfully, otherwise false.
     */
    ShipOrder: () => boolean;

    /**
     * Marks the order as delivered (notifies customer).
     * @returns True if the order was marked delivered successfully, otherwise false.
     */
    DeliverOrder: () => boolean;

    /**
     * Gets (or creates) the split-shipping envelope for the order.
     * @returns The split-shipping envelope, or null when the order has none.
     */
    GetSplitShipping: () => any | null;

    /**
     * Updates a split-shipment payment from a key/value map.
     * @param keyValues The split-shipment payment fields to update.
     * @returns A result object indicating success or failure.
     */
    UpdateSplitShipmentPayment: (keyValues: object) => ResultObject;

    /**
     * Updates a split-shipment delivery from a key/value map.
     * @param keyValues The split-shipment delivery fields to update.
     * @returns A result object indicating success or failure.
     */
    UpdateSplitShipmentDelivery: (keyValues: object) => ResultObject;
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

    /**
     * Imports a historical (already-fulfilled) order. Idempotent: re-importing an order that
     * matches an existing ExternalOrderId/OrderGuid returns the existing order rather than creating a duplicate.
     * @param order The historical order request.
     * @returns The result of the import, including whether the order already existed.
     */
    ImportHistoricalOrder: (order: object) => HistoricalOrderResult;

    /**
     * Retrieves order product variant details matching a details filter, as a paged list.
     * @param filter The order-product-variant details filter (custom tag / custom data / extra data criteria and paging).
     * @returns A paged list of order product variant details.
     */
    GetByDetailsFilter: (filter: object) => PagedList<OrderProductVariantDetails>;
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
     * Excludes orders that have the given status. May be called multiple times to exclude several statuses.
     * @param status The order status to exclude.
     * @returns The updated order search object.
     */
    WithoutOrderStatus: (status: string) => OrderSearch;

    /**
     * Filters orders that contain at least one line item for any of the given product IDs.
     * @param productIds The product IDs to match against order line items.
     * @returns The updated order search object.
     */
    WithLineItemProductIds: (productIds: number[]) => OrderSearch;

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
     * Filters orders dispatched on or after the given date (compared in UTC).
     * @param since The date from which orders should be included by dispatch date.
     * @returns The updated order search object.
     */
    DispatchSince: (since: Date) => OrderSearch;

    /**
     * Filters orders dispatched on or before the given date (compared in UTC).
     * @param until The date up to which orders should be included by dispatch date.
     * @returns The updated order search object.
     */
    DispatchUntil: (until: Date) => OrderSearch;

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
declare enum OrderDirection {
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

/**
 * Result of a historical order import. Unlike the generic Result, it also reports
 * AlreadyImported so an idempotent re-run (existing order returned) can be told
 * apart from a newly created order — both report Success = true.
 */
interface HistoricalOrderResult {
    /** The Catfish order ID of the imported (or existing) order, or 0 on failure. */
    Id: number;

    /** Indicates whether the import operation succeeded. */
    Success: boolean;

    /** True when the order already existed (matched ExternalOrderId/OrderGuid) and no duplicate was created. */
    AlreadyImported: boolean;

    /** The GUID of the imported (or existing) order. */
    OrderGuid: string;

    /** Error messages produced during the import. */
    Errors: string[];

    /** Non-blocking warnings, e.g. supplied financial totals that disagree with values computed from lines. */
    Warnings: string[];
}

/**
 * Details of an order product variant returned by Orders.GetByDetailsFilter.
 */
interface OrderProductVariantDetails {
    /** The order product variant ID. */
    Id: number;

    /** The ID of the order this line item belongs to. */
    OrderId: number;

    /** The ID of the customer who placed the order. */
    CustomerId: number;

    /** The display name of the customer who placed the order. */
    CustomerName: string;

    /** Custom data field 1 for the line item (populated only when requested in the filter). */
    CustomData1: string;

    /** Custom data field 2 for the line item (populated only when requested in the filter). */
    CustomData2: string;

    /** Custom tag 1 for the line item. */
    CustomTag1: string;

    /** Custom tag 2 for the line item. */
    CustomTag2: string;

    /** Custom tag 3 for the line item. */
    CustomTag3: string;

    /** Custom tag 4 for the line item. */
    CustomTag4: string;

    /** Extra data key-value pairs for the line item (populated only when requested in the filter). */
    ExtraData: { [key: string]: string } | null;
}