import mongoose from "mongoose";
import { CONSTANTS } from "../utils/constant";

export interface IQueryInstance extends IQueries {
    _id: string
}

export interface IQueries extends Document {
    countries: Array<string>,
    intrests: Array<string>,
    travelersCount: Number,
    budget: string,
    currency?: string,
    name: string,
    email: string,
    phn: string
}
const schema = new mongoose.Schema({
    countries: [
        {
            type: String,
            required: true
        }
    ],
    intrests: [
        {
            type: String,
            required: true
        }
    ],
    travelersCount: {
        type: String,
        required: true
    },
    budget: {
        type: String,
        required: true
    },
    currency: {
        type: String,
        default: "Rs."
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phn: {
        type: String,
        required: true
    }
}, {
    timestamps: true,
    versionKey: false
})

export const Queries = mongoose.model<IQueryInstance>(CONSTANTS.MODELS.QUERIES, schema);