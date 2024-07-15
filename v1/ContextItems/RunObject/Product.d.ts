import {ProductVariant} from "./ProductVariant";

/**
 * Represents a product interface.
 */
export interface Product {
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
 * Represents a product tag interface.
 */
export interface ProductTag {
    /**
     * Name of the product tag.
     */
    Name: string;
}

/**
 * Represents a product category interface.
 */
export interface ProductCategory {
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
export interface RelatedProduct {
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
export interface ProductCrossSells {
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
 * Represents product specification attributes.
 */
export interface ProductSpecificationAttributes {
    /**
     * Name of the specification attribute.
     */
    Name: string;

    /**
     * Value of the specification attribute.
     */
    Value: string;

    /**
     * Determines if the attribute should be shown on the product page.
     */
    ShowOnProductPage: boolean;

    /**
     * Determines if the attribute should be hidden from customers.
     */
    HideFromCustomer: boolean;

    /**
     * Display order of the attribute.
     */
    DisplayOrder: number;
}

/**
 * Represents a print location for products.
 */
export interface PrintLocation {
    /**
     * The name of the print location.
     */
    Name: string;

    /**
     * The description of the print location.
     */
    Description: string;
}

/**
 * Represents a picture associated with a product.
 */
export interface ProductPicture {
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
 * Enum representing product delivery types.
 */
export enum ProductDeliveryType {
    Digital = 'digital',
    Print = 'print'
}