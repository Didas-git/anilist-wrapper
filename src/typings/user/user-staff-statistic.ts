import { Staff } from "../staff";
import { Statistic } from "../statistic";

export interface UserStaffStatistic extends Statistic {
    staff?: Staff | null;
}