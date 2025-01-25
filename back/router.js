import Router from "express";

import {
    getUsers,
    deleteUser,
    getUser,
    putUser,
    addUser,
    signInUser,
} from "./modules/user/user.controllers.js";

const router = new Router();

router.get("/", getUsers);
router.post("/signup", addUser);
router.post("/signin", signInUser);
router.get("/:id", getUser);
router.put("/:id", putUser);
router.delete("/:id", deleteUser);

export default router;
