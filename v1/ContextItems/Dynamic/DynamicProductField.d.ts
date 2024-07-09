/**
 * Represents a dynamic product field with methods to retrieve and update its text,
 * and to get detailed information about the field.
 */
interface DynamicProductField {
    /**
     * Retrieves the text content of the field.
     * @returns {string} The current text of the field.
     */
    GetFieldText(): string;

    /**
     * Updates the field's text content.
     * @param text {string} The new text to set for the field.
     * @returns {boolean} Returns true if the text was successfully updated, false otherwise.
     */
    SetFieldText(text: string): boolean;

    /**
     * Retrieves detailed information about the field.
     * @returns {DynamicFieldModel} An object containing detailed information about the field,
     * including its type, custom data, name, and current value.
     */
    GetFieldDetails(): DynamicFieldModel;
}

/**
 * Represents detailed information about a dynamic field.
 */
type DynamicFieldModel = {
    /**
     * The type of the field, defining its nature (e.g., text, image).
     * This can be one of the values defined in the DynamicFieldType enum.
     */
    Type: DynamicFieldType;

    /**
     * Custom data associated with the field.
     * This can be used to store additional metadata or settings specific to the field.
     */
    CustomData: ICustomDataModel;

    /**
     * The name of the field, used to identify it.
     */
    Name: string;

    /**
     * The current value or content of the field.
     */
    Value: string;
}

/**
 * Represents custom data that can be associated with a dynamic field.
 * This typically includes additional metadata about the field.
 */
interface ICustomDataModel {
    /**
     * A string indicating the type of custom data.
     * This helps in categorizing or interpreting the custom data.
     */
    Type: string;
}

/**
 * Enum representing different possible types of dynamic fields.
 * These types categorize the nature or purpose of the field.
 */
declare enum DynamicFieldType {
    /**
     * A field containing text.
     */
    TextField,

    /**
     * A field containing an image.
     */
    ImageField,

    /**
     * A field representing a path, possibly for navigation or file location.
     */
    PathField,

    /**
     * A custom field type, which may have unique properties and behaviors.
     */
    CustomField
}

/**
 * Enum representing specific field types, with 'Catfish.BarcodeField' as an example.
 * This could be expanded with more field types as needed.
 */
declare enum FieldTypes {
    /**
     * A field specifically for barcode data, represented by 'Catfish.BarcodeField'.
     */
    Barcode = 'Catfish.BarcodeField'
}
