import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['IAMUtils'],
    name: 'IAMUtils',
    active: true,
    apiName: 'x_1311940_iam.IAMUtils',
    script: Now.include('../server/iam_utils.ts'),
})