import {PdfInstance} from "./PdfInstance";
import {FileDirectory} from "./FileDirectory";
import {JobMetaDataInstanceObject} from "./Context";

/**
 * Represents a file instance with various properties and methods for file operations.
 */
export interface FileInstance {
    /**
     * Gets the name of the file without the extension.
     * Example: If the file is 'document.txt', this returns 'document'.
     */
    Name: string;

    /**
     * Gets the extension of the file including the dot.
     * Example: For 'document.txt', this returns '.txt'.
     */
    Extension: string;

    /**
     * Gets the MIME type of the file if it exists.
     * Example: For 'document.pdf', this returns 'application/pdf'.
     */
    MimeType: string;

    /**
     * Gets the full name of the file including its extension.
     * Example: For 'document.txt', this returns 'document.txt'.
     */
    FullName: string;

    /**
     * Gets the size of the file in bytes.
     * Returns -1 if the file does not exist.
     */
    FileSize: number;

    /**
     * Checks if the file exists.
     * Returns true if the file exists, false otherwise.
     */
    Exists: boolean;

    /**
     * Gets the last access time of the file in UTC.
     * Returns null if the file does not exist.
     */
    LastAccessTimeUtc: Date | null;

    /**
     * Gets the last write time of the file in UTC.
     * Returns null if the file does not exist.
     */
    LastWriteTimeUtc: Date | null;

    /**
     * Gets the creation time of the file in UTC.
     * Returns null if the file does not exist.
     */
    CreationTimeUtc: Date | null;

    /**
     * Deletes the file.
     * Returns true if the file was successfully deleted, false otherwise.
     */
    Delete: () => boolean;

    /**
     * Gets the Base64 encoded string of the file's content.
     * Returns null if the file does not exist.
     */
    GetBase64: () => string | null;

    /**
     * Gets the SHA-256 hash of the file's content as a hexadecimal string.
     * Returns null if the file does not exist.
     */
    GetSha256: () => string | null;

    /**
     * Moves the file to a new name and/or target directory.
     * @param newName The new name for the file.
     * @param newTarget The new target directory where the file should be moved.
     * Returns true if the move was successful, false otherwise.
     */
    Move: (newName: string, newTarget: FileDirectory) => boolean;

    /**
     * Copies the file to a new name and/or target directory.
     * @param newName The new name for the copied file.
     * @param newTarget The new target directory where the file should be copied.
     * Returns a new IFileInstance representing the copied file, or null if the copy failed.
     */
    Copy: (newName: string, newTarget: FileDirectory) => FileInstance | null;

    /**
     * Saves text content to the file, overwriting existing content.
     * @param text The text content to save.
     * Returns true if the save was successful, false otherwise.
     */
    SaveText: (text: string) => boolean;

    /**
     * Saves Base64 encoded content to the file, overwriting existing content.
     * @param base64 The Base64 encoded content to save.
     * Returns true if the save was successful, false otherwise.
     */
    SaveBase64: (base64: string) => boolean;

    /**
     * Saves binary data to the file, overwriting existing content.
     * @param data The binary data to save as an array of bytes.
     * Returns true if the save was successful, false otherwise.
     */
    SaveBinary: (data: number[]) => boolean;

    /**
     * Loads and returns the text content of the file.
     * Returns null if the file does not exist or an error occurs.
     */
    LoadText: () => string | null;

    /**
     * Loads and returns the binary content of the file as an array of bytes.
     * Returns null if the file does not exist or an error occurs.
     */
    LoadBinary: () => number[] | null;

    /**
     * Loads metadata for the file.
     * @param metaDataToLoad Specifies which metadata to load (default is MetaDataToLoad.All).
     * Returns an IJobMetaDataInstanceObject representing the file's metadata.
     */
    LoadMetaData: (metaDataToLoad?: MetaDataToLoad) => JobMetaDataInstanceObject;

    /**
     * Creates a PDF document based on a dynamic template XML and saves it to the file.
     * @param templateXml The XML string representing the dynamic template.
     * Returns true if the PDF was created successfully, false otherwise.
     */
    CreatePdfWithDynamicTemplate: (templateXml: string) => boolean;

    /**
     * Opens the file as a PDF document.
     * @param password The optional password for opening encrypted PDF files.
     * Returns an IPdfInstance representing the PDF document, or null if the file is not a PDF or cannot be opened.
     */
    OpenAsPdfDocument: (password?: string | null) => PdfInstance | null;
}

/**
 * Enum representing different types of metadata that can be loaded.
 * Each value is a bit flag, allowing for bitwise combinations to load multiple types.
 */
export enum MetaDataToLoad {
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
export interface FileObject {
    /**
     * Creates a temporary folder and returns its directory information.
     *
     * @returns An object representing the created temporary folder.
     */
    CreateTemporaryFolder: () => FileDirectory;
}

