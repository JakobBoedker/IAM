import { Table, ReferenceColumn } from '@servicenow/sdk/core'

export const sys_user = Table({
    augments: 'sys_user',
    schema: {
        x_2194970_iam_job_role: ReferenceColumn({
            label: 'Job Role',
            referenceTable: 'x_2194970_iam_job_role',
        }), 
    }
})