import { GlideDateTime, GlideRecord } from "@servicenow/glide";

export function sendGroups(reqJSON: any): string {
    // endpoint payload should look like this: 
    /*
    {
        "name": "LIC-Admin",
        "guid": "1234567890",
        "source": "Active Directory",
        "description": "User description"
    }
    */

   let currentGroups: string[] = [];
   let GroupsNoLongerInPayload: string[] = [];


   const updateGroupGR = new GlideRecord('x_2194970_iam_update_groups');
   updateGroupGR.addQuery('active', true);
   updateGroupGR.query();
   
   while (updateGroupGR.next()) {
        currentGroups.push(updateGroupGR.getValue('guid'));
   }
   
   for (const group of currentGroups) {
        if (!reqJSON.includes(group)) {
            GroupsNoLongerInPayload.push(group);
        }
    }
   // Remove groups that are no longer in the payload
   for (const group of GroupsNoLongerInPayload) {
        const removeGroupGR = new GlideRecord('x_2194970_iam_update_groups');
        removeGroupGR.addQuery('guid', group);
        removeGroupGR.query();
        while (removeGroupGR.next()) {
            removeGroupGR.setValue('active', false);
            removeGroupGR.update();
        }
    }

   // Add or update groups from the payload
    for (const group of reqJSON) {
        const groupGR = new GlideRecord('x_2194970_iam_update_groups');
        groupGR.addQuery('guid', group.guid);
        groupGR.query();

        if (groupGR.next()) {
            // Update existing group
            groupGR.setValue('name', group.name);
            groupGR.setValue('source', group.source);
            groupGR.setValue('description', group.description);
            groupGR.setValue('active', true);
            groupGR.update();
        } else {
            // Insert new group
            groupGR.initialize();
            groupGR.setValue('name', group.name);
            groupGR.setValue('guid', group.guid);
            groupGR.setValue('source', group.source);
            groupGR.setValue('description', group.description);
            groupGR.setValue('active', true);
            groupGR.insert();
        }
        
    }


    return "200";
}
