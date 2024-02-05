import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
if (!process.env.PORT) {
    console.error("ENV not loaded");
}
const PORT = process.env.PORT;

app.get("/", (req, res) => {
    res.send("Auth server reached");
    console.log("Auth server reached");
});

app.listen(PORT, () => {
    console.log(`Server Started\t: http://localhost:${PORT}`);
});
