/**
 * Represents a saved quote object, including properties and methods for managing saved quotes.
 */
interface SavedQuote {
    /**
     * The unique identifier of the saved quote.
     */
    Id: number;

    /**
     * The name of the saved quote.
     */
    Name: string;

    /**
     * The ID of the customer associated with the saved quote.
     */
    CustomerId: number;

    /**
     * The ID of the customer who created the saved quote.
     */
    CreatedByCustomerId: number;

    /**
     * A custom reference string for the saved quote.
     */
    CustomReference: string;

    /**
     * The ID of the product associated with the saved quote.
     */
    ProductId: number;

    /**
     * The attributes associated with the saved quote.
     */
    Attributes: { [key: string]: any };

    /**
     * A custom tag for categorizing the saved quote.
     */
    CustomTag: string;

    /**
     * The quantity of items in the saved quote.
     */
    Quantity: number;

    /**
     * The price of the saved quote.
     */
    Price: number;

    /**
     * The calculated job price of the saved quote.
     */
    JobPrice: number;

    /**
     * Determines whether the saved quote is hidden from the customer.
     */
    HideFromCustomer: boolean;

    /**
     * The parent quote ID for hierarchical relationships.
     */
    ParentQuoteId: number;

    /**
     * The status of the saved quote.
     */
    Status: number;

    /**
     * Informational text or notes related to the saved quote.
     */
    InfoText: string;

    /**
     * The supplier ID associated with the saved quote.
     */
    SupplierId: number;

    /**
     * The lifespan of the saved quote in days.
     */
    LifeSpanDays: number;

    /**
     * The type of usage for the saved quote.
     */
    UsageType: number;

    /**
     * The UTC date and time when the saved quote was created.
     */
    CreatedOnUtc: Date;

    /**
     * The maximum number of usages allowed for the saved quote.
     */
    MaxUsageCount: number;

    /**
     * The markup type applied to the saved quote.
     */
    MarkupType: number;

    /**
     * The markup amount applied to the saved quote.
     */
    MarkupAmount: number;

    /**
     * A collection of child quotes associated with the saved quote.
     */
    ChildQuotes: SavedQuote[];

    /**
     * Metadata or additional data associated with the saved quote.
     */
    QuoteMetaData: { [key: string]: any };

    /**
     * The quote type identifier.
     */
    QuoteType: number;

    /**
     * The UTC date and time when the saved quote was last updated.
     */
    UpdatedOnUtc: Date;

    /**
     * Sets extra data for the saved quote.
     * @param key - The key for the extra data.
     * @param value - The value for the extra data.
     */
    SetExtraData(key: string, value: string): void;

    /**
     * Retrieves extra data for the saved quote by key.
     * @param key - The key for the extra data.
     * @returns The value of the extra data, or `null` if not found.
     */
    GetExtraData(key: string): { [key: string]: any };
}

/**
 * Provides methods to interact with saved quotes, including finding, searching, creating, and updating quotes.
 */
interface SavedQuotes {
    /**
     * Finds a saved quote by its unique identifier.
     * @param id - The unique identifier of the saved quote.
     * @returns The saved quote instance or `null` if not found.
     */
    FindById(id: number): SavedQuote | null;

    /**
     * Initiates a search for saved quotes.
     * @returns An object that allows searching for saved quotes.
     */
    StartSearch(): SavedQuoteSearch;

    /**
     * Creates a new saved quote based on the provided data.
     * @param quote - The data object containing details for the new saved quote.
     * @returns A result object containing the outcome of the creation process.
     */
    Create(quote: SavedQuote): ResultObject;

    /**
     * Updates an existing saved quote with the provided data.
     * @param quote - The data object containing the updated details.
     * @returns A result object containing the outcome of the update process.
     */
    Update(quote: SavedQuote): ResultObject;

    /**
     * Retrieves the actual price for a saved quote.
     * @param quote - The saved quote instance.
     * @returns The calculated price of the saved quote.
     */
    GetTheActualPrice(quote: SavedQuote): number;

