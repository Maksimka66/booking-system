import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";

import router from "./router.js";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/users", router);

const PORT = process.env.PORT;

async function startApp() {
    try {
        await mongoose.connect(process.env.DB_URL);
        app.listen(PORT || 5000, () => {
            console.log(`Server running, port ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

startApp();
