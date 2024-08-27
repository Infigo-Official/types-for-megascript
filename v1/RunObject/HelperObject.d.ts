/**
 * Interface representing a helper object with utility methods.
 */
interface HelperObject {
    /**
     * Validates if the provided email is in a correct format.
     * @param email The email address to validate.
     * @returns `true` if the email is valid, otherwise `false`.
     */
    IsValidEmail: (email: string) => boolean;

    /**
     * Encrypts the provided text.
     * @param text The text to encrypt.
     * @returns The encrypted text.
     */
    Encrypt: (text: string) => string;

    /**
     * Decrypts the provided text.
     * @param text The text to decrypt.
     * @returns The decrypted text.
     */
    Decrypt: (text: string) => string;
}
