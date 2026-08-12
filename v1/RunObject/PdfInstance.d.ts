/**
 * Represents a PDF instance with various methods and properties for PDF manipulation.
 */
interface PdfInstance {
    /**
     * Draws a dynamic template on the PDF.
     * @param templateXml The XML string defining the template.
     * @param startPage The starting page number for the template.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    DrawDynamicTemplate: (templateXml: string, startPage: number) => boolean;

    /**
     * Creates a new layer in the PDF.
     * @param name The name of the layer.
     * @param visible Optional. The visibility of the layer. Defaults to `true`.
     * @param intent Optional. The intent for the layer.
     * @returns The created layer object.
     */
    CreateLayer: (name: string, visible?: boolean, intent?: number) => PdfLayer;

    /**
     * Applies a profile to the PDF instance.
     * @param profileName The name of the profile to apply.
     * @param variablePlaceholder An object containing placeholders for variables to be replaced in the profile.
     * @returns An `ApplyProfileResult` containing the result of the profile application, including success status, output, and an optional report.
     */
    ApplyProfile: (profileName: string, variablePlaceholder: object) => ApplyProfileResult;

    /**
     * Downsamples the images in the PDF via the PDF optimization service and returns the
     * downsampled copy as a new file.
     * @param options Downsampling DPI targets. All fields optional (defaults 150 DPI).
     * @returns A result object with the downsampled output file, or errors on failure.
     */
    DownsamplePdf: (options?: PdfDownsampleOptions) => PdfProcessingResult;

    /**
     * Applies an ICC colour profile to the PDF and returns the converted copy as a new file.
     * @param iccProfile The ICC profile file to apply. Must exist.
     * @param config ICC conversion settings. All fields optional.
     * @returns A result object with the converted output file, or errors on failure.
     */
    ApplyICCProfile: (iccProfile: FileInstance, config?: PdfIccProfileOptions) => PdfProcessingResult;

    /**
     * Converts the PDF to a target device colour space using the given colour profile.
     * @param colorProfile The colour profile file to use. Must exist.
     * @param options Colour-space conversion settings. All fields optional.
     * @returns A result object with the converted output file, or errors on failure.
     */
    ConvertToColorSpace: (colorProfile: FileInstance, options?: PdfColorSpaceConversionOptions) => PdfProcessingResult;

    /**
     * Applies selective grayscale conversion to the PDF and returns the result as a new file.
     * @param options Selective grayscale settings. All fields optional.
     * @returns A result object with the grayscaled output file, or errors on failure.
     */
    Grayscale: (options?: PdfSelectiveGrayscaleOptions) => PdfProcessingResult;

    /**
     * Splits the document (including unsaved in-memory changes) into one PDF per page-split
     * definition. Invalid definitions fail the whole call with no partial output.
     * @param splits An array of page-split info objects describing each output document.
     * @returns A result object with the per-split output files, or a failure message.
     */
    Split: (splits: object) => PageSplitResult;

    /**
     * Rasterizes every page of the PDF to a thumbnail image and returns the generated image files.
     * @param options Rasterization settings. All fields optional.
     * @returns A result object with the generated thumbnail files, or errors on failure.
     */
    RasterizeThumbnails: (options?: PdfRasterizeOptions) => PdfThumbnailsResult;

    /**
     * Rasterizes a single page of the PDF to a thumbnail image.
     * @param pageIndex The zero-based index of the page to rasterize.
     * @param options Rasterization settings. All fields optional.
     * @returns A result object with the generated thumbnail file, or errors on failure.
     */
    RasterizeThumbnailPage: (pageIndex: number, options?: PdfRasterizeOptions) => PdfProcessingResult;


    /**
     * Gets the layer at the specified index.
     * @param index The index of the layer.
     * @returns The layer object at the specified index.
     */
    GetLayerAt: (index: number) => PdfLayer;

    /**
     * Gets the count of layers in the PDF.
     */
    LayerCount: number;

    /**
     * Gets the count of pages in the PDF.
     */
    PageCount: number;

    /**
     * Gets the count of images in the PDF.
     */
    ImageCount: number;

    /**
     * Gets or sets the author of the PDF.
     */
    Author: string;

