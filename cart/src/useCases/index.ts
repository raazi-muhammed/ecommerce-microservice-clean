import buildAddToCart from "./addToCart.js";
import { cartList } from "../database/index.js";
import buildGetAllCart from "./getAllCart.js";
import buildGetUsersCart from "./getUsersCart.js";
import buildRemoveFromCart from "./removeFromCart.js";

export const addToCartUseCase = buildAddToCart({ cartList });
export const getUserCartUseCase = buildGetUsersCart({ cartList });
export const getAllCartUseCase = buildGetAllCart({ cartList });
export const removeFromCartUseCase = buildRemoveFromCart({ cartList });
