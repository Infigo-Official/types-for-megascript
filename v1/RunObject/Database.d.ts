/**
 * Represents a database with basic CRUD operations.
 */
interface Database {
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

    /**
     * Retrieves a value by key and deletes it from the database in a single operation.
     * @param key The key to retrieve and then delete.
     * @returns The value that was stored under the key, or null if the key did not exist.
     */
    GetAndDelete: (key: string) => any;

    /**
     * Creates a fluent search builder for querying database entries with
     * JSON-property filtering, sorting and pagination.
     * @returns A DatabaseSearchObject for building and executing the query.
     */
    Search: () => DatabaseSearchObject;
}

/**
 * Represents an entry in the database with a key-value pair.
 */
interface DataBaseEntry {
    /**
     * The key of the database entry.
     */
    Key: string;

    /**
     * The value associated with the key in the database.
     */
    Value: string;
}

/**
 * Fluent search builder for querying database entries with JSON-property
 * filtering, sorting and pagination. All filter/sort/paging methods return the
 * same builder so calls can be chained; call GetAll to execute the query.
 */
interface DatabaseSearchObject {
    /**
     * Filters entries whose key starts with the given prefix (e.g. "cart.123.").
     * @param prefix The key prefix to filter by.
     * @returns The updated search builder.
     */
    WithKeyPrefix: (prefix: string) => DatabaseSearchObject;

    /**
     * Filters entries where the JSON property at the given path equals the value.
     * @param jsonPath The JSON path to inspect (e.g. "$.status").
     * @param value The value to match.
     * @returns The updated search builder.
     */
    WhereEquals: (jsonPath: string, value: string) => DatabaseSearchObject;

    /**
     * Filters entries where the JSON property at the given path does not equal the value.
     * @param jsonPath The JSON path to inspect (e.g. "$.status").
     * @param value The value to compare against.
     * @returns The updated search builder.
     */
    WhereNotEquals: (jsonPath: string, value: string) => DatabaseSearchObject;

    /**
     * Filters entries where the JSON property at the given path contains the value.
     * @param jsonPath The JSON path to inspect.
     * @param value The substring to look for.
     * @returns The updated search builder.
     */
    WhereContains: (jsonPath: string, value: string) => DatabaseSearchObject;

    /**
     * Filters entries where the JSON property at the given path starts with the value.
     * @param jsonPath The JSON path to inspect.
     * @param value The prefix to look for.
     * @returns The updated search builder.
     */
    WhereStartsWith: (jsonPath: string, value: string) => DatabaseSearchObject;

    /**
     * Filters entries where the JSON property at the given path ends with the value.
     * @param jsonPath The JSON path to inspect.
     * @param value The suffix to look for.
     * @returns The updated search builder.
     */
    WhereEndsWith: (jsonPath: string, value: string) => DatabaseSearchObject;

    /**
     * Filters entries where the JSON property at the given path is greater than the value.
     * @param jsonPath The JSON path to inspect.
     * @param value The value to compare against.
     * @returns The updated search builder.
     */
    WhereGreaterThan: (jsonPath: string, value: string) => DatabaseSearchObject;

    /**
     * Filters entries where the JSON property at the given path is greater than or equal to the value.
     * @param jsonPath The JSON path to inspect.
     * @param value The value to compare against.
     * @returns The updated search builder.
     */
    WhereGreaterThanOrEqual: (jsonPath: string, value: string) => DatabaseSearchObject;

    /**
     * Filters entries where the JSON property at the given path is less than the value.
     * @param jsonPath The JSON path to inspect.
     * @param value The value to compare against.
     * @returns The updated search builder.
     */
    WhereLessThan: (jsonPath: string, value: string) => DatabaseSearchObject;

    /**
     * Filters entries where the JSON property at the given path is less than or equal to the value.
     * @param jsonPath The JSON path to inspect.
     * @param value The value to compare against.
     * @returns The updated search builder.
     */
    WhereLessThanOrEqual: (jsonPath: string, value: string) => DatabaseSearchObject;

    /**
     * Generic filter using an explicit filter-type code.
     * @param jsonPath The JSON path to inspect.
     * @param value The value to compare against.
     * @param filterType The filter type: 0=Equals, 1=Contains, 2=StartsWith, 3=EndsWith,
     * 4=NotEquals, 5=GreaterThan, 6=GreaterThanOrEqual, 7=LessThan, 8=LessThanOrEqual.
     * @returns The updated search builder.
     */
    Where: (jsonPath: string, value: string, filterType: number) => DatabaseSearchObject;

    /**
     * Sorts results ascending by the JSON property at the given path.
     * @param jsonPath The JSON path to sort by.
     * @returns The updated search builder.
     */
    OrderBy: (jsonPath: string) => DatabaseSearchObject;

    /**
     * Sorts results descending by the JSON property at the given path.
     * @param jsonPath The JSON path to sort by.
     * @returns The updated search builder.
     */
    OrderByDescending: (jsonPath: string) => DatabaseSearchObject;

    /**
     * Sets the zero-based page index for the results.
     * @param pageIndex The page index (starting from 0).
     * @returns The updated search builder.
     */
    SetPageIndex: (pageIndex: number) => DatabaseSearchObject;

    /**
     * Sets the page size for the results.
     * @param pageSize The number of entries per page.
     * @returns The updated search builder.
     */
    SetPageSize: (pageSize: number) => DatabaseSearchObject;

    /**
     * Executes the search and returns the matching entries as a paged list.
     * @returns A paged list of database entries matching the search criteria.
     */
    GetAll: () => PagedList<DataBaseEntry>;
}
