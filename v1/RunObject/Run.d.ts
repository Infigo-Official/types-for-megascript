/**
 * Represents a run instance.
 */
 interface Run {
    /**
     * The request associated with the run.
     */
    Request: Request;

    /**
     * The customers involved in the run.
     */
    Customers: Customers;

    /**
     * The response generated from the run.
     */
    Response: Response;

    /**
     * The trigger mode for the run.
     */
    TriggerMode: MegascriptInstanceFlag;

    /**
     * The MegaScript instance associated with the run.
     */
    MegaScriptInstance: MegascriptInstanceListObject;

    /**
     * Links related to the run.
     */
    Links: Links;

    /**
     * External API used in the run.
     */
    ExternalApi: ExternalApi;

    /**
     * Products involved in the run.
     */
    Products: Products;

    /**
     * Orders related to the run.
     */
    Orders: Orders;

    /**
     * Database operations within the run.
     */
    Database: Database;

    /**
     * Upload location used in the run.
     */
    UploadLocation: UploadLocation;

    /**
     * Cart management operations within the run.
     */
    CartManagement: CartManagement;

    /**
     * Message handler object used in the run.
     */
    MessageHandler: MessageHandlerObject;

    /**
     * Parse object associated with the run.
     */
    Parse: ParseObject;

    /**
     * Current context object within the run.
     */
    CurrentContext: CurrentContextObject;

    /**
     * File object used in the run.
     */
    File: FileObject;

    /**
     * Hot folder object related to the run.
     */
    HotFolder: HotFolderObject;

    /**
     * Departments involved in the run.
     */
    Departments: DepartmentObject;

    /**
     * Custom data categories associated with the run.
     */
    CustomDataCategory: CustomDataCategoryObjects;

    /**
     * Generates a MegaScript link with specified parameters.
     * @param parameters - Parameters for the MegaScript link.
     * @param additionalParameters - Additional parameters for the MegaScript link.
     * @returns The generated MegaScript link.
     */
    GenerateMegaScriptLink: (parameters: Object, additionalParameters: Object) => string;

    /**
     * Checks if the request time matches the given time.
     * @param time - The time to compare against the request time.
     * @returns True if the request time matches, false otherwise.
     */
    RequestTime: (time: number) => boolean;
}

/**
    * Represents a Run object.
 */

declare const Run: Run;

/**
 * Enum representing various flags for MegaScript instances.
 */
declare enum MegascriptInstanceFlag {
   /**
    * Indicates that the MegaScript should run in the background.
    */
   RunBackground = 'RunBackground',

   /**
    * Indicates that the MegaScript should be purged manually.
    */
   PurgeManually = 'PurgeManually',

   /**
    * Indicates that the MegaScript should be triggered via an API call.
    */
   TriggerViaApi = 'TriggerViaApi',

   /**
    * Indicates that the MegaScript is from a dynamic product.
    */
   FromDynamicProduct = 'FromDynamicProduct',

   /**
    * Indicates that the MegaScript is responsible for output creation.
    */
   OutputCreation = 'OutputCreation',

   /**
    * Indicates that the MegaScript should execute asynchronously.
    */
   AsyncExecution = 'AsyncExecution',

   /**
    * Indicates that the MegaScript is an event.
    */
   Event = 'Event',
}

