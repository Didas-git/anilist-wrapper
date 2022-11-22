import { CountryCode } from "../country-code";
import { Statistic } from "../statistic";

export interface UserCountryStatistic extends Statistic {
    country?: CountryCode | null;
}