/**
 * Represents a product interface.
 */
interface Product {
    /**
     * ID of the product.
     */
    Id: number;

    /**
     * Name of the product.
     */
    Name: string;

    /**
     * Short description of the product.
     */
    ShortDescription: string;

    /**
     * Full description of the product.
     */
    FullDescription: string;

    /**
     * Additional description of the product.
     */
    AdditionalDescription: string;

    /**
     * Admin comment associated with the product.
     */
    AdminComment: string;

    /**
     * Indicates if the product is published.
     */
    Published: boolean;

    /**
     * Indicates if the product is deleted.
     */
    Deleted: boolean;

    /**
     * Tags associated with the product.
     */
    Tags: ProductTag[];

    /**
     * Score of the product.
     */
    Score?: number;

    /**
     * Number of views of the product.
     */
    NumberOfViews?: number;

    /**
     * Indicates if the product should skip the product details page.
     */
    SkipProductDetailsPage: boolean;

    /**
     * Indicates if customer reviews are allowed for the product.
     */
    AllowCustomerReviews: boolean;

    /**
     * Indicates if the product requires approval.
     */
    RequiresApproval: boolean;

    /**
     * Order of the product on the home page.
     */
    HomePageProductOrder?: number;

    /**
     * Indicates if the product should be shown on the home page.
     */
    ShowOnHomePage: boolean;

    /**
     * Custom product class associated with the product.
     */
    CustomProductClass: string;

    /**
     * Print location of the product.
     */
    PrintLocation?: PrintLocation | null;

    /**
     * Additional tab text for the product.
     */
    AdditionalTabText: string;

    /**
     * Embed video code for the product.
     */
    EmbedVideoCode: string;

    /**
     * Preview 360 code for the product.
     */
    Preview360: string;

    /**
     * Categories associated with the product.
     */
    Categories: ProductCategory[];

    /**
     * Related products of the product.
     */
    RelatedProducts: RelatedProduct[];

    /**
     * Cross-sells associated with the product.
     */
    CrossSells: ProductCrossSells[];

    /**
     * Specification attributes of the product.
     */
    SpecificationAttributes: ProductSpecificationAttributes[];

    /**
     * Meta keywords of the product.
     */
    MetaKeywords: string;

    /**
     * Meta description of the product.
     */
    MetaDescription: string;

    /**
     * Meta title of the product.
     */
    MetaTitle: string;

    /**
     * SEO-friendly name of the product.
     */
    SeName: string;

    /**
     * Open Graph title of the product.
     */
    OpenGraphTitle: string;

    /**
     * Open Graph description of the product.
     */
    OpenGraphDescription: string;

    /**
     * URL of the Open Graph picture associated with the product.
     */
    OpenGraphPictureUrl: string;

    /**
     * Product variant details.
     */
    ProductVariant: ProductVariant;

    /**
     * Pictures associated with the product.
     */
    Pictures: ProductPicture[];
}

/**
 * Represents a collection of product-related methods.
 */
interface Products {
    /**
     * Finds a product by its identifier.
     *
     * @param id - The identifier of the product.
     * @returns An object representing the product.
     */
    FindById: (id: number) => Product;

    /**
     * Finds products by their identifiers.
     *
     * @param ids - An array of product identifiers.
     * @returns An array of objects representing the products.
     */
    FindByIds: (ids: number[]) => Product[];

    /**
     * Finds a product by its SKU.
     *
     * @param sku - The SKU of the product.
     * @returns An object representing the product.
     */
    FindBySku: (sku: string) => Product;

    /**
     * Determines whether a category with the given ID exists.
     *
     * @param categoryId - The ID of the category to check.
     * @returns `true` if the category exists, otherwise `false`.
     */
    CategoryExists: (categoryId: number) => boolean;

    /**
     * Finds products by their external identifier.
     *
     * @param externalId - The external identifier of the products.
     * @returns An array of objects representing the products.
     */
    FindByExternalId: (externalId: string) => Product[];

    /**
     * Searches for products based on text value filters.
     *
     * @param filter - The filter model containing search criteria.
     * @returns A paged list of products that match the filter or null if no results.
     */
    FindByTextValue: (filter: ProductFilterModel) => PagedList<Product> | null;

