import { Connection } from "../connection";
import { Media, IMediaEdge } from ".";

export interface MediaConnection extends Connection<IMediaEdge, Media> { }