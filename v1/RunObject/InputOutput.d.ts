/**
 * Input/output parameter store for a MegaScript execution. Reached via `Run.Input` (parameters
 * passed in) and `Run.Output` (parameters produced by this execution). The same shape backs both.
 */
interface InputOutputParameterObject {
    /**
     * Gets a string data value by key.
     * @param key The data key.
     * @returns The stored value, or `null` when the key is not present.
     */
    GetData: (key: string) => string | null;

    /**
     * Sets a string data value.
     * @param key The data key.
     * @param value The value to store.
     * @returns The value that was stored.
     */
    SetData: (key: string, value: string) => string;

    /** The number of data items currently stored. */
    readonly NumDataItems: number;

    /** The keys of all stored data items. */
    readonly DataItemKeys: string[];

    /** The number of files currently stored. */
    readonly NumFiles: number;

    /** The keys (names) of all stored files. */
    readonly FileNames: string[];

    /**
     * Gets a stored file by key.
     * @param key The file key.
     * @returns The file, or `null` when the key is absent or the file no longer exists on disk.
     */
    GetFile: (key: string) => FileInstance | null;

    /**
     * Stores a file under the given key (the file is copied to a temporary location).
     * @param key The file key.
     * @param file The file to store.
     */
    SetFile: (key: string, file: FileInstance) => void;
}
