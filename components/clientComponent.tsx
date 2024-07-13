"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "../redux/store";
import { selectCartBtn } from "../redux/cartBtnSlice/selectors";
import { setCart } from "../redux/cartBtnSlice/slice";

import { getCartCookiesAction } from "../utils";

export const ClientComponent: React.FC = () => {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector(selectCartBtn);
  // const [cart, setCart] = useSetCart();

  // **
  React.useEffect(() => {
    if (!cart) {
      getCartCookiesAction()
        .then((cartCookies) => {
          const lsCartParsed = cartCookies ? JSON.parse(cartCookies) : [];
          dispatch(setCart(lsCartParsed));
        })
        .catch(() => "Failed to get cart cookies");
    }
  }, [cart]);

  // React.useEffect(() => {
  //   if (!cart) {
  //     getCartCookiesAction()
  //       .then((cartCookies) => {
  //         const lsCartParsed = cartCookies ? JSON.parse(cartCookies) : [];
  //         setCart(lsCartParsed);
  //       })
  //       .catch(() => "Failed to get cart cookies");
  //   }
  // }, [cart]);

  return <></>;
};
