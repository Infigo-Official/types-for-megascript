/**
 * Provides functionality to manage country-related data in MegaScript.
 */
interface Countries {
    /**
     * Fetches all available countries from the system.
     * This includes country details such as name, ISO codes,
     * and billing/shipping permissions.
     * @returns An ApiCountry object representing country data.
     */
    GetCountries: () => ApiCountry;

    /**
     * Fetches details of a specific country by its name or ISO code.
     * @param countryNameOrIsoCode A string representing either the country name or ISO code.
     * @returns An ApiCountry object if found, otherwise null.
     */
    GetByIsoCode: (countryNameOrIsoCode: string) => ApiCountry | null;
}

/**
 * Represents a country with various attributes such as name, ISO codes,
 * billing and shipping permissions, and display order.
 */
interface ApiCountry {
    /** The unique identifier of the country. */
    readonly Id: number;

    /** The name of the country. */
    Name: string;

    /** Indicates if billing is allowed for this country. */
    AllowsBilling: boolean;

    /** Indicates if shipping is allowed for this country. */
    AllowsShipping: boolean;

    /** The two-letter ISO code of the country. */
    TwoLetterIsoCode: string;

    /** The three-letter ISO code of the country. */
    ThreeLetterIsoCode: string;

    /** The numeric ISO code of the country. */
    NumericIsoCode: number;

    /** Indicates if the country is published. */
    Published: boolean;

    /** The display order of the country. */
    DisplayOrder: number;
}