export default function buildAddProduct() {
    return function makeProduct({
        title,
        description,
        images,
        price,
    }: {
        title: string;
        description: string;
        images: { url: string }[];
        price: number;
    }) {
        if (!title || !description) throw new Error("Invalid data");
        if (price < 1) throw new Error("Invalid price");
        if (images.length < 1) throw new Error("Add at least one image");

        return Object.freeze({
            title,
            description,
            images,
            price,
            isDeleted: false,
        });
    };
}
