/**
 * Represents a PDF document with various properties and methods for PDF operations.
 */
import {FileInstance} from "./Files";

export interface PdfInstance {
    /**
     * Opens the PDF file with an optional password.
     * @param file The path to the PDF file.
     * @param password Optional password to decrypt the PDF file.
     * @returns True if the file is opened successfully, false otherwise.
     */
    Open: (file: string, password?: string) => boolean;

    /**
     * Draws a dynamic template on the specified start page.
     * @param templateXml The XML string representing the dynamic template.
     * @param startPage The page number to start drawing the template on.
     * @returns True if the drawing was successful, false otherwise.
     */
    DrawDynamicTemplate: (templateXml: string, startPage: number) => boolean;

    /**
     * Gets the number of pages in the PDF document.
     * @returns The number of pages in the document.
     */
    GetPageCount: () => number;

    /**
     * Inserts a new page at the specified index.
     * @param index The index at which to insert the new page.
     * @returns A PdfPage object representing the new page.
     */
    InsertPage: (index: number) => PdfPage;

    /**
     * Adds a new page to the end of the PDF document.
     * @returns A PdfPage object representing the new page.
     */
    AddPage: () => PdfPage;

    /**
     * Deletes the page at the specified index.
     * @param index The index of the page to delete.
     * @returns True if the page was deleted successfully, false otherwise.
     */
    DeletePage: (index: number) => boolean;

    /**
     * Deletes a range of pages starting from the specified index.
     * @param index The starting index of the pages to delete.
     * @param count The number of pages to delete.
     * @returns True if the pages were deleted successfully, false otherwise.
     */
    DeletePages: (index: number, count: number) => boolean;

    /**
     * Swaps the positions of two pages.
     * @param firstIndex The index of the first page.
     * @param secondIndex The index of the second page.
     * @returns True if the pages were swapped successfully, false otherwise.
     */
    SwapPages: (firstIndex: number, secondIndex: number) => boolean;

    /**
     * Moves a page from one index to another.
     * @param srcIndex The index of the page to move.
     * @param destIndex The index to move the page to.
     * @returns True if the page was moved successfully, false otherwise.
     */
    MovePage: (srcIndex: number, destIndex: number) => boolean;

    /**
     * Gets the page at the specified index.
     * @param index The index of the page to retrieve.
     * @returns A PdfPage object representing the page.
     */
    GetPage: (index: number) => PdfPage;

    /**
     * Creates a new layer in the PDF document.
     * @param name The name of the layer.
     * @param visible Whether the layer should be visible by default.
     * @param intent The intent of the layer (0 for view, 1 for design).
     * @returns A PdfLayer object representing the new layer.
     */
    CreateLayer: (name: string, visible?: boolean, intent?: number) => PdfLayer;

    /**
     * Gets the layer at the specified index.
     * @param index The index of the layer to retrieve.
     * @returns A PdfLayer object representing the layer.
     */
    GetLayer: (index: number) => PdfLayer;

    /**
     * Gets the number of layers in the PDF document.
     * @returns The number of layers in the document.
     */
    GetLayerCount: () => number;

    /**
     * Clears the content of the PDF document.
     */
    Clear: () => void;

    /**
     * Appends another PDF file to the current document.
     * @param file The file instance of the PDF to append.
     * @returns True if append was successful, false otherwise.
     */
    AppendPdfFile: (file: FileInstance) => boolean;

    /**
     * Extracts specified pages from the PDF document and saves them to a new file.
     * @param target The file instance to save the extracted pages.
     * @param pages An array or list specifying the indices of pages to extract.
     * @returns True if extraction and save were successful, false otherwise.
     */
    ExtractPages: (target: FileInstance, pages: number[]) => boolean;

    /**
     * Retrieves the image object at the specified index.
     * @param index The index of the image to retrieve.
     * @returns The PdfImage object at the specified index, or null if index is out of range.
     */
    GetImageAt: (index: number) => PdfImage | null;

