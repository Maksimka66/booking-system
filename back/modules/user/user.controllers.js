import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import "dotenv/config";

import { clientSchema } from "./dtoUser.js";
import {
    addClientService,
    deleteClientService,
    getAllClientsService,
    getOneClientService,
    updateClientService,
} from "./user.service.js";

export const getUsers = async (_, res) => {
    try {
        const allClients = await getAllClientsService();

        return res.json(allClients);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const getUser = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json("No such ID for clients");
        }

        const isValid = mongoose.Types.ObjectId.isValid(req.params.id);

        if (!isValid) {
            return res.status(400).json("ID isn`t correct");
        }

        const oneClient = await getOneClientService(req.params.id);

        return res.json(oneClient);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const addUser = async (req, res) => {
    try {
        await clientSchema.validateAsync(req.body);

        const password = await bcryptjs.hash(req.body.password, 5);

        await addClientService({
            ...req.body,
            password,
        });

        const token = jwt.sign(req.body.email, process.env.ACCESS_TOKEN);

        res.status(201).json({
            username: req.body.username,
            email: req.body.email,
            token,
        });
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const deleteUser = async (req, res) => {
    try {
        if (!req.params.id) {
            return res.status(400).json("No such ID for clients");
        }

        const isValid = mongoose.Types.ObjectId.isValid(req.params.id);

        if (!isValid) {
            return res.status(400).json("ID isn`t correct");
        }

        const deletedClient = await deleteClientService(req.params.id);

        return res.json(deletedClient);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const putUser = async (req, res) => {
    try {
        await clientSchema.validateAsync(req.body);

        if (!req.params.id) {
            return res.status(400).json("No such ID for clients");
        }

        const isValid = mongoose.Types.ObjectId.isValid(req.params.id);

        if (!isValid) {
            return res.status(400).json("ID isn`t correct");
        }

        const updatedClient = await updateClientService(
            req.params.id,
            req.body
        );

        return res.json(updatedClient);
    } catch (e) {
        res.status(500).json(e.message);
    }
};