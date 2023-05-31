import type { CountryCode } from "../country-code";
import type { Statistic } from "../statistic";

export interface UserCountryStatistic extends Statistic {
    country?: CountryCode | null;
}