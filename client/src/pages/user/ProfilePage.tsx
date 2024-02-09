import { useEffect, useState } from "react";
import API from "../../lib/client";
import { UserType } from "../../types/databaseTypes";
import { Avatar, Card } from "@nextui-org/react";
import {
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
import { IoPencil as EditIcon } from "react-icons/io5";

const schema = z.object({
    email: z.string().email(),
    username: z.string().min(3, "Username should be at least 3 characters"),
});

export default function ProfilePage() {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const [refresh, setRefresh] = useState(false);
    const refreshPage = () => setRefresh((r) => !r);
    const [user, setUser] = useState<UserType | null>(null);

    /* Edit profile */
    const form = useForm<z.infer<typeof schema>>({
        defaultValues: {
            email: user?.email,
            username: user?.username,
        },
        mode: "onTouched",
        resolver: zodResolver(schema),
    });

    const { register, handleSubmit, formState } = form;
    const { errors, isDirty, isValid, isSubmitting } = formState;

    const handleAddProduct = async (values: z.infer<typeof schema>) => {
        console.log(values);

        const api = new API();

        api.user()
            .put("/edit-user", { data: values })
            .then((res) => {
                console.log(res);
            })
            .finally(() => refreshPage());
    };

    /* featch user */
    useEffect(() => {
        const api = new API();
        api.auth()
            .get("/current-user")
            .then((res) => {
                setUser(res.data as UserType);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [refresh]);

    return (
        <div className="mt-8">
            {user ? (
                <section className="space-y-4 max-w-md mx-auto">
                    <Avatar
                        isBordered
                        showFallback
                        src="a;slkj"
                        className="w-32 h-32 text-large mx-auto"
                    />
                    <Card className="p-4">
                        <small className="text-default-500">USERNAME</small>
                        <p className="text-lg">{user.username}</p>
                    </Card>
                    <Card className="p-4">
                        <small className="text-default-500">EMAIL</small>
                        <p className="text-lg">{user.email}</p>
                    </Card>
                    <Button
                        color="primary"
                        onPress={onOpen}
                        startContent={<EditIcon />}
                        className="w-full"
                        variant="flat">
                        Edit profile
                    </Button>
                </section>
            ) : (
                <p>No data</p>
            )}
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
                                    Edit Profile
                                </ModalHeader>
                                <ModalBody>
                                    <Input
                                        defaultValue={user?.username}
                                        {...register("username")}
                                        type="text"
                                        label="Username"
                                        variant="bordered"
                                        isInvalid={!!errors.username}
                                        errorMessage={errors.username?.message}
                                        className="w-full"
                                    />
                                    <Input
                                        defaultValue={user?.email}
                                        {...register("email")}
                                        type="text"
                                        label="Email"
                                        variant="bordered"
                                        isInvalid={!!errors.email}
                                        errorMessage={errors.email?.message}
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
                                        Edit
                                    </Button>
                                </ModalFooter>
                            </form>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
