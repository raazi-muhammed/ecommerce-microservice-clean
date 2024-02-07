import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import "./database/db.js";
import userModel from "./modal/userModel.js";
import authRoutes from "./routes/index.js";
import cors from "cors";

const app = express();
dotenv.config();
if (!process.env.PORT) {
    console.error("ENV not loaded");
}

const PORT = process.env.PORT;

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:8080", "http://localhost:4003"],
        credentials: true,
    })
);
app.get("/api/auth/get-user", async (req, res) => {
    const data = await userModel.find();
    res.status(200).json({
        success: true,
        message: "User logged in",
        data,
    });
});

app.use("/api/auth", authRoutes);

app.get("*", (req, res) => {
    console.log(req.method, req.originalUrl);

    console.log("Auth server reached");
    res.send("Auth server reached");
});

app.listen(PORT, () => {
    console.log(`Server Started\t: http://localhost:${PORT}`);
});
