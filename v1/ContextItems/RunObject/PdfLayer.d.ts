/**
 * Interface representing the structure of a PDF layer.
 * This defines the properties that can be accessed or modified.
 */
interface PdfLayer {
    /**
     * The name of the PDF layer.
     * This is a read-only property.
     */
    Name: string;

    /**
     * Indicates whether the PDF layer is visible.
     * This property can be both read and modified.
     */
    Visible: boolean;
}
