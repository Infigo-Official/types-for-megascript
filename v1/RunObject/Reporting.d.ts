/**
 * Interface for interacting with the reporting system.
 * Provides functionality to retrieve reports in JSON format based on a query.
 */
interface Reporting {
    /**
     * Gets the report in JSON format based on the provided query.
     *
     * @param query The query object, which contains question ID and filter details.
     * @returns The report in JSON format.
     *
     */
    GetJsonReport(query: object): string;
}
