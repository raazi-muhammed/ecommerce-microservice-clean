import buildAddToCart from "./addToCart.js";
import { cartList } from "../database/index.js";
import buildGetAllCart from "./getAllCart.js";

export const addToCartUseCase = buildAddToCart({ cartList });
export const getAllCartUseCase = buildGetAllCart({ cartList });
