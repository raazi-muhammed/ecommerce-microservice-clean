import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Container from "../common/Container";

export default function AdminLayout() {
    return (
        <Container>
            <div className="grid place-content-center my-8">
                <TopBar />
            </div>
            <div className="p-6">
                <Outlet />
            </div>
        </Container>
    );
}
