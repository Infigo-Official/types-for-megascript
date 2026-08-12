/**
 * Provides mathematical/unit-conversion helpers for MegaScript.
 */
interface Maths {
    /**
     * Converts a measurement in millimetres to PDF points (1 mm = 2.834646 pt).
     * @param measure The measurement in millimetres.
     * @returns The equivalent value in points.
     */
    ConvertMmToPoints(measure: number): number;
}

/**
 * The global maths helper object.
 */
declare const Maths: Maths;
