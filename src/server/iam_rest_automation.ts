import { gs } from '@servicenow/glide';
import { RESTAPIRequest, RESTAPIResponse } from '@servicenow/glide/sn_ws_int'
import { getAutomationTaskUtil, updateAutomationTaskUtil } from './iam_utils'

export function getAutomationTasks(request: RESTAPIRequest, response: RESTAPIResponse): void {
        try {
        const result = getAutomationTaskUtil();
        
        const ans = {
            onboarding_tasks: result
        };
        
        response.setContentType('application/json');
        response.setStatus(200);
        response.setBody(ans);

    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        gs.logError(`Error in OnBoarding process: ${message}`);
    }
}

export function updateAutomationTask(request: RESTAPIRequest, response: RESTAPIResponse): void {
    let taskNumber: string;
    try {
        const reqJson = JSON.parse(request.body.dataString);
        taskNumber = reqJson.task_number;
        
        var result = updateAutomationTaskUtil(taskNumber);
        
        const ans = {
            status: result
        };
        response.setContentType('application/json');
        response.setStatus(200);
        response.setBody(ans);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        gs.logError(`Error in updating automation task: ${message}`);
    }
}