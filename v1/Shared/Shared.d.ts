/**
 * Represents a paged list of data.
 */
interface PagedList<T> {
    /**
     * The array of data items in the current page.
     */
    Data: T[];

    /**
     * The index of the current page (starting from 0).
     */
    PageIndex: number;

    /**
     * The number of items per page.
     */
    PageSize: number;

    /**
     * The total number of items across all pages.
     */
    TotalCount: number;

    /**
     * The total number of pages.
     */
    TotalPages: number;

    /**
     * Indicates whether there is a previous page.
     */
    HasPreviousPage: boolean;

    /**
     * Indicates whether there is a next page.
     */
    HasNextPage: boolean;
}

/**
 * Represents a paged list of data.
 */

declare const PagedList: PagedList<any>;

/**
 * Represents a key-value pair.
 */
interface KeyValue<TKey, TValue> {
    /**
     * The key of the pair.
     */
    Key: TKey;

    /**
     * The value associated with the key.
     */
    Value: TValue;
}

/**
 * Represents an API error with details.
 */
interface ApiError {
    /**
     * The error message describing the issue.
     */
    ErrorMessage: string;

    /**
     * The location or context where the error occurred.
     */
    Location: string;

    /**
     * Indicates whether the error is due to a bad request.
     */
    IsBadRequest: boolean;
}

/**
 * Represents a result object from an operation.
 */
interface Result {
    /**
     * The identifier associated with the result.
     */
    Id: number;

    /**
     * Indicates whether the operation was successful.
     */
    Success: boolean;

    /**
     * Array of errors or error messages associated with the operation.
     */
    Errors: ApiError[] | string[];
}

/**
 * Represents a basic model with success status and error messages.
 */
interface MsModel {
    /** Indicates whether the operation was successful. */
    IsSuccess: boolean;

    /** List of error messages if the operation was not successful. */
    Errors: string[];
}

/**
 * Represents a base model extending from `IMsModel` with additional data of type `T`.
 * @typeparam T The type of data associated with the base model.
 */
interface MsBaseModel<T> extends MsModel {
    /** The data associated with the base model. */
    Data: T;
}

