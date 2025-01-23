import express from "express";
import mongoose from "mongoose";

import router from "./router.js";

const PORT = 5000;
const DB_URL =
    "mongodb+srv://user:qwerty123456@cluster0.2sv7k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const app = express();

app.use(express.json());
app.use("/users", router);

async function startApp() {
    try {
        await mongoose.connect(DB_URL);
        app.listen(PORT, () => {
            console.log("STARTED!");
        });
    } catch (e) {
        console.log(e);
    }
}

startApp();
