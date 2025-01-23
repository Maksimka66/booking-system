import {
    addClientService,
    deleteClientService,
    getAllClientsService,
    getOneClientService,
    updateClientService,
} from "./client.service.js";

export const getClients = async (_, res) => {
    try {
        const allClients = await getAllClientsService();

        return res.json(allClients);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const getClient = async (req, res) => {
    try {
        const oneClient = await getOneClientService(req.params.id);

        return res.json(oneClient);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const addClient = async (req, res) => {
    try {
        const addClient = await addClientService(req.body);

        res.status(201).json(addClient);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const deleteClient = async (req, res) => {
    try {
        const deletedClient = await deleteClientService(req.params.id);

        if (!deletedClient) {
            return res.status(400).json({ message: "No such client" });
        }

        return res.json(deletedClient);
    } catch (e) {
        res.status(500).json(e.message);
    }
};

export const putClient = async (req, res) => {
    try {
        const updatedClient = await updateClientService(
            req.params.id,
            req.body
        );

        return res.json(updatedClient);
    } catch (e) {
        res.status(500).json(e.message);
    }
};
