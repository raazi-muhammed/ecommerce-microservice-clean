import { Outlet } from "react-router-dom";
import Container from "../common/Container";
import Navbar from "./NavBar";

export default function UserLayout() {
    return (
        <Container>
            <Navbar />
            <Outlet />
        </Container>
    );
}
