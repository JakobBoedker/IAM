import { GlideDateTime, GlideRecord } from "@servicenow/glide";
import type { AutomationTask } from "./types";


export function onBoarding(request: string): void{

}


export function getAutomationTaskUtil(): AutomationTask[] {
    const collectedTasks: AutomationTask[] = [];

    const automationTaskGR = new GlideRecord('x_2194970_iam_automation_task');
    automationTaskGR.addQuery('active', true);
    automationTaskGR.addEncodedQuery('state=open');
    automationTaskGR.query();
    while (automationTaskGR.next()) {
        const task: AutomationTask = {
            active: automationTaskGR.getValue('active'),
            status: automationTaskGR.getValue('state'),
            user: automationTaskGR.getValue('user'),
            system: automationTaskGR.getValue('system'),
            role: automationTaskGR.getValue('role'),
            approver_1: automationTaskGR.getValue('approver_1'),
            approver_2: automationTaskGR.getValue('approver_2'),
            ad_group_add: automationTaskGR.getValue('ad_group_add') ? automationTaskGR.getValue('ad_group_add').split(',') : [],
            ad_group_remove: automationTaskGR.getValue('ad_group_remove') ? automationTaskGR.getValue('ad_group_remove').split(',') : [],
            entra_id_group_add: automationTaskGR.getValue('entra_id_group_add') ? automationTaskGR.getValue('entra_id_group_add').split(',') : [],
            entra_id_group_remove: automationTaskGR.getValue('entra_id_group_remove') ? automationTaskGR.getValue('entra_id_group_remove').split(',') : [],
            message: automationTaskGR.getValue('message')
        };
        collectedTasks.push(task);
    }
    return collectedTasks;
}

export function updateAutomationTaskUtil(taskNumber: string): string {
    let ans: string = 'Record Not Found';

    const automationTaskGR = new GlideRecord('x_2194970_iam_automation_task');
    automationTaskGR.addQuery('task_number', taskNumber);
    automationTaskGR.query();
    while (automationTaskGR.next()) {
        automationTaskGR.setValue('state', 'closed_complete');
        automationTaskGR.update();
        ans = '200';
    }
    return ans;
}
