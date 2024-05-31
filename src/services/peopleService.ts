import { IApiResponse } from "../models/IApiResponse";
import { get } from "./serviceBase";

const BASE_URL = "https://reqres.in/api/users";

export const getCoworkers = async (page: number): Promise<IApiResponse> => {
    const url = `${BASE_URL}?page=${page}`;
    return await get<IApiResponse>(url);
};
