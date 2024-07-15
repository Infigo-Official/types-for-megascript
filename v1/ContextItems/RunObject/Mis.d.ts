
/**
 * Represents a misconfiguration type with specific details.
 */
export interface MisConfigType {
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