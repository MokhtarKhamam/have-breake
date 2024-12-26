"use client";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface productCartProps {
  id: string;
  authorId: string;
  title: string;
  price: number;
  unit: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  quantity: number;
}
interface initialStateType {
  cart: productCartProps[];
}

const loadCartFromLocalStorage = (): productCartProps[] => {
  if (typeof window !== "undefined") {
    const cartData = localStorage.getItem("cart");
    return cartData ? JSON.parse(cartData) : [];
  }
  return [];
};


const saveCartToLocalStorage = (cart: productCartProps[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("cart", JSON.stringify(cart));
  }
};

const initialState: initialStateType = {
  cart: loadCartFromLocalStorage(),
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<productCartProps>) => {
      state.cart.push(action.payload);
      saveCartToLocalStorage(state.cart); // Update local storage
    },

    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      saveCartToLocalStorage(state.cart); // Update local storage
    },

    increaseProductQuantity: (state, action: PayloadAction<string>) => {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.quantity += 1; // Increase quantity by 1
        saveCartToLocalStorage(state.cart); // Update local storage
      }
    },

    decreaseProductQuantity: (state, action: PayloadAction<string>) => {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1; // Decrease quantity by 1 if greater than 1
        saveCartToLocalStorage(state.cart); // Update local storage
      }
    },
  },
});

export const {
  addProductToCart,
  removeProductFromCart,
  increaseProductQuantity,
  decreaseProductQuantity,
} = globalSlice.actions;

export default globalSlice.reducer;
