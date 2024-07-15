import {PdfInstance} from "./PdfInstance";
import {FileDirectory} from "./FileDirectory";

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
