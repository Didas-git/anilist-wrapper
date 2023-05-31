import { StaffSort } from "./staff-sort";

export interface StaffArguments {
    id?: number;
    isBirthday?: boolean;
    search?: string;
    id_not?: number;
    id_in?: Array<number>;
    id_not_in?: Array<number>;
    sort?: Array<StaffSort>;
}