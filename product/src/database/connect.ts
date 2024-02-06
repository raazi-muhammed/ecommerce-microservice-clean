import mongoose from "mongoose";
const URL: string | undefined = process.env.DB_URL;

if (URL) {
    mongoose
        .connect(URL)
        .then(() => console.log("Product database status\t: Connected"))
        .catch((err) => {
            console.log(err);
        });
} else console.log("Product database status\t: CANNOT CONNECT: No url");
