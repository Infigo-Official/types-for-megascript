/**
 * Represents an object for handling messages and templates.
 */
interface MessageHandlerObject {
    /**
     * Sends a message using the provided message context object.
     * @param message The message context object containing message details.
     * @returns `true` if the message was sent successfully, `false` otherwise.
     */
    SendMessage: (message: MessageContextObject) => boolean;

    /**
     * Sends a message using a predefined template.
     * @param templateName The name of the template to use.
     * @param toEmail The recipient's email address.
     * @param data Additional data to populate the template.
     * @returns `true` if the message was sent successfully, `false` otherwise.
     */
    SendMessageByTemplate: (templateName: string, toEmail: string, data: any) => boolean;

    /**
     * Retrieves the body of a message template with populated data.
     * @param templateName The name of the template to retrieve.
     * @param data Additional data to populate the template.
     * @returns The populated body of the message template as a string.
     */
    GetTemplateBody: (templateName: string, data: any) => string;

    /**
     * Checks if a message template is active and available for use.
     * @param templateName The name of the template to check.
     * @returns `true` if the template is active and available, `false` otherwise.
     */
    IsActive: (templateName: string) => boolean;

    /**
     * Retrieves the shipping recipient details for a specific order.
     * @param orderId The ID of the order to retrieve the shipping recipient for.
     * @returns The shipping recipient object containing recipient details.
     */
    GetShippingRecipient: (orderId: number) => Recipient;
}

/**
 * Represents a message context object used for configuring and sending messages.
 */
interface MessageContextObject {
    /**
     * Adds tokens to the message context object.
     * @param obj The tokens to add.
     * @returns The updated message context object with added tokens.
     */
    AddTokens: (obj: any) => MessageContextObject;

    /**
     * Sets the BCC email address for the message.
     * @param messageTemplateName The name of the message template to set BCC for.
     * @returns The updated message context object with the BCC email address set.
     */
    SetBccEmailAddress: (messageTemplateName: string) => MessageContextObject;

    /**
     * Sets the message body using a template identified by its name.
     * @param messageTemplateName The name of the message template to use.
     * @returns The updated message context object with the template applied to the body.
     */
    UseTemplate: (messageTemplateName: string) => MessageContextObject;

    /**
     * Sets the body content of the message.
     * @param body The body content to set.
     * @returns The updated message context object with the body set.
     */
    SetBody: (body: string) => MessageContextObject;

    /**
     * Sets the email account ID for sending the message.
     * @param emailAccountId The ID of the email account to use.
     * @returns The updated message context object with the email account ID set.
     */
    SetEmailAccountId: (emailAccountId: number) => MessageContextObject;

    /**
     * Sets the subject of the message.
     * @param subject The subject to set.
     * @returns The updated message context object with the subject set.
     */
    SetSubject: (subject: string) => MessageContextObject;

    /**
     * Sets the language ID for the message.
     * @param languageId The ID of the language to use.
     * @returns The updated message context object with the language ID set.
     */
    SetLanguageId: (languageId: number) => MessageContextObject;

    /**
     * Sets the recipient's email address.
     * @param email The email address of the recipient.
     * @returns The updated message context object with the recipient's email set.
     */
    SetToEmail: (email: string) => MessageContextObject;

    /**
     * Sets the recipient's name.
     * @param toName The name of the recipient.
     * @returns The updated message context object with the recipient's name set.
     */
    SetToName: (toName: string) => MessageContextObject;

    /**
     * Appends an attachment to the message.
     * @param fileInstance The file instance representing the attachment.
     * @returns The updated message context object with the attachment appended.
     */
    AppendAttachment: (fileInstance: FileInstance) => MessageContextObject;

    /**
     * Retrieves the recipient's email address.
     * @returns The recipient's email address as a string.
     */
    GetToEmail: () => string;

    /**
     * Retrieves the BCC email addresses configured for the message.
     * @returns The BCC email addresses as a string.
     */
    GetBccEmailAddresses: () => string;

    /**
     * Builder object for managing message tokens.
     */
    Tokens: MessageTokenBuilderObject;
}

/**
 * Builder object for managing message tokens.
 */ 
interface MessageTokenBuilderObject {
    /**
     * Adds an order ID token.
     * @param orderId The ID of the order to add as a token.
     * @returns A boolean indicating success or failure of adding the token.
     */
    AddOrder: (orderId: number) => boolean;

    /**
     * Adds a generic object as a token.
     * @param obj The object to add as a token.
     * @returns A boolean indicating success or failure of adding the token.
     */
    Add: (obj: any) => boolean;

    /**
     * Adds a customer ID token.
     * @param customerId The ID of the customer to add as a token.
     * @returns A boolean indicating success or failure of adding the token.
     */
    AddCustomer: (customerId: number) => boolean;

    /**
     * Adds a product ID token.
     * @param productId The ID of the product to add as a token.
     * @returns A boolean indicating success or failure of adding the token.
     */
    AddProduct: (productId: number) => boolean;

    /**
     * Adds a hot folder ID token.
     * @param hotFolderId The ID of the hot folder to add as a token.
     * @returns A boolean indicating success or failure of adding the token.
     */
    AddHotFolder: (hotFolderId: number) => boolean;

    /**
     * Adds an order product variant ID token.
     * @param opvId The ID of the order product variant to add as a token.
     * @returns A boolean indicating success or failure of adding the token.
     */
    AddOrderProduct: (opvId: number) => boolean;

    /**
     * Adds a budget amount for a customer as a token.
     * @param customerId The ID of the customer whose budget to add as a token.
     * @param amount The budget amount to add as a token.
     * @returns A boolean indicating success or failure of adding the token.
     */
    AddBudget: (customerId: number, amount: number) => boolean;

    /**
     * Adds an account token.
     * @returns A boolean indicating success or failure of adding the token.
     */
    AddAccount: () => boolean;

    /**
     * Adds common tokens.
     * @returns A boolean indicating success or failure of adding the tokens.
     */
    AddCommon: () => boolean;
}

/**
 * Represents a recipient for messaging.
 */
interface Recipient {
    /**
     * The name of the recipient.
     */
    ToName: string;

    /**
     * The email address of the recipient.
     */
    ToEmail: string;
}

