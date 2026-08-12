/**
 * Represents a job status object used in MegaScript.
 */
interface JobStatus{
    /**
     * Gets the ID of the print order history.
     */
    readonly Id: number;

    /**
     * Gets information associated with the job status.
     */
    readonly Info: string;

    /**
     * Gets the status type as a string.
     */
    readonly Status: string;

    /**
     * Gets the custom status information.
     */
    readonly CustomStatus: string | null;

    /**
     * Sets information for the job status.
     * @param info The information to set.
     * Returns true if the operation was successful, false otherwise.
     */
    SetInfo: (info: string) => boolean;
}

/**
 * Provides access to jobs (order products / print order history items) within the run.
 */
interface Jobs {
    /**
     * Retrieves a job by its job ID.
     * @param jobId The job ID to look up.
     * @returns The matching job, or null if no job exists for the given ID.
     */
    GetById: (jobId: string) => JobObject | null;
}

/**
 * Represents a single job (an order product / print order history item) within the run.
 */
interface JobObject {
    /**
     * The job ID.
     */
    Id: string;

    /**
     * The ID of the order product variant the job belongs to.
     */
    OpvId: number;

    /**
     * The ID of the product the job was created from.
     */
    ProductId: number;

    /**
     * The name of the product the job was created from.
     */
    ProductName: string;

    /**
     * The ID of the customer that owns the job.
     */
    CustomerId: number;

    /**
     * The date and time the job was created, in UTC.
     */
    CreatedOnUtc: Date;

    /**
     * Indicates whether the job has been cancelled.
     */
    IsCancelled: boolean;

    /**
     * The number of times the job output has been downloaded.
     */
    DownloadCount: number;

    /**
     * The product tags associated with the job.
     */
    Tags: string[];

    /**
     * The ordered quantity for the job.
     */
    Quantity: number;

    /**
     * The quantity of the job that has been shipped.
     */
    ShippedQuantity: number;

    /**
     * Free-text notes associated with the job.
     */
    Notes: string;

    /**
     * The custom name assigned to the job.
     */
    CustomName: string;

    /**
     * The SKU of the product the job was created from.
     */
    Sku: string;

    /**
     * The ID of the quote the job originated from, or 0 if none.
     */
    QuoteId: number;

    /**
     * A dictionary of custom tags associated with the job.
     */
    CustomTags: { [key: string]: string };

    /**
     * The product attributes captured on the job, as key/value pairs.
     */
    ProductAttributes: KeyValue<string, string>[];

    /**
     * Additional free-form data associated with the job.
     */
    ExtraData: { [key: string]: any };

    /**
     * The first custom data field of the job.
     */
    CustomData1: string;

    /**
     * Migrates the job to a different customer.
     * @param customerId The ID of the customer to migrate the job to.
     * @returns True if the migration succeeded, otherwise false.
     */
    Migrate: (customerId: number) => boolean;

    /**
     * Gets the number of pages of the job's output.
     * @returns The page count, or 0 if it cannot be determined.
     */
    GetPageCount: () => number;

    /**
     * Gets the output metadata for the job's current configuration.
     * @returns An array of output metadata entries, or null if the job has no multi-part configuration.
     */
    GetOutputMetadata: () => any[];

    /**
     * Determines whether the job's current output configuration is valid (all required files uploaded).
     * @returns True if the configuration is valid, otherwise false.
     */
    ValidOutputConfiguration: () => boolean;
}