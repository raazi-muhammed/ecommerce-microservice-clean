import HomePage from "./pages/user/HomePage";
import UserLoginPage from "./pages/user/LoginPage";
import AdminLoginPage from "./pages/admin/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/user/SignUpPage";
import { Toaster } from "react-hot-toast";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";
import AdminLayout from "./layout/admin/AdminLayout";
import ProfilePage from "./pages/user/ProfilePage";
import UserLayout from "./layout/user/UserLayout";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<UserLoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />

                <Route element={<UserLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path="/profile" element={<ProfilePage />} />
                </Route>
                <Route path="/admin">
                    <Route path="login" element={<AdminLoginPage />} />
                    <Route path="dashboard" element={<AdminLayout />}>
                        <Route path="users" element={<AdminUsersPage />} />
                        <Route
                            path="products"
                            element={<AdminProductsPage />}
                        />
                    </Route>
                </Route>
            </Routes>
            <Toaster
                toastOptions={{
                    className: "bg-[#18181B] text-white rounded-3xl",
                }}
            />
        </BrowserRouter>
    );
}

export default App;
