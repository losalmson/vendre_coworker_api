import { IApiResponse } from "../models/IApiResponse";
import { get } from "./serviceBase";

const BASE_URL = 
"https://reqres.in/api/users";

export const getCoworkers = async (): Promise<IApiResponse> => {
    return await get<IApiResponse>(BASE_URL);
};