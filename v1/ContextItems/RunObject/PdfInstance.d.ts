interface PdfInstance {
    DrawDynamicTemplate: (templateXml: string) => boolean;
    Draw: (page: PdfInstance, x: number, y: number, width: number, height: number, angle: number, layerObject?: PdfLayer) => void;
    Width: number;
    Height: number;
    CropBox: IRectangle;
    ArtBox: IRectangle;
    BleedBox: IRectangle;
    MediaBox: IRectangle;
    TrimBox: IRectangle;
    Clear: () => void;
    AppendPdfFile: (file: FileInstance) => boolean;
    InsertPage: (index: number) => PdfInstance;
    AddPage: () => PdfInstance;
    DeletePage: (index: number) => boolean;
    DeletePages: (index: number, count: number) => boolean;
    SwapPages: (firstIndex: number, secondIndex: number) => boolean;
    MovePage: (srcIndex: number, destIndex: number) => boolean;
    GetPageAt: (index: number) => PdfInstance;
    readonly PageCount: number;
    ExtractPages: (target: FileInstance, pages: number[]) => boolean;
    Save: (fileInstance: FileInstance, createHumanReadable?: boolean, linearize?: boolean, producePdfA?: boolean, doNotSyncMetaData?: boolean) => boolean;
    SaveAsPdf: (fileInstance: FileInstance) => boolean;
    SaveAsImage: (fileInstance: FileInstance, width: number, height: number, type: string, bgColor: string) => boolean;
    Close: () => void;
}