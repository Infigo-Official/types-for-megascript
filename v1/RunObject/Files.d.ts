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
     * Loads the file's contents and returns them as a Base64-encoded string.
     * @returns The Base64-encoded contents, or null if the file does not exist or cannot be read.
     */
    LoadBase64: () => string;

    /**
     * Loads metadata from the file.
     * @param metaData Optional. The metadata to load.
     * @returns The loaded metadata instance.
     */
    LoadMetaData: (metaData?: MetaDataToLoad) => JobMetaDataInstanceObject;

    /**
     * Loads batch (imposition) metadata embedded in the PDF's custom metadata. Optionally
     * enriches each entry with the linked data record and print-item information.
     * @param loadRecords When `true`, each entry's `Record` and `PrintItem` are populated from
     *                    the database; when `false`, only the positional batch info is returned.
     * @returns An array of batch metadata entries, or null if the PDF has no batch metadata.
     */
    LoadBatchMetaData: (loadRecords: boolean) => BatchMetaDataInfo[] | null;

    /**
     * Generates a short-lived, web-accessible copy of this file and returns its download URL.
     * @param fileName The file name to expose the copy under.
     * @returns The web-accessible URL, or null if the copy could not be created.
     */
    GenerateWebAccessibleCopy: (fileName: string) => string;

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

    /**
     * Downloads a file from an HTTP(S) URL into the given directory, subject to the
     * configured maximum download size.
     * @param instanceObject The directory to save the downloaded file into.
     * @param path The source URL to download from.
     * @returns The downloaded file instance, or null if the download exceeds the size limit or fails.
     */
    DownloadFile: (instanceObject: FileDirectory, path: string) => FileInstance | null;

    /**
     * Downloads a file from an SFTP server into the given directory.
     * @param instanceObject The directory to save the downloaded file into.
     * @param host The SFTP host.
     * @param user The SFTP username.
     * @param password The SFTP password.
     * @param path The remote file path to download.
     * @param port Optional. The SFTP port. Defaults to 22.
     * @param localFileName Optional. The local file name to save as. Defaults to the remote file name.
     * @returns A result object carrying the downloaded file, an error code, and a message.
     */
    DownloadFromSftp: (instanceObject: FileDirectory, host: string, user: string, password: string, path: string, port?: number, localFileName?: string) => ResultFileInstanceObject;

    /**
     * Registers a temporary file to be deleted when the script context is disposed.
     * @param fileInstance The file to register for cleanup.
     */
    RegisterTempFileForCleanup: (fileInstance: FileInstance) => void;

    /**
     * Registers a temporary directory to be deleted when the script context is disposed.
     * @param directoryInstance The directory to register for cleanup.
     */
    RegisterTempDirectoryForCleanup: (directoryInstance: FileDirectory) => void;
}

/**
 * Result wrapper returned by {@link FileObject.DownloadFromSftp}.
 */
interface ResultFileInstanceObject {
    /**
     * The SFTP error code. 0 (Success) indicates the download succeeded; non-zero indicates
     * a validation or transfer error.
     */
    ErrorCode: number;

    /** An error message when the download fails; otherwise unset. */
    Message: string;

    /** The downloaded file instance on success; null when the download failed. */
    Result: FileInstance | null;
}

/**
 * A single batch (imposition) metadata entry returned by {@link FileInstance.LoadBatchMetaData}.
 */
interface BatchMetaDataInfo {
    /** The batch item identifier (typically the print-item id, as a string). */
    Id: string;

    /**
     * The linked data record, populated only when LoadBatchMetaData was called with
     * loadRecords = true; otherwise null.
     */
    Record: BatchRecordData | null;

    /**
     * The linked print-item information, populated only when LoadBatchMetaData was called
     * with loadRecords = true; otherwise null.
     */
    PrintItem: BatchPrintItemData | null;

    /** The zero-based start page index of this batch item within the document. */
    Start: number;

    /** The zero-based end page index of this batch item within the document. */
    End: number;

    /** The number of pages in this batch item. */
    Length: number;
}

/**
 * Data record information attached to a batch metadata entry.
 */
interface BatchRecordData {
    /** The data record id. */
    RecordId: number;
    /** The data source id the record belongs to. */
    DataSourceId: number;
    /** The record's status (enum name as string). */
    Status: string;
    /** The record's field values. */
    Data: BatchRecordKeyValuePair[];
    /** The record's metadata values (keyed by data-type GUID). */
    MetaData: BatchRecordKeyValuePair[];
    /** The record's overall validation status (enum name as string). */
    ValidationStatus: string;
    /** The record's sequential number. */
    RecordNumber: number;
    /** The UTC creation timestamp of the record. */
    CreatedOnUtc: Date;
}

/**
 * A key/value pair within batch record data.
 */
interface BatchRecordKeyValuePair {
    /** The field/metadata key (data header name, or data-type GUID for metadata). */
    Key: string;
    /** The field/metadata value. */
    Value: string;
    /** The per-field validation status (enum name as string); not set for metadata entries. */
    Status: string;
}

/**
 * Print-item information attached to a batch metadata entry.
 */
interface BatchPrintItemData {
    /** The print-item id. */
    PrintItemId: number;
    /** The item group id, or null when the item is not grouped. */
    ItemGroupId: number | null;
    /**
     * The item's status history, ordered by creation time.
     * NOTE: the C# property is named `ItemGroupName` but is typed as a status-history array
     * (the name is a pre-existing misnomer in the source, mirrored here verbatim).
     */
    ItemGroupName: BatchStatusHistory[];
}

/**
 * A single status-history entry for a batch print item.
 */
interface BatchStatusHistory {
    /** A free-text note for the status change. */
    Note: string;
    /** The status (enum name as string). */
    Status: string;
    /** The UTC timestamp of the status change. */
    CreatedOnUtc: Date;
}