    /**
     * Extracts text content from the PDF document.
     * @param asFormatted Whether to extract text with formatting (if available).
     * @returns The extracted text content.
     */
    ExtractText: (asFormatted: boolean) => string;

    /**
     * Gets or sets the author metadata of the PDF document.
     */
    Author: string;

    /**
     * Gets or sets the creator metadata of the PDF document.
     */
    Creator: string;

    /**
     * Gets or sets the keywords metadata of the PDF document.
     */
    Keywords: string;

    /**
     * Gets or sets the producer metadata of the PDF document.
     */
    Producer: string;

    /**
     * Gets or sets the subject metadata of the PDF document.
     */
    Subject: string;

    /**
     * Gets or sets the title metadata of the PDF document.
     */
    Title: string;

    /**
     * Clears metadata information from the PDF document.
     * @param customOnly If true, clears only custom metadata fields.
     */
    ClearMetaData: (customOnly: boolean) => void;

    /**
     * Gets or sets the document ID metadata of the PDF document.
     */
    DocumentId: string;

    /**
     * Gets the version ID metadata of the PDF document.
     */
    VersionId: string;

    /**
     * Gets the manager metadata of the PDF document.
     */
    Manager: string;

    /**
     * Gets or sets information about the document's origin.
     */
    DerivedFrom: IPdfMetaData;

    /**
     * Gets information about the document's managed origin.
     */
    ManagedFrom: IPdfMetaData;

    /**
     * Gets or sets custom metadata associated with the PDF document.
     */
    Custom: IPdfMetaData;

    /**
     * Sets page split information for the PDF document.
     * @param info Array containing page split information objects.
     * @returns True if page split information was successfully set; otherwise, false.
     */
    SetPageSplitInformation: (info: PdfPage[]) => boolean;

    /**
     * Removes signature permissions from the PDF document.
     * @returns True if signature permissions were successfully removed; otherwise, false.
     */
    RemoveSignaturePermissions: () => boolean;

    /**
     * Removes structure information from the PDF document.
     * @returns True if structure information was successfully removed; otherwise, false.
     */
    RemoveStructureInformation: () => boolean;

    /**
     * Removes transparency groups from the PDF document.
     * @returns True if transparency groups were successfully removed; otherwise, false.
     */
    RemoveTransparencyGroups: () => boolean;

    /**
     * Gets the PDF/A conformance level of the PDF document.
     */
    PdfaConformance: string;

    /**
     * Flattens form controls in the PDF document.
     * @returns True if form controls were successfully flattened; otherwise, false.
     */
    FlattenControls: () => boolean;

    /**
     * Imports form data from an FDF file into the PDF document.
     * @param file The file instance of the FDF file to import.
     * @returns True if form data was successfully imported; otherwise, false.
     */
    ImportFdf: (file: FileInstance) => boolean;

    /**
     * Exports form data from the PDF document into an FDF file.
     * @param file The file instance to save the exported FDF data.
     * @returns True if form data was successfully exported; otherwise, false.
     */
    ExportFdf: (file: FileInstance) => boolean;

    /**
     * Adds an attachment to the PDF document.
     * @param file The file instance of the attachment to add.
     * @returns True if the attachment was successfully added; otherwise, false.
     */
    AddAttachment: (file: FileInstance) => boolean;

    /**
     * Saves the PDF document to a file with specified options.
     * @param file The file instance to save the PDF document.
     * @param createHumanReadable Whether to create a human-readable PDF.
     * @param linearize Whether to linearize the PDF for fast web view.
     * @param producePdfA Whether to produce a PDF/A compliant document.
     * @param doNotSyncMetaData Whether to exclude syncing metadata.
     * @returns True if the document was saved successfully; otherwise, false.
     */
    Save: (
        file: FileInstance,
        createHumanReadable: boolean,
        linearize: boolean,
        producePdfA: boolean,
        doNotSyncMetaData: boolean
    ) => boolean;

    /**
     * Closes the PDF document.
     */
    Close: () => void;

