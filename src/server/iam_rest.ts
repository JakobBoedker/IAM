import { RESTAPIRequest, RESTAPIResponse } from '@servicenow/glide/sn_ws_int'
import { onBoarding } from './iam_utils'
import { gs } from '@servicenow/glide';

export function onboarding (request: RESTAPIRequest, response: RESTAPIResponse): void {

    try {
        const reqString = request.body.dataString;
        const result = onBoarding(reqString);
        
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


 export function offboarding (request: RESTAPIRequest, response: RESTAPIResponse): void {

    try {
        const reqString = request.body.dataString;
        const result = onBoarding(reqString);
        
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



