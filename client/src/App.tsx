import NavBar from "./layout/user/NavBar";
import HomePage from "./pages/user/HomePage";
import LoginPage from "./pages/user/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUpPage from "./pages/user/SignUpPage";
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
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
            </Routes>
        </BrowserRouter>
    );
}

export default App;
