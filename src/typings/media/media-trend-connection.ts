import { Connection } from "../connection";
import { MediaTrend, MediaTrendEdge } from ".";

export interface MediaTrendConnection extends Connection<MediaTrendEdge, MediaTrend> { }