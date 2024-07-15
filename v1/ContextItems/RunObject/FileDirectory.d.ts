import {FileInstance} from "./Files";

/**
 * Interface representing a directory in a file system.
 * Provides methods and properties to interact with the files and subdirectories.
 */
interface FileDirectory {
    /**
     * The unique identifier for the directory.
     */
    Id: number;

    /**
     * The name of the directory.
     */
    Name: string;

    /**
     * The full path to the directory in the file system.
     */
    BasePath: string;

    /**
     * Indicates whether sibling files can be created within this directory.
     */
    CanCreateSiblingFiles: boolean;

    /**
     * Lists files in the directory that match the provided pattern.
     *
     * @param pattern - Optional. A search pattern to match file names against (e.g., "*.txt").
     *                  If no pattern is provided, all files in the directory will be listed.
     * @returns An array of IFileInstance objects representing the matching files.
     */
    ListFiles: (pattern?: string | null) => FileInstance[];

    /**
     * Lists subdirectories in the directory that match the provided pattern.
     *
     * @param pattern - Optional. A search pattern to match directory names against (e.g., "sub*").
     *                  If no pattern is provided, all subdirectories in the directory will be listed.
     * @returns An array of IFileDirectory objects representing the matching subdirectories.
     */
    ListDirectories: (pattern?: string | null) => FileDirectory[];
}
