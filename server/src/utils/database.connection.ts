import mongoose from "mongoose";
import { logger } from "./logger";

export const connectDB = async (connectionURL: string) => {
    try {
        await mongoose.connect(connectionURL, {});
        logger.info(`Database connected successfully !`);
    } catch (error) {
        logger.error(`Error in connecting databse with connection url = ${connectionURL}`);
    }
}