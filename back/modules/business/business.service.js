import Business from "./business.model.js";

export const getAllBusinessService = async () => {
    const business = await Business.find();

    return business;
};

export const getOneBusinessService = async (id) => {
    if (!id) {
        throw new Error("No such ID for clients");
    }

    const business = await Business.findById(id);

    return business;
};

export const addBusinessService = async (business) => {
    const addedBusiness = await Business.create(business);

    return addedBusiness;
};

export const deleteBusinessService = async (id) => {
    if (!id) {
        throw new Error("No such ID for clients");
    }
};

export const updateBusinessService = async (id, business) => {
    if (!id) {
        throw new Error("No such ID for clients");
    }

    const updatedBusiness = await Business.findByIdAndUpdate(id, business, {
        new: true,
    });

    return updatedBusiness;
};
