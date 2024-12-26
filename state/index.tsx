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
  totalAmount: number;
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

const calculateTotalAmount = (cart: productCartProps[]): number => {
  return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );
};

const initialState: initialStateType = {
  cart: loadCartFromLocalStorage(),
  totalAmount: calculateTotalAmount(loadCartFromLocalStorage()), // Calculate initial total
};

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<productCartProps>) => {
      state.cart.push(action.payload);
      state.totalAmount = calculateTotalAmount(state.cart); // Update total amount
      saveCartToLocalStorage(state.cart); // Update local storage
    },

    removeProductFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter(
        (product) => product.id !== action.payload
      );
      state.totalAmount = calculateTotalAmount(state.cart); // Update total amount
      saveCartToLocalStorage(state.cart); // Update local storage
    },

    increaseProductQuantity: (state, action: PayloadAction<string>) => {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      if (product) {
        product.quantity += 1; // Increase quantity by 1
        state.totalAmount = calculateTotalAmount(state.cart); // Update total amount

        saveCartToLocalStorage(state.cart); // Update local storage
      }
    },

    decreaseProductQuantity: (state, action: PayloadAction<string>) => {
      const product = state.cart.find(
        (product) => product.id === action.payload
      );
      if (product && product.quantity > 1) {
        product.quantity -= 1; // Decrease quantity by 1 if greater than 1
        state.totalAmount = calculateTotalAmount(state.cart); // Update total amount

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
