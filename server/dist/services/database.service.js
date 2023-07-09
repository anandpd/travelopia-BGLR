"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbService = void 0;
class DatabaseService {
    async Find(model, filter) {
        try {
            const data = await model.find(filter).sort({ _id: -1 });
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async FindOne(model, filter) {
        try {
            const data = await model.findOne(filter);
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async Create(model, data) {
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
    }
    async UpdateByPK(model, pk) {
        try {
            const data = await model.findByIdAndUpdate(pk, { new: true });
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async UpdateOne(model, filter) {
        try {
            const data = await model.findOneAndUpdate({ ...filter }, { new: true });
            return data;
        }
        catch (error) {
            throw error;
        }
    }
    async Remove(model, filter) {
        try {
            const data = await model.findOneAndRemove({ ...filter }, { new: true });
            return data;
        }
        catch (error) {
            throw error;
        }
    }
}
exports.dbService = new DatabaseService();
