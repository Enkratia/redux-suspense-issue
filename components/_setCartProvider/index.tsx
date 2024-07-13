"use client";

import React from "react";

import { SetCartContext } from "../../utils/contexts";

type TestLayerProps = {
  children: any;
};

export const SetCartProvider: React.FC<TestLayerProps> = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  const setGlobalCart = (cart: any) => {
    setCart(cart);
  };

  return (
    <SetCartContext.Provider value={[cart, setGlobalCart]}>{children}</SetCartContext.Provider>
  );
};
