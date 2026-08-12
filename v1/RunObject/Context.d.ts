/**
 * Represents the current context object with various properties and methods.
 */
interface CurrentContextObject {
    /**
     * The output mode for the current context.
     */
    OutputMode: string;

    /**
     * The output file instance associated with the current context.
     */
    OutputFile: FileInstance;

    /**
     * The job ID string associated with the current context.
     * This can be a number or a number prefixed with a type.
     */
    JobId: string;

    /**
     * The ID of the product associated with the current job context, or -1 if none.
     */
    ProductId: number;

    /**
     * Additional parameters or data associated with the current context.
     */
    Parameter: any;

    /**
     * The ID of the MegaScript instance that initiated the current context.
     */
    CallingMegaScriptInstanceId: number;

    /**
     * The name of the MegaScript instance that initiated the current context.
     */
    CallingMegaScriptInstanceName: string;

    /**
     * The date and time when the current context was queued.
     */
    QueuedOn: Date;

    /**
     * The event object associated with the current context.
     */
    Event: EventObject;

    /**
     * Sets the execution result of the current context.
     * @param isSuccess Whether the execution succeeded.
     * @param message The message to associate with the result.
     */
    SetResult: (isSuccess: boolean, message: string) => void;

    /**
     * Retrieves the backup file instance of the current context.
     * @returns The file instance representing the backup.
     */
    CreateBackup: () => FileInstance;

    /**
     * Checks if a backup of the current context exists.
     * @returns `true` if a backup exists, otherwise `false`.
     */
    HasBackup: () => boolean;

    /**
     * Removes the backup of the current context.
     */
    RemoveBackup: () => void;

    /**
     * Retrieves the backup file instance of the current context.
     * @returns The file instance representing the backup.
     */
    GetBackup: () => FileInstance;
}

/**
 * Represents an output file extending a file object.
 */
interface OutputFile extends FileObject {
}

/**
 * Represents metadata for a job instance object.
 */
interface JobMetaDataInstanceObject {
    /**
     * Indicates if the job metadata is loaded.
     */
    IsLoaded: boolean;

    /**
     * The job data associated with the metadata.
     */
    JobData: DataItemObject;

    /**
     * The Symphony data record loaded for the job, if any.
     */
    SymphonyRecordData: SymphonyRecordData;

    /**
     * The Symphony print item data loaded for the job, if any.
     */
    SymphonyPrintItemData: SymphonyPrintItemData;

    /**
     * Changes the production status of the job.
     * @param newStatus The new status to set (case-insensitive). One of:
     * `inhotfolder`, `printed`, `shipped`, `awaitingdata`, `awaitingparts`, `awaitingproof`,
     * `inartworking`, `infinishing`, `inpacking`, `inproduction`, `inreprographics`, `onhold`,
     * `downloaded`, `verified`, `readyforcollection`.
     * @param info Optional information note to attach to the status history entry.
     * @returns True if the status was changed, false if the status is unknown or the job cannot be found.
     */
    ChangeJobStatus: (newStatus: string, info: string) => boolean;
}

/**
 * Represents a Symphony data record loaded for a job.
 */
interface SymphonyRecordData {
    /** The ID of the data record. */
    RecordId: number;

    /** The ID of the data source the record belongs to. */
    DataSourceId: number;

    /** The status of the record. */
    Status: string;

    /** The field values of the record. */
    Data: SymphonyRecordValue[];

    /** The metadata values of the record. */
    MetaData: SymphonyRecordValue[];

    /** The overall validation status of the record. */
    ValidationStatus: string;

    /** The sequential number of the record within its data source. */
    RecordNumber: number;

    /** The date and time the record was created, in UTC. */
    CreatedOnUtc: Date;
}

/**
 * Represents a single key/value entry within a Symphony data record.
 */
interface SymphonyRecordValue {
    /** The field or metadata key. */
    Key: string;

    /** The field or metadata value. */
    Value: string;

    /** The validation status of the value, or null when not applicable (e.g. metadata). */
    Status: string | null;
}

/**
 * Represents Symphony print item data loaded for a job.
 */
interface SymphonyPrintItemData {
    /** The ID of the print item. */
    PrintItemId: number;

    /** The ID of the item group the print item belongs to, or null if none. */
    ItemGroupId: number | null;

    /** The status history entries for the print item, ordered by creation time. */
    ItemGroupName: SymphonyPrintItemStatusHistory[];
}

/**
 * Represents a status history entry for a Symphony print item.
 */
interface SymphonyPrintItemStatusHistory {
    /** The note associated with the status change. */
    Note: string;

    /** The status value. */
    Status: string;

    /** The date and time the status was recorded, in UTC. */
    CreatedOnUtc: Date;
}

/**
 * Represents an extended data item object including order product variant details.
 */
interface DataItemObject extends OrderProductVariant {
    /**
     * The full ID of the data item.
     */
    FullId: string;

    /**
     * The date and time of the order in UTC.
     */
    OrderDateUtc: Date;

    /**
     * Notes associated with each order line.
     */
    OrderLineNotes: string;

    /**
     * General notes related to the order.
     */
    OrderNotes: string;

    /**
     * The ID of the customer associated with the order.
     */
    CustomerId: number;

    /**
     * The email address of the customer associated with the order.
     */
    CustomerEmail: string;

    /**
     * Additional customer attributes associated with the order, as key/value pairs.
     */
    AdditionalCustomerAttributes: { [key: string]: any };

    /**
     * The total number of order items, rendered from the order template.
     */
    OrderItemsNumber: string;

    /**
     * The size of the order item set, rendered from the order template.
     */
    OrderItemsSetSize: string;

    /**
     * The checkout attributes for the order, rendered from the order template.
     */
    CheckoutAttributes: string;

    /**
     * The name of the storefront the order was placed on, rendered from the order template.
     */
    StorefrontName: string;

    /**
     * The date the order is due to be dispatched, in UTC.
     */
    DueDate: Date;

    /** Billing address for the order. */
    Billing: Address;

    /** Shipping address for the order. */
    Shipping: Address;

    /** Shipping method used for the order. */
    ShippingMethod: string;
}

/**
 * Represents an event object with specific properties.
 */
interface EventObject {
    /**
     * The name or identifier of the event.
     */
    Name: string;

    /**
     * Parameters associated with the event, stored as key-value pairs.
     */
    Parameter: { [key: string]: any };

    /**
     * Results or outcomes produced by the event, stored as key-value pairs.
     */
    Result: { [key: string]: any };
}

