import Clients from "./user.model.js";

export const getAllClientsService = async () => {
    return await Clients.find();
};

export const getOneClientService = async (id) => {
    return await Clients.findById(id);
};

export const addClientService = async (client) => {
    return await Clients.create(client);
};

export const deleteClientService = async (id) => {
    return await Clients.findByIdAndDelete(id);
};

export const updateClientService = async (id, client) => {
    return await Clients.findByIdAndUpdate(id, client, {
        new: true,
    });
};