    /**
     * Builds a human-readable string for validation errors.
     * @param validationErrors - The validation errors object.
     * @returns A string representing the formatted validation errors.
     */
    BuildValidationErrors(validationErrors: any): string;
}

/**
 * Provides methods for searching and filtering saved quotes.
 */
/**
 * Represents a search object for filtering and retrieving saved quotes.
 */
interface SavedQuoteSearch {
    /**
     * Sets the page index for paginated results.
     * @param pageIndex - The page index to set.
     * @returns The updated search instance.
     */
    SetPageIndex(pageIndex: number): SavedQuoteSearch;

    /**
     * Sets the page size for paginated results.
     * @param pageSize - The number of results per page.
     * @returns The updated search instance.
     */
    SetPageSize(pageSize: number): SavedQuoteSearch;

    /**
     * Sets the sorting direction for the search results.
     * @param direction - The sorting direction (0 for Ascending, 1 for Descending).
     * @returns The updated search instance.
     */
    OrderDirection(direction: number): SavedQuoteSearch;

    /**
     * Sets the column by which the results are ordered.
     * @param orderBy - The column to sort by, represented by an enumeration.
     * @returns The updated search instance.
     */
    OrderByColumn(orderBy: number): SavedQuoteSearch;

    /**
     * Filters results to include only quotes with the specified parent quote ID.
     * @param parentQuoteId - The parent quote ID to filter by.
     * @returns The updated search instance.
     */
    WithParentQuoteId(parentQuoteId: number): SavedQuoteSearch;

    /**
     * Filters results to include only quotes for a specific customer.
     * @param customerId - The customer ID to filter by.
     * @returns The updated search instance.
     */
    ForCustomer(customerId: number): SavedQuoteSearch;

    /**
     * Filters results to include quotes created by a specific customer.
     * @param customerId - The ID of the customer who created the quotes.
     * @returns The updated search instance.
     */
    CreatedByCustomer(customerId: number | undefined): SavedQuoteSearch;

    /**
     * Filters results to include only parent quotes.
     * @returns The updated search instance.
     */
    OnlyParents(): SavedQuoteSearch;

    /**
     * Filters results based on a search term.
     * @param searchTerm - The term to search for in quotes.
     * @returns The updated search instance.
     */
    SearchTerm(searchTerm: string): SavedQuoteSearch;

    /**
     * Filters results to include quotes with a specific custom tag.
     * @param customTag - The custom tag to filter by.
     * @returns The updated search instance.
     */
    InCustomTag(customTag: string): SavedQuoteSearch;

    /**
     * Filters results to include quotes with a specific status ID.
     * @param statusId - The status ID to filter by.
     * @returns The updated search instance.
     * @throws An error if the status ID is invalid.
     */
    InStatus(statusId: number | undefined): SavedQuoteSearch;

    /**
     * Retrieves all saved quotes matching the current search criteria.
     * @returns A paginated list of saved quotes.
     */
    GetAll(): PagedList<SavedQuote>;
}

/**
 * Represents the status of a quote.
 */
declare enum QuoteStatus {
    /** The quote is active. */
    Active = 0,

    /** The quote is inactive. */
    Inactive = 10,

    /** The quote has been completed. */
    Completed = 20,

    /** The quote has expired. */
    Expired = 30,

    /** The quote has been archived. */
    Archived = 40,

    /** The quote has been deleted. */
    Deleted = 60
}

/**
 * Represents the sorting options for saved quotes.
 */
declare enum SavedQuoteOrder {
    /** Sort by ID. */
    Id = 1,

    /** Sort by custom reference. */
    CustomReference = 2,

    /** Sort by created date. */
    CreatedDate = 3,

    /** Sort by status. */
    Status = 4,

    /** Sort by amount. */
    Amount = 5,

    /** Sort by customer ID. */
    CustomerId = 6,

    /** Sort by name. */
    Name = 7
}

