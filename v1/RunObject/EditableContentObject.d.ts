/**
 * Represents the editable content service within the MegaScript context.
 */
interface EditableContentObject {
    /**
     * Finds an editable content instance by its ID.
     * @param id - The ID of the editable content.
     * @returns The editable content instance if found, otherwise null.
     */
    FindById(id: number): EditableContentObjectInstance | null;

    /**
     * Finds an editable content instance by its system name.
     * @param systemName - The system name of the editable content.
     * @returns The editable content instance if found, otherwise null.
     */
    FindBySystemName(systemName: string): EditableContentObjectInstance | null;
}

/**
 * Represents an instance of editable content within the MegaScript context.
 */
interface EditableContentObjectInstance {
    /**
     * Gets the ID of the editable content.
     */
    readonly Id: number;

    /**
     * Gets the system name of the editable content.
     */
    readonly SystemName: string;

    /**
     * Gets the title of the editable content.
     */
    readonly Title: string;

    /**
     * Gets the body content of the editable content.
     */
    readonly Body: string;

    /**
     * Generates the HTML content with the provided tokens.
     * @param tokenObject - The object containing tokens for replacement.
     * @returns The HTML content with tokens replaced.
     */
    GetHtml: (tokenObject: object) => string;
}