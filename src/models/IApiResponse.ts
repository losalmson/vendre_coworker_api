import { ICoworker } from "./ICoworker";

export interface IApiResponse {
    data: ICoworker[];
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
} 