import { RestApi } from '@servicenow/sdk/core'
import { acl } from './acl.now'


export const iam_automation_tasks_api = RestApi({
    $id: Now.ID['iam_automation_tasks'],
    name: 'IAM Automation Tasks',
    serviceId: 'iam_automation_tasks',
    consumes: 'application/json',
    routes: [
        {
            $id: Now.ID['autommation_tasks'],
            version: 1,
            path: 'iam/update_automation_tasks',
            method: 'POST',
            script: 'answer = gs.hasRole("x_2194970_iam.IAM-Admin")',
            enforceAcl: [acl],
        },
        {
            $id: Now.ID['automation_tasks_read'],
            version: 1,
            path: 'iam/get_automation_tasks',
            method: 'GET',
            script: 'answer = gs.hasRole("x_2194970_iam.IAM-Admin")',
            enforceAcl: [acl],
        }
    ],
    enforceAcl: [acl],
    versions: [
        {
            $id: Now.ID['v1-automation_tasks'],
            version: 1,
            isDefault: true,
        },
    ],
})
