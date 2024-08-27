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
}