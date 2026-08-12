/**
 * Transaction-id based payment operations. Reached via `Run.Payment`.
 * Order-free; gated by the `payment.transactionfacade.enabled` setting (default off).
 */
interface PaymentObject {
    /**
     * Creates a payment transaction, optionally tied to an order (split-pay).
     * Meaningful result fields: `Success`, `Message`, `TransactionId` (and `Id`).
     * @param amount The transaction amount.
     * @param currencyCode The ISO currency code.
     * @param customerId The customer id.
     * @param paymentMethodSystemName The payment method system name.
     * @param orderId Optional order id to associate (split-pay); defaults to 0 (none).
     * @param externalIdentifier Optional external identifier for the transaction.
     * @returns The payment result.
     */
    CreateTransaction: (
        amount: number,
        currencyCode: string,
        customerId: number,
        paymentMethodSystemName: string,
        orderId?: number,
        externalIdentifier?: string
    ) => PaymentResult;

    /**
     * Prepares authorization for a transaction.
     * Meaningful result fields: `Success`, `Message`, `IframeUrl`, `FormToken`, `RenderMode`.
     * @param transactionId The transaction id to authorize.
     * @param returnUrl Optional same-origin URL to return the customer to after payment.
     * @returns The payment result.
     */
    Authorize: (transactionId: string, returnUrl?: string) => PaymentResult;

    /**
     * Returns all transactions for an order (for split-pay part tracking). When the request has a
     * resolvable customer, only that customer's own transactions are returned (IDOR guard).
     * @param orderId The order id.
     * @returns The order's transactions.
     */
    GetTransactionsByOrder: (orderId: number) => PaymentTransactionInfo[];

    /**
     * Captures the full transaction amount.
     * Meaningful result fields: `Success`, `Message`, `CaptureTransactionId`.
     * @param transactionId The transaction id to capture.
     * @returns The payment result.
     */
    Capture: (transactionId: string) => PaymentResult;

    /**
     * Captures a partial amount of the transaction.
     * Meaningful result fields: `Success`, `Message`, `CaptureTransactionId`.
     * @param transactionId The transaction id to capture.
     * @param amount The partial amount to capture.
     * @returns The payment result.
     */
    CapturePartial: (transactionId: string, amount: number) => PaymentResult;
}

/**
 * Result of a payment operation. All fields are always present; which are meaningful depends on
 * the operation (see each method's documentation).
 */
interface PaymentResult {
    /** Whether the operation succeeded. */
    Success: boolean;

    /** Human-readable message (error detail on failure). */
    Message: string;

    /** PaymentMethodTransaction database primary key of the created transaction (0 when N/A). */
    Id: number;

    /** The transaction id. */
    TransactionId: string;

    /** URL to present for authorization (redirect/popup/iframe target). */
    IframeUrl: string;

    /** Form token for the payment form, when applicable. */
    FormToken: string;

    /** How to present {@link IframeUrl}: "redirect" | "popup" | "iframe". */
    RenderMode: string;

    /** The capture transaction id, populated by capture operations. */
    CaptureTransactionId: string;
}

/**
 * One of an order's payment transactions, as returned by {@link PaymentObject.GetTransactionsByOrder}.
 */
interface PaymentTransactionInfo {
    /** PaymentMethodTransaction database primary key. */
    Id: number;

    /** The transaction id. */
    TransactionId: string;

    /** The transaction amount. */
    Amount: number;

    /** The ISO currency code. */
    CurrencyCode: string;

    /** The transaction status code; `null` when unknown. */
    Status: number | null;

    /** The associated order id; `null` when not tied to an order. */
    OrderId: number | null;

    /** The external identifier, when set. */
    ExternalIdentifier: string;

    /** The payment method system name. */
    PaymentMethodSystemName: string;
}
