/**
 * Represents a Locker object with methods for executing actions within a lock.
 */
interface LockerObject {
    /**
     * Executes a specified action within a lock context.
     *
     * @param lockKey - The unique key representing the lock.
     * @param action - The JavaScript function to execute within the lock.
     * @param retryTimeoutInSeconds - The timeout in seconds for retrying the lock.
     */
    DoLocked: (lockKey: string, action: () => void, retryTimeoutInSeconds: number) => void;
}
