import {useReducer} from "react";
import CartContext from "./CartContext";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'add_item') {
    const updatedAmount = (state.totalAmount + action.item.price * action.item.amount).toFixed(2);
    const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
    const existingItem = state.items[existingItemIndex];
    let updatedItem, updatedItems;

    if (existingItem) {
      updatedItem = {
        ...existingItem,
        amount: existingItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    } else {
      updatedItem = {...action.item}
      updatedItems = state.items.concat(updatedItem);
    }

    return {
      ...state,
      items: updatedItems,
      totalAmount: +updatedAmount,
    }
  }
  if (action.type === 'remove_item') {
    const existingItemIndex = state.items.findIndex(item => item.id === action.id);
    const existingItem = state.items[existingItemIndex];
    const updatedAmount = (state.totalAmount - existingItem.price).toFixed(2);
    let updatedItems;

    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = {...existingItem, amount: existingItem.amount - 1};
      updatedItems = [...state.items];
      updatedItems[existingItemIndex] = updatedItem;
    }

    return {
      ...state,
      items: updatedItems,
      totalAmount: +updatedAmount,
    }
  }
  if (action.type === 'rest') {
    return {
      items: [],
      totalAmount: 0,
    }
  }

  return defaultCartState;
};

const CartContextProvider = (props) => {
  const [cartState, dispatchCartState] = useReducer(cartReducer, defaultCartState);

  const addItemHandler = item => {
    dispatchCartState({
      type: 'add_item',
      item: item,
    });
  };

  const removeItemHandler = id => {
    dispatchCartState({
      type: 'remove_item',
      id: id,
    });
  };

  const resetCart = () => {
    dispatchCartState({
      type: 'reset',
    });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    resetCart,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  )
};

export default CartContextProvider;