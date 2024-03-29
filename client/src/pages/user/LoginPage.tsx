import { zodResolver } from "@hookform/resolvers/zod";
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Input,
} from "@nextui-org/react";
import { useState } from "react";
import { IoEye as EyeOpenIcon } from "react-icons/io5";
import { IoEyeOff as EyeCloseIcon } from "react-icons/io5";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Link, useNavigate } from "react-router-dom";
import API from "../../lib/client";
import toast from "react-hot-toast";
import cookie from "js-cookie";

const schema = z.object({
    email: z.string().email(),
    password: z.string().min(6, "Password should be at least 6 characters"),
});

export default function LoginPage() {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);
    const navigate = useNavigate();

    const form = useForm<z.infer<typeof schema>>({
        defaultValues: {
            email: "",
            password: "",
        },
        mode: "onTouched",
        resolver: zodResolver(schema),
    });

    const { register, handleSubmit, formState } = form;
    const { errors, isDirty, isValid, isSubmitting } = formState;

    const handleLogUser = async (values: z.infer<typeof schema>) => {
        const api = new API();
        const response = await api
            .auth()
            .post("/login", { data: values }, { toast });
        cookie.set("__emc-user-token", response.data.token);
        navigate("/");
    };

    return (
        <div className="grid place-content-center h-screen">
            <Card className="w-screen max-w-sm">
                <CardHeader>
                    <p className="mx-1 mt-2 text-3xl font-bold">Login</p>
                </CardHeader>
                <CardBody>
                    <form
                        className="space-y-4"
                        onSubmit={handleSubmit(handleLogUser)}
                        noValidate>
                        <Input
                            {...register("email")}
                            type="email"
                            label="Email"
                            variant="bordered"
                            isInvalid={!!errors.email}
                            errorMessage={errors.email?.message}
                            className="w-full"
                        />
                        <Input
                            {...register("password")}
                            label="Password"
                            variant="bordered"
                            endContent={
                                <button
                                    className="focus:outline-primary rounded-full my-auto w-6 h-6"
                                    type="button"
                                    onClick={toggleVisibility}>
                                    {isVisible ? (
                                        <EyeCloseIcon className="text-default-500 pointer-events-none" />
                                    ) : (
                                        <EyeOpenIcon className="text-default-500 pointer-events-none" />
                                    )}
                                </button>
                            }
                            isInvalid={!!errors.password}
                            errorMessage={errors.password?.message}
                            type={isVisible ? "text" : "password"}
                            className="w-full"
                        />
                        <Button
                            isLoading={isSubmitting}
                            isDisabled={!isDirty || !isValid}
                            type="submit"
                            className="w-full"
                            color="primary">
                            Login
                        </Button>
                    </form>
                </CardBody>
                <CardFooter>
                    <Link
                        to="/sign-up"
                        className="text-center text-xs mx-auto mb-2 -mt-2 hover:text-primary-500 hover:underline">
                        Don't have an account? Sign Up
                    </Link>
                </CardFooter>
            </Card>
        </div>
    );
}
