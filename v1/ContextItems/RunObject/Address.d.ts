import {MisConfigType} from "./Mis";

/**
 * Represents an address with its properties.
 */
export interface Address {
    /**
     * Optional ID for the address.
     */
    Id?: number;

    /**
     * First name of the recipient.
     */
    FirstName: string;

    /**
     * Last name of the recipient.
     */
    LastName: string;

    /**
     * Full name of the recipient.
     */
    FullName: string;

    /**
     * Company name associated with the address.
     */
    CompanyName: string;

    /**
     * First line of the address.
     */
    AddressLine1: string;

    /**
     * Second line of the address (if applicable).
     */
    AddressLine2: string;

    /**
     * Town or city of the address.
     */
    Town: string;

    /**
     * ZIP or postal code of the address.
     */
    ZipPostalCode: string;

    /**
     * State or province of the address (nullable).
     */
    StateProvince: string | null;

    /**
     * Country of the address.
     */
    Country: string;

    /**
     * Telephone number associated with the address.
     */
    Telephone: string;

    /**
     * Fax number associated with the address.
     */
    FaxNumber: string;

    /**
     * Email address associated with the address.
     */
    Email: string;

    /**
     * Array of misconfigurations related to the address.
     */
    MisConfigurations: MisConfigType[];
}