    /**
     * Gets the products that are required for a given product, filtered to those the
     * specified customer is allowed to purchase.
     * @param productId - The identifier of the product whose required products are resolved.
     * @param customerId - The identifier of the customer used to evaluate availability/access.
     * @returns An array of the required products.
     */
    GetRequiredProducts: (productId: number, customerId: number) => Product[];

    /**
     * Calculates the unit price for a product's first variant, optionally applying
     * attribute selections, a quantity, and returning formatting/currency details.
     * @param productId - The identifier of the product to price.
     * @param request - Pricing request options (quantity, attributes, formatting flags).
     * @returns A model whose `Data` holds the calculated price; `IsSuccess` is `false`
     *          with `Errors` populated when the product/variant is missing or an
     *          attribute selection is invalid.
     */
    GetPrice: (productId: number, request: GetPriceRequest) => MsBaseModel<GetPriceData>;

    /**
     * Assigns a named page-split setup to the product's static PDF.
     * @param productId - The identifier of the product to update.
     * @param setupName - The exact name of an existing page-split setup.
     * @returns A result object; `Success` is `false` with `Errors` populated on failure.
     */
    ApplyPageSplitSetup: (productId: number, setupName: string) => ResultObject;

    /**
     * Gets the thumbnail URLs for a product.
     * @param productId - The identifier of the product.
     * @param options - Optional settings; set `localPath` to `true` (default) for
     *                  local paths or `false` for absolute URLs.
     * @returns A result containing the resolved thumbnail URLs.
     */
    GetThumbnailUrls: (productId: number, options?: GetThumbnailUrlsOptions) => ProductThumbnailUrlsResultObject;

    /**
     * Gets the PDF files associated with a product.
     * @param productId - The identifier of the product.
     * @returns A result whose `Files` are the product's PDFs wrapped as file instances.
     */
    GetPdfFiles: (productId: number) => ProductPdfFilesResultObject;

    /**
     * Creates a new product from the supplied options and returns the new product id.
     * @param options - The product creation options.
     * @returns A result with `Success`, a `Message`, and the created `ProductId`.
     */
    Create: (options: ProductWriteOptions) => ProductWriteResultObject;

    /**
     * Patch-updates an existing product: only the fields present on `options` are
     * written; every other field keeps its current value.
     * @param productId - The identifier of the product to update.
     * @param options - The fields to change; omitted fields are left untouched.
     * @returns A result with `Success`, a `Message`, and the `ProductId`.
     */
    Update: (productId: number, options: ProductWriteOptions) => ProductWriteResultObject;

    /**
     * Replaces a product's static PDF with the supplied file.
     * @param productId - The identifier of the product to update.
     * @param pdfFile - The PDF file instance to apply.
     * @param regenerateThumbnail - Whether to regenerate the thumbnail; defaults to `true`.
     * @returns A result with `Success` and a `Message`.
     */
    UpdatePdf: (productId: number, pdfFile: FileInstance, regenerateThumbnail?: boolean) => ProductUpdatePdfResultObject;

    /**
     * Sets the product's display thumbnail from the supplied file, independent of any PDF.
     * @param productId - The identifier of the product to update.
     * @param thumbnailFile - The thumbnail image file instance to apply.
     * @returns A result with `Success` and a `Message`.
     */
    UploadThumbnail: (productId: number, thumbnailFile: FileInstance) => ProductUploadThumbnailResultObject;

    /**
     * Access permissions related to products.
     */
    AccessPermission: AccessPermission;
}

/**
 * Represents a product tag interface.
 */
interface ProductTag {
    /**
     * Name of the product tag.
     */
    Name: string;
}

/**
 * Represents a product category interface.
 */
interface ProductCategory {
    /**
     * Id of the product category.
     */
    Id: number;

    /**
     * Name of the product category.
     */
    Name: string;

    /**
     * Indicates if the product category is featured.
     */
    IsFeaturedProduct: boolean;

    /**
     * Display order of the product category.
     */
    DisplayOrder: number;
}

/**
 * Represents a related product interface.
 */
