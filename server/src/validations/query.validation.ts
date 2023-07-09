import joi from 'joi';

export const PostQuery = (): joi.Schema => {
    const bodySchema = joi.object({
        countries: joi.array().items(joi.string()).min(1).required(),
        intrests: joi.array().items(joi.string()).min(1).required(),
        travelersCount: joi.string().regex(/[0-9]+/).required().error(new Error("Invalid count, must be of type [0-9] or [0-9]+")),
        budget: joi.string().required(),
        currency: joi.string().optional().allow(''),
        name: joi.string().required(),
        email: joi.string().email().required(),
        phn: joi.string().required().min(10).max(13)
    });
    return bodySchema;
}