    /**
     * Gets or sets the creator of the PDF.
     */
    Creator: string;

    /**
     * Gets or sets the keywords associated with the PDF.
     */
    Keywords: string;

    /**
     * Gets or sets the producer of the PDF.
     */
    Producer: string;

    /**
     * Gets or sets the subject of the PDF.
     */
    Subject: string;

    /**
     * Gets or sets the title of the PDF.
     */
    Title: string;

    /**
     * Gets or sets the document ID of the PDF.
     */
    DocumentId: string;

    /**
     * Gets or sets the version ID of the PDF.
     */
    VersionId: string;

    /**
     * Gets or sets the manager of the PDF.
     */
    Manager: string;

    /**
     * Gets or sets the "Derived From" information of the PDF.
     */
    DerivedFrom: Object;

    /**
     * Gets or sets the "Managed From" information of the PDF.
     */
    ManagedFrom: {};

    /**
     * Gets or sets custom metadata for the PDF.
     */
    Custom: IPdfMetaData;

    /**
     * Sets page split information.
     * @param info Array of page split information.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    SetPageSplitInformation: (info: []) => boolean;

    /**
     * Removes signature permissions from the PDF.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    RemoveSignaturePermissions: () => boolean;

    /**
     * Removes structure information from the PDF.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    RemoveStructureInformation: () => boolean;

    /**
     * Removes transparency groups from the PDF.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    RemoveTransparencyGroups: () => boolean;

    /**
     * Downsamples every image in the PDF by the given scale factor and saves the result.
     * @param scaleFactor The factor by which to scale down the images.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    Downsample: (scaleFactor: number) => boolean;

    /**
     * Normalizes the rotation of every page in the PDF to 0°.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    NormalizeRotation: () => boolean;

    /**
     * Clears the document metadata.
     * @param customOnly When `true`, clears only custom metadata; otherwise clears all metadata.
     */
    ClearMetaData: (customOnly: boolean) => void;

    /**
     * Gets the PDF/A conformance level of the PDF.
     */
    PdfaConformance: string;

    /**
     * Flattens interactive form fields and annotations.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    FlattenControls: () => boolean;

    /**
     * Imports FDF data into the PDF.
     * @param file The file instance containing the FDF data.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    ImportFdf: (file: FileInstance) => boolean;

    /**
     * Exports FDF data from the PDF.
     * @param file The file instance to save the FDF data.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    ExportFdf: (file: FileInstance) => boolean;

    /**
     * Adds an attachment to the PDF.
     * @param file The file instance to attach.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    AddAttachement: (file: FileInstance) => boolean;

    /**
     * Saves the PDF to a file.
     * @param file Optional. The file instance to save to.
     * @param createHumanReadable Optional. Indicates whether to create a human-readable PDF.
     * @param linearize Optional. Indicates whether to linearize the PDF.
     * @param producePdfA Optional. Indicates whether to produce a PDF/A.
     * @param doNotSyncMetaData Optional. Indicates whether to skip syncing metadata.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    Save: (file?: FileInstance, createHumanReadable?: boolean, linearize?: boolean, producePdfA?: boolean, doNotSyncMetaData?: boolean) => boolean;

    /**
     * Closes the PDF instance.
     */
    Close: () => void;

    /**
     * Gets a value indicating whether the PDF is open.
     */
    IsOpen: boolean;

    /**
     * Clears the PDF instance.
     */
    Clear: () => void;

    /**
     * Appends another PDF file to this PDF.
     * @param file The PDF file instance to append.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    AppendPdfFile: (file: FileInstance) => boolean;

    /**
     * Inserts a new page at the specified index.
     * @param index The index at which to insert the page.
     * @returns The inserted page object.
     */
    InsertPage: (index: number) => PdfPage;

    /**
     * Adds a new page to the end of the PDF.
     * @returns The added page object.
     */
    AddPage: () => PdfPage;

