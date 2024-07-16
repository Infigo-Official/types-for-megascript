import {FileInstance} from "./Files";

/**
 * Represents a response object with methods for various types of responses.
 */
export interface Response {
    /**
     * Sends plain text as the response.
     * @param text The text content to return.
     */
    ReturnText: (text: string) => void;

    /**
     * Sends HTML content as the response.
     * @param html The HTML content to return.
     */
    ReturnHtml: (html: string) => void;

    /**
     * Sends data content with optional status code and content type.
     * @param content The data content to return.
     * @param contentType The content type of the data.
     * @param statusCode Optional HTTP status code.
     */
    ReturnData: (content: string, contentType: string, statusCode?: number) => void;

    /**
     * Sends a file as the response.
     * @param fileInstance The file instance to return.
     * @param fileName Optional file name to use for download.
     * @param mimeType Optional MIME type of the file.
     */
    ReturnFile: (fileInstance: FileInstance, fileName?: string, mimeType?: string) => void;

    /**
     * Sends content as a response with specified content type and file name.
     * @param content The content to return.
     * @param contentType The content type of the content.
     * @param fileName The file name for the content.
     */
    ReturnContent: (content: string, contentType: string, fileName: string) => void;

    /**
     * Redirects to a new URL with a specified status code.
     * @param url The URL to redirect to.
     * @param statusCode The HTTP status code for the redirect (301 or 302).
     */
    Redirect: (url: string, statusCode: 301 | 302) => void;
}
