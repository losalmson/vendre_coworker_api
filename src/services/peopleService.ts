import { ICoworker } from "../models/ICoworker";
import { get } from "./serviceBase";

const BASE_URL = 
"https://reqres.in/api/users";

export const getCoworkers = async (): Promise<ICoworker[]> => {
    return await get<ICoworker[]>(BASE_URL);
};