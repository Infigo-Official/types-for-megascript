/**
 * Global container exposing named integer constants used across MegaScript
 * (metadata load flags, budget/delivery/job types, quote constants, SFTP and
 * delete-status codes). Registered globally as `MsConstants`.
 */
interface MsConstants {
    /** Metadata-to-load flag constants (see {@link MetaDataConstants}). */
    readonly MetaDataConstants: MetaDataConstants;

    /** Budget type constants (see {@link BudgetConstants}). */
    readonly BudgetConstants: BudgetConstants;

    /** Saved-quote constants (see {@link QuoteConstants}). */
    readonly Quote: QuoteConstants;

    /** Delivery type constants (see {@link DeliveryTypeConstants}). */
    readonly DeliveryTypeConstants: DeliveryTypeConstants;

    /** Product/job type constants (see {@link JobTypeConstants}). */
    readonly JobType: JobTypeConstants;

    /** Shopping-cart item type constants (see {@link ShoppingCartItemTypeConstants}). */
    readonly ShoppingCartItemType: ShoppingCartItemTypeConstants;

    /** SFTP result code: operation succeeded. */
    readonly SftpSuccess: number;
    /** SFTP result code: download failed. */
    readonly SftpDownloadError: number;
    /** SFTP result code: the supplied path was invalid. */
    readonly SftpPathInvalid: number;
    /** SFTP result code: the host could not be found. */
    readonly SftpHostNotFound: number;
    /** SFTP result code: the credentials were rejected. */
    readonly SftpCredentialsWrong: number;
    /** SFTP result code: the connection failed. */
    readonly SftpConnectionFailed: number;
    /** SFTP result code: permission denied. */
    readonly SftpPermissionDenied: number;
    /** SFTP result code: a storage error occurred. */
    readonly SftpStorageError: number;
    /** SFTP result code: validation failed. */
    readonly SftpValidationError: number;

    /** Delete scope: remove all (output and uploads). */
    readonly DeleteStatusAll: number;
    /** Delete scope: remove output only. */
    readonly DeleteStatusOutput: number;
    /** Delete scope: remove output and uploads. */
    readonly DeleteStatusOutputAndUploads: number;
}

/**
 * Metadata-to-load flag constants. These are bit flags that can be combined
 * to control which related entities are loaded for an order/job.
 */
interface MetaDataConstants {
    /** Load all available metadata. */
    readonly All: number;
    /** Load core job data. */
    readonly Job: number;
    /** Load customer data. */
    readonly Customer: number;
    /** Load customer attributes. */
    readonly CustomerAttributes: number;
    /** Load checkout attributes. */
    readonly CheckoutAttributes: number;
    /** Load order product variant data. */
    readonly OrderProductVariant: number;
    /** Load specification attributes. */
    readonly SpecificationAttributes: number;
    /** Load tags. */
    readonly Tags: number;
    /** Load status history. */
    readonly StatusHistory: number;
    /** Load attributes. */
    readonly Attributes: number;
    /** Load the order billing address. */
    readonly OrderBillingAddress: number;
    /** Load the order shipping address. */
    readonly OrderShippingAddress: number;
    /** Load order shipping info. */
    readonly OrderShippingInfo: number;
    /** Load template texts. */
    readonly TemplateTexts: number;
}

/**
 * Budget type constants.
 */
interface BudgetConstants {
    /** Admin-managed budget. */
    readonly Admin: number;
    /** Prepay budget. */
    readonly Prepay: number;
    /** MegaScript-managed budget. */
    readonly MegaScript: number;
}

/**
 * Saved-quote status and ordering constants.
 */
interface QuoteConstants {
    /** Quote status: active. */
    readonly StatusActive: number;
    /** Quote status: inactive. */
    readonly StatusInactive: number;
    /** Quote status: expired. */
    readonly StatusExpired: number;
    /** Quote status: deleted. */
    readonly StatusDeleted: number;
    /** Quote status: completed. */
    readonly StatusCompleted: number;

    /** Order results by quote Id. */
    readonly OrderById: number;
    /** Order results by custom reference. */
    readonly OrderByCustomReference: number;
    /** Order results by created date. */
    readonly OrderByCreatedDate: number;
    /** Order results by status. */
    readonly OrderByStatus: number;
    /** Order results by amount. */
    readonly OrderByAmount: number;
    /** Order results by customer. */
    readonly OrderByCustomer: number;
}

/**
 * Delivery type constants (bit flags: Print = 1, Digital = 2, combined = 3).
 */
interface DeliveryTypeConstants {
    /** Default delivery (0). */
    readonly Default: number;
    /** Print delivery. */
    readonly Print: number;
    /** Digital delivery. */
    readonly Digital: number;
    /** Print and digital delivery combined. */
    readonly PrintAndDigital: number;
}

/**
 * Product/job type constants.
 */
interface JobTypeConstants {
    /** Standard NopCommerce product (0). */
    readonly Nop: number;
    /** Variable-data product (1). */
    readonly Variable: number;
    /** Static product (7). */
    readonly Static: number;
    /** Multipart product (2). */
    readonly Multipart: number;
    /** Dynamic product (3). */
    readonly Dynamic: number;
    /** Symphony product (6). */
    readonly Symphony: number;
    /** Custom product (5). */
    readonly Custom: number;
}

/**
 * Shopping-cart item type constants.
 * NOTE: the underlying C# members currently lack the [JSProperty] attribute and
 * may not be reachable at runtime until that is corrected.
 */
interface ShoppingCartItemTypeConstants {
    /** Shopping cart (1). */
    readonly ShoppingCart: number;
    /** Wishlist (2). */
    readonly Wishlist: number;
    /** Saved basket (3). */
    readonly SavedBasket: number;
    /** API (4). */
    readonly Api: number;
}

/**
 * The global constants object, registered as `MsConstants`.
 */
declare const MsConstants: MsConstants;
