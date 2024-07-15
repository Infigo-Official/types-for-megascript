import {OrderProductVariant} from "./OrderProductVariant";

/**
 * Represents an order with various properties and methods for order operations.
 */
export interface Order {
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
    GetInvoice: (keyValues?: object) => FileInstanceObject;

    /**
     * Gets the packing slip for the order.
     * @param keyValues Optional key-values parameter for additional options.
     * Returns a FileInstanceObject representing the packing slip.
     */
    GetPackingSlip: (keyValues?: object) => FileInstanceObject;

    /**
     * Updates the custom data for the order.
     * @param keyValues Key-values parameter representing the custom data to update.
     * Returns a ResultObject representing the result of the update.
     */
    UpdateCustomData: (keyValues: object) => CustomDataUpdateModel;

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
}

/**
 * Represents an address object with detailed information.
 */
export interface Address {
    /**
     * The unique identifier of the address.
     */
    Id?: number;

    /**
     * The first name associated with the address.
     */
    FirstName: string;

    /**
     * The last name associated with the address.
     */
    LastName: string;

    /**
     * The full name combining first name and last name.
     */
    FullName: string;

    /**
     * The company name associated with the address.
     */
    CompanyName: string;

    /**
     * The first line of the address.
     */
    AddressLine1: string;

    /**
     * The second line of the address (if applicable).
     */
    AddressLine2: string;

    /**
     * The city or town name.
     */
    Town: string;

    /**
     * The ZIP or postal code.
     */
    ZipPostalCode: string;

    /**
     * The state or province name (nullable).
     */
    StateProvince: string | null;

    /**
     * The country name.
     */
    Country: string;

    /**
     * The telephone number associated with the address.
     */
    Telephone: string;

    /**
     * The fax number associated with the address.
     */
    FaxNumber: string;

    /**
     * The email address associated with the address.
     */
    Email: string;

    /**
     * Misconfiguration types associated with the address.
     */
    MisConfigurations: MisConfigType[];
}

/**
 * Represents a misconfiguration type with specific details.
 */
export interface MisConfigType {
    /**
     * The unique identifier of the misconfiguration type.
     */
    Id: number;

    /**
     * The plugin system name associated with the misconfiguration.
     */
    PluginSystemName: string;

    /**
     * The external identifier or reference for the misconfiguration.
     */
    ExternalId: string;
}

/**
 * Represents a model for updating custom data with optional tags.
 */
export interface CustomDataUpdateModel {
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