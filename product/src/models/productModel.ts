import mongoose, { Document, InferSchemaType } from "mongoose";

export interface ProductObjectType {
    title: string;
    images: { url: string }[];
    description: string;
    price: number;
    isDeleted: boolean;
}

const productSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            //unique: true,
        },
        images: [
            {
                url: {
                    type: String,
                    required: true,
                },
            },
        ],
        description: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

export interface ProductType
    extends Document,
        InferSchemaType<typeof productSchema> {
    _id: string;
}

export default mongoose.model<ProductType>("Product", productSchema);
