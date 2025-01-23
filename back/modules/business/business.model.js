import mongoose from "mongoose";

const Business = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true },
    role: { type: String, required: true },
    phone: { type: Number },
});

export default mongoose.model("Clients", Business);
