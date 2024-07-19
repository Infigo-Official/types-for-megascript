/**
 * Represents a model used to filter products.
 */
interface ProductFilterModel {
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
interface ProductLoadContext {
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
 * Enumerates sorting directions for products.
 */
declare enum ProductSortDirectionEnum {
    /**
     * Sort products in ascending order.
     */
    Asc = 0,

    /**
     * Sort products in descending order.
     */
    Desc = 1,
}

/**
 * Enumerates different criteria for sorting products.
 */
declare enum ProductSortingEnum {
    /**
     * Sort products by best match.
     */
    BestMatch = 0,

    /**
     * Sort products by ID.
     */
    Id = 1,

    /**
     * Sort products by display order.
     */
    DisplayOrder = 2,

    /**
     * Sort products by name.
     */
    Name = 3,

    /**
     * Sort products by price.
     */
    Price = 4,

    /**
     * Sort products by creation date.
     */
    CreatedOn = 5,

    /**
     * Sort products by SKU.
     */
    Sku = 6,

    /**
     * Sort products by published status.
     */
    Published = 7,
}

/**
 * Enumerates different types of product details to load.
 */
declare enum ProductLoadType {
    /**
     * Load all available product details.
     * Binary: all bits set to 1 (~0 in binary)
     */
    All = ~0,

    /**
     * Load no product details.
     * Binary: 00000000 (0 in decimal)
     */
    None = 0,

    /**
     * Load the URL of the product.
     * Binary: 00000010 (2 in decimal)
     */
    Url = 1 << 1,  // 2 in decimal

    /**
     * Load categories associated with the product.
     * Binary: 00000100 (4 in decimal)
     */
    Categories = 1 << 2,  // 4 in decimal

    /**
     * Load cross-sell products related to the product.
     * Binary: 00001000 (8 in decimal)
     */
    CrossSells = 1 << 3,  // 8 in decimal

    /**
     * Load related products associated with the product.
     * Binary: 00010000 (16 in decimal)
     */
    RelatedProducts = 1 << 4,  // 16 in decimal

    /**
     * Load print locations associated with the product.
     * Binary: 00100000 (32 in decimal)
     */
    PrintLocation = 1 << 5,  // 32 in decimal

    /**
     * Load pictures (images) of the product.
     * Binary: 01000000 (64 in decimal)
     */
    Pictures = 1 << 6,  // 64 in decimal

    /**
     * Load specification attributes of the product.
     * Binary: 10000000 (128 in decimal)
     */
    SpecificationAttributes = 1 << 7,  // 128 in decimal

    /**
     * Load tags associated with the product.
     * Binary: 100000000 (256 in decimal)
     */
    Tags = 1 << 8,  // 256 in decimal
}

/**
 * Enumerates different types of product variant details to load.
 */
declare enum ProductVariantLoadType {
    /**
     * Load all available product variant details.
     * Binary: all bits set to 1 (~0 in binary)
     */
    All = ~0,

    /**
     * Load no product variant details.
     * Binary: 00000000 (0 in decimal)
     */
    None = 0,

    /**
     * Load external IDs of the product variant.
     * Binary: 00000010 (2 in decimal)
     */
    ExternalIds = 1 << 1,  // 2 in decimal

    /**
     * Load price script details of the product variant.
     * Binary: 00000100 (4 in decimal)
     */
    PriceScript = 1 << 2,  // 4 in decimal

    /**
     * Load discounts applied to the product variant.
     * Binary: 00001000 (8 in decimal)
     */
    Discounts = 1 << 3,  // 8 in decimal

    /**
     * Load product group information associated with the product variant.
     * Binary: 00010000 (16 in decimal)
     */
    ProductGroup = 1 << 4,  // 16 in decimal

    /**
     * Load tax category IDs applicable to the product variant.
     * Binary: 00100000 (32 in decimal)
     */
    TaxCategoryIds = 1 << 5,  // 32 in decimal

    /**
     * Load tier prices for the product variant.
     * Binary: 01000000 (64 in decimal)
     */
    TierPrices = 1 << 6,  // 64 in decimal

    /**
     * Load attributes associated with the product variant.
     * Binary: 10000000 (128 in decimal)
     */
    Attributes = 1 << 7,  // 128 in decimal

    /**
     * Load delivery type details for the product variant.
     * Binary: 100000000 (256 in decimal)
     */
    DeliveryType = 1 << 8,  // 256 in decimal

    /**
     * Load product type details for the product variant.
     * Binary: 1000000000 (512 in decimal)
     */
    ProductType = 1 << 9,  // 512 in decimal

    /**
     * Load download information for the product variant.
     * Binary: 10000000000 (1024 in decimal)
     */
    Download = 1 << 10,  // 1024 in decimal
}

/**
 * Enumerates flags for specifying which product details to retrieve.
 */
declare enum ProductGetFlags {
    /**
     * Retrieve all product details.
     * Binary: 00000000 (0 in decimal)
     */
    All = 0,  // 0 in decimal

    /**
     * Retrieve the product's name.
     * Binary: 00000001 (1 in decimal)
     */
    Name = 1 << 0,  // 1 in decimal

    /**
     * Retrieve the product's short description.
     * Binary: 00000010 (2 in decimal)
     */
    ShortDescription = 1 << 1,  // 2 in decimal

    /**
     * Retrieve the product's long description.
     * Binary: 00000100 (4 in decimal)
     */
    LongDescription = 1 << 2,  // 4 in decimal

    /**
     * Retrieve the product's SKU.
     * Binary: 00001000 (8 in decimal)
     */
    Sku = 1 << 3,  // 8 in decimal

    /**
     * Retrieve the product's tags.
     * Binary: 00010000 (16 in decimal)
     */
    Tags = 1 << 4,  // 16 in decimal

    /**
     * Retrieve the product's specification attributes.
     * Binary: 00100000 (32 in decimal)
     */
    SpecAttributes = 1 << 5,  // 32 in decimal

    /**
     * Retrieve the product's external ID.
     * Binary: 01000000 (64 in decimal)
     */
    ExternalId = 1 << 6,  // 64 in decimal
}


