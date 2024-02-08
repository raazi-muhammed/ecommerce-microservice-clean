import cartModel from "../models/cartModel.js";
import buildCartList from "./cartList.js";

export const cartList = buildCartList({ database: cartModel });

export type CartList = typeof cartList;