    /**
     * Deletes the page at the specified index.
     * @param index The index of the page to delete.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    DeletePage: (index: number) => boolean;

    /**
     * Deletes multiple pages starting from the specified index.
     * @param index The starting index of the pages to delete.
     * @param count The number of pages to delete.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    DeletePages: (index: number, count: number) => boolean;

    /**
     * Swaps two pages in the PDF.
     * @param firstIndex The index of the first page.
     * @param secondIndex The index of the second page.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    SwapPages: (firstIndex: number, secondIndex: number) => boolean;

    /**
     * Moves a page from one index to another.
     * @param srcIndex The source index of the page.
     * @param destIndex The destination index of the page.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    MovePage: (srcIndex: number, destIndex: number) => boolean;

    /**
     * Gets the page at the specified index.
     * @param index The index of the page.
     * @returns The page object at the specified index.
     */
    GetPageAt: (index: number) => PdfPage;

    /**
     * Extracts pages from the PDF to another file.
     * @param target The target file instance to extract pages to.
     * @param pages The pages to extract.
     * @returns `true` if the operation is successful, otherwise `false`.
     */
    ExtractPages: (target: FileInstance, pages: object) => boolean;

    /**
     * Extracts text from the PDF.
     * @param asFormated Indicates whether to extract the text as formatted.
     * @returns The extracted text.
     */
    ExtractText: (asFormated: boolean) => string;

    /**
     * Disposes of the PDF instance, ensuring proper cleanup of memory and resources.
     */
    Dispose: () => void;
}

/**
 * Represents a page in a PDF document with various properties and methods.
 */
interface PdfPage {
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
     * Saves the page as an image, fitting it to the given width and height box.
     * @param target The file instance to save the image to.
     * @param width The target width of the image.
     * @param height The target height of the image.
     * @param type The image type ("Jpeg", "Png", or "Tiff"). Defaults to "Jpeg" when empty.
     * @param bgColor Optional. The background colour as an HTML hex string (e.g. "#FFFFFF").
     * @returns `true` if the save was successful, otherwise `false`.
     */
    SaveAsImageFit: (target: FileInstance, width: number, height: number, type: string, bgColor?: string) => boolean;

    /**
     * Saves the page as an image fitted to a width/height box, with an explicit JPEG quality.
     * @param target The file instance to save the image to.
     * @param width The target width of the image.
     * @param height The target height of the image.
     * @param type The image type ("Jpeg", "Png", or "Tiff"). Defaults to "Jpeg" when empty.
     * @param bgColor The background colour as an HTML hex string (e.g. "#FFFFFF"). May be null/empty.
     * @param jpegQuality The JPEG quality (1-100); ignored for non-JPEG formats.
     * @returns `true` if the save was successful, otherwise `false`.
     */
    SaveAsImageFitWithQuality: (target: FileInstance, width: number, height: number, type: string, bgColor: string, jpegQuality: number) => boolean;

    /**
     * Saves the page as an image fitted to a width/height box, rendering at a supersampled
     * resolution and downscaling for higher quality. Supersampling only applies when a height
     * is supplied and supersample > 1.
     * @param target The file instance to save the image to.
     * @param width The target width of the image.
     * @param height The target height of the image.
     * @param type The image type ("Jpeg", "Png", or "Tiff"). Defaults to "Jpeg" when empty.
     * @param bgColor The background colour as an HTML hex string (e.g. "#FFFFFF"). May be null/empty.
     * @param jpegQuality The JPEG quality (1-100); ignored for non-JPEG formats.
     * @param supersample The supersampling multiplier (>= 1); higher values render larger then downscale.
     * @returns `true` if the save was successful, otherwise `false`.
     */
    SaveAsImageFitSupersample: (target: FileInstance, width: number, height: number, type: string, bgColor: string, jpegQuality: number, supersample: number) => boolean;

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
interface PdfLayer{
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
 * Represents the result of applying a profile to a PDF.
 */
interface ApplyProfileResult {
    /**
     * Indicates whether the profile was successfully applied.
     */
    Success: boolean;

    /**
     * The output PDF instance object after applying the profile.
     */
    Output: PdfInstance;

