/**
 * Interface representing product specification attributes.
 */
interface ProductSpecificationAttributes {
    /**
     * The name of the product specification attribute.
     */
    Name: string;

    /**
     * The value of the product specification attribute.
     */
    Value: string;

    /**
     * Indicates whether the attribute should be shown on the product page.
     */
    ShowOnProductPage: boolean;

    /**
     * Indicates whether the attribute should be hidden from the customer.
     */
    HideFromCustomer: boolean;

    /**
     * The display order of the attribute.
     */
    DisplayOrder: number;
}
