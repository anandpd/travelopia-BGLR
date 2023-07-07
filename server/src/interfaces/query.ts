import { IQueries } from "../models/Queries";

export type QueryType = Pick<IQueries, "countries" | "intrests" | "travelersCount" | "budget" | "currency">
