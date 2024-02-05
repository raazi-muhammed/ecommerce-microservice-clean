import NavBar from "./layout/user/NavBar";
import HomePage from "./pages/user/HomePage";
import UserLoginPage from "./pages/user/LoginPage";
import AdminLoginPage from "./pages/admin/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/user/SignUpPage";
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
        </BrowserRouter>
    );
}

export default App;
