import { ProductObjectType, ProductType } from "../models/productModel.js";
import { ProductListType } from "./index.js";

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
            return await database.deleteOne({ _id: id });
            //return await database.updateOne({ _id: id }, { isDeleted: true });
        },
        getById: async function ({
            id,
        }: {
            id: string;
        }): Promise<ProductType | null> {
            try {
                return await database.findById(id);
            } catch (error) {
                return null;
            }

            //return await database.updateOne({ _id: id }, { isDeleted: true });
        },
    });
}
