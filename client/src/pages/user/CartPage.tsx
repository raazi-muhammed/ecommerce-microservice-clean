import { useEffect, useState } from "react";
import API from "../../lib/client";
import { ProductType } from "../../types/databaseTypes";
import { Button, Card, CardBody, Image } from "@nextui-org/react";
import { IoCart as CartIcon } from "react-icons/io5";

export default function CartPage() {
    const [refresh, setRefresh] = useState(false);
    const refreshPage = () => setRefresh((r) => !r);

    const [cartItems, setCartItems] = useState<
        {
            userId: string;
            _id: string;
            product: ProductType;
        }[]
    >([]);

    useEffect(() => {
        const api = new API();
        api.cart()
            .get("/user-cart")
            .then((res) => {
                console.log(res);
                setCartItems(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [refresh]);

    function handleRemoveFromCart(id: string) {
        const api = new API();

        api.cart()
            .delete("/remove-from-cart", { params: { id } })
            .finally(() => {
                refreshPage();
            });
    }

    return (
        <div>
            <section className="space-y-4">
                {cartItems.map((item) => (
                    <Card className="p-4 mx-auto" isPressable={true}>
                        <CardBody className="overflow-visible p-0 gap-4 flex-row">
                            <Image
                                alt="Card background"
                                className="object-cover rounded-xl max-w-36 aspect-square "
                                src={item.product.images[0].url}
                            />
                            <section className="my-auto w-36">
                                <section className="text-start">
                                    <h4 className="font-bold text-large">
                                        {item.product.title}
                                    </h4>
                                    <small className="text-default-500">
                                        {item.product.description}
                                    </small>
                                </section>
                            </section>
                            <Button
                                onClick={() => handleRemoveFromCart(item._id)}
                                isIconOnly
                                className="my-auto"
                                variant="flat"
                                color="danger"
                                aria-label="Remove from cart">
                                <CartIcon />
                            </Button>
                        </CardBody>
                    </Card>
                ))}
            </section>
        </div>
    );
}
