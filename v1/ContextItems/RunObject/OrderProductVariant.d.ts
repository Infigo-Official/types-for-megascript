import {Product, ProductDeliveryType} from "./Product";
import {JobStatus} from "../../Common/JobStatus";

/**
 * Interface representing an order product variant object.
 * Provides properties and methods to manage details and actions related to an order product variant.
 */
export interface OrderProductVariant {
    /**
     * Job processing folder path.
     */
    JobProcessingFolderPath: string;

    /**
     * Gets or sets the ID of the order product variant.
     */
    OrderId: number;

    /**
     * Name of the product variant.
     */
    Name: string;

    /**
     * Stock keeping unit (SKU) of the product variant.
     */
    Sku: string;

    /**
     * Identifier of the order product variant.
     */
    Id: number;

    /**
     * Job ID associated with the order product variant.
     */
    JobId: string;

    /**
     * Type letter associated with the order product variant.
     */
    TypeLetter: string;

    /**
     * Type of the order product variant.
     */
    Type: string;

    /**
     * Product name associated with the order product variant.
     */
    ProductName: string;

    /**
     * Tags associated with the product variant.
     */
    ProductTags: string[];

    /**
     * Unit price excluding tax.
     */
    UnitPriceExclTax: number;

    /**
     * Unit price including tax.
     */
    UnitPriceInclTax: number;

    /**
     * Price excluding tax.
     */
    PriceExclTax: number;

    /**
     * Price including tax.
     */
    PriceInclTax: number;

    /**
     * Quantity of the order product variant.
     */
    Quantity: number;

    /**
     * Shipped quantity of the order product variant.
     */
    ShippedQuantity: number;

    /**
     * Summary of the attributes of the product variant.
     */
    AttributeSummary: string;

    /**
     * Attributes associated with the product variant.
     */
    Attributes: { [key: string]: string };

    /**
     * Weight of the product variant.
     */
    Weight: number;

    /**
     * Short description of the product variant.
     */
    ShortDescription: string;

    /**
     * Admin comment associated with the order product variant.
     */
    AdminComment: string;

    /**
     * Status of the order product.
     */
    OrderProductStatus: string;

    /**
     * Number of records associated with the order product variant.
     */
    NumberOfRecords: number;

    /**
     * Processing type of the order product variant.
     */
    ProcessingType: string;

    /**
     * Number of pages associated with the order product variant.
     */
    NumPages: number;

    /**
     * Purchase order number associated with the order product variant.
     */
    PONumber: string;

    /**
     * History of the order product variant.
     */
    History: any[];

    /**
     * Specification attributes associated with the product variant.
     */
    SpecificationAttributes: { [key: string]: string };

    /**
     * Product object associated with the order product variant.
     */
    Product: Product;

    /**
     * Height of the order product variant.
     */
    Height: number;

    /**
     * Width of the order product variant.
     */
    Width: number;

    /**
     * Length of the order product variant.
     */
    Length: number;

    /**
     * Indicates if the order product variant is cancelled.
     */
    IsCancelled: boolean;

    /**
     * Quote associated with the order product variant.
     */
    Quote: any;

    /**
     * Custom tag 1 associated with the order product variant.
     */
    CustomTag1: string;

    /**
     * Custom tag 2 associated with the order product variant.
     */
    CustomTag2: string;

    /**
     * Array of delivery types associated with the order product variant.
     */
    DeliveryType: ProductDeliveryType[];

    /**
     * Custom tag 3 associated with the order product variant.
     */
    CustomTag3: string;

    /**
     * Custom tag 4 associated with the order product variant.
     */
    CustomTag4: string;

    /**
     * Custom data 1 associated with the order product variant.
     */
    CustomData1: string;

    /**
     * Custom data 2 associated with the order product variant.
     */
    CustomData2: string;

    /**
     * Extra data associated with the order product variant.
     */
    ExtraData: { [key: string]: string };

    /**
     * Retrieves the output file associated with the order product variant.
     * @returns The output file instance.
     */
    GetOutputFile: () => FileInstanceObject;

    /**
     * Sets the output file for the order product variant.
     * @param file The file instance to set.
     * @returns The upload result as an object instance.
     */
    SetOutputFile: (file: FileInstanceObject) => OutputResult;

    /**
     * Loads metadata associated with the order product variant.
     * @param metaDataToLoad The metadata to load.
     * @returns The metadata instance object.
     */
    LoadMetaData: (metaDataToLoad?: number) => JobMetaDataInstanceObject;

    /**
     * Retrieves the preview file associated with the order product variant.
     * @param page The page number for preview.
     * @returns The preview file instance.
     */
    GetPreviewFile: (page?: number) => FileInstanceObject;

    /**
     * Retrieves the job ticket file associated with the order product variant.
     * @param keyValues The key values for retrieving the job ticket.
     * @returns The job ticket file instance.
     */
    GetJobTicket: (keyValues?: any) => FileInstanceObject;

    /**
     * Retrieves the packing slip file associated with the order product variant.
     * @param keyValues The key values for retrieving the packing slip.
     * @returns The packing slip file instance.
     */
    GetPackingSlip: (keyValues?: any) => FileInstanceObject;

    /**
     * Retrieves the invoice file associated with the order product variant.
     * @param keyValues The key values for retrieving the invoice.
     * @returns The invoice file instance.
     */
    GetInvoice: (keyValues?: any) => FileInstanceObject;

    /**
     * Creates a backup of the output associated with the order product variant.
     * @returns The backup file instance.
     */
    CreateBackup: () => FileInstanceObject;

    /**
     * Checks if a backup exists for the order product variant.
     * @returns True if a backup exists; otherwise, false.
     */
    HasBackup: () => boolean;

    /**
     * Removes the backup associated with the order product variant.
     */
    RemoveBackup: () => void;

    /**
     * Retrieves the backup file associated with the order product variant.
     * @returns The backup file instance.
     */
    GetBackup: () => FileInstanceObject;

    /**
     * Sets the status of the order product variant.
     * @param status The status to set.
     * @param description The description associated with the status.
     */
    SetStatus: (status: string, description: string) => void;

    /**
     * Sets a custom status for the order product variant.
     * @param status The custom status to set.
     * @param description The description associated with the custom status.
     */
    SetCustomStatus: (status: string, description: string) => void;

    /**
     * Sets a custom hidden status for the order product variant.
     * @param status The custom hidden status to set.
     * @param description The description associated with the custom hidden status.
     */
    SetCustomHiddenStatus: (status: string, description: string) => void;

    /**
     * Retrieves the latest status of the order product variant.
     * @returns The latest status object.
     */
    GetLatestStatus: () => JobStatus;

    /**
     * Retrieves the status history of the order product variant.
     * @returns Array of status objects representing the status history.
     */
    GetStatusHistory: () => Array<string>;

    /**
     * Removes a status from the order product variant.
     * @param statusObject The status object to remove.
     * @returns True if the status was removed successfully; otherwise, false.
     */
    Remove: (statusObject: JobStatus) => boolean;

    /**
     * Updates the custom data associated with the order product variant.
     * @param keyValues The key-value pairs of custom data to update.
     * @returns The result object of the update operation.
     */
    UpdateCustomData: (keyValues: any) => any; // todo: define the return type ResultObject

    /**
     * Clears the job folder associated with the order product variant.
     * @param deleteStatus The delete status indicating what to clear.
     */
    ClearJobFolder: (deleteStatus: number) => void;

    /**
     * Cancels the order product variant.
     * @returns True if the cancellation was successful; otherwise, false.
     */
    Cancel: () => boolean;

    /**
     * Sets the quantity of the order product variant.
     * @param quantity The quantity to set.
     * @returns True if the quantity was updated successfully; otherwise, false.
     */
    SetQuantity: (quantity: number) => boolean;

    /**
     * Sets or updates the extra data associated with the order product variant.
     * @param key The key of the extra data.
     * @param value The value of the extra data.
     */
    SetExtraData: (key: string, value: string) => void;

    /**
     * Releases the quote resources associated with the order product variant.
     */
    ReleaseQuoteResources: () => void;
}

/**
 * Represents the result of an upload operation.
 */
export interface OutputResult {
    /**
     * Indicates whether the upload was successful.
     */
    Success: boolean;

    /**
     * Message associated with the upload result.
     */
    Message: string;

    /**
     * URLs of thumbnails generated during the upload.
     */
    ThumbnailsUrl: string[];
}
