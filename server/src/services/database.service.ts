import mongoose from "mongoose";


class DatabaseService {
    async Find(model: mongoose.Model<any>, filter: any) {
        try {
            const data = await model.find(filter).sort({ _id: -1 });
            return data;
        } catch (error) {
            throw error;
        }
    }
    async FindOne(model: mongoose.Model<any>, filter: any) {
        try {
            const data = await model.findOne(filter);
            return data;
        } catch (error) {
            throw error;
        }
    }
    async Create(model: mongoose.Model<any>, data: any) {
        try {
            const newObj = {
                ...data
            };
            let newInstance = new model(newObj);
            await newInstance.save();
            return newInstance;
        } catch (error) {
            throw error;
        }
    }
    async UpdateByPK(model: mongoose.Model<any>, pk: any) {
        try {
            const data = await model.findByIdAndUpdate(pk, { new: true });
            return data;
        } catch (error) {
            throw error;
        }
    }
    async UpdateOne(model: mongoose.Model<any>, filter: any) {
        try {
            const data = await model.findOneAndUpdate({ ...filter }, { new: true });
            return data;
        } catch (error) {
            throw error;
        }
    }
    async Remove(model: mongoose.Model<any>, filter: any) {
        try {
            const data = await model.findOneAndRemove({ ...filter });
            return data;
        } catch (error) {
            throw error;
        }
    },
    async RemoveByPK(model: mongoose.Model<any>, id: any) {
        try {
            const data = await model.findByIdAndRemove(new mongoose.Schema.Types.ObjectId(id));
            return data;
        } catch (error) {
            throw error;
        }
    },
}

export const dbService = new DatabaseService();
