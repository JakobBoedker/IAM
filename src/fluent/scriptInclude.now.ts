import { ScriptInclude } from '@servicenow/sdk/core'

ScriptInclude({
    $id: Now.ID['IAMUtils'],
    name: 'IAMUtils',
    active: true,
    apiName: 'x_2194970_iam.IAMUtils',
    script: Now.include('../server/iam_utils.ts'),
})