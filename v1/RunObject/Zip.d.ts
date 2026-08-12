/**
 * Zip/archive creation operations. Reached via `Run.Zip`.
 */
interface ZipObject {
    /**
     * Creates a zip archive from the files supplied on the request.
     * @param request The zip request. Construct one with `new CreateZipRequest()` and push
     *                 {@link FileInstance} objects onto its `Files` array.
     * @returns The result of the zip operation.
     */
    Zip: (request: ZipRequest) => ZipResponse;
}

/**
 * Result of {@link ZipObject.Zip}.
 */
interface ZipResponse {
    /** Whether the archive was created successfully. */
    IsSuccess: boolean;

    /** Error detail when {@link IsSuccess} is false; `null` on success. */
    Errors: string | null;

    /** The created zip file; only meaningful when {@link IsSuccess} is true. */
    File: FileInstance;
}

/**
 * A zip request. Construct with `new CreateZipRequest()`.
 */
interface ZipRequest {
    /** The files to include in the archive. Push {@link FileInstance} objects here. */
    Files: FileInstance[];
}

/**
 * Constructor for {@link ZipRequest}. Available as the global `CreateZipRequest`.
 */
interface ZipRequestConstructor {
    /** Creates a new, empty zip request. */
    new (): ZipRequest;

    /** The prototype of {@link ZipRequest}. */
    readonly prototype: ZipRequest;
}

/**
 * Global constructor for zip requests.
 */
declare const CreateZipRequest: ZipRequestConstructor;
