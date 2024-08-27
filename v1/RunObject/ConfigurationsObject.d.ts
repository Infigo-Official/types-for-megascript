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