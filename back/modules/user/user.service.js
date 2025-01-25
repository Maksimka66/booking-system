import Clients from "./user.model.js";

export const getAllClientsService = async () => {
    return await Clients.find({ role: "business" }).select("-password");
};

export const getOneClientService = async (id) => {
    return await Clients.findById(id).select("-password");
};

export const compareUserService = async (email) => {
    return await Clients.findOne({ email });
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
    }).select("-password");
};
