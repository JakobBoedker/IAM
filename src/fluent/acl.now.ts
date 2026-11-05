import { Acl } from '@servicenow/sdk/core'

export const acl = Acl({
    $id: Now.ID['rest_iam_endpoint_acl'],
    type: 'rest_endpoint',
    name: 'IAM Rest Endpoint',
    script: 'answer = gs.hasRole("x_2194970_iam.IAM-Admin")',
    operation: 'execute'
})