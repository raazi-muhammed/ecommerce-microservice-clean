import { useEffect, useState } from "react";
import API from "../../lib/client";
import { ProductType } from "../../types/databaseTypes";
import ProductCard from "../../features/product/ProductCard";

export default function CartPage() {
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
    }, []);
    return (
        <div>
            <section className="space-y-4">
                {cartItems.map((item) => (
                    <div className="w-72">
                        <ProductCard product={item.product} />
                    </div>
                ))}
            </section>
        </div>
    );
}
