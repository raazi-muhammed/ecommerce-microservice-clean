import { useEffect, useState } from "react";
import API from "../../lib/client";
import { ProductType } from "../../types/databaseTypes";
import ProductCard from "../../features/product/ProductCard";
import { Button } from "@nextui-org/react";

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
                    <div className="w-72">
                        <ProductCard product={item.product} />
                        <Button
                            onClick={() => handleRemoveFromCart(item._id)}
                            className="mt-2"
                            variant="flat"
                            color="danger"
                            size="sm"
                            aria-label="Add to cart">
                            Remove
                        </Button>
                    </div>
                ))}
            </section>
        </div>
    );
}