    /**
     * The report PDF instance object generated during the profile application, if available.
     */
    Report: PdfInstance | null;
}

/**
 * Represents a PdfImageObject with methods and properties for PDF image operations.
 */
interface PdfImage {
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
interface Rectangle {
    X: number;
    Y: number;
    Width: number;
    Height: number;
}

/**
 * Represents metadata associated with a PDF document.
 */
interface IPdfMetaData {
    /**
     * Gets or sets custom values associated with the PDF document.
     */
    CustomValues: string;
}

/**
 * Result of a PDF processing operation that produces a single output file
 * (DownsamplePdf, ApplyICCProfile, ConvertToColorSpace, Grayscale, RasterizeThumbnailPage).
 */
interface PdfProcessingResult {
    /** Indicates whether the operation succeeded. */
    Success: boolean;

    /** The output file produced by the operation, or null on failure. */
    Output: FileInstance | null;

    /** Any error messages produced by the operation. Empty when successful. */
    Errors: string[];
}

/**
 * Result of a PDF operation that produces multiple output files (RasterizeThumbnails).
 */
interface PdfThumbnailsResult {
    /** Indicates whether the operation succeeded and produced at least one file. */
    Success: boolean;

    /** The generated output files. Empty on failure. */
    Outputs: FileInstance[];

    /** Any error messages produced by the operation. Empty when successful. */
    Errors: string[];
}

/**
 * Result of splitting a PDF into multiple documents.
 */
interface PageSplitResult {
    /** Indicates whether the split succeeded. */
    Success: boolean;

    /** A human-readable message, populated with error detail when the split fails. */
    Message: string;

    /** The output PDF files, one per page-split definition. Empty on failure. */
    Files: FileInstance[];
}

/**
 * Options for {@link PdfInstance.DownsamplePdf}. All fields optional.
 */
interface PdfDownsampleOptions {
    /** Target DPI for colour images. Default 150. */
    ColorImageDpi?: number;
    /** Target DPI for grayscale images. Default 150. */
    GrayImageDpi?: number;
    /** Target DPI for monochrome (1-bit) images. Default 150. */
    MonoImageDpi?: number;
    /** Additional raw Ghostscript arguments. Optional. */
    AdditionalArgs?: string | null;
}

/**
 * Options for {@link PdfInstance.ApplyICCProfile}. All fields optional.
 */
interface PdfIccProfileOptions {
    /** Output density in DPI. Default 300. */
    Density?: number;
    /** Output quality (1-100). Default 100. */
    Quality?: number;
    /** Target colour space, e.g. "CMYK". Default "CMYK". */
    ColorSpace?: string;
    /** Additional raw arguments. Optional. */
    AdditionalArgs?: string | null;
}

/**
 * Options for {@link PdfInstance.ConvertToColorSpace}. All fields optional.
 */
interface PdfColorSpaceConversionOptions {
    /**
     * Target Ghostscript device colour space:
     * 0 = DeviceCMYK (default), 1 = DeviceRGB, 2 = DeviceGray, 3 = LeaveColorUnchanged.
     */
    DeviceSpace?: 0 | 1 | 2 | 3;
    /** Additional raw Ghostscript arguments. Optional. */
    AdditionalArgs?: string;
}

/**
 * Options for {@link PdfInstance.Grayscale}. All fields optional.
 */
interface PdfSelectiveGrayscaleOptions {
    /** Zero-based indices of pages to convert fully to grayscale. Default empty. */
    GrayPages?: number[];
    /** Zero-based indices of pages to grayscale on the left side. Default empty. */
    LeftPages?: number[];
    /** Zero-based indices of pages to grayscale on the right side. Default empty. */
    RightPages?: number[];
    /** Raster DPI used during selective grayscale processing. Default 300. */
    RasterDpi?: number;
}

/**
 * Options for {@link PdfInstance.RasterizeThumbnails} and {@link PdfInstance.RasterizeThumbnailPage}.
 * All fields optional.
 */
interface PdfRasterizeOptions {
    /** Output image width in pixels. Default 600. */
    Width?: number;
    /** Output image height in pixels. Optional; when null the height is derived from the width. */
    Height?: number | null;
    /** Background colour as an HTML hex string. Default "#FFFFFF". */
    BackgroundColor?: string;
    /** Output image format/extension, e.g. "jpg", "png", "tiff". Default "jpg". */
    Format?: string;
    /** Additional raw Ghostscript arguments. Optional. */
    AdditionalArgs?: string;
}
