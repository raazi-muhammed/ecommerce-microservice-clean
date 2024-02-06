import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "./database/db.js";
import cors from "cors";
import userModel from "./models/userModel.js";

const app = express();
dotenv.config();
if (!process.env.PORT) {
    console.error("ENV not loaded");
}

const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
    cors({
        origin: ["http://localhost:8080"],
        credentials: true,
    })
);

app.get("/api/user/all-users", async (req, res) => {
    const data = await userModel.find();
    res.status(200).json({
        users: data,
    });
});

app.get("*", (req, res) => {
    console.log(req.method, req.originalUrl);

    res.send("User server reached");
    console.log("User server reached");
});

app.listen(PORT, () => {
    console.log(`Server Started\t: http://localhost:${PORT}`);
});
