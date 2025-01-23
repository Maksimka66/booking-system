import Router from "express";

import {
    getClients,
    deleteClient,
    getClient,
    putClient,
    addClient,
} from "./modules/client/client.controllers.js";

const router = new Router();

router.get("/clients", getClients);
router.post("/clients", addClient);
router.get("/clients/:id", getClient);
router.put("/clients/:id", putClient);
router.delete("/clients/:id", deleteClient);

export default router;
