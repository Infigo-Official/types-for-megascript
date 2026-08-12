/**
 * Supplier best-match and lookup operations. Reached via `Run.Suppliers`.
 */
interface SuppliersObject {
    /**
     * Finds the best-matching supplier for the supplied criteria.
     * @param request The best-match request. Construct one with `new BestMatchRequestObject()`.
     * @returns A model wrapping the best-match result, or errors on failure.
     */
    GetBestMatch: (request: BestMatchRequestObjectInstance) => MsBaseModel<BestMatchResultObject>;

    /**
     * Returns all active (readable) suppliers.
     * @returns A model wrapping the array of suppliers, or errors on failure.
     */
    GetAllActiveSuppliers: () => MsBaseModel<BestMatchedSupplierObject[]>;

    /**
     * Retrieves a supplier by its numeric id.
     * @param supplierId The supplier id.
     * @returns A model wrapping the supplier, or errors when not found.
     */
    GetById: (supplierId: number) => MsBaseModel<BestMatchedSupplierObject>;

    /**
     * Retrieves a supplier by its unique GUID.
     * @param supplierGuid The supplier GUID (string form).
     * @returns A model wrapping the supplier, or errors when not found / invalid GUID.
     */
    GetByGuid: (supplierGuid: string) => MsBaseModel<BestMatchedSupplierObject>;
}

/**
 * Criteria for {@link SuppliersObject.GetBestMatch}. Construct with `new BestMatchRequestObject()`.
 * Each entity reference may be a numeric id or an object exposing an `Id`.
 */
interface BestMatchRequestObjectInstance {
    /** The product to match against — a product id or a {@link Product}. */
    Product: number | Product;

    /** Product variant attributes XML; falls back to the order line's attributes when omitted. */
    AttributeXml: string;

    /** The customer to match against — a customer id or a {@link Customer}. */
    Customer: number | Customer;

    /**
     * Customer role identifiers to match against.
     * NOTE: not consumed by the current matcher (roles are read from the resolved customer);
     * kept for forward compatibility. Element type is a best-guess of role id numbers.
     */
    CustomerRoles: number[];

    /** The country to match against — a country id or an object with an `Id`. */
    Country: number | { Id: number };

    /** The shipping method to match against. */
    ShippingMethod: string;

    /** The state/province to match against — a state id or an object with an `Id`. */
    StateProvince: number | { Id: number };

    /** Checkout attributes XML; falls back to the customer's checkout attributes when omitted. */
    CheckoutAttributesXml: string;

    /** The product group to match against — a product group id or an object with an `Id`. */
    ProductGroup: number | { Id: number };

    /** The order product variant to match against — an OPV id or an object with an `Id`. */
    OrderProductVariant: number | { Id: number };

    /**
     * Optional asset details.
     * NOTE: not consumed by the current matcher; shape is unspecified, so typed as `object`.
     */
    AssetDetails: object;
}

/**
 * Constructor for {@link BestMatchRequestObjectInstance}. Available as the global `BestMatchRequestObject`.
 */
interface BestMatchRequestObjectConstructor {
    /** Creates a new, empty best-match request. */
    new (): BestMatchRequestObjectInstance;

    /** The prototype of {@link BestMatchRequestObjectInstance}. */
    readonly prototype: BestMatchRequestObjectInstance;
}

/**
 * Global constructor for supplier best-match requests.
 */
declare const BestMatchRequestObject: BestMatchRequestObjectConstructor;

/**
 * Result of {@link SuppliersObject.GetBestMatch}.
 */
interface BestMatchResultObject {
    /** Ids of all suppliers considered active/eligible for the match. */
    ActiveSupplierIds: number[];

    /** The chosen best-matched supplier; absent (undefined) when no match was found. */
    BestMatchedSupplier?: BestMatchedSupplierObject;
}

/**
 * A supplier as returned by the supplier operations.
 */
interface BestMatchedSupplierObject {
    /** The supplier id. */
    Id: number;

    /** The supplier name. */
    Name: string;

    /** The supplier unique id (GUID string form). */
    UniqueId: string;

    /** Whether the supplier is enabled. */
    Enabled: boolean;

    /**
     * Match details, only populated for best-match results (absent for plain lookups).
     */
    MatchDetails?: SupplierMatchDetails;

    /** The supplier's address id (0 when none). */
    AddressId: number;

    /** The supplier's address; absent when the supplier has no address. */
    Address?: SupplierAddress;

    /** Creation timestamp (string form). */
    CreatedOnUtc: string;

    /** Last-update timestamp (string form). */
    UpdatedOnUtc: string;

    /** The owning account id. */
    AccountId: number;
}

/**
 * Best-match scoring details for a supplier.
 */
interface SupplierMatchDetails {
    /** Number of criteria matched. */
    NumberOfMatches: number;

    /** The matched mapped detail (string form of the matched-mapping enum). */
    MatchedMappedDetail: string;

    /** Whether the supplier was selected at random among equal-scoring candidates. */
    IsRandomChoose: boolean;
}

/**
 * A supplier's address.
 */
interface SupplierAddress {
    /** The address id. */
    Id: number;

    /** First name. */
    FirstName: string;

    /** Last name. */
    LastName: string;

    /** Email address. */
    Email: string;

    /** Company name. */
    Company: string;

    /** Country id. */
    CountryId: number;

    /** State/province id (may be null). */
    StateProvinceId: number | null;

    /** City. */
    City: string;

    /** Address line 1. */
    Address1: string;

    /** Address line 2. */
    Address2: string;

    /** Zip / postal code. */
    ZipPostalCode: string;

    /** Phone number. */
    PhoneNumber: string;

    /** Fax number. */
    FaxNumber: string;

    /** Country display name; may be null. */
    CountryName: string | null;

    /** State/province display name; may be null. */
    StateProvinceName: string | null;

    /** Full formatted name. */
    FullName: string;
}
