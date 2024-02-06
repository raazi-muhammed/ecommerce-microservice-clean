import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import productRoutes from "./routes/index.js";
import "./database/connect.js";

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

app.use("/api/product", productRoutes);

app.get("*", (req, res) => {
    console.log(req.method, req.originalUrl);

    res.send("Product server reached");
    console.log("Product server reached");
});

app.listen(PORT, () => {
    console.log(`Server Started\t: http://localhost:${PORT}`);
});
