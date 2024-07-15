/**
 * Represents a product variant.
 */

export interface ProductVariant {
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
 * Represents a tier price for a product variant.
 */
export interface TierPrice {
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
export interface ProductVariantDiscount {
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
export interface ExternalId {
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
export interface ProductAttribute {
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
export interface ProductAttributeValue {
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
 * Represents a product type.
 */
export enum ProductType {
    Nop,
    Infigo,
    MultiPart,
    Dynamic,
    Sms,
    Custom,
    Symphony,
    PdfStatic,
}

/**
 * Represents a product group.
 */
export interface ProductGroup {
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
export interface PriceScript {
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
export enum ManageInventoryMethod {
    DontManageStock = 0,
    ManageStock = 1,
    ManageStockByAttributes = 2,
}

/**
 * Represents the action taken when a product variant is low on stock.
 */
export enum LowStockActivity {
    Nothing = 0,
    DisableBuyButton = 1,
    Unpublish = 2,
}

/**
 * Represents the backorder mode for a product variant.
 */
export enum BackorderMode {
    NoBackorders = 0,
    AllowQtyBelow0 = 1,
    AllowQtyBelow0AndNotifyCustomer = 2,
}

/**
 * Represents the control type of a product attribute.
 */
export enum AttributeControlType {
    DropdownList = 1,
    RadioList = 2,
    Checkboxes = 3,
    TextBox = 4,
    MultilineTextbox = 10,
    Datepicker = 20,
    FileUpload = 30,
    Info = 40,
    Hidden = 999,
}

/**
 * Represents the display location of a product attribute.
 */
export enum AttributeDisplayLocation {
    None,
    ProductDetails,
    PostEditor,
}

/**
 * Represents the adjustment type for a product attribute value.
 */
export enum ProductAttributeValuePriceAdjustmentType {
    Percent,
    Absolute,
}

/**
 * Represents the delivery type for a product variant.
 */
export enum ProductDeliveryType {
    Digital = 'digital',
    Print = 'print',
}