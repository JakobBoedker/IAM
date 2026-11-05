import { Role } from '@servicenow/sdk/core'

export const adminRole = Role({
    $id: Now.ID['rest_iam_admin_role'],
    name: 'x_2194970_iam.IAM-Admin',
    description: 'Gives access to the application menu and the REST API for IAM.'
})