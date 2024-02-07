import { Tabs, Tab } from "@nextui-org/react";
import { IoBag as ProductIcon, IoPerson as UserIcon } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
    const navigate = useNavigate();
    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="topbar" color="primary" variant="bordered">
                <Tab
                    key="products"
                    title={
                        <div
                            onClick={() => navigate("products")}
                            className="flex items-center space-x-2">
                            <ProductIcon />
                            <span>Products</span>
                        </div>
                    }
                />
                <Tab
                    key="users"
                    title={
                        <div
                            onClick={() => navigate("users")}
                            className="flex items-center space-x-2">
                            <UserIcon />
                            <span>Users</span>
                        </div>
                    }
                />
            </Tabs>
        </div>
    );
}
