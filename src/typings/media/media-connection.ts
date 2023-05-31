import type { Connection } from "../connection";
import type { Media, IMediaEdge } from ".";

export interface MediaConnection extends Connection<IMediaEdge, Media> { }