import type { Statistic } from "../statistic";
import type { Staff } from "../staff";

export interface UserStaffStatistic extends Statistic {
    staff?: Staff | null;
}