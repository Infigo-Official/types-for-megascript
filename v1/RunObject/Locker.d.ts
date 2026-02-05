/**
 * Represents the parameters for executing a locked action.
 */
interface LockerParameters {
    /**
     * The timeout in seconds for retrying the lock.
     */
    RetryTimeoutInSeconds: number;
}

/**
 * Represents a Locker object with methods for executing actions within a lock.
 */
interface LockerObject {
    /**
     * Executes a specified action within a lock context.
     *
     * @param lockKey - The unique key representing the lock.
     * @param action - The JavaScript function to execute within the lock.
     * @param parameters - Additional parameters for the lock, such as retry timeout.
     */
    DoLocked: (lockKey: string, action: () => void, parameters: LockerParameters) => void;
}