interface RelatedProduct {
    /**
     * Id of the related product.
     */
    Id: number;

    /**
     * Name of the related product.
     */
    Name: string;

    /**
     * Display order of the related product.
     */
    DisplayOrder: number;
}

/**
 * Represents a product cross-sells interface.
 */
interface ProductCrossSells {
    /**
     * Id of the cross-sell product.
     */
    Id: number;

    /**
     * Name of the cross-sell product.
     */
    Name: string;
}

/**
 * Represents a picture associated with a product.
 */
interface ProductPicture {
    /**
     * The identifier of the product picture.
     */
    Id: number;

    /**
     * The URL of the product picture.
     */
    Url: string;

    /**
     * The full-size URL of the product picture.
     */
    FullSizeUrl: string;

    /**
     * The display order of the product picture.
     */
    DisplayOrder: number;
}

/**
 * Represents access permission functionality for checking permissions.
 */
interface AccessPermission {
    /**
     * Checks if a customer has permission to access specific products.
     *
     * @param customer - The customer object to check permissions for.
     * @param products - The array of products to check permissions against.
     * @param includeReason - Indicates whether to include the reason for the permission check.
     * @param loadContext - The context for loading access permissions.
     * @returns An array of permission check results.
     */
    CheckPermission(customer: Customer, products: Product[] | number[] | number, includeReason: boolean, loadContext: MSAccessPermissionLoadContext): MsAccessPermissionCheckResult[];
}


/**
 * Enum representing product delivery types.
 */
declare enum ProductDeliveryType {
    /**
     * Represents products that are delivered digitally.
     * Example: Software downloads, digital subscriptions.
     */
    Digital = 'digital',

    /**
     * Represents products that are delivered physically in printed form.
     * Example: Books, magazines, posters.
     */
    Print = 'print'
}

/**
 * Enum defining various types of products.
 */
declare enum ProductType {
    /** Placeholder product type. */
    Nop,

    /** Infigo product type. */
    Infigo,

    /** Multi-part product type. */
    MultiPart,

    /** Dynamic product type. */
    Dynamic,

    /** SMS product type. */
    Sms,

    /** Custom product type. */
    Custom,

    /** Symphony product type. */
    Symphony,

    /** PDF static product type. */
    PdfStatic,
}

/**
 * Pricing request options for {@link Products.GetPrice}.
 */
interface GetPriceRequest {
    /** The quantity to price. Defaults to `1` when omitted. */
    Quantity?: number;

    /** Attribute selections to apply before pricing, as a name/value map. */
    Attributes?: { [key: string]: string };

    /** When `true`, `FormattedPrice` is populated on the result data. */
    IncludeFormatted?: boolean;

    /** When `true`, `CurrencyCode` and `CurrencySymbol` are populated on the result data. */
    IncludeCurrency?: boolean;
}

/**
 * Calculated price data returned by {@link Products.GetPrice}.
 */
interface GetPriceData {
    /** The calculated unit price. */
    Price: number;

    /** The formatted price string; `null` unless `IncludeFormatted` was requested. */
    FormattedPrice: string | null;

    /** The ISO currency code; `null` unless `IncludeCurrency` was requested. */
    CurrencyCode: string | null;

    /** The currency symbol; `null` unless `IncludeCurrency` was requested. */
    CurrencySymbol: string | null;
}

/**
 * Options for {@link Products.GetThumbnailUrls}.
 */
interface GetThumbnailUrlsOptions {
    /** When `true` (default) returns local paths; when `false` returns absolute URLs. */
    localPath?: boolean;
}

/**
 * Result of {@link Products.GetThumbnailUrls}.
 */
interface ProductThumbnailUrlsResultObject {
    /** Indicates whether the operation succeeded. */
    Success: boolean;

    /** A message describing the outcome (e.g. an error reason on failure). */
    Message: string;

    /** The resolved thumbnail URLs. */
    ThumbnailUrls: string[];
}

/**
 * Result of {@link Products.GetPdfFiles}.
 */
interface ProductPdfFilesResultObject {
    /** Indicates whether the operation succeeded. */
    Success: boolean;

