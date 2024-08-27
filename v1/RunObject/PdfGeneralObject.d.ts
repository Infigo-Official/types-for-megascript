/**
 * Represents the PdfGeneralObject within the MegaScript context.
 * Provides methods for PDF manipulation, such as deleting unused options, comparing documents, checking encryption, and combining files.
 */
interface PdfGeneralObject {
    /**
     * Deletes unused options from the given PDF file.
     * @param a - The file instance object representing the PDF file.
     * @param gap - The gap parameter used in the deletion process.
     * @returns A boolean indicating whether the operation was successful.
     */
    DeleteUnusedOptions(a: FileInstance, gap: number): boolean;

    /**
     * Compares two PDF documents to check if they are equal.
     * @param a - The file instance object representing the first PDF file.
     * @param b - The file instance object representing the second PDF file.
     * @param password - The password for the PDF files, if they are encrypted.
     * @returns A boolean indicating whether the documents are equal.
     */
    CompareDocuments(a: FileInstance, b: FileInstance, password: any): boolean;

    /**
     * Checks if a given PDF file is encrypted.
     * @param file - The file instance object representing the PDF file.
     * @returns A boolean indicating whether the file is encrypted.
     */
    IsEncrypted(file: FileInstance): boolean;

    /**
     * Combines multiple PDF files into a single PDF file.
     * @param target - The file instance object representing the target PDF file.
     * @param fileData - The data of the files to be combined.
     * @returns A boolean indicating whether the operation was successful.
     */
    Combine(target: FileInstance, fileData: any): boolean;
}
