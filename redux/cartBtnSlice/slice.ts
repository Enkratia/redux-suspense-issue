import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CartBtnType, CartBtnItemType } from "./types";

const initialState: CartBtnType = {
  lead_id: undefined,
  cart: undefined,
  promo: "",
  isPromoLsChecked: false,
  step: undefined,
  trigger: 0,
  isModalOpen: false,
  filteredCartLength: 0,
  isKindergiftChecked: undefined,
};

// TODO: вместо двух (setCartProduct, setCartProductArray) - сделать один метод.
const cartBtnSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCart: (state, payload: PayloadAction<CartBtnItemType[]>) => {
      state.cart = payload.payload;
    },
    setCartProduct: (state, payload: PayloadAction<CartBtnItemType>) => {
      if (!state.cart) return;

      const count = payload.payload.quantity;
      const id = payload.payload.id;
      const is_loyalty_gift = payload.payload.is_loyalty_gift;

      if (count === 0) {
        state.cart = state.cart.filter((elem) => {
          const isSameId = elem.id === id;
          if (!isSameId) return true;

          const isSameLoyalty = elem.is_loyalty_gift === is_loyalty_gift;
          if (!isSameLoyalty) return true;

          return false;
        });

        return;
      }

      const isExist = state.cart.findIndex(
        (elem) => elem.id === id && elem.is_loyalty_gift === is_loyalty_gift,
      );

      if (isExist === -1) {
        state.cart = [...state.cart, payload.payload];
      } else {
        state.cart = [
          ...state.cart.slice(0, isExist),
          ...state.cart.slice(isExist + 1),
          payload.payload,
        ];
      }
    },
    setCartLoyaltyProducts: (state, payload: PayloadAction<CartBtnItemType[]>) => {
      state.cart = state.cart?.filter((obj) => obj.is_loyalty_gift === false);

      // **
      payload.payload.forEach((obj) => {
        if (!state.cart) return;

        const count = obj.quantity;
        const id = obj.id;
        const is_loyalty_gift = obj.is_loyalty_gift;

        if (count === 0) {
          state.cart = state.cart.filter((elem) => {
            const isSameId = elem.id === id;
            if (!isSameId) return true;

            const isSameLoyalty = elem.is_loyalty_gift === is_loyalty_gift;
            if (!isSameLoyalty) return true;

            return false;
          });

          return;
        }

        const isExist = state.cart.findIndex(
          (elem) => elem.id === id && elem.is_loyalty_gift === is_loyalty_gift,
        );

        if (isExist === -1) {
          state.cart = [...state.cart, obj];
        } else {
          state.cart = [...state.cart.slice(0, isExist), ...state.cart.slice(isExist + 1), obj];
        }
      });
    },
    setCartPromo: (state, payload: PayloadAction<string>) => {
      state.promo = payload.payload;
    },
    setIsLsPromoChecked: (state, payload: PayloadAction<boolean>) => {
      state.isPromoLsChecked = payload.payload;
    },
    setCartStep: (state, payload: PayloadAction<number | undefined>) => {
      state.step = payload.payload;
    },
    setLeadId: (state, payload: PayloadAction<number>) => {
      state.lead_id = payload.payload;
    },
    setCartTrigger: (state) => {
      state.trigger = {};
    },
    setFilteredCartLength: (state, payload: PayloadAction<number>) => {
      state.filteredCartLength = payload.payload;
    },
    toggleCartModal: (state) => {
      state.isModalOpen = !state.isModalOpen;
    },
    setIsCartKindergiftChecked: (state, payload: PayloadAction<boolean>) => {
      state.isKindergiftChecked = payload.payload;
    },
    closeCartModal: (state) => {
      state.isModalOpen = false;
    },
    deleteCartProduct: (state) => {
      state.cart = [];
    },
  },
});

export const {
  setCart,
  deleteCartProduct,
  setCartProduct,
  setCartPromo,
  setCartStep,
  setLeadId,
  setCartTrigger,
  toggleCartModal,
  closeCartModal,
  setCartLoyaltyProducts,
  setFilteredCartLength,
  setIsLsPromoChecked,
  setIsCartKindergiftChecked,
} = cartBtnSlice.actions;

export default cartBtnSlice.reducer;
