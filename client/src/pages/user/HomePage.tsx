import Container from "../../layout/common/Container";
import ProductCard from "../../features/product/ProductCard";
import { useEffect, useState } from "react";
import API from "../../lib/client";
import { ProductType } from "../../types/databaseTypes";

const HomePage = () => {
    const [products, setProducts] = useState<ProductType[]>([]);

    useEffect(() => {
        const api = new API();

        api.product()
            .get("/all-product")
            .then((res) => setProducts(res.data));
    });

    return (
        <Container>
            <section className="grid grid-cols-3 gap-4">
                {products.map((product) => (
                    <ProductCard product={product} />
                ))}
            </section>
        </Container>
    );
};

export default HomePage;