    /** A message describing the outcome (e.g. an error reason on failure). */
    Message: string;

    /** The product's PDF files, each wrapped as a file instance. */
    Files: FileInstance[];
}

/**
 * Result of {@link Products.Create} and {@link Products.Update}.
 */
interface ProductWriteResultObject {
    /** Indicates whether the write succeeded. */
    Success: boolean;

    /** A message describing the outcome (e.g. an error reason on failure). */
    Message: string;

    /** The id of the created/updated product. */
    ProductId: number;
}

/**
 * Result of {@link Products.UpdatePdf}.
 */
interface ProductUpdatePdfResultObject {
    /** Indicates whether the operation succeeded. */
    Success: boolean;

    /** A message describing the outcome (e.g. an error reason on failure). */
    Message: string;
}

/**
 * Result of {@link Products.UploadThumbnail}.
 */
interface ProductUploadThumbnailResultObject {
    /** Indicates whether the operation succeeded. */
    Success: boolean;

    /** A message describing the outcome (e.g. an error reason on failure). */
    Message: string;
}

/**
 * Options for {@link Products.Create} and {@link Products.Update}.
 *
 * Patch semantics: only properties that are present (and not `null`) are applied;
 * omitted/`null` properties are left untouched. Property names are accepted in either
 * camelCase or PascalCase; camelCase is documented here.
 */
interface ProductWriteOptions {
    /** Load this product as the template before applying the other options (Create only). */
    masterProductId?: number;

    /** Product name. */
    name?: string;
    /** Product SKU. */
    sku?: string;
    /** External identifier. */
    externalId?: string;
    /** Product tags. */
    tags?: string[];

    /** Short description. */
    shortDescription?: string;
    /** Full description. */
    description?: string;
    /** Additional description. */
    additionalDescription?: string;
    /** Admin comment. */
    adminComment?: string;

    /** Category ids the product belongs to. */
    categories?: number[];
    /** Single primary category id. */
    categoryId?: number;

    /** Price, as a plain number (shorthand for the base price) or a full price object. */
    price?: number | ProductPriceOptions;
    /** Quantity selector mode. Accepts the numeric enum value or the case-insensitive member name. */
    quantitySelectorMode?: number | string;
    /** Whether to show the orderline total. */
    showOrderlineTotal?: boolean;

    /** Default quantity. */
    defaultQuantity?: number;
    /** Minimum order quantity. */
    orderMinimumQuantity?: number;
    /** Maximum order quantity. */
    orderMaximumQuantity?: number;
    /** Pack quantity. */
    packQuantity?: number;

    /** Inventory tracking method. Accepts the numeric enum value or the case-insensitive member name. */
    trackInventory?: number | string;
    /** Stock quantity. */
    stock?: number;
    /** Backorder mode. Accepts the numeric enum value or the case-insensitive member name. */
    backorderMode?: number | string;
    /** Minimum stock quantity. */
    minStockQuantity?: number;
    /** Low-stock activity id. */
    lowStockActivity?: number;

    /** Whether the product is published. */
    published?: boolean;
    /** Whether the product appears in search. */
    showProductInSearch?: boolean;
    /** Whether the product appears on the home page. */
    showOnHomePage?: boolean;
    /** Availability start date (UTC). Accepts a Date or an ISO date string. */
    availableStartDateTimeUtc?: Date | string;
    /** Availability end date (UTC). Accepts a Date or an ISO date string. */
    availableEndDateTimeUtc?: Date | string;
    /** Whether to skip the product details page. */
    skipProductDetailsPage?: boolean;

    /** Width. */
    width?: number;
    /** Height. */
    height?: number;
    /** Weight. */
    weight?: number;
    /** Length. */
    length?: number;
    /** Whether shipping is enabled. */
    isShipEnabled?: boolean;
    /** Whether shipping is free. */
    isFreeShipping?: boolean;

    /** Whether order approval is required. */
    approvalRequired?: boolean;
    /** Whether to disable the buy button. */
    disableBuyButton?: boolean;
    /** Whether to disable the wishlist button. */
    disableWishlistButton?: boolean;
    /** Whether the product requires a quote. */
    requiresQuote?: boolean;
    /** Whether the product is tax exempt. */
    isTaxExempt?: boolean;
    /** Whether versioning is enabled. */
    enableVersioning?: boolean;

