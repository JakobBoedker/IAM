import { RestApi } from '@servicenow/sdk/core'
import { acl } from './acl.now'
import { onboarding, offboarding } from '../server/iam_rest.ts'

RestApi({
    $id: Now.ID['rest_iam_endpoint'],
    name: 'IAM Rest Endpoint',
    serviceId: 'iam_rest',
    consumes: 'application/json',
    routes: [
        {
            $id: Now.ID['onboarding'],
            version: 1,
            path: 'iam/onboarding',
            method: 'POST',
            script: onboarding,
            enforceAcl: [acl],
        },
        {
            $id: Now.ID['offboarding'],
            version: 1,
            path: 'iam/offboarding',
            method: 'POST',
            script: offboarding,
            enforceAcl: [acl],
        },
        {
            $id: Now.ID['mover'],
            version: 1,
            path: 'iam/mover',
            method: 'POST',
            script: 'answer = gs.hasRole("x_1311940_iam.IAM-Admin")',
            enforceAcl: [acl],
        },
    ],
    enforceAcl: [acl],
    versions: [
        {
            $id: Now.ID['v1'],
            version: 1,
            isDefault: true,
        },
    ],
})
