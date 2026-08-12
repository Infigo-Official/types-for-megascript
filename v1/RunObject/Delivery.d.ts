/**
 * Delivery lead-time and available-delivery-date operations. Reached via `Run.Delivery`.
 * All dates in results are pre-formatted storefront date strings (not `Date` objects).
 */
interface DeliveryObject {
    /**
     * Calculates per-line delivery data (production days, dispatch/earliest-delivery dates,
     * available delivery time slots) for the given order lines.
     * @param request The delivery request identifying the order and its lines.
     * @returns One result entry per requested line. Returns an empty array when the request
     *          has no lines.
     */
    GetDeliveryData: (request: DeliveryRequest) => DeliveryLineResult[];

    /**
     * Returns the delivery days available in a given month for a single order line,
     * together with the currently selected delivery date (if any).
     * @param request The available-days request identifying the order line and target month.
     * @returns The available delivery days for the requested month.
     */
    GetAvailableDeliveryDates: (request: AvailableDeliveryDaysRequest) => DeliveryDatesResult;
}

/**
 * Request for {@link DeliveryObject.GetDeliveryData}.
 */
interface DeliveryRequest {
    /** The order whose lines are being queried. */
    OrderId: number;

    /** The order lines to calculate delivery data for. */
    Lines: DeliveryRequestLine[];
}

/**
 * A single line within a {@link DeliveryRequest}.
 */
interface DeliveryRequestLine {
    /**
     * OrderProductVariant id (preferred): identifies the exact order line, so lead time resolves
     * the right product variant + attributes even when several lines share one product variant.
     */
    OpvId: number;

    /** Product variant id — fallback used when {@link OpvId} is not supplied. */
    ProductVariantId: number;

    /** The quantity for the line. */
    Quantity: number;
}

/**
 * Per-line delivery data returned by {@link DeliveryObject.GetDeliveryData}.
 */
interface DeliveryLineResult {
    /** The product variant id the result applies to. */
    ProductVariantId: number;

    /** The quantity the result was calculated for. */
    Quantity: number;

    /** Number of production days for the line. */
    ProductionDays: number;

    /** The daily cut-off hour (0–23) after which production rolls to the next day. */
    DeadlineHour: number;

    /** Dispatch date as a pre-formatted storefront date string. */
    DispatchDate: string;

    /** Earliest possible delivery date as a pre-formatted storefront date string. */
    EarliestDeliveryDate: string;

    /** Shipping rate computation method system name (e.g. "Shipping.FixedRate"); empty when default. */
    ShippingMethod: string;

    /** Friendly shipping method option name (e.g. "First Class"); empty when default. */
    ShippingMethodOption: string;

    /** Selectable delivery time slots for the line. */
    AvailableDeliveryTimes: DeliveryTimeSlot[];
}

/**
 * A selectable delivery time slot.
 */
interface DeliveryTimeSlot {
    /** The slot value (machine-readable). */
    Value: string;

    /** The slot display text. */
    Text: string;
}

/**
 * Request for {@link DeliveryObject.GetAvailableDeliveryDates}.
 */
interface AvailableDeliveryDaysRequest {
    /** The order whose line is being queried. */
    OrderId: number;

    /**
     * OrderProductVariant id (preferred): identifies the exact order line, so lead time resolves
     * the right product variant + attributes even when several lines share one product variant.
     */
    OpvId: number;

    /** Product variant id — fallback used when {@link OpvId} is not supplied. */
    ProductVariantId: number;

    /** The quantity to calculate against. */
    Quantity: number;

    /** The target year. */
    Year: number;

    /** The target month (1–12). */
    Month: number;

    /** Optionally, a specific selected day of the month; `null` when none is selected. */
    SelectedDay?: number | null;
}

/**
 * Available-days result returned by {@link DeliveryObject.GetAvailableDeliveryDates}.
 */
interface DeliveryDatesResult {
    /** The year the result applies to. */
    Year: number;

    /** The month (1–12) the result applies to. */
    Month: number;

    /** The days of the month on which delivery is available. */
    AvailableDays: number[];

    /** The selected delivery date as a pre-formatted storefront date string; empty when none. */
    SelectedDeliveryDate: string;
}
