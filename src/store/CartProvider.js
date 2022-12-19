import { useReducer } from "react";
import CartContext from "./cart-context";

// create initial state
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

// create Reducer_fn
const cartReducer = (state, action) => {
  if (action.type === "ADD_CART_ITEM") {
    const updateTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    // check if a item is already part of the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    // get the existingCartItem by reaching out to state.items and accessing that existingCartItemIndex.
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItem;
    let updatedItems;

    if (existingCartItem) {
      //if item exist in cart
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      //if item add first time
      updatedItem = { ...action.item };
      updatedItems = state.items.concat(updatedItem);
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }

  if (action.type === "REMOVE_CART_ITEM") {
    // check if a item is already part of the cart
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    // get the existingCartItem by reaching out to state.items and accessing that existingCartItemIndex.
    const existingCartItem = state.items[existingCartItemIndex];

    const updateTotalAmount = state.totalAmount - existingCartItem.price;
    let updatedItem;
    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }
    return {
      items: updatedItems,
      totalAmount: updateTotalAmount,
    };
  }
  return defaultCartState;
};

const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemHandler = (item) => {
    dispatchCartAction({ type: "ADD_CART_ITEM", item: item });
  };

  const removeItemHandler = (id) => {
    dispatchCartAction({ type: "REMOVE_CART_ITEM", id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
