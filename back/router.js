import Router from "express";

import {
    getUsers,
    deleteUser,
    getUser,
    putUser,
    addUser,
} from "./modules/user/user.controllers.js";
import { signIn, signUp } from "./modules/auth/auth.controller.js";

const router = new Router();

router.post("/signup", signUp);
router.post("signin", signIn);

router.get("/", getUsers);
router.post("/signup", addUser);
router.post("/signin");
router.get("/:id", getUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
