import {KeyValue, PagedList} from "../Shared/Shared";

/**
 * Represents custom data category objects with methods for managing custom data categories.
 */
export interface CustomDataCategoryObjects {
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
    SearchPaged: (filter: ICustomDataSearchObject, callback: (data: PagedList<KeyValue<string, object>>) => void) => void;
}

/**
 * Represents search criteria for custom data items.
 */
export interface ICustomDataSearchObject {
    PageIndex: number;
    PerPage: number;
    ExactMatch: boolean;
    Key: string;
    CustomDataCategory: number | CustomDataCategoryObject;
    Query: string;
}

/**
 * Represents a custom data category object.
 */
export interface CustomDataCategoryObject {
    id: number;
    name: string;
    count: number;
    exampleData: { [key: string]: object };
}