"use client";

import { useContext } from "react";

import { SetCartContext } from "../contexts";

export const useSetCart = () => {
  return useContext(SetCartContext);
};
