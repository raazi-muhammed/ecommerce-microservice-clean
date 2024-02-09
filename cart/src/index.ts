import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "./database/connect.js";
import cors from "cors";
import amqp from "amqplib";
import "./events/index.js";
import cartRoutes from "./routes/index.js";

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

app.use("/api/cart", cartRoutes);

app.get("*", (req, res) => {
    console.log(req.method, req.originalUrl);

    console.log("Cart server reached");
    res.send("Cart server reached");
});

app.listen(PORT, () => {
    console.log(`Server Started\t: http://localhost:${PORT}`);
});
