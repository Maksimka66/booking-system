import mongoose from "mongoose";

const Clients = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true },
        role: { type: String, required: true },
        password: { type: String, required: true },
    },
    {
        versionKey: false,
    }
);

export default mongoose.model("Clients", Clients);
