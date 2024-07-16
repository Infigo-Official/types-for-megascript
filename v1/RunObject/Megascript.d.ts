/**
 * Represents a Megascript instance with its properties.
 */
export interface MegascriptInstance {
    /**
     * The name of the Megascript instance.
     */
    Name: string;

    /**
     * Indicates if the Megascript runs in the background.
     */
    RunBackground: boolean;

    /**
     * Indicates if the Megascript runs on a cron interval.
     */
    IsCronInterval: boolean;

    /**
     * The cron expression for scheduling the Megascript.
     */
    CronExpression: string;

    /**
     * Indicates if the Megascript instance is enabled.
     */
    Enabled: boolean;

    /**
     * Indicates if the Megascript can be manually purged.
     */
    PurgeManually: boolean;

    /**
     * Indicates if the Megascript can be triggered via API.
     */
    TriggerViaApi: boolean;

    /**
     * The maximum allowed download size for the Megascript instance.
     */
    MaxDownloadSize: number;
}

/**
 * Represents a container object for a single Megascript instance.
 */
export interface MegascriptInstanceListObject {
    /**
     * The current Megascript instance.
     */
    Current: MegascriptInstance;
}
