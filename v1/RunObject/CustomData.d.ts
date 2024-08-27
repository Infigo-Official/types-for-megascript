/**
 * Represents custom data category objects with methods for managing custom data categories.
 */
interface CustomDataCategoryObjects {
    /**
     * Retrieves categories optionally filtered by name pattern.
     *
     * @param optionalNamePattern - Optional pattern to filter category names.
     * @param callback - Callback function that receives the data array.
     */
    GetCategories: (optionalNamePattern: string | null, callback: (data: []) => void) => void;

    /**
     * Retrieves custom data objects by category or ID, paginated.
     *
     * @param categoryOrId - Category ID or custom data category object.
     * @param page - Page number for pagination.
     * @param pageSize - Number of items per page.
     * @param callback - Callback function that receives the object data.
     */
    Get: (categoryOrId: number | CustomDataCategoryObject, page: number, pageSize: number, callback: (obj: { [key: string]: object | any }) => void) => void;

    /**
     * Saves a custom data item to a category.
     *
     * @param categoryOrId - Category ID or custom data category object.
     * @param itemKey - Key of the item to save.
     * @param obj - Data object to save.
     * @param callback - Callback function that receives a boolean indicating success.
     */
    Save: (categoryOrId: number | CustomDataCategoryObject, itemKey: string, obj: any, callback: (success: boolean) => void) => void;

    /**
     * Refreshes data in a custom data category.
     *
     * @param categoryOrId - Category ID or custom data category object.
     */
    Refresh: (categoryOrId: number | CustomDataCategoryObject) => void;

    /**
     * Deletes a custom data item from a category.
     *
     * @param categoryOrId - Category ID or custom data category object.
     * @param itemKey - Key of the item to delete.
     * @param callback - Callback function that receives a boolean indicating success.
     */
    Delete: (categoryOrId: number | CustomDataCategoryObject, itemKey: string, callback: (success: boolean) => void) => void;

    /**
     * Searches for custom data items within a category.
     *
     * @param categoryOrId - Category ID or custom data category object.
     * @param key - Key to search within items.
     * @param value - Value to search for.
     * @param page - Page number for pagination.
     * @param pageSize - Number of items per page.
     * @param exactMatch - Indicates whether to perform an exact match search.
     * @param callback - Callback function that receives the search results array.
     */
    Search: (categoryOrId: number | CustomDataCategoryObject, key: string, value: string, page: number, pageSize: number, exactMatch: boolean, callback: (data: []) => void) => void;

    /**
     * Searches for custom data items using pagination and filtering criteria.
     *
     * @param filter - Object containing search filters.
     * @param callback - Callback function that receives the paged list of key-value pairs.
     */
    SearchPaged: (filter: CustomDataSearchObject, callback: (data: PagedList<KeyValue<string, object>>) => void) => void;
}


/**
 * This is CustomDataCategory object.
 */
declare const CustomDataCategoryObjects: CustomDataCategoryObjects;

/**
 * Represents search criteria for custom data items.
 */
interface CustomDataSearchObject {
    /**
     * The index of the page to retrieve.
     */
    PageIndex: number;

    /**
     * The number of items per page to retrieve.
     */
    PerPage: number;

    /**
     * Indicates whether to perform an exact match search.
     */
    ExactMatch: boolean;

    /**
     * The key or field to search within custom data items.
     */
    Key: string;

    /**
     * Specifies the category of custom data to search within. Can be either a category ID (number) or a detailed CustomDataCategoryObject.
     */
    CustomDataCategory: number | CustomDataCategoryObject;

    /**
     * The query string to search for within the specified key or field.
     */
    Query: string;
}

/**
 * Constructor interface for creating instances of CustomDataSearchObject.
 */
interface CustomDataSearchObjectConstructor {
    /**
     * Creates a new instance of CustomDataSearchObject.
     * @returns A new instance of CustomDataSearchObject.
     */
    new (): CustomDataSearchObject;

    /**
     * The prototype of CustomDataSearchObject.
     */
    readonly prototype: CustomDataSearchObject;
}

/**
 * Constructor for creating instances of CustomDataSearchObject.
 */
declare const CustomDataSearchObject: CustomDataSearchObjectConstructor;


/**
 * Represents a custom data category object.
 */
interface CustomDataCategoryObject {
    /**
     * The unique identifier of the custom data category.
     */
    id: number;

    /**
     * The name or title of the custom data category.
     */
    name: string;

    /**
     * The count or number of items in this custom data category.
     */
    count: number;

    /**
     * Example data associated with this custom data category.
     * This is represented as a dictionary where keys are strings and values are objects.
     */
    exampleData: { [key: string]: object };
}