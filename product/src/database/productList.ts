import { Document, Model } from "mongoose";
import { ProductObjectType, ProductType } from "../models/productModel.js";

export default function makeProductList({ database }) {
    return Object.freeze({
        add: async function (productData: ProductObjectType) {
            return await database.create(productData);
        },
        getAll: async function () {
            return await database.find();
            /* return await database.updateMany(
                { isDeleted: false },
                { upsert: true }
            ); */
        },
        deleteById: async function ({ id }: { id: string }) {
            return await database.updateOne({ _id: id }, { isDeleted: true });
        },
    });
}
