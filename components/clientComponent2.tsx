"use client";

import React from "react";

import { useAppSelector } from "../redux/store";
import { selectCartBtn } from "../redux/cartBtnSlice/selectors";

import { useSetCart } from "../utils/customHooks";

type ClientComponent2Props = {
  data: any;
};

export const ClientComponent2: React.FC<ClientComponent2Props> = ({ data }) => {
  const { cart } = useAppSelector(selectCartBtn);
  // const [cart] = useSetCart();

  return (
    <div>
      <button disabled={!cart}>button</button>
      <p>{data[0]?.title || ""}</p>
    </div>
  );
};