    /**
     * Indicates whether the PDF document is currently open.
     */
    IsOpen: boolean;
}

/**
 * Represents a page in a PDF document with various properties and methods.
 */
export interface PdfPage {
    /**
     * Draws a dynamic template on the page.
     * @param templateXml The XML string representing the dynamic template.
     * Returns true if the drawing was successful, false otherwise.
     */
    DrawDynamicTemplate: (templateXml: string) => boolean;

    /**
     * Draws another PDF page onto this page.
     * @param page The PdfPage object representing the page to draw.
     * @param x The x-coordinate for the drawing position.
     * @param y The y-coordinate for the drawing position.
     * @param width The width for the drawing.
     * @param height The height for the drawing.
     * @param angle The rotation angle for the drawing.
     * @param layerObject The layer on which to draw the page (optional).
     */
    Draw: (page: PdfPage, x: number, y: number, width: number, height: number, angle: number, layerObject?: PdfLayer) => void;

    /**
     * Gets the number of images on the page.
     */
    GetImageCount: () => number;

    /**
     * Extracts the text content from the page.
     * @param asFormatted Whether to extract the text with formatting.
     * Returns the extracted text.
     */
    ExtractText: (asFormatted: boolean) => string;

    /**
     * Saves the page as a PDF file.
     * @param target The file instance to save the page as a PDF.
     * Returns true if the save was successful, false otherwise.
     */
    SaveAsPdf: (target: FileInstance) => boolean;

    /**
     * Saves the page as an image file.
     * @param target The file instance to save the page as an image.
     * @param width The width of the image.
     * @param type The type of the image (e.g., "Jpeg", "Png", "Tiff").
     * @param bgColor The background color for the image.
     * Returns true if the save was successful, false otherwise.
     */
    SaveAsImage: (target: FileInstance, width: number, type: string, bgColor?: string) => boolean;

    /**
     * Optimizes the page by reducing the size of images.
     * @param maxImageDimension The maximum dimension for images.
     * @param jpegQuality The quality of JPEG images.
     * @param optimizeImagesWithMasksByRecompressing Whether to optimize images with masks by recompressing them.
     */
    OptimizePage: (maxImageDimension: number, jpegQuality: number, optimizeImagesWithMasksByRecompressing: boolean) => void;

    /**
     * Gets or sets the width of the page.
     */
    Width: number;

    /**
     * Gets or sets the height of the page.
     */
    Height: number;

    /**
     * Gets or sets the crop box of the page.
     */
    CropBox: Rectangle;

    /**
     * Gets or sets the art box of the page.
     */
    ArtBox: Rectangle;

    /**
     * Gets or sets the bleed box of the page.
     */
    BleedBox: Rectangle;

    /**
     * Gets or sets the trim box of the page.
     */
    TrimBox: Rectangle;

    /**
     * Gets or sets the media box of the page.
     */
    MediaBox: Rectangle;

    /**
     * Gets or sets the rotation of the page.
     * The rotation is specified in degrees (0, 90, 180, 270).
     */
    Rotation: number;

    /**
     * The number of pages in the PDF document.
     */
    readonly PageCount: number;

    /**
     * Clears the content of the PDF document.
     */
    Clear: () => void;

    /**
     * Appends another PDF file to the current document.
     * @param file The file instance of the PDF to append.
     * Returns true if append was successful, false otherwise.
     */
    AppendPdfFile: (file: FileInstance) => boolean;

    /**
     * Extracts specified pages from the PDF document and saves them to a new file.
     * @param target The file instance to save the extracted pages.
     * @param pages An array or list specifying the indices of pages to extract.
     * Returns true if extraction and save were successful, false otherwise.
     */
    ExtractPages: (target: FileInstance, pages: number[]) => boolean;

    /**
     * Retrieves the image object at the specified index.
     * @param index The index of the image to retrieve.
     * Returns the PdfImageObject at the specified index, or null if index is out of range.
     */
    GetImageAt: (index: number) => PdfImage;

