import {Address} from "./Address";

/**
 * Represents a model for recording an order.
 */
export interface RecordOrderModel {
    /**
     * External order ID associated with the order.
     */
    ExternalOrderId: string;

    /**
     * Customer ID in the Catfish system associated with the order.
     */
    CatfishCustomerId: string;

    /**
     * Delivery method for the order in the Catfish system.
     */
    CatfishDeliveryMethod: string;

    /**
     * Indicates whether the payment for the order has been paid (`true`) or not (`false`).
     */
    IsPaymentPaid: boolean;

    /**
     * Purchase order number related to the order.
     */
    PurchaseOrderNumber: string;

    /**
     * Callback URL associated with the order.
     */
    CallbackUrl: string;

    /**
     * Delivery address for the order.
     */
    DeliveryAddress: Address;

    /**
     * Billing address for the order.
     */
    BillingAddress: Address;

    /**
     * Line items included in the order.
     */
    OrderLineItems: MSOrderLineItemModel[];

    /**
     * Additional data associated with the order, stored as key-value pairs where both keys and values are strings.
     */
    ExtraData: { [key: string]: string };

    /**
     * Custom tags associated with the order.
     */
    CustomTags: CustomTagsModel;

    /**
     * Additional custom data specific to the order.
     */
    CustomData1: string;
}

/**
 * Represents a line item in an order with its properties.
 */
export interface MSOrderLineItemModel {
    /**
     * ID of the product in the NopCommerce system.
     */
    NopProductId: number;

    /**
     * External ID of the product.
     */
    ExternalProductId: string;

    /**
     * URL to the external PDF associated with the product.
     */
    PdfExternalUrl: string;

    /**
     * Array of key-value pairs representing product variant attributes.
     */
    ProductVariantAttributes: RecordOrderKeyValue[];

    /**
     * Hash value associated with the PDF file.
     */
    PdfHash: string;

    /**
     * Any PDF file related to the order line item.
     */
    PdfFile: any;

    /**
     * Quantity of the product in the order.
     */
    Quantity: number;

    /**
     * Additional data stored as key-value pairs.
     */
    ExtraData: { [key: string]: string };

    /**
     * Job ID associated with the order line item.
     * Can be a number or a number with type as prefix.
     */
    JobId: string;

    /**
     * Custom tags associated with the order line item.
     */
    CustomTags: CustomTagsModel;

    /**
     * Additional custom data field 1.
     */
    CustomData1: string;

    /**
     * Type of delivery for the order line item.
     */
    DeliveryType: DeliveryTypeModel;
}

/**
 * Represents custom tags associated with a model.
 */
export interface CustomTagsModel {
    CustomTag1: string;
    CustomTag2: string;
    CustomTag3: string;
    CustomTag4: string;
}

/**
 * Enum representing delivery types for an order.
 */
declare enum DeliveryTypeModel {
    /**
     * Default delivery type.
     */
    DefaultDelivery = 0,

    /**
     * Print delivery type.
     * Binary: 0001 (1 in decimal)
     */
    Print = 1 << 0,  // 1 in decimal

    /**
     * Digital delivery type.
     * Binary: 0010 (2 in decimal)
     */
    Digital = 1 << 1,  // 2 in decimal

    /**
     * Both print and digital delivery types.
     * Binary: 0011 (3 in decimal)
     */
    PrintAndDigital = Print | Digital  // 3 in decimal
}

/**
 * Represents a key-value pair used in recording order data.
 */
export interface RecordOrderKeyValue {
    /**
     * Key of the key-value pair, typically a string.
     */
    Key: string;

    /**
     * Value associated with the key, typically a string.
     */
    Value: string;
}

