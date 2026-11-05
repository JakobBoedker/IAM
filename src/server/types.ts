import type { GlideDateTime,  } from "@servicenow/glide";

export interface AutomationTask {
    active: string;
    status: string;
    user: string;
    system: string;
    role: string;
    approver_1: string;
    approver_2: string;
    ad_group_add: string[];
    ad_group_remove: string[];
    entra_id_group_add: string[];
    entra_id_group_remove: string[];
    message: string;
}