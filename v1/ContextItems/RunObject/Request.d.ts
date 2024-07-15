import {FileInstance} from "./FileInstance";
import {Customer} from "./Customer";

/**
 * Represents a request object.
 */
export interface Request {
    /**
     * The HTTP method of the request.
     */
    Method: string;

    /**
     * Form data associated with the request.
     */
    Form: Object;

    /**
     * Query parameters associated with the request.
     */
    Query: Object;

    /**
     * Headers of the request.
     */
    Headers: Object;

    /**
     * Body content of the request.
     */
    Body: string;

    /**
     * Files uploaded as part of the request.
     */
    Files: FileInstance[];

    /**
     * Client's IP address making the request.
     */
    ClientIpAddress: string;

    /**
     * Customer associated with the request.
     */
    Customer: Customer;

    /**
     * Customer impersonator if available.
     */
    Impersonator: Customer | null;
}
