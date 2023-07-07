import joi from 'joi';

export const PostQuery = (): joi.Schema => {
    const bodySchema = joi.object({
        countries: joi.array().items(joi.string()),
        intrests: joi.array().items(joi.string()),
        travelersCount: joi.string().regex(/[0-9]+/).required().error(new Error("Invalid count, must be of type [0-9] or [0-9]+")),
        budget: joi.string().required(),
        currency: joi.string().optional().allow('')
    });
    return bodySchema;
}