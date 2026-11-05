import { RESTAPIRequest, RESTAPIResponse } from '@servicenow/glide/sn_ws_int'
import { onBoarding } from './iam_utils'
import { sendGroups } from './update_groups'
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
        const result = (reqString);
        
        const ans = {
            offboarding_tasks: result
        };
        
        response.setContentType('application/json');
        response.setStatus(200);
        response.setBody(ans);

    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        gs.logError(`Error in OnBoarding process: ${message}`);
    }
}       



 export function mover (request: RESTAPIRequest, response: RESTAPIResponse): void {

    try {
        const reqString = request.body.dataString;
        const result = (reqString);
        
        const ans = {
            mover_tasks: result
        };
        
        response.setContentType('application/json');
        response.setStatus(200);
        response.setBody(ans);

    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        gs.logError(`Error in OnBoarding process: ${message}`);
    }
}       

export function groups (request: RESTAPIRequest, response: RESTAPIResponse): void {
    // Call the sendGroups function and handle the response
    // endpoint payload should look like this: 
    /*
    {
        "name": "LIC-Admin",
        "guid": "1234567890",
        "source": "Active Directory",
        "description": "User description"
    }
    */

    try {
        const reqJSON = JSON.parse(request.body.dataString);
        const result = sendGroups(reqJSON);

        const ans = {
            status: result
        };

        response.setContentType('application/json');
        response.setStatus(200);
        response.setBody(ans);
    } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown error';
        gs.logError(`Error in sending groups: ${message}`);
    }
}

