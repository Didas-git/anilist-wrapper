import type { NotificationType } from ".";

export interface NotificationOption {
    type?: NotificationType | null;
    enabled?: boolean | null;
}