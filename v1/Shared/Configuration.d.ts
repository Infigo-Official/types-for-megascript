/**
 * Interface representing the configuration object.
 */
interface Configuration {
    /**
     * Retrieves the script configuration.
     * @returns The script configuration object.
     */
    ScriptConfig: () => any;

    /**
     * Retrieves the parameters configuration.
     * @returns `null` as parameters are not yet supported.
     */
    Parameters: () => any | null;
}

/**
 * Represents a Configuration interface.
 */

declare const Configuration: Configuration;