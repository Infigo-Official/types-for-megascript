/**
 * Represents a model used to filter products.
 */
export interface ProductFilterModel {
    /**
     * The search query string.
     */
    Query: string;

    /**
     * Flags specifying what product details to include.
     */
    Flags: ProductGetFlags;

    /**
     * Indicates whether to retrieve only published products.
     */
    PublishedOnly: boolean;

    /**
     * Indicates whether to apply access permissions.
     */
    UseAccessPermission: boolean;

    /**
     * Indicates whether to use fuzzy search.
     */
    Fuzziness: boolean;

    /**
     * Number of products per page.
     */
    PerPage: number;

    /**
     * Index of the current page.
     */
    PageIndex: number;

    /**
     * Array of product types to filter by.
     */
    ProductTypes: ProductType[];

    /**
     * Optional context for loading product details.
     */
    LoadContext?: ProductLoadContext;

    /**
     * Indicates whether to ignore total count in pagination.
     */
    IgnoreTotalCount: boolean;

    /**
     * Indicates whether to load localizable product details.
     */
    Localizable: boolean;

    /**
     * Indicates whether to use wildcard search.
     */
    UseWildCardSearch: boolean;

    /**
     * Specifies how to sort products.
     */
    SortBy: ProductSortingEnum;

    /**
     * Specifies the sorting direction.
     */
    SortDirection: ProductSortDirectionEnum;
}

/**
 * Represents the context for loading specific details of products.
 */
export interface ProductLoadContext {
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
 * Enumerates different types of products.
 */
export enum ProductType {
    Nop = 0,
    Infigo = 1,
    MultiPart = 2,
    Dynamic = 3,
    Custom = 5,
    Symphony = 6,
    PdfStatic = 7
}

/**
 * Enumerates sorting directions for products.
 */
export enum ProductSortDirectionEnum {
    Asc = 0,
    Desc = 1
}

/**
 * Enumerates different criteria for sorting products.
 */
export enum ProductSortingEnum {
    BestMatch = 0,
    Id = 1,
    DisplayOrder = 2,
    Name = 3,
    Price = 4,
    CreatedOn = 5,
    Sku = 6,
    Published = 7,
}

/**
 * Enumerates different types of product details to load.
 */
export enum ProductLoadType {
    All = ~0,
    None = 0,
    Url = 1 << 1,
    Categories = 1 << 2,
    CrossSells = 1 << 3,
    RelatedProducts = 1 << 4,
    PrintLocation = 1 << 5,
    Pictures = 1 << 6,
    SpecificationAttributes = 1 << 7,
    Tags = 1 << 8
}

/**
 * Enumerates different types of product variant details to load.
 */
export enum ProductVariantLoadType {
    All = ~0,
    None = 0,
    ExternalIds = 1 << 1,
    PriceScript = 1 << 2,
    Discounts = 1 << 3,
    ProductGroup = 1 << 4,
    TaxCategoryIds = 1 << 5,
    TierPrices = 1 << 6,
    Attributes = 1 << 7,
    DeliveryType = 1 << 8,
    ProductType = 1 << 9,
    Download = 1 << 10
}

/**
 * Enumerates flags for specifying which product details to retrieve.
 */
export enum ProductGetFlags {
    All = 0,                    // 00000000
    Name = 1 << 0,              // 00000001
    ShortDescription = 1 << 1,  // 00000010
    LongDescription = 1 << 2,   // 00000100
    Sku = 1 << 3,               // 00001000
    Tags = 1 << 4,              // 00010000
    SpecAttributes = 1 << 5,    // 00100000
    ExternalId = 1 << 6,        // 01000000
}

