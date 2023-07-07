"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
exports.db = {
    Find: async (model, filter) => {
        try {
            const data = await model.find(filter);
            return data;
        }
        catch (error) {
            throw error;
        }
    },
    FindOne: async (model, filter) => {
        try {
            const data = await model.findOne(filter);
            return data;
        }
        catch (error) {
            throw error;
        }
    },
    Create: async (model, data) => {
        try {
            const newObj = {
                ...data
            };
            let newInstance = new model(newObj);
            await newInstance.save();
            return newInstance;
        }
        catch (error) {
            throw error;
        }
    },
    UpdateByPK: async (model, pk) => {
        try {
            const data = await model.findByIdAndUpdate(pk, { new: true });
            return data;
        }
        catch (error) {
            throw error;
        }
    },
    UpdateOne: async (model, filter) => {
        try {
            const data = await model.findOneAndUpdate({ ...filter }, { new: true });
            return data;
        }
        catch (error) {
            throw error;
        }
    },
    Remove: async (model, filter) => {
        try {
            const data = await model.findOneAndRemove({ ...filter }, { new: true });
            return data;
        }
        catch (error) {
            throw error;
        }
    },
};
