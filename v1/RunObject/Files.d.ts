/**
 * Interface representing a file instance with various properties and methods for file manipulation.
 */
interface FileInstance {
    /**
     * Gets the name of the file.
     */
    Name: string;

    /**
     * Gets the file extension.
     */
    Extension: string;

    /**
     * Gets the MIME type of the file.
     */
    MimeType: string;

    /**
     * Gets the full name (including path) of the file.
     */
    FullName: string;

    /**
     * Gets the size of the file in bytes.
     */
    FileSize: number;

    /**
     * Indicates whether the file exists.
     */
    Exists: boolean;

    /**
     * Gets the last access time of the file in UTC.
     */
    LastAccessTimeUtc: Date;

    /**
     * Gets the last write time of the file in UTC.
     */
    LastWriteTimeUtc: Date;

    /**
     * Gets the creation time of the file in UTC.
     */
    CreationTimeUtc: Date;

    /**
     * Deletes the file.
     * @returns `true` if the file was successfully deleted, otherwise `false`.
     */
    Delete: () => boolean;

    /**
     * Gets the base64 representation of the file.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    GetBase64: () => boolean;

    /**
     * Gets the SHA-256 hash of the file.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    GetSha256: () => boolean;

    /**
     * Moves the file to a new location.
     * @param newName The new name of the file.
     * @param newTarget The target directory to move the file to.
     * @returns `true` if the file was successfully moved, otherwise `false`.
     */
    Move: (newName: string, newTarget: FileDirectory) => boolean;

    /**
     * Copies the file to a new location.
     * @param newName The new name of the file.
     * @param newTarget The target directory to copy the file to.
     * @returns The copied file instance.
     */
    Copy: (newName: string, newTarget: FileDirectory) => FileInstance;

    /**
     * Saves text content to the file.
     * @param text The text content to save.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    SaveText: (text: string) => boolean;

    /**
     * Saves base64 content to the file.
     * @param base64 The base64 content to save.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    SaveBase64: (base64: string) => boolean;

    /**
     * Saves binary data to the file.
     * @param data The binary data to save.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    SaveBinary: (data: []) => boolean;

    /**
     * Loads text content from the file.
     * @returns The loaded text content.
     */
    LoadText: () => string;

    /**
     * Loads binary data from the file.
     * @returns The loaded binary data.
     */
    LoadBinary: () => [];

    /**
     * Loads metadata from the file.
     * @param metaData Optional. The metadata to load.
     * @returns The loaded metadata instance.
     */
    LoadMetaData: (metaData?: MetaDataToLoad) => JobMetaDataInstanceObject;

    /**
     * Creates a PDF from a dynamic template.
     * @param templateXml The XML string defining the template.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    CreatePdfWithDynamicTemplate: (templateXml: string) => boolean;

    /**
     * Opens the file as a PDF document.
     * @param password Optional. The password to open the PDF document.
     * @returns The PDF instance.
     */
    OpenAsPdfDocument: (password?: string | null) => PdfInstance;
}

/**
 * Interface representing the constructor for creating instances of FileInstance.
 */
interface FileInstanceConstructor {
    /**
     * Creates a new instance of FileInstance.
     * @param file - The name of the file.
     * @param folder - The directory where the file is located.
     * @returns A new instance of FileInstance.
     */
    new(file: string, folder: FileDirectory): FileInstance;

    /**
     * The prototype of FileInstance. This is used to access properties and methods shared across all instances.
     */
    readonly prototype: FileInstance;
}

/**
 * Declare the FileInstance variable as a constructor for creating FileInstance objects.
 */
declare const FileInstance: FileInstanceConstructor;

/**
 * Enum representing different types of metadata that can be loaded.
 * Each value is a bit flag, allowing for bitwise combinations to load multiple types.
 */
declare enum MetaDataToLoad {
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

/**
 * Represents a file object interface with methods for file manipulation.
 */
interface FileObject {
    /**
     * Creates a temporary folder and returns its directory information.
     *
     * @returns An object representing the created temporary folder.
     */
    CreateTemporaryFolder: () => FileDirectory;
}
