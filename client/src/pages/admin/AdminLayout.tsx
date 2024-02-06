import { Outlet } from "react-router-dom";
import TopBar from "../../layout/admin/TopBar";
import Container from "../../layout/common/Container";

export default function AdminLayout() {
    return (
        <Container>
            <TopBar />
            <Outlet />
        </Container>
    );
}
