/**
 * Represents a department object interface with methods to manage departments.
 */
interface DepartmentObject {
    /**
     * Finds a department by its identifier.
     *
     * @param id - The identifier of the department.
     * @returns An object representing the department.
     */
    FindById: (id: number) => Department;

    /**
     * Finds departments by their cost code.
     *
     * @param costCode - The cost code of the departments.
     * @returns An array of objects representing the departments with the given cost code.
     */
    FindByCostCode: (costCode: string) => Department[];

    /**
     * Gets the MIS configuration for a specific department and plugin system.
     *
     * @param departmentId - The identifier of the department.
     * @param pluginSystemName - The name of the plugin system.
     * @returns An object representing the MIS configuration.
     */
    GetMisConfiguration: (departmentId: number, pluginSystemName: string) => MisConfigType;

    /**
     * Finds departments by their P&L (profit & loss) code.
     *
     * @param costCode - The P&L code of the departments.
     * @returns An array of departments with the given P&L code.
     */
    FindByPLCode: (costCode: string) => Department[];

    /**
     * Retrieves all departments.
     *
     * @returns An array of all departments.
     */
    FindAll: () => Department[];

    /**
     * Retrieves all departments that do not have an approver assigned.
     *
     * @returns An array of departments without an approver.
     */
    GetWithoutApprover: () => Department[];

    /**
     * Validates that the given customer's department has a valid approver.
     *
     * @param customerId - The identifier of the customer to validate.
     * @returns A result object; `Success` is `false` with an error message when the customer's department approver is invalid.
     */
    ValidateDepartmentApprover: (customerId: number) => ResultObject;

    /**
     * Sends the "department without approver" notification for the given departments.
     *
     * @param departmentIds - The identifiers of the orphaned departments to notify about.
     * @param languageId - The language identifier used for the notification.
     * @returns `true` if at least one matching department was found and a notification was sent, otherwise `false`.
     */
    NotifyOrphanedDepartments: (departmentIds: number[], languageId: number) => boolean;
}

/**
 * Represents a department with its properties.
 */
interface Department {
    /**
     * The identifier of the department.
     */
    Id: number;

    /**
     * The cost code of the department.
     */
    CostCode: string;

    /**
     * The name of the department.
     */
    Name: string;

    /**
     * The description of the department.
     */
    Description: string;

    /**
     * The PL code of the department.
     */
    PLCode: string;

    /**
     * The email address of the department.
     */
    Email: string;
}
