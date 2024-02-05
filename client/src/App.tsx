import NavBar from "./layout/user/NavBar";
import HomePage from "./pages/user/HomePage";
import UserLoginPage from "./pages/user/LoginPage";
import AdminLoginPage from "./pages/admin/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/user/SignUpPage";
import { Toaster } from "react-hot-toast";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<UserLoginPage />} />
                <Route path="/sign-up" element={<SignUpPage />} />
                <Route
                    path="/"
                    element={
                        <>
                            <NavBar />
                            <HomePage />
                        </>
                    }
                />
                <Route path="/admin/login" element={<AdminLoginPage />} />
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
