"use client";

import { createContext } from "react";

// type SetCartContextType = () => void | never;
type SetCartContextType = [any, (cart: any) => void];

export const SetCartContext = createContext<SetCartContextType>(undefined as never);
