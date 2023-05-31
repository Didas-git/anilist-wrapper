import type { Staff } from ".";

export interface StaffRoleType {
    voiceActor?: Staff | null;
    roleNotes?: string | null;
    dubGroup?: string | null;
}