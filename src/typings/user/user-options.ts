import { UserStaffNameLanguage, UserTitleLanguage } from ".";
import { ListActivityOption } from "../list-activity-option";
import { NotificationOption } from "../notification";

export interface UserOptions {
    titleLanguage?: UserTitleLanguage | null;
    displayAdultContent?: boolean | null;
    airingNotifications?: boolean | null;
    profileColor?: string | null;
    notificationOptions?: Array<NotificationOption> | [];
    timezone?: string | null;
    activityMergeTime?: number | null;
    staffNameLanguage?: UserStaffNameLanguage | null;
    restrictMessagesToFollowing?: boolean | null;
    disabledListActivity?: Array<ListActivityOption> | [];
}