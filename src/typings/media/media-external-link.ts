import { ExternalLinkType } from "../external-link-type";

export interface MediaExternalLink {
    id?: number;
    url?: string | null;
    site?: string;
    siteId?: number | null;
    type?: ExternalLinkType | null;
    language?: string | null;
    color?: string | null;
    icon?: string | null;
    notes?: string | null;
    isDisabled?: boolean | null;
}