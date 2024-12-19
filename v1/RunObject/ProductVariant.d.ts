/**
 * Represents a product variant.
 */
interface ProductVariant {
    /**
     * The identifier of the product variant.
     */
    Id: number;

    /**
     * The SKU (Stock Keeping Unit) of the product variant.
     */
    Sku: string;

    /**
     * The type of the product variant.
     */
    Type: ProductType;

    /**
     * The product group associated with the product variant.
     */
    ProductGroup: ProductGroup;

    /**
     * The price script associated with the product variant.
     */
    PriceScript: PriceScript;

    /**
     * The price of the product variant.
     */
    Price: number;

    /**
     * The old price of the product variant.
     */
    OldPrice: number;

    /**
     * The product cost of the product variant.
     */
    ProductCost: number;

    /**
     * The special price of the product variant.
     */
    SpecialPrice: number | null;

    /**
     * The start date and time of the special price for the product variant.
     */
    SpecialPriceStartDateTimeUtc: Date | string | null;

    /**
     * The end date and time of the special price for the product variant.
     */
    SpecialPriceEndDateTimeUtc: Date | string | null;

    /**
     * Indicates whether the buy button is disabled for the product variant.
     */
    DisableBuyButton: boolean;

    /**
     * Indicates whether the wishlist button is disabled for the product variant.
     */
    DisableWishlistButton: boolean;

    /**
     * Indicates if "Call for Price" is enabled for the product variant.
     */
    CallForPrice: boolean;

    /**
     * Indicates if the customer can enter the price for the product variant.
     */
    CustomerEntersPrice: boolean;

    /**
     * The minimum price the customer can enter.
     */
    MinimumCustomerEnteredPrice: number;

    /**
     * The maximum price the customer can enter.
     */
    MaximumCustomerEnteredPrice: number;

    /**
     * The UTC start date and time when the product is available.
     */
    AvailableStartDateTimeUtc: Date | string | null;

    /**
     * The UTC end date and time when the product is no longer available.
     */
    AvailableEndDateTimeUtc: Date | string | null;

    /**
     * Indicates if shipping is enabled for the product variant.
     */
    IsShipEnabled: boolean;

    /**
     * Indicates if the product variant has free shipping.
     */
    IsFreeShipping: boolean;

    /**
     * The additional shipping charge for the product variant.
     */
    AdditionalShippingCharge: number;

    /**
     * The weight of the product variant.
     */
    Weight: number;

    /**
     * The length of the product variant.
     */
    Length: number;

    /**
     * The width of the product variant.
     */
    Width: number;

    /**
     * The height of the product variant.
     */
    Height: number;

    /**
     * Indicates if the product variant requires a quote.
     */
    RequiresQuote: boolean;

    /**
     * Indicates if the product variant is tax-exempt.
     */
    IsTaxExempt: boolean;

    /**
     * A list of tax category IDs applicable to the product variant.
     */
    TaxCategoryIds: number[];

    /**
     * The inventory management method for the product variant.
     */
    ManageInventoryMethod: ManageInventoryMethod;

    /**
     * The stock quantity of the product variant.
     */
    StockQuantity: number;

    /**
     * Indicates whether the stock quantity should be displayed.
     */
    DisplayStockQuantity: boolean;

    /**
     * Indicates whether stock availability should be displayed.
     */
    DisplayStockAvailability: boolean;

    /**
     * The minimum stock quantity allowed for the product variant.
     */
    MinStockQuantity: number;

    /**
     * The low-stock activity configuration for the product variant.
     */
    LowStockActivity: LowStockActivity;

    /**
     * The quantity threshold below which the admin should be notified.
     */
    NotifyAdminForQuantityBelow: number;

    /**
     * The backorder mode for the product variant.
     */
    BackorderMode: BackorderMode;

    /**
     * Indicates whether back-in-stock subscriptions are allowed.
     */
    AllowBackInStockSubscriptions: boolean;

    /**
     * The minimum order quantity for the product variant.
     */
    OrderMinimumQuantity: number;

    /**
     * The default quantity for the product variant when added to the order.
     */
    DefaultQuantity: number;

