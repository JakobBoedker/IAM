import { BooleanColumn, ChoiceColumn, DateTimeColumn, ListColumn, StringColumn, ReferenceColumn, Table } from '@servicenow/sdk/core'

export const x_1311940_iam_group = Table({
    name: 'x_1311940_iam_group',
    label: 'IAM Group',
    schema: {
        name: StringColumn({
            label: 'Name',
            mandatory: true,
        }),
        guid: StringColumn({
            label: 'GUID',
            mandatory: true,
        }),
        source: StringColumn({
            label: 'Source',
            mandatory: true,
        }),
        external_name: StringColumn({
            label: 'External Name',
            mandatory: true,
        }),
        description: StringColumn({
            label: 'Description',
        }),
        active: BooleanColumn({
            label: 'Active',
            defaultValue: true,
        }),
        is_license_group: BooleanColumn({
            label: 'Is License Group',
            defaultValue: false,
        }),
        license_group: ListColumn({
            label: 'License Group',
            reference: 'alm_license',
            referenceQual: 'active=true',
        }),
        sod_rule: ListColumn({
            label: 'SoD Rule',
            reference: 'x_1311940_iam_sod_rule',
        }),
        last_sync: DateTimeColumn({
            label: 'Last Sync',
        }),
        in_role: ListColumn({
            label: 'In Role',
            reference: 'x_1311940_iam_job_role',
        }),
    }
})

export const x_1311940_iam_job_role = Table({
    name: 'x_1311940_iam_job_role',
    label: 'IAM Job Role',
    schema: {
        name: StringColumn({
            label: 'Name',
            mandatory: true,
        }),
        owner: ReferenceColumn({
            label: 'Owner',
            referenceTable: 'sys_user',
            mandatory: true,
        }),
        active: BooleanColumn({
            label: 'Active',
            defaultValue: true,
        }),
        groups: ListColumn({
            label: 'Groups',
            referenceTable: 'x_1311940_iam_group',
        }),
        standard_tasks: ListColumn({
            label: 'Standard Tasks',
            referenceTable: 'x_1311940_iam_task',
        }),
    }
})



export const x_1311940_iam_task = Table({
    name: 'x_1311940_iam_task',
    label: 'IAM Task',
    schema: {
        active: BooleanColumn({
            label: 'Active',
            defaultValue: true,
        }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                1: { value: 'failed', label: 'Failed' },
                2: { value: 'closed_complete', label: 'Closed Complete' },
                3: { value: 'open', label: 'Open' },
                4: { value: 'pending', label: 'Pending' },
                5: { value: 'in_progress', label: 'In Progress' },
            },
        }),
        user: ReferenceColumn({
            label: 'User',
            referenceTable: 'sys_user',
        }),
        system: StringColumn({
            label: 'System',
        }),
        role: ReferenceColumn({
            label: 'Role',
            referenceTable: 'x_1311940_iam_job_role',
        }),
        approver_1: ReferenceColumn({
            label: 'Approver 1',
            referenceTable: 'sys_user',
        }),
        approver_2: ReferenceColumn({
            label: 'Approver 2',
            referenceTable: 'sys_user',
        }),
        ad_group_add: ListColumn({
            label: 'AD Group Add',
            referenceTable: 'x_1311940_iam_group',
            referenceQual: 'source=Active Directory',
        }),
        ad_group_remove: ListColumn({
            label: 'AD Group Remove',
            referenceTable: 'x_1311940_iam_group',
            referenceQual: 'source=Active Directory',
        }),
        entra_id_group_add: ListColumn({
            label: 'Entra ID Group Add',
            referenceTable: 'x_1311940_iam_group',
            referenceQual: 'source=Entra ID',
        }),
        entra_id_group_remove: ListColumn({
            label: 'Entra ID Group Remove',
            referenceTable: 'x_1311940_iam_group',
            referenceQual: 'source=Entra ID',
        }),
        message: StringColumn({
            label: 'Message',
        }),
    }
})




export const x_1311940_iam_log = Table({
    name: 'x_1311940_iam_log',
    label: 'IAM Log',
    schema: {
        user: ReferenceColumn({
            label: 'User',
            referenceTable: 'sys_user', 
        }),
        role: ReferenceColumn({
            label: 'Role',
            referenceTable: 'x_1311940_iam_job_role',
        }),
        approver_1: ReferenceColumn({
            label: 'Approver 1',
            referenceTable: 'sys_user',
        }),
        approver_2: ReferenceColumn({
            label: 'Approver 2',
            referenceTable: 'sys_user',
        }),
        executed_at: DateTimeColumn({
            label: 'Executed At',
        }),
        status: ChoiceColumn({
            label: 'Status',
            choices: {
                1: { value: 'failed', label: 'Failed' },
                2: { value: 'closed_complete', label: 'Closed Complete' },
                3: { value: 'open', label: 'Open' },
                4: { value: 'pending', label: 'Pending' },
            },

        }),
        action: ChoiceColumn({
            label: 'Action',
            choices: {
                1: { value: 'onboarding', label: 'Onboarding' },
                2: { value: 'offboarding', label: 'Offboarding' },
                3: { value: 'role_switch', label: 'Role Switch' },
                4: { value: 'role_modification', label: 'Role Modification' },
            },
        }),
        previous_role: ReferenceColumn({
            label: 'Previous Role',
            referenceTable: 'x_1311940_iam_job_role',
        }),
        new_role: ReferenceColumn({
            label: 'New Role',
            referenceTable: 'x_1311940_iam_job_role',
        }),
        groups_added: ListColumn({
            label: 'Groups Added',
            referenceTable: 'x_1311940_iam_group',
        }),
        groups_removed: ListColumn({
            label: 'Groups Removed',
            referenceTable: 'x_1311940_iam_group',
        }),
        request_item: ReferenceColumn({
            label: 'Request Item',
            referenceTable: 'sc_req_item',
        }),
        automation_task: ReferenceColumn({
            label: 'Automation Task',
            referenceTable: 'x_1311940_iam_task',
        }),
        message: StringColumn({
            label: 'Message',
        }),
    }
})

export const x_1311940_iam_standard_task = Table({
    name: 'x_1311940_iam_standard_task',
    label: 'IAM Standard Task',
    schema: {
        
    }
})