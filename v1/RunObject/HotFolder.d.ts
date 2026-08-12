/**
 * Represents a hot folder object interface with methods to manage hot folders.
 */
interface HotFolderObject {
    /**
     * Retrieves the hot folder by its identifier.
     *
     * @param id - The identifier of the hot folder.
     * @returns An object representing the hot folder directory if found, otherwise null.
     */
    GetHotFolderById: (id: number) => FileDirectory | null;

    /**
     * Retrieves all active (enabled and valid) hot folders.
     *
     * @returns An array of hot folder directories.
     */
    GetAllHotFolders: () => FileDirectory[];

    /**
     * Validates that every supplied hot folder exists and is enabled and valid.
     *
     * @param hotfolderIds - One or more hot folder identifiers to validate.
     * @returns `true` if all supplied hot folders are enabled and valid, otherwise `false`.
     */
    ValidateHotfolders: (...hotfolderIds: number[]) => boolean;
}