import joi from 'joi';

export const AdminSignIn = (): joi.Schema => {
    const schema = joi.object({
        username: joi.string().required().valid("admin").error(new Error("Invalid Username")),
        password: joi.string().required().valid("rootAdmin007").error(new Error("Invalid Password"))
    });
    return schema;
}


export const AdminDeleteQuery = (): joi.Schema => {
    const schema = joi.object({
        id: joi.string().required()
    })
    return schema;

}