    /**
     * The pack quantity for ordering the product variant.
     */
    OrderPackQuantity: number;

    /**
     * The maximum order quantity for the product variant.
     */
    OrderMaximumQuantity: number;

    /**
     * The quantity selector mode for the product variant.
     */
    QuantitySelectorMode: number;

    /**
     * A list of tier prices for the product variant.
     */
    TierPrices: TierPrice[];

    /**
     * Indicates if quantity-based pricing is enabled.
     */
    HasQuantityBasedPricing?: boolean;

    /**
     * Indicates whether multi-tier spread pricing is used.
     */
    UseMultiTierSpread: boolean;

    /**
     * Indicates whether interpolation is used for tier pricing.
     */
    UseInterpolationForTierPricing: boolean;

    /**
     * Indicates if the order line total should be shown.
     */
    ShowOrderlineTotal: boolean;

    /**
     * A list of discounts associated with the product variant.
     */
    Discounts: ProductVariantDiscount[];

    /**
     * A list of external IDs for the product variant.
     */
    ExternalIds: ExternalId[];

    /**
     * A list of product attributes for the product variant.
     */
    Attributes: ProductAttribute[];

    /**
     * The delivery types associated with the product variant.
     */
    DeliveryType: string[];

    /**
     * Indicates whether the product asset can be downloaded.
     */
    CanDownloadAsset?: boolean;

    /**
     * The description of the product variant.
     */
    Description: string;

    /**
     * The admin comment for the product variant.
     */
    AdminComment: string;
}


/**
 * Represents a product variant interface.
 */

declare const ProductVariant: ProductVariant;

/**
 * Represents a tier price for a product variant.
 */
interface TierPrice {
    /**
     * The quantity threshold for the tier price.
     */
    Quantity: number;

    /**
     * The price for the tier.
     */
    Price: number;
}

/**
 * Represents a discount applicable to a product variant.
 */
interface ProductVariantDiscount {
    /**
     * The identifier of the discount.
     */
    Id: number;

    /**
     * The name of the discount.
     */
    Name: string;
}

/**
 * Represents an external identifier associated with a product or variant.
 */
interface ExternalId {
    /**
     * The external identifier.
     */
    Id: string;

    /**
     * The plugin or system name associated with the external identifier.
     */
    PluginName: string;
}

/**
 * Represents an attribute of a product variant.
 */
interface ProductAttribute {
    /**
     * The identifier of the product attribute.
     */
    Id: number;

    /**
     * The name of the product attribute.
     */
    Name: string;

    /**
     * The label or display name of the product attribute.
     */
    Label: string;

    /**
     * Indicates whether the product attribute is required.
     */
    IsRequired: boolean;

    /**
     * The control type of the product attribute.
     */
    ControlType: AttributeControlType;

    /**
     * The display order of the product attribute.
     */
    DisplayOrder: number;

    /**
     * Indicates whether the product attribute is hidden from the customer.
     */
    HideFromCustomer: boolean;

    /**
     * The display location of the product attribute.
     */
    DisplayLocation: AttributeDisplayLocation;

    /**
     * External identifiers associated with the product attribute.
     */
    ExternalIds: ExternalId[];

    /**
     * Attribute values associated with the product attribute.
     */
    AttributeValues: ProductAttributeValue[];
}

/**
 * Represents a value of a product attribute.
 */
interface ProductAttributeValue {
    /**
     * The name or value of the product attribute.
     */
    Name: string;

    /**
     * The friendly name or display value of the product attribute.
     */
    FriendlyName: string;

    /**
     * The price adjustment associated with the product attribute value.
     */
    PriceAdjustment: number;

    /**
     * The weight adjustment associated with the product attribute value.
     */
    WeightAdjustment: number;

    /**
     * Indicates whether the product attribute value is pre-selected.
     */
    IsPreSelected: boolean;

    /**
     * Indicates whether the product attribute value is disabled.
     */
    IsDisabled: boolean;

    /**
     * The type of adjustment (percent or absolute) for the product attribute value.
     */
    AdjustmentType: ProductAttributeValuePriceAdjustmentType;

