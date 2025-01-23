import Clients from "./client.model.js";

export const getAllClientsService = async () => {
    const clients = await Clients.find();

    return clients;
};

export const getOneClientService = async (id) => {
    if (!id) {
        throw new Error("No such ID for clients");
    }

    const client = await Clients.findById(id);

    return client;
};

export const addClientService = async (client) => {
    const addedClient = await Clients.create(client);

    return addedClient;
};

export const deleteClientService = async (id) => {
    if (!id) {
        throw new Error("No such ID for clients");
    }

    const deletedClient = await Clients.findByIdAndDelete(id);

    return deletedClient;
};

export const updateClientService = async (id, client) => {
    if (!id) {
        throw new Error("No such ID for clients");
    }

    const updatedClient = await Clients.findByIdAndUpdate(id, client, {
        new: true,
    });

    return updatedClient;
};
