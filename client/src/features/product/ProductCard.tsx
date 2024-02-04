import { Card, CardBody, Image, CardFooter, Button } from "@nextui-org/react";
import { IoCart as CartIcon } from "react-icons/io5";

const ProductCard = () => {
    return (
        <Card className="py-4" isPressable={true}>
            <CardBody className="overflow-visible py-2">
                <Image
                    alt="Card background"
                    className="object-cover rounded-xl w-full aspect-square"
                    src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D"
                />
            </CardBody>
            <CardFooter className="flex justify-between align-bottom">
                <section className="text-start">
                    <small className="text-default-500">12 Tracks</small>
                    <h4 className="font-bold text-large">Frontend Radio</h4>
                </section>
                <Button
                    isIconOnly
                    variant="flat"
                    color="primary"
                    aria-label="Add to cart">
                    <CartIcon size="1.3em" />
                </Button>
            </CardFooter>
        </Card>
    );
};

export default ProductCard;