    /**
     * External identifiers associated with the product attribute value.
     */
    ExternalIds: ExternalId[];

    /**
     * The length adjustment associated with the product attribute value.
     */
    LengthAdjustment: number | null;

    /**
     * The width adjustment associated with the product attribute value.
     */
    WidthAdjustment: number | null;

    /**
     * The height adjustment associated with the product attribute value.
     */
    HeightAdjustment: number | null;
}

/**
 * Represents a product group.
 */
interface ProductGroup {
    /**
     * The identifier of the product group.
     */
    Id: number;

    /**
     * The name of the product group.
     */
    Name: string;
}

/**
 * Represents a price script for a product variant.
 */
interface PriceScript {
    /**
     * The identifier of the price script.
     */
    Id: number;

    /**
     * The name of the price script.
     */
    Name: string;
}

/**
 * Represents the method used to manage inventory for a product variant.
 */
declare enum ManageInventoryMethod {
    /**
     * Inventory is not managed for the product variant.
     * Stock levels are not tracked, and the product can always be purchased.
     */
    DontManageStock = 0,

    /**
     * Inventory is managed for the product variant.
     * Stock levels are tracked, and purchasing is restricted based on availability.
     */
    ManageStock = 1,

    /**
     * Inventory is managed by product attributes.
     * Stock levels are tracked for specific combinations of attributes (e.g., size, color).
     */
    ManageStockByAttributes = 2,
}

/**
 * Represents the action taken when a product variant is low on stock.
 */
declare enum LowStockActivity {
    /**
     * No action is taken when the product variant is low on stock.
     */
    Nothing = 0,

    /**
     * The buy button is disabled when the product variant is low on stock.
     * Customers will not be able to purchase the product.
     */
    DisableBuyButton = 1,

    /**
     * The product variant is unpublished when it is low on stock.
     * The product will not be visible or available for purchase.
     */
    Unpublish = 2,
}


/**
 * Represents the backorder mode for a product variant.
 */
declare enum BackorderMode {
    /**
     * No backorders are allowed.
     * The product cannot be ordered if the stock quantity is zero or less.
     */
    NoBackorders = 0,

    /**
     * Backorders are allowed even if the stock quantity is below zero.
     * Customers can order the product regardless of stock availability.
     */
    AllowQtyBelow0 = 1,

    /**
     * Backorders are allowed even if the stock quantity is below zero,
     * and customers will be notified about the backorder status.
     */
    AllowQtyBelow0AndNotifyCustomer = 2,
}


/**
 * Represents the control type of product attribute.
 */
declare enum AttributeControlType {
    /**
     * A dropdown list control type for selecting a single option from a list.
     */
    DropdownList = 1,

    /**
     * A radio button list control type for selecting a single option from multiple choices.
     */
    RadioList = 2,

    /**
     * A checkbox control type for selecting multiple options.
     */
    Checkboxes = 3,

    /**
     * A single-line text box control type for entering a short text.
     */
    TextBox = 4,

    /**
     * A multi-line text box control type for entering longer text.
     */
    MultilineTextbox = 10,

    /**
     * A date picker control type for selecting a date.
     */
    Datepicker = 20,

    /**
     * A file upload control type for uploading files.
     */
    FileUpload = 30,

    /**
     * An informational control type for displaying static information.
     */
    Info = 40,

    /**
     * A hidden control type for storing values that should not be displayed to the user.
     */
    Hidden = 999,
}


/**
 * Represents the display location of a product attribute.
 */
declare enum AttributeDisplayLocation {
    /**
     * Indicates that the product attribute is not displayed.
     */
    None,

    /**
     * Indicates that the product attribute is displayed on the product details page.
     */
    ProductDetails,

    /**
     * Indicates that the product attribute is displayed in the post editor.
     */
    PostEditor,
}


/**
 * Represents the adjustment type for a product attribute value.
 */
declare enum ProductAttributeValuePriceAdjustmentType {
    /**
     * Represents a percentage-based price adjustment.
     * Example: Increasing the price by 10%.
     */
    Percent,

    /**
     * Represents an absolute value-based price adjustment.
     * Example: Increasing the price by $5.
     */
    Absolute,
}