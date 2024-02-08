import { Card, CardBody, Image, Button } from "@nextui-org/react";
import { IoCart as CartIcon } from "react-icons/io5";
import { ProductType } from "../../types/databaseTypes";
import API from "../../lib/client";

const ProductCard = ({ product }: { product: ProductType }) => {
    function handleAddToCart() {
        const api = new API();

        api.product().post("/add-to-cart", { params: { id: product._id } });
    }

    return (
        <Card className="p-4" isPressable={true}>
            <CardBody className="overflow-visible p-0 gap-4 grid grid-cols-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-full aspect-square"
                    src={product.images[0].url}
                />
                <section className="my-auto">
                    <section className="text-start">
                        <h4 className="font-bold text-large">
                            {product.title}
                        </h4>
                        <small className="text-default-500">
                            {product.description}
                        </small>
                    </section>
                    <Button
                        onClick={handleAddToCart}
                        className="mt-2"
                        variant="flat"
                        color="primary"
                        size="sm"
                        aria-label="Add to cart"
                        startContent={<CartIcon size="1.3em" />}>
                        Add to cart
                    </Button>
                </section>
            </CardBody>
        </Card>
    );
};

export default ProductCard;
