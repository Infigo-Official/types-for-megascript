/**
 * Enum representing different types of metadata that can be loaded.
 * Each value is a bit flag, allowing for bitwise combinations to load multiple types.
 */
declare const enum MetaDataToLoad {
    /**
     * Base flag for job-related metadata.
     * This flag is the foundation for most other metadata types.
     */
    Job = 1 << 1, // 2

    /**
     * Customer-related metadata, including job-related metadata.
     * Combines the `Job` flag with a specific bit for customer metadata.
     */
    Customer = Job | 1 << 2, // 6 (2 + 4)

    /**
     * Template texts metadata, including job-related metadata.
     * This is useful for loading textual templates associated with jobs.
     */
    TemplateTexts = Job | 1 << 13, // 8194 (2 + 8192)

    /**
     * Customer attributes metadata, including job-related metadata.
     * Includes additional attributes related to the customer.
     */
    CustomerAttributes = Job | 1 << 3, // 10 (2 + 8)

    /**
     * Checkout attributes metadata, including customer and template texts metadata.
     * Combines `CustomerAttributes`, `TemplateTexts`, and job-related metadata.
     */
    CheckoutAttributes = Job | CustomerAttributes | TemplateTexts | 1 << 4, // 8210 (2 + 8 + 8192 + 16)

    /**
     * Metadata related to order product variants, including job-related metadata.
     * This covers specific variants of products in orders.
     */
    OrderProductVariant = Job | 1 << 5, // 34 (2 + 32)

    /**
     * Specification attributes metadata, including job and order product variant metadata.
     * Used for loading specific attributes that describe the specifications of a product.
     */
    SpecificationAttributes = Job | OrderProductVariant | 1 << 6, // 98 (2 + 32 + 64)

    /**
     * Tags metadata, including job and order product variant metadata.
     * Tags are useful for categorizing and searching products.
     */
    Tags = Job | OrderProductVariant | 1 << 7, // 162 (2 + 32 + 128)

    /**
     * Status history metadata, including job and order product variant metadata.
     * Tracks the historical statuses of an order or job.
     */
    StatusHistory = Job | OrderProductVariant | 1 << 8, // 290 (2 + 32 + 256)

    /**
     * General attributes metadata, including job and order product variant metadata.
     * Covers various attributes that can be associated with a job or product.
     */
    Attributes = Job | OrderProductVariant | 1 << 9, // 546 (2 + 32 + 512)

    /**
     * Billing address metadata related to an order, including job-related metadata.
     * Contains information about the billing address associated with an order.
     */
    OrderBillingAddress = Job | 1 << 10, // 1058 (2 + 1024)

    /**
     * Shipping address metadata related to an order, including job-related metadata.
     * Contains information about the shipping address associated with an order.
     */
    OrderShippingAddress = Job | 1 << 11, // 2082 (2 + 2048)

    /**
     * Shipping information metadata related to an order, including job-related metadata.
     * Covers detailed information about the shipping process for an order.
     */
    OrderShippingInfo = Job | 1 << 12, // 4130 (2 + 4096)

    /**
     * Combines all metadata types.
     * Useful for scenarios where complete metadata loading is required.
     */
    All = Job | Customer
        | CustomerAttributes
        | CheckoutAttributes
        | OrderProductVariant
        | SpecificationAttributes
        | Tags
        | StatusHistory
        | Attributes
        | OrderBillingAddress
        | OrderShippingAddress
        | OrderShippingInfo
        | TemplateTexts, // 16382 (Sum of all included values)
}
