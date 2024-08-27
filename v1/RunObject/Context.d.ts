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
     * The total number of order items.
     */
    OrderItemsNumber: number;

    /**
     * The size of the order item set.
     */
    OrderItemsSetSize: number;
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

