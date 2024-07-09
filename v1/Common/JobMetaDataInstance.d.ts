/**
 * Represents detailed batch information for a job.
 */
interface BatchInformation {
    /** Unique identifier for the batch. */
    Id: string;

    /** Record data associated with the batch, if loaded. */
    Record: RecordData | null;

    /** Print item data associated with the batch, if loaded. */
    PrintItem: PrintItemData | null;

    /** Starting index of the batch. */
    Start: number;

    /** Ending index of the batch. */
    End: number;

    /** Length of the batch. */
    Length: number;
}

/**
 * Represents detailed record data within a job.
 */
interface RecordData {
    /** Unique identifier for the record. */
    RecordId: number;

    /** Data source identifier for the record. */
    DataSourceId: number;

    /** Current status of the record. */
    Status: string;

    /** Key-value pairs representing the data of the record. */
    Data: RecordDataKeyValuePair[];

    /** Key-value pairs representing metadata for the record. */
    MetaData: RecordDataKeyValuePair[];

    /** Validation status of the record. */
    ValidationStatus: string;

    /** Sequential record number. */
    RecordNumber: number;

    /** Creation date of the record in UTC. */
    CreatedOnUtc: Date;
}

/**
 * Represents a key-value pair in the context of record data.
 */
interface RecordDataKeyValuePair {
    /** Key or name of the data. */
    Key: string;

    /** Value associated with the key. */
    Value: string;

    /** Optional status for the key-value pair. */
    Status?: string;
}

/**
 * Represents detailed print item data within a job.
 */
interface PrintItemData {
    /** Unique identifier for the print item. */
    PrintItemId: number;

    /** Optional group identifier for the item. */
    ItemGroupId: number | null;

    /** Status history for the print item, including status changes and notes. */
    ItemGroupName: PrintItemStatusHistory[];
}

/**
 * Represents the status history for a print item.
 */
interface PrintItemStatusHistory {
    /** Note associated with the status. */
    Note: string;

    /** Status of the print item. */
    Status: string;

    /** Date when the status was set, in UTC. */
    CreatedOnUtc: Date;
}

/**
 * Main interface for the JobMetaDataInstanceObject.
 * Represents a job's metadata, including data records and print item details.
 */
interface JobMetaDataInstanceObject {
    /** Indicates whether the job metadata is loaded. */
    IsLoaded: boolean;

    /** Contains job-specific data, implementing IDataItemObject interface. */
    JobData: IDataItemObject;

    /** Contains detailed record data for Symphony. */
    SymphonyRecordData: object | null;

    /** Contains detailed print item data for Symphony. */
    SymphonyPrintItemData: object | null;

    /** ID of the print item associated with the job, if any. */
    PrintItemId: number | null;

    /**
     * Static method to create a JobMetaDataInstanceObject with a pattern.
     * @param ctx - The MegaScript context.
     * @param engine - The script engine instance.
     * @param pattern - The pattern string used for creating the object.
     * @param metaDataToLoad - Flags indicating what metadata to load.
     * @returns A new instance of JobMetaDataInstanceObject.
     */
    CreateWithPattern(ctx: MegaScriptContext, engine: ScriptEngine, pattern: string, metaDataToLoad: MetaDataToLoad): JobMetaDataInstanceObject;

    /**
     * Static method to create a JobMetaDataInstanceObject with a job ID.
     * @param ctx - The MegaScript context.
     * @param engine - The script engine instance.
     * @param jobId - The job ID used for creating the object.
     * @param metaDataToLoad - Flags indicating what metadata to load.
     * @returns A new instance of JobMetaDataInstanceObject.
     */
    CreateWithJobId(ctx: MegaScriptContext, engine: ScriptEngine, jobId: string, metaDataToLoad: MetaDataToLoad): JobMetaDataInstanceObject;

    /**
     * Static method to load batch information from a file.
     * @param megaCtx - The MegaScript context.
     * @param engine - The script engine instance.
     * @param file - The file instance object containing batch data.
     * @param loadRecordData - Boolean flag to determine if record data should be loaded.
     * @returns An array of BatchInformation objects.
     */
    LoadBatchInformation(megaCtx: MegaScriptContext, engine: ScriptEngine, file: FileInstanceObject, loadRecordData: boolean): Array<BatchInformation>;

    /**
     * Parses a pattern string to load the corresponding metadata.
     * @param pattern - The pattern string to parse.
     * @param metaDataToLoad - Flags indicating what metadata to load.
     * @returns True if the pattern was successfully parsed and data loaded, otherwise false.
     */
    ParsePattern(pattern: string, metaDataToLoad: MetaDataToLoad): boolean;

    /**
     * Changes the job status based on the new status provided.
     * @param newStatus - The new status to be set for the job.
     * @param info - Additional information or context for the status change.
     * @returns True if the status was successfully changed, otherwise false.
     */
    ChangeJobStatus(newStatus: string, info: any): boolean;

    /**
     * Loads job data for a specific job ID.
     * @param id - The job ID to load.
     * @param metaDataToLoad - Flags indicating what metadata to load.
     * @returns True if the job data was successfully loaded, otherwise false.
     */
    LoadJob(id: string, metaDataToLoad: MetaDataToLoad): boolean;

    /**
     * Loads detailed record data for a specific record and print item.
     * @param id - The record ID to load.
     * @param printItemId - The print item ID associated with the record.
     */
    LoadRecord(id: number, printItemId: number): void;
}

/**
 * Interface representing a data item object.
 * Assumes this interface is defined elsewhere in your codebase.
 */
interface IDataItemObject {
    /** Example properties, adjust as necessary */
    Id: number;
    Name: string;
    // Add more properties as required by your application
}

/**
 * Interface representing the MegaScript context.
 * This context is assumed to be defined elsewhere in your codebase.
 */
interface MegaScriptContext {
    // Define context properties and methods as required
}

/**
 * Interface representing the script engine.
 * This engine is assumed to be defined elsewhere in your codebase.
 */
interface ScriptEngine {
    // Define engine properties and methods as required
}

/**
 * Interface representing a file instance object.
 * This object is assumed to be defined elsewhere in your codebase.
 */
interface FileInstanceObject {
    /**
     * Opens the file as a PDF document.
     * @param options - Options for opening the PDF document.
     * @returns A PdfDocument instance if successful, otherwise null.
     */
    OpenAsPdfDocument(options: any): PdfDocument | null;
}

/**
 * Interface representing a PDF document.
 * Assumes this interface is defined elsewhere in your codebase.
 */
interface PdfDocument {
    /** Indicates if the PDF document is open. */
    IsOpen: boolean;

    /** Custom properties associated with the PDF document. */
    Custom: { Properties: Array<{ Name: string, Value: string }> };

    /** Closes the PDF document. */
    Close(): void;
}
