import { Connection } from "../connection";
import { Media, MediaEdge } from ".";

export interface MediaConnection extends Connection<MediaEdge, Media> { }