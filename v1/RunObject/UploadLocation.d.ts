/**
 * Represents operations related to upload locations.
 */
interface UploadLocation {
    /**
     * Retrieves an upload location by its ID.
     * @param id The ID of the upload location to retrieve.
     * @returns The upload location object matching the ID.
     */
    GetUploadLocationById: (id: number) => FileDirectory;

    /**
     * Retrieves all upload locations.
     * @returns An array of all upload location objects.
     */
    GetAllUploadLocations: () => FileDirectory[];

    /**
     * Validates upload locations based on their IDs.
     * @param hotfolderIds An array of IDs of hotfolders to validate.
     * @returns A boolean indicating whether all specified upload locations are valid.
     */
    ValidateUploadLocations: (hotfolderIds: number[]) => boolean;
}
