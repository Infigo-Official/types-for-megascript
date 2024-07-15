import {Customer} from "./Customer";
import {Product, ProductType} from "./Product";
import {MsBaseModel, MsModel} from "../Shared/Shared";

/**
 * Represents operations for managing shopping carts.
 */
export interface CartManagement {
    /**
     * Adds an item to the shopping basket.
     * @param sci The object instance representing the item to add.
     * @returns The base model containing the added shopping cart item object.
     */
    AddItemToBasket: (sci: AddToBasketObjectInstance) => MsBaseModel<ShoppingCartItemObject>;

    /**
     * Updates a shopping cart item.
     * @param sci The shopping cart item object to update.
     * @returns The model representing the result of the update operation.
     */
    UpdateShoppingCartItem: (sci: ShoppingCartItemObject) => MsModel;

    /**
     * Clears the shopping cart.
     * @param customer The ID of the customer or the customer object.
     * @param shoppingCartType Optional. The type of shopping cart to clear.
     * @returns A boolean indicating whether the cart was successfully cleared.
     */
    ClearCart: (customer: number | Customer, shoppingCartType?: MsShoppingCartItemType) => boolean;

    /**
     * Deletes an item from the shopping basket.
     * @param sci The ID of the item or the object instance representing the item.
     * @returns A boolean indicating whether the item was successfully deleted.
     */
    DeleteItemFromBasket: (sci: number | AddToBasketObjectInstance) => boolean;

    /**
     * Retrieves the count of items in the shopping cart.
     * @param customer The ID of the customer or the customer object.
     * @param shoppingCartType Optional. The type of shopping cart to retrieve item count for.
     * @returns An object containing the count of items in the shopping cart.
     */
    GetCartItemCount: (customer: number | Customer, shoppingCartType?: MsShoppingCartItemType) => ShoppingCartItemCount;

    /**
     * Retrieves items from the shopping basket.
     * @param customer The ID of the customer or the customer object.
     * @param shoppingCartType Optional. The type of shopping cart to retrieve items from.
     * @returns An array of shopping cart item objects.
     */
    GetItemsFromBasket: (customer: number | Customer, shoppingCartType?: MsShoppingCartItemType) => ShoppingCartItemObject[];
}

/**
 * Represents an item in the shopping cart.
 */
export interface ShoppingCartItemObject {
    /** The ID of the shopping cart item. */
    readonly Id: number;

    /** The ID of the customer who owns the shopping cart item. */
    readonly CustomerId: number;

    /** The ID of the product associated with the shopping cart item. */
    readonly ProductId: number;

    /** The quantity of the product in the shopping cart item. */
    Quantity: number;

    /** An array of delivery types associated with the shopping cart item. */
    DeliveryType: string[];

    /** The group object associated with the shopping cart item. */
    Group: GroupObject;

    /** Additional attributes associated with the shopping cart item. */
    Attributes: { [key: string]: string };

    /** Extra data associated with the shopping cart item. */
    ExtraData: { [key: string]: string };

    /** The type of shopping cart item. */
    Type: MsShoppingCartItemType;

    /** The linked job object associated with the shopping cart item. */
    LinkedJob: LinkedJobObject;

    /**
     * Sets additional data for the shopping cart item.
     * @param key The key of the data to set.
     * @param value The value of the data to set.
     */
    SetExtraData: (key: string, value: string) => void;
}

/**
 * Represents the count of items in a shopping cart.
 */
export interface ShoppingCartItemCount {
    /** The total count of items in the shopping cart. */
    ItemsCount: number;

    /** An alternative count of items in the shopping cart. */
    Count: number;
}

/**
 * Represents a linked job object associated with a shopping cart item.
 */
export interface LinkedJobObject {
    /** The unique identifier of the linked job. */
    Id: number;

    /** The type of product associated with the linked job. */
    Type: ProductType;
}

/**
 * Represents a group object with its properties.
 */
export interface GroupObject {
    /** The unique identifier of the group. */
    Id: number;

    /** The name of the group. */
    Name: string;
}

/**
 * Represents an object used to add an item to the basket (shopping cart).
 */
export interface AddToBasketObjectInstance {
    /** The customer associated with the basket item. */
    Customer: number | Customer;

    /** The product to add to the basket. */
    Product: number | Product;

    /** The quantity of the product to add to the basket. */
    Quantity: number;

    /** An array of delivery types for the basket item. */
    DeliveryType: string[];

    /** Additional attributes associated with the basket item. */
    Attributes: { [key: string]: string };

    /** The type of basket item (e.g., shopping cart, wishlist). */
    Type: MsShoppingCartItemType;
}

/**
 * Enum defining the type of basket items.
 */
export enum MsShoppingCartItemType {
    /** Shopping cart item type. */
    ShoppingCart = 1,

    /** Wishlist item type. */
    Wishlist = 2,

    /** Saved basket item type. */
    SavedBasket = 3,

    /** API item type. */
    Api = 4
}


