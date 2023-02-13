import { StudioSort } from "./studio-sort";

export interface StudioArguments {
    id?: number;
    search?: string;
    id_not?: number;
    id_in?: Array<number>;
    id_not_in?: Array<number>;
    sort?: Array<StudioSort>
}