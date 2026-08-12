/**
 * Represents the Configurations object within the MegaScript context.
 * Provides methods to get shipping method names and retrieve specific settings.
 */
interface ConfigurationsObject {
    /**
     * Retrieves all shipping method names available.
     * @returns An object instance containing all shipping method names.
     */
    GetAllShippingMethodNames(): MSShippingMethod;

    /**
     * Retrieves a specific setting value by group name and setting name.
     * @param groupName - The name of the group the setting belongs to.
     * @param settingName - The name of the setting to retrieve.
     * @returns The value of the specified setting, or null if not found.
     */
    GetSetting: (groupName: string, settingName: string) => string | null;
    
    /**
     * Retrieves the store's billing address.
     * @returns A SimpleObject containing the store billing address details, or null if not available.
     */
    GetStoreBillingAddress(): Address | null;

    /**
     * Retrieves the default country ISO code.
     * @returns The two-letter ISO code of the default country, or an empty string if not set.
     */
    GetDefaultCountryIsoCode(): string;

    /**
     * Retrieves the current language for the request's customer, falling back to the default store language.
     * @returns The current language, or null if no language could be resolved.
     */
    GetCurrentLanguage(): MSLanguage | null;

    /**
     * Retrieves all specification attributes together with their options.
     * @param languageId - Optional language identifier used to resolve localized names. When 0 (default), the non-localized names are returned.
     * @returns An array of specification attributes with their options.
     */
    GetSpecificationAttributes(languageId?: number): MSSpecificationAttribute[];
}

/**
 * Represents a language in the MegaScript context.
 */
interface MSLanguage {
    /** The identifier of the language. */
    Id: number;
    /** The two-letter ISO code of the language. */
    TwoLetterIsoCode: string;
    /** The name of the language. */
    Name: string;
}

/**
 * Represents a specification attribute together with its options.
 */
interface MSSpecificationAttribute {
    /** The identifier of the specification attribute. */
    Id: number;
    /** The name of the specification attribute. */
    Name: string;
    /** The localized name of the specification attribute (falls back to Name when no language is supplied). */
    LocalizedName: string;
    /** The available options for this specification attribute. */
    Options: MSSpecificationAttributeOption[];
}

/**
 * Represents a single option of a specification attribute.
 */
interface MSSpecificationAttributeOption {
    /** The identifier of the option. */
    Id: number;
    /** The name of the option. */
    Name: string;
    /** The localized name of the option (falls back to Name when no language is supplied). */
    LocalizedName: string;
}

/**
 * Represents a shipping method in the MegaScript context.
 */
interface MSShippingMethod {
    /** The name of the shipping method. */
    Name: string;
    /** The description of the shipping method. */
    Description: string;
    /** The display order of the shipping method. */
    DisplayOrder: number;
}