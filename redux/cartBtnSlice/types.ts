export type CartBtnItemType = {
  id: number;
  quantity: number;
  is_loyalty_gift: boolean;
};

export type CartBtnType = {
  lead_id: number | undefined;
  cart: CartBtnItemType[] | undefined;
  promo: string;
  isPromoLsChecked: boolean;
  step: number | undefined;
  trigger: {};
  isModalOpen: boolean;
  filteredCartLength: number;
  isKindergiftChecked: boolean | undefined;
};
