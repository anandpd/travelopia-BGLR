import { QueryClient } from "@tanstack/react-query";

export interface IQuery {
    _id: string,
    name: string,
    email: string,
    phn: string,
    createdAt: string,
    travelersCount: string,
    budget: string,
    countries: Array<string>,
    intrests: Array<string>,
    queryClient: QueryClient
}