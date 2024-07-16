
/**
 * Represents a misconfiguration type with specific details.
 */
 interface MisConfigType {
    /**
     * The unique identifier of the misconfiguration type.
     */
    Id: number;

    /**
     * The plugin system name associated with the misconfiguration.
     */
    PluginSystemName: string;

    /**
     * The external identifier or reference for the misconfiguration.
     */
    ExternalId: string;
}

/**
 * Represents a misconfiguration interface.
 */

declare const MisConfigType: MisConfigType;