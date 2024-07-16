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
}

/**
 * Represents a department object with methods to manage departments.
 */
declare const DepartmentObject: DepartmentObject;


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
