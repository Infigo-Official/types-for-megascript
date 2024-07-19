/**
 * Represents a job status object used in MegaScript.
 */
interface JobStatus{
    /**
     * Gets the ID of the print order history.
     */
    readonly Id: number;

    /**
     * Gets information associated with the job status.
     */
    readonly Info: string;

    /**
     * Gets the status type as a string.
     */
    readonly Status: string;

    /**
     * Gets the custom status information.
     */
    readonly CustomStatus: string | null;

    /**
     * Sets information for the job status.
     * @param info The information to set.
     * Returns true if the operation was successful, false otherwise.
     */
    SetInfo: (info: string) => boolean;
}

/**
 * Represents a job object used in MegaScript.
 */

declare const JobStatus: JobStatus;