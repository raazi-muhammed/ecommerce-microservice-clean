import productModel from "../models/productModel.js";
import makeProductList from "./productList.js";

export const productList = makeProductList({ database: productModel });

export type ProductListType = typeof productList;
