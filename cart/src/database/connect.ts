import mongoose from "mongoose";
const URL: string | undefined = process.env.DB_URL;

if (URL) {
    mongoose
        .connect(URL)
        .then(() => console.log("Cart database status\t: Connected"))
        .catch((err) => {
            console.log(err);
        });
} else console.log("Cart database status\t: CANNOT CONNECT: No url");
