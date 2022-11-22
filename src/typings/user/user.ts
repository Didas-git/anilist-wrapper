import { UserAvatar, UserOptions, UserPreviousName, UserStatisticTypes } from ".";
import { Favourites } from "../favourites";
import { MediaListOptions } from "../media";
import { ModRole } from "../mod-role";

export interface User {
    id?: number;
    name?: string;
    about?: string | null;
    avatar?: UserAvatar | null;
    bannerImage?: string | null;
    isFollowing?: boolean | null;
    isFollower?: boolean | null;
    isBlocked?: boolean | null;
    bans?: unknown;
    options?: UserOptions | null;
    mediaListOptions?: MediaListOptions | null;
    favourites?: Favourites | null;
    statistics?: UserStatisticTypes | null;
    unreadNotificationCount?: number | null;
    siteUrl?: string | null;
    donatorTier?: number | null;
    donatorBadge?: string | null;
    moderatorRoles?: Array<ModRole> | [];
    createdAt?: number | null;
    updatedAt?: number | null;
    previousNames?: Array<UserPreviousName> | [];
}