/**
 * Cryptographic hashing helpers. Reached via `Run.Cryptography`.
 */
interface CryptographyObject {
    /**
     * Computes the SHA-256 hash of the input string.
     * @param inputString The string to hash.
     * @returns The SHA-256 hash of the input.
     */
    CalculateSha256: (inputString: string) => string;
}
