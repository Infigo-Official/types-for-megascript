/**
 * Provides operations for querying and managing Symphony item groups.
 * Accessed via `Run.SymphonyItemGroups`.
 */
interface SymphonyItemGroups {
    /**
     * Gets a Symphony item group by its ID.
     * @param id The group ID.
     * @returns The group, or null if not found or deleted.
     */
    GetItemGroupById(id: number): SymphonyItemGroupInstance | null;

    /**
     * Gets all Symphony item groups.
     * @returns An array of all groups.
     */
    GetAllItemGroups(): SymphonyItemGroupInstance[];

    /**
     * Gets Symphony item groups matching a name.
     * @param name The group name to match.
     * @returns An array of matching groups.
     */
    GetItemGroupsByName(name: string): SymphonyItemGroupInstance[];

    /**
     * Gets groups that received a consignment ID today.
     * @returns An array of matching groups.
     */
    GetItemGroupsWithConsignmentIdForToday(): SymphonyItemGroupInstance[];

    /**
     * Searches groups by name, attributes and status.
     * @param name The group name to match.
     * @param attributes Either an array of attribute type names, or a
     * name/value map of attributes to match.
     * @param status The group status name (e.g. "Open", "Processing").
     * @returns An array of matching groups.
     */
    Search(
        name: string,
        attributes: string[] | { [key: string]: string },
        status: string
    ): SymphonyItemGroupInstance[];

    /**
     * Creates and persists a new Symphony item group.
     * @param name The group name.
     * @param attributes A name/value map of attributes to set on the group.
     * @returns The newly created group.
     */
    CreateItemGroup(name: string, attributes: { [key: string]: string }): SymphonyItemGroupInstance;

    /**
     * Deletes a Symphony item group.
     * @param obj The group to delete.
     * @param optionalMessage An optional message to record with the deletion.
     * @returns True if the delete was issued.
     */
    DeleteItemGroup(obj: SymphonyItemGroupInstance, optionalMessage?: string): boolean;
}

/**
 * Represents a single Symphony item group and the operations available on it.
 */
interface SymphonyItemGroupInstance {
    /** The group ID. */
    readonly Id: number;

    /** The group name. */
    Name: string;

    /** The external ID of the group. */
    readonly ExternalId: string;

    /** The group's attributes as a name/value map. */
    Attributes: { [key: string]: string };

    /** The current group status name (e.g. "Open", "Processing", "Complete"). */
    readonly Status: string;

    /** The number of Symphony item prints in the group. */
    readonly ItemCount: number;

    /**
     * Persists any changes made to the group.
     */
    UpdateGroup(): void;

    /**
     * Transitions the group from None to Open.
     * @returns True if the transition occurred.
     */
    Open(): boolean;

    /**
     * Transitions the group from Open to Processing.
     * @returns True if the transition occurred.
     */
    SwitchToProcessing(): boolean;

    /**
     * Transitions the group from Processing to Incomplete.
     * @returns True if the transition occurred.
     */
    SwitchToIncomplete(): boolean;

    /**
     * Transitions the group from Processing/Incomplete to Complete.
     * @returns True if the transition occurred.
     */
    SwitchToComplete(): boolean;

    /**
     * Closes the group (from Complete/Incomplete) with a consignment ID.
     * @param consignmentId The consignment ID to assign.
     * @returns True if the group was closed.
     */
    Close(consignmentId: string): boolean;

    /**
     * Gets the IDs of the Symphony item prints in the group.
     * @returns An array of Symphony item print IDs.
     */
    GetSymphonyItemPrints(): number[];

    /**
     * Gets the zone GUID metadata value for a Symphony item print.
     * @param symphonyItemPrintId The Symphony item print ID.
     * @returns The zone metadata value, or an empty string if not present.
     */
    GetItemPrintZoneMetadata(symphonyItemPrintId: number): string;

    /**
     * Gets a group attribute value by its attribute type system name.
     * @param systemName The attribute type system name (case-insensitive).
     * @returns The attribute value, or an empty string if not present.
     */
    GetAttributeValueBySystemName(systemName: string): string;

    /**
     * Checks whether the group contains the given job's print item.
     * @param obj The job whose print item to check.
     * @returns True if the print item is in the group.
     */
    ContainsItem(obj: JobObject): boolean;

    /**
     * Removes the given job's print item from the group.
     * @param obj The job whose print item to remove.
     * @returns True if the item was removed.
     */
    RemoveItem(obj: JobObject): boolean;

    /**
     * Adds a Symphony item print to the group by its ID.
     * @param printItemId The Symphony item print ID.
     * @returns True if the item was added.
     */
    AddItemById(printItemId: number): boolean;

    /**
     * Adds the given job's print item to the group.
     * @param obj The job whose print item to add.
     * @returns True if the item was added.
     */
    AddItem(obj: JobObject): boolean;
}
