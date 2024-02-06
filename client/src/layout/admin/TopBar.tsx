import { Tabs, Tab } from "@nextui-org/react";
import { IoBag as ProductIcon, IoPerson as UserIcon } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function TopBar() {
    return (
        <div className="flex w-full flex-col">
            <Tabs aria-label="topbar" color="primary" variant="bordered">
                <Tab
                    key="products"
                    title={
                        <NavLink to="products">
                            <div className="flex items-center space-x-2">
                                <ProductIcon />
                                <span>Products</span>
                            </div>
                        </NavLink>
                    }
                />
                <Tab
                    key="users"
                    title={
                        <NavLink to="users">
                            <div className="flex items-center space-x-2">
                                <UserIcon />
                                <span>Users</span>
                            </div>
                        </NavLink>
                    }
                />
            </Tabs>
        </div>
    );
}
