import { authSchema } from "./dtoAuth.js";

export const signUp = async (req, res) => {
    try {
        await authSchema.validateAsync(req.body);

        console.log(req.body);

        return res.body;
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const signIn = async (req, res) => {};
