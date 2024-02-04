import Container from "../../layout/common/Container";
import ProductCard from "../../features/product/ProductCard";

const HomePage = () => {
    return (
        <Container>
            <section className="grid grid-cols-3">
                <ProductCard />
            </section>
        </Container>
    );
};

export default HomePage;