    /**
     * Specification attributes. `null`/omitted leaves them untouched; an empty array clears them;
     * a populated array replaces the whole set.
     */
    specificationAttributes?: ProductSpecificationAttributeOptions[];

    /**
     * Product attributes. `null`/omitted leaves them untouched; an empty array clears them;
     * a populated array replaces the whole set.
     */
    productAttributes?: ProductAttributeOptions[];

    /** Product extension (preview/rendering) settings. */
    extension?: ProductExtensionOptions;

    /** Free-form extra data as a string map. */
    extraData?: { [key: string]: string };

    /** Name of the pricing script to assign. */
    pricingScriptName?: string;
}

/**
 * Price options for {@link ProductWriteOptions.price}.
 */
interface ProductPriceOptions {
    /** Base price. */
    price?: number;
    /** Old (strike-through) price. */
    oldPrice?: number;
    /** Product cost. */
    productCost?: number;
    /** Special price. */
    specialPrice?: number;
    /** Whether the customer enters the price. */
    customerEntersPrice?: boolean;
    /** Whether the product is "call for price". */
    callForPrice?: boolean;
    /** Minimum customer-entered price. */
    minimumCustomerEnteredPrice?: number;
    /** Maximum customer-entered price. */
    maximumCustomerEnteredPrice?: number;
    /** Tier prices as a map of quantity (numeric key) to price. */
    tierPrices?: { [quantity: string]: number };
}

/**
 * Specification attribute options for {@link ProductWriteOptions.specificationAttributes}.
 */
interface ProductSpecificationAttributeOptions {
    /** Attribute name. */
    name?: string;
    /** Attribute value. */
    value?: string;
    /** Whether to show it on the product page. */
    showOnProductPage?: boolean;
    /** Whether to hide it from the customer. */
    hideFromCustomer?: boolean;
    /** Display order. */
    displayOrder?: number;
}

/**
 * Product attribute options for {@link ProductWriteOptions.productAttributes}.
 */
interface ProductAttributeOptions {
    /** Attribute name. */
    attributeName?: string;
    /** Friendly (display) name. */
    friendlyName?: string;
    /** Whether the attribute is required. */
    isRequired?: boolean;
    /** Control type. Accepts the numeric enum value or the case-insensitive member name. */
    controlType?: number | string;
    /** Display order. */
    displayOrder?: number;
    /** Whether to hide it from the customer. */
    hideFromCustomer?: boolean;
    /** Display location. Accepts the numeric enum value or the case-insensitive member name. */
    displayLocation?: number | string;
    /** Attribute values. */
    values?: ProductAttributeValueOptions[];
}

/**
 * Attribute value options for {@link ProductAttributeOptions.values}.
 */
interface ProductAttributeValueOptions {
    /** Value name. */
    name?: string;
    /** Friendly (display) name. */
    friendlyName?: string;
    /** Price adjustment. */
    priceAdjustment?: number;
    /** Weight adjustment. */
    weightAdjustment?: number;
    /** Whether pre-selected. */
    isPreSelected?: boolean;
    /** Whether disabled. */
    isDisabled?: boolean;
    /** Price adjustment type. Accepts the numeric enum value or the case-insensitive member name. */
    priceAdjustmentType?: number | string;
    /** Length adjustment. */
    lengthAdjustment?: number;
    /** Width adjustment. */
    widthAdjustment?: number;
    /** Height adjustment. */
    heightAdjustment?: number;
}

/**
 * Product extension options for {@link ProductWriteOptions.extension}.
 */
interface ProductExtensionOptions {
    /** Extension/product type key. */
    type?: string;
    /** Preview mode. Accepts the numeric enum value or the case-insensitive member name. */
    previewMode?: number | string;
    /** Additional view attributes. */
    additionalViewAttributes?: string;
    /** Rotate/flip option. Accepts the numeric enum value or the case-insensitive member name. */
    rotateFlipOption?: number | string;
    /** Page-split setup id. */
    pageSplitSetupId?: number;
}
