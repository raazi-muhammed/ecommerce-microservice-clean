import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Avatar,
} from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import { IoBag as ShopIcon } from "react-icons/io5";

export default function NavBar() {
    const navigate = useNavigate();
    return (
        <Navbar>
            <NavbarBrand>
                <Link to="/" className="flex gap-2 align-middle">
                    <ShopIcon className="my-auto mb-1" size="1.2em" />
                    <p className="font-bold text-xl">Shop</p>
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link to="/sign-up" aria-current="page" color="secondary">
                        Signup
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" to="/login">
                        Login
                    </Link>
                </NavbarItem>
            </NavbarContent>

            <NavbarContent as="div" justify="end">
                <Dropdown
                    placement="bottom-end"
                    className="dark text-foreground">
                    <DropdownTrigger>
                        <Avatar
                            isBordered
                            showFallback
                            as="button"
                            className="transition-transform"
                            size="sm"
                        />
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Profile Actions" variant="flat">
                        <DropdownItem key="profile" className="h-14 gap-2">
                            <p className="font-semibold">Signed in as</p>
                            <p className="font-semibold">test@test.com</p>
                        </DropdownItem>
                        <DropdownItem
                            key="settings"
                            onClick={() => navigate("/profile")}>
                            Profile
                        </DropdownItem>
                        <DropdownItem
                            key="settings"
                            onClick={() => navigate("/cart")}>
                            <Link to="/cart">Cart</Link>
                        </DropdownItem>
                        <DropdownItem key="logout" color="danger">
                            Log Out
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
}
