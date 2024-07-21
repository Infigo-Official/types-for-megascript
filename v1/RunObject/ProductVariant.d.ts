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
     * Indicates whether the price of the product variant is not shown and requires a call for price.
     */
    CallForPrice: boolean;

    /**
     * Indicates whether the customer can enter a price for the product variant.
     */
    CustomerEntersPrice: boolean;

    /**
     * The minimum price that a customer can enter for the product variant.
     */
    MinimumCustomerEnteredPrice: number;

    /**
     * The maximum price that a customer can enter for the product variant.
     */
    MaximumCustomerEnteredPrice: number;

    /**
     * The start date and time when the product variant is available for purchase.
     */
    AvailableStartDateTimeUtc: Date | string | null;

    /**
     * The end date and time when the product variant is available for purchase.
     */
    AvailableEndDateTimeUtc: Date | string | null;

    /**
     * Indicates whether shipping is enabled for the product variant.
     */
    IsShipEnabled: boolean;

    /**
     * Indicates whether shipping is free for the product variant.
     */
    IsFreeShipping: boolean;

    /**
     * Additional shipping charge for the product variant.
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
     * Indicates whether the product variant is tax exempt.
     */
    IsTaxExempt: boolean;

    /**
     * The tax category identifiers associated with the product variant.
     */
    TaxCategoryIds: number[];

    /**
     * The method used to manage inventory for the product variant.
     */
    ManageInventoryMethod: ManageInventoryMethod;

    /**
     * The stock quantity of the product variant.
     */
    StockQuantity: number;

    /**
     * Indicates whether to display the stock quantity for the product variant.
     */
    DisplayStockQuantity: boolean;

    /**
     * Indicates whether to display the stock availability for the product variant.
     */
    DisplayStockAvailability: boolean;

    /**
     * The minimum stock quantity for the product variant.
     */
    MinStockQuantity: number;

    /**
     * The low stock activity for the product variant.
     */
    LowStockActivity: LowStockActivity;

    /**
     * The quantity threshold below which an admin is notified.
     */
    NotifyAdminForQuantityBelow: number;

    /**
     * The backorder mode for the product variant.
     */
    BackorderMode: BackorderMode;

    /**
     * Indicates whether back-in-stock subscriptions are allowed for the product variant.
     */
    AllowBackInStockSubscriptions: boolean;

    /**
     * The minimum quantity that a customer can order for the product variant.
     */
    OrderMinimumQuantity: number;

    /**
     * The pack quantity for ordering the product variant.
     */
    OrderPackQuantity: number;

    /**
     * The maximum quantity that a customer can order for the product variant.
     */
    OrderMaximumQuantity: number;

    /**
     * Tier prices associated with the product variant.
     */
    TierPrices: TierPrice[];

    /**
     * Indicates whether the product variant has quantity-based pricing.
     */
    HasQuantityBasedPricing: boolean | null;

    /**
     * Indicates whether to use multi-tier pricing for the product variant.
     */
    UseMultiTierSpread: boolean;

    /**
     * Indicates whether to use interpolation for tier pricing of the product variant.
     */
    UseInterpolationForTierPricing: boolean;

    /**
     * Indicates whether to show the order line total for the product variant.
     */
    ShowOrderlineTotal: boolean;

    /**
     * Discounts applicable to the product variant.
     */
    Discounts: ProductVariantDiscount[];

    /**
     * External identifiers associated with the product variant.
     */
    ExternalIds: ExternalId[];

    /**
     * Attributes of the product variant.
     */
    Attributes: ProductAttribute[];

    /**
     * Delivery types for the product variant.
     */
    DeliveryType: ProductDeliveryType[];

    /**
     * Indicates whether the asset associated with the product variant can be downloaded.
     */
    CanDownloadAsset: boolean | null;
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