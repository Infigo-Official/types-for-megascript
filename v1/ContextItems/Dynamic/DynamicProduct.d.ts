import {FileInstance} from "../RunObject/Files";
import {PdfInstance, Rectangle} from "../RunObject/PdfInstance";
import {DynamicFieldModel, DynamicProductField} from "./DynamicProductField";

/**
 * Represents a dynamic product interface with methods to interact with
 * and manipulate various aspects of a dynamic product.
 */
export interface DynamicProduct {
    /**
     * Retrieves the text content of a specified field.
     * @param fieldName - The name of the field from which to retrieve the text.
     * @returns {string} The current text content of the specified field.
     */
    GetFieldText(fieldName: string): string;

    /**
     * Sets the file content for a specified field, usually for image fields.
     * @param fieldName - The name of the field to set the file for.
     * @param fileObj - The file object to associate with the field.
     * @returns {boolean} Returns true if the file was successfully set, false otherwise.
     */
    SetFieldFile(fieldName: string, fileObj: FileInstance): boolean;

    /**
     * Updates the text content of a specified field.
     * @param fieldName - The name of the field to update.
     * @param text - The new text content to set for the field.
     * @returns {boolean} Returns true if the text was successfully updated, false otherwise.
     */
    SetFieldText(fieldName: string, text: string): boolean;

    /**
     * Prepares the appearance of the dynamic product, specifying width and height.
     * Useful for ensuring the product renders correctly in different contexts.
     * @param width - The desired width for the appearance preparation.
     * @param height - The desired height for the appearance preparation.
     * @returns {boolean} Returns true if the appearance was successfully prepared, false otherwise.
     */
    PrepareAppearanceWith(width: number, height: number): boolean;

    /**
     * Prepares the appearance of the dynamic product using default dimensions.
     * @returns {boolean} Returns true if the appearance was successfully prepared, false otherwise.
     */
    PrepareAppearance(): boolean;

    /**
     * Impresses the dynamic product onto a specified file.
     * This typically involves generating a file with the product's content.
     * @param fileInstance - The target file instance where the product will be impressed.
     * @returns {boolean} Returns true if the product was successfully impressed onto the file, false otherwise.
     */
    Impress(fileInstance: FileInstance): boolean;

    /**
     * Impresses content from the dynamic product onto a specified PDF page.
     * @param targetPage - The PDF page where the content will be impressed.
     * @param sourcePage - The index of the source page from the dynamic product.
     * @returns {boolean} Returns true if the content was successfully impressed onto the target page, false otherwise.
     */
    ImpressOn(targetPage: PdfInstance, sourcePage: number): boolean;

    /**
     * Gets the number of pages in the dynamic product.
     * This property is read-only.
     * @returns {number} The total number of pages in the product.
     */
    readonly NumPages: number;

    /**
     * Retrieves the size of a specified page by its index.
     * @param pageIndex - The index of the page to retrieve the size for.
     * @returns {IRectangle | null} An object representing the size of the page or null if the page index is invalid.
     */
    GetPageSize(pageIndex: number): Rectangle | null;

    /**
     * Retrieves the names of all fields in the dynamic product.
     * @returns {string[]} An array containing the names of all fields.
     */
    GetFieldNames(): string[];

    /**
     * Retrieves the IDs of all fields on a specified page.
     * @param pageIndex - The index of the page to get field IDs for.
     * @returns {string[]} An array containing the IDs of all fields on the specified page.
     */
    GetFieldIds(pageIndex: number): string[];

    /**
     * Retrieves a field by its ID.
     * @param fieldId - The ID of the field to retrieve.
     * @returns {DynamicProductField} The field object corresponding to the specified ID.
     */
    GetFieldById(fieldId: string): DynamicProductField;

    /**
     * Retrieves detailed information about a specified field by its name.
     * @param fieldName - The name of the field to get details for.
     * @returns {DynamicFieldModel} An object containing detailed information about the specified field.
     */
    GetFieldDetails(fieldName: string): DynamicFieldModel;

    /**
     * Indicates whether the dynamic product is currently loaded.
     * This property is read-only.
     * @returns {boolean} True if the product is loaded, false otherwise.
     */
    readonly Loaded: boolean;

    /**
     * Loads a dynamic product by its ID.
     * @param dpId - The ID of the dynamic product to load.
     * @returns {boolean} Returns true if the product was successfully loaded, false otherwise.
     */
    Load(dpId: number): boolean;

    /**
     * Loads a dynamic product from a job by the job's ID.
     * Typically used to load products associated with a specific order or job.
     * @param dopId - The ID of the dynamic order product to load.
     * @returns {boolean} Returns true if the product was successfully loaded from the job, false otherwise.
     */
    LoadFromJob(dopId: number): boolean;

    /**
     * Loads a dynamic product from a JSON string.
     * Useful for loading a product's state from a serialized format.
     * @param json - The JSON string representing the product to load.
     * @returns {boolean} Returns true if the product was successfully loaded from the JSON string, false otherwise.
     */
    LoadFromFile(json: string): boolean;
}
