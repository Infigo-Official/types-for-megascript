/**
 * Interface representing the operations related to budgets within the MegaScript context.
 */
interface Budgets {
    /**
     * Retrieves the total available budget for a specific customer.
     * @param customerObj The customer object to retrieve the budget for.
     * @returns The available budget total as a `NumberInstance`.
     * @throws Exception if the customer is not found.
     */
    GetAvailableBudgetTotal: (customerObj: object) => number;

    /**
     * Retrieves the available budgets for a specific customer.
     * @param customerObj The customer object to retrieve budgets for.
     * @param validOnly Optional. Indicates whether to return only valid budgets. Defaults to `true`.
     * @returns An array of available budgets as `ArrayInstance`.
     * @throws Exception if the customer is not found.
     */
    GetAvailableBudgets: (customerObj: object, validOnly?: boolean) => Budget[];

    /**
     * Adds a new budget for a specific customer.
     * @param customerId The ID of the customer.
     * @param amount The amount to allocate to the budget.
     * @param expiresOnUtc Optional. The expiration date of the budget. Defaults to null.
     * @param sendEmail Optional. Indicates whether to send an email notification. Defaults to `false`.
     * @param associatedOpvId Optional. The associated Order Product Variant ID. Defaults to null.
     * @returns The newly created budget as a `BudgetObject`.
     * @throws Exception if the customer is not found or if the amount is invalid.
     */
    AddBudget: (
        customerId: number,
        amount: Number,
        expiresOnUtc?: object,
        sendEmail?: boolean,
        associatedOpvId?: object
    ) => Budget;

    /**
     * Clears a specific budget by ID.
     * @param budgetId The ID of the budget to clear.
     * @throws Exception if the budget is not found.
     */
    ClearBudget: (budgetId: number) => void;

    /**
     * Adds budgets in bulk for multiple customers.
     * @param customerIds An array of customer IDs.
     * @param amount The amount to allocate to each budget.
     * @param expiresOnUtc Optional. The expiration date of the budgets. Defaults to null.
     * @param sendEmail Optional. Indicates whether to send email notifications. Defaults to `false`.
     * @returns An array of budget IDs as `ArrayInstance`.
     * @throws Exception if the amount is invalid or if any customer ID is invalid.
     */
    BulkAddBudget: (
        customerIds: number[],
        amount: Number,
        expiresOnUtc?: object,
        sendEmail?: boolean
    ) => number[];
}

/**
 * Interface representing a budget object within the MegaScript context.
 */
interface Budget {
    /**
     * The identifier of the budget.
     */
    Id: number;

    /**
     * The identifier of the customer associated with the budget.
     */
    CustomerId: number;

    /**
     * The amount allocated to the budget.
     */
    Amount: number;

    /**
     * The type of the budget.
     */
    Type: number;

    /**
     * The date and time when the budget was created, in UTC.
     */
    CreatedOnUtc: object;

    /**
     * The expiration date and time of the budget, in UTC.
     */
    ExpiresOnUtc: object;

    /**
     * The ID of the Order Product Variant that the budget was purchased with, if applicable.
     */
    PurchasedWithOrderProductVariantId: number;

    /**
     * The usage history of the budget, represented as an array of `MsBudgetUsageHistory` objects.
     */
    UsageHistory: BudgetUsageHistory[];

    // Methods

    /**
     * Gets the remaining amount of the budget.
     * @returns The remaining amount as a `NumberInstance`.
     */
    GetRemainingAmount: () => number;

    /**
     * Checks if the budget is still valid.
     * @returns `true` if the budget is valid, otherwise `false`.
     */
    IsBudgetValid: () => boolean;

    /**
     * Uses the specified amount from the budget for an order.
     * @param amountInstance The amount to use from the budget.
     * @param orderObj The order object associated with the usage.
     * @param details Additional details about the usage.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    UseBudget: (amountInstance: number, orderObj: object, details: string) => boolean;

    /**
     * Clears the remaining amount of the budget.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    Clear: () => boolean;
}

/**
 * Interface representing the usage history of a budget within the MegaScript context.
 */
interface BudgetUsageHistory {
    /**
     * The identifier of the budget associated with this usage history.
     */
    BudgetId: number;

    /**
     * The identifier of the order associated with this usage, if applicable.
     */
    UsedWithOrderId?: number;

    /**
     * The amount used from the budget.
     */
    UsedValue: number;

    /**
     * The budget object associated with this usage history.
     */
    Budget: Budget;

    /**
     * Additional details about the budget usage.
     */
    Details: string;
}

