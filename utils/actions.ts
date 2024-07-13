'use server';

import { cookies } from 'next/headers';

export const getCartCookiesAction = async () => {
  const cartCookies = cookies().get('cart-cookies');
  return cartCookies?.value;
};
