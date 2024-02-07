import { useEffect, useState } from "react";
import API from "../../lib/client";
import { ProductType } from "../../types/databaseTypes";
import {
    Card,
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Input,
} from "@nextui-org/react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { IoAddCircle as AddIcon } from "react-icons/io5";

const schema = z.object({
    title: z.string().min(3),
    description: z.string().min(12),
    image: z.string().min(1),
    price: z.number().min(10),
});

const AdminProductsPage = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [refresh, setRefresh] = useState(true);
    const refreshPage = () => setRefresh((r) => !r);

    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        const api = new API();
        api.product()
            .get("/all-product")
            .then((res) => {
                console.log(res);
                setProducts(res.data);
            });
    }, [refresh]);

    /* Add product */
    const form = useForm<z.infer<typeof schema>>({
        defaultValues: {
            title: "",
            description: "",
            price: 0,
        },
        mode: "onTouched",
        resolver: zodResolver(schema),
    });

    const { register, handleSubmit, formState } = form;
    const { errors, isDirty, isValid, isSubmitting } = formState;

    const handleAddProduct = async (values: z.infer<typeof schema>) => {
        console.log(values);

        const productData = {
            ...values,
            images: [{ url: values.image }],
        };

        const api = new API();

        api.product()
            .post("/add-product", { data: productData })
            .then((res) => {
                console.log(res);
            })
            .finally(() => refreshPage());
    };

    /* Delete product */
    function handleDeleteProduct(id: string) {
        const api = new API();
        api.product()
            .patch("/delete-product", { params: { id } }, { toast })
            .then((res) => {
                console.log(res);
            })
            .finally(() => refreshPage());
    }
    return (
        <div>
            <section className="flex justify-between">
                <p className="text-xl font-bold">Products</p>
                <Button
                    color="primary"
                    onPress={onOpen}
                    startContent={<AddIcon />}
                    variant="flat">
                    Add Product
                </Button>
            </section>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                className="dark text-foreground">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <form
                                onSubmit={handleSubmit(handleAddProduct)}
                                noValidate>
                                <ModalHeader className="flex flex-col gap-1">
                                    Add Product
                                </ModalHeader>
                                <ModalBody>
                                    <Input
                                        {...register("title")}
                                        type="text"
                                        label="Title"
                                        variant="bordered"
                                        isInvalid={!!errors.title}
                                        errorMessage={errors.title?.message}
                                        className="w-full"
                                    />
                                    <Input
                                        {...register("description")}
                                        label="Description"
                                        variant="bordered"
                                        isInvalid={!!errors.description}
                                        errorMessage={
                                            errors.description?.message
                                        }
                                        type="text"
                                        className="w-full"
                                    />
                                    <Input
                                        {...register("price", {
                                            valueAsNumber: true,
                                        })}
                                        label="Price"
                                        variant="bordered"
                                        isInvalid={!!errors.price}
                                        errorMessage={errors.price?.message}
                                        type="number"
                                        className="w-full"
                                    />
                                    <Input
                                        {...register("image")}
                                        label="Image"
                                        variant="bordered"
                                        isInvalid={!!errors.image}
                                        errorMessage={errors.image?.message}
                                        type="text"
                                        className="w-full"
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button
                                        color="danger"
                                        variant="light"
                                        onPress={onClose}>
                                        Close
                                    </Button>
                                    <Button
                                        isLoading={isSubmitting}
                                        isDisabled={!isDirty || !isValid}
                                        type="submit"
                                        color="primary">
                                        Add
                                    </Button>
                                </ModalFooter>
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal>
            <section className="flex flex-wrap gap-4">
                {products.map((product) => (
                    <Card className="p-4 grid grid-cols-2 gap-4">
                        <img
                            className="max-w-44 rounded-lg aspect-square object-cover"
                            src={product.images[0].url}
                            alt={`${product.title} image`}
                        />
                        <section className="my-auto space-y-4">
                            <section>
                                <p className="font-bold">{product.title}</p>
                                <small className="text-default-500">
                                    {product.description}
                                </small>
                            </section>
                            <p>
                                {new Intl.NumberFormat("en-IN", {
                                    style: "currency",
                                    currency: "USD",
                                }).format(product.price)}
                            </p>
                            <Button
                                onClick={() => handleDeleteProduct(product._id)}
                                color="danger"
                                variant="flat">
                                Delete
                            </Button>
                        </section>
                    </Card>
                ))}
            </section>
        </div>
    );
};

export default AdminProductsPage;
