import Joi from "joi";

export const clientSchema = Joi.object({
    username: Joi.string().min(3).max(30).required(),
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
        })
        .required(),
    password: Joi.string()
        .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
        .required(),
    role: Joi.string().alphanum().min(3).max(30).required(),
});