    /**
     * Inserts a new page at the specified index.
     * @param index The index at which to insert the new page.
     * Returns a PdfPage object representing the new page.
     */
    InsertPage: (index: number) => PdfPage;

    /**
     * Adds a new page to the end of the PDF document.
     * Returns a PdfPage object representing the new page.
     */
    AddPage: () => PdfPage;

    /**
     * Deletes the page at the specified index.
     * @param index The index of the page to delete.
     * Returns true if the page was deleted successfully, false otherwise.
     */
    DeletePage: (index: number) => boolean;

    /**
     * Deletes a range of pages starting from the specified index.
     * @param index The starting index of the pages to delete.
     * @param count The number of pages to delete.
     * Returns true if the pages were deleted successfully, false otherwise.
     */
    DeletePages: (index: number, count: number) => boolean;

    /**
     * Swaps the positions of two pages.
     * @param firstIndex The index of the first page.
     * @param secondIndex The index of the second page.
     * Returns true if the pages were swapped successfully, false otherwise.
     */
    SwapPages: (firstIndex: number, secondIndex: number) => boolean;

    /**
     * Moves a page from one index to another.
     * @param srcIndex The index of the page to move.
     * @param destIndex The index to move the page to.
     * Returns true if the page was moved successfully, false otherwise.
     */
    MovePage: (srcIndex: number, destIndex: number) => boolean;

    /**
     * Gets the page at the specified index.
     * @param index The index of the page to retrieve.
     * Returns a PdfPage object representing the page.
     */
    GetPage: (index: number) => PdfPage;
}

/**
 * Represents a PDF layer object.
 */
export interface PdfLayer{
    /**
     * Gets the name of the PDF layer.
     */
    Name: string;

    /**
     * Gets or sets a value indicating whether the PDF layer is visible.
     */
    Visible: boolean;

    /**
     * Gets the underlying PdfLayer object.
     */
    Layer: PdfLayer;
}


/**
 * Represents a PdfImageObject with methods and properties for PDF image operations.
 */
export interface PdfImage {
    /**
     * Saves the PdfImageObject to a file.
     * @param file The FileInstance object representing the file to save.
     * Returns true if the save was successful, false otherwise.
     */
    Save: (file: FileInstance) => boolean;

    /**
     * Resizes the PdfImageObject to the specified dimensions.
     * @param newWidth The new width for the image.
     * @param newHeight The new height for the image.
     */
    Resize: (newWidth: number, newHeight: number) => void;

    /**
     * Scales the PdfImageObject by the specified factor.
     * @param factor The scaling factor.
     */
    Scale: (factor: number) => void;

    /**
     * Recompresses the PdfImageObject with the specified JPEG quality.
     * @param quality The JPEG quality for recompression.
     */
    Recompress: (quality: number) => void;

    /**
     * Gets the width of the PdfImageObject.
     */
    Width: number;

    /**
     * Gets the height of the PdfImageObject.
     */
    Height: number;

    /**
     * Gets the bits per component of the PdfImageObject.
     */
    BitsPerComponent: number;

    /**
     * Gets the component count of the PdfImageObject.
     */
    ComponentCount: number;
}

/**
 * Represents a rectangle with properties for X, Y, Width, and Height.
 */
export interface Rectangle {
    X: number;
    Y: number;
    Width: number;
    Height: number;
}

/**
 * Represents a PdfLayerObject with properties and methods for PDF layer operations.
 */
export interface PdfLayer {
    /**
     * Gets the name of the PdfLayerObject.
     */
    name: string;

    /**
     * Gets or sets whether the PdfLayerObject is visible.
     */
    visible: boolean;

    /**
     * Gets the PdfLayer instance.
     */
    layer: PdfLayer;
}

/**
 * Represents metadata associated with a PDF document.
 */
export interface IPdfMetaData {
    /**
     * Gets or sets custom values associated with the PDF document.
     */
    CustomValues: string;
}
