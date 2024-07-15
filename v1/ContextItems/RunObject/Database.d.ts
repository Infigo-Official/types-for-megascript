/**
 * Represents a database with basic CRUD operations.
 */
export interface Database {
    /**
     * Name of the application using the database.
     */
    ApplicationName: string;

    /**
     * Retrieves keys from the database optionally filtered by prefix.
     * @param optionalPrefix Optional prefix to filter keys.
     * @returns Array of keys matching the optional prefix.
     */
    Keys: (optionalPrefix: string | null) => string[];

    /**
     * Adds or updates a value in the database.
     * @param key The key under which to store the value.
     * @param value The value to store.
     */
    AddOrUpdate: (key: string, value: any) => void;

    /**
     * Retrieves a value from the database based on the key.
     * @param key The key to retrieve the value for.
     * @returns The value associated with the key.
     */
    Get: (key: string) => any;

    /**
     * Deletes a value from the database based on the key.
     * @param key The key to delete the value for.
     */
    Delete: (key: string) => void;

    /**
     * Retrieves all database entries optionally filtered by prefix.
     * @param optionalPrefix Optional prefix to filter entries.
     * @returns Array of database entries matching the optional prefix.
     */
    GetData: (optionalPrefix: string | null) => DataBaseEntry[];
}

/**
 * Represents an entry in the database with a key-value pair.
 */
export interface DataBaseEntry {
    /**
     * The key of the database entry.
     */
    Key: string;

    /**
     * The value associated with the key in the database.
     */
    Value: string;
}
