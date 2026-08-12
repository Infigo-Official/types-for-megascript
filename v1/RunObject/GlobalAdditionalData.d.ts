/**
 * Access to global additional-data files (storefront-level and platform-level). Reached via
 * `Run.GlobalAdditionalData`.
 */
interface GlobalAdditionalDataObject {
    /**
     * Retrieves a file from the current storefront's global additional-data folder.
     * @param fileName The file name (relative to the global data folder).
     * @returns The file, or `null` when the folder or file does not exist.
     */
    GetFile: (fileName: string) => FileInstance | null;

    /**
     * Retrieves a file from the platform-level (admin account) global additional-data folder.
     * @param fileName The file name (relative to the platform global data folder).
     * @returns The file, or `null` when the folder or file does not exist.
     */
    GetPlatformFile: (fileName: string) => FileInstance | null;
}
