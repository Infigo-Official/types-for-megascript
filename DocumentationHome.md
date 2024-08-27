
# MegaScript Interface Documentation

Documentation for the entire MegaScript engine. Type declarations can be found in the [NPM package]https://www.npmjs.com/package/@infigo-official/types-for-megascript) and can be used for your TypeScript and JavaScript projects to get full IntelliSense support.

## MegaScript Components

### Execution Context

- **Run**: Represents the context in which a MegaScript execution occurs, managing the entire execution flow, including Request, Response, Products, and more.

### Customer Management

- **Customer**: Defines a comprehensive profile for customers within the MegaScript system, capturing personal details, contact information, roles, and administrative data.
- **Customers**: Provides methods for managing customer data, including searching, creating, updating, and retrieving customers based on various identifiers and criteria.
- **Department**: Represents the department associated with a customer or job, including key properties like Id and Name.

### Product and Order Management

- **Product**: Defines a product within MegaScript, including essential properties such as ProductId, Name, Description, and methods for product management.
- **ProductVariant**: Manages different variants of products, including attributes like VariantId, Attributes, and methods to handle these variations.
- **Order**: Represents an order within MegaScript, encapsulating properties such as OrderId, Customer, OrderLines, and methods for managing orders.
- **OrderProductVariant**: Handles specific variants of products within an order, managing attributes like VariantId, Attributes, and methods for variant management.

### File and Directory Management

- **Files**: Manages file operations within the MegaScript environment, providing methods for reading, writing, and manipulating files.
- **FileDirectory**: Manages file directories within MegaScript, including operations like creating, deleting, and listing files.
- **UploadLocation**: Handles the management of upload locations within MegaScript, dictating where files are uploaded and stored.

### PDF Management

- **PdfInstance**: Manages specific instances of PDFs within MegaScript, providing methods for rendering, exporting, and processing PDF files.
- **PdfGeneralObject**: Handles general PDF operations within MegaScript, including creating, editing, and managing PDF content.

### External Integrations

- **ExternalApi**: Facilitates interactions with external APIs, allowing for seamless integration and communication with external services from within MegaScript.
- **Mis**: Manages interactions with the Management Information System (MIS) within MegaScript, including configurations and status updates.

### Data Parsing and Processing

- **ParseObject**: Facilitates parsing operations within MegaScript, providing methods to interpret and manipulate data.

### Messaging and Communication

- **Message**: Handles messaging within MegaScript, offering methods to send and receive messages between different components of the system.

### Configuration and Settings

- **ConfigurationsObject**: Facilitates the retrieval of configuration settings and shipping method details within MegaScript.
- **Configuration**: Handles configuration settings within MegaScript, providing methods to retrieve and manage system configurations.

### Utility Interfaces

- **HelperObject**: Provides a variety of utility methods for common tasks such as validation, encryption, and data manipulation.
- **Logger**: Manages logging within MegaScript, providing methods to log messages, errors, and other runtime information.
- **Tools**: Provides a set of tools and utilities for various tasks within MegaScript, including string manipulation, data formatting, and more.
