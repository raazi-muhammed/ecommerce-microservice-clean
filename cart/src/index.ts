import express, { response } from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import "./database/connect.js";
import cors from "cors";
import axios from "axios";
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

app.get("/api/cart/get-cart", (req, res) => {
    console.log("get cart");
    axios
        .get("http://auth:4000/api/auth/current-user", {
            headers: {
                Authorization: req.headers.authorization,
            },
        })
        .then((response) => {
            console.log({ data: response.data.data.data });
            res.send(response.data.data);
        })
        .catch((err) => {
            console.log({ err });
            res.send({ err });
        });
});

app.get("*", (req, res) => {
    console.log(req.method, req.originalUrl);

    console.log("Cart server reached");
    res.send("Cart server reached");
});

app.listen(PORT, () => {
    console.log(`Server Started\t: http://localhost:${PORT}`);
});
