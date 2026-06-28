Module 07: Azure Key vault and Logic app integration
In this lab we will create a secured Key Vault and store secret information into it. We will then access that information using a Logic app and provide permissions using an Azure service principal to do this. Access will be completed using both a REST api call and a Key Vault logic app componenent.

Exercise 1: Key Vault and Logic app
Task 1: Sign in to Azure Portal
If necessary, log into CLIENT1 with the username Admin and password Pa55w.rd

Open a browser and navigate to the following URL: https://portal.azure.com.

Log into the Azure Portal with the username studentUDQF1@t000.gdazcs.com and password mRr3szSq8Cf2lAM0.

Task 2: Create a Key Vault
In the search bar, search for and select Key vaults.

Click + Create and select the AZ-305M7 resource group.

Provide a unique name for the Key Vault.

Choose the same region as your resource group, East US.

Keep other settings as default.

Click Review + create and then Create.

As soon as the key vault is created, click Go to resource.

Task 3: Review Key Vault settings
Under Settings, click access configuration.

Select Vault access policy then click Apply.

Click Access Policies then + Create (you may need to refresh the browser if you get an error).

In permissions select all the permissions using the select all tick boxes then click Next.

Under Principal select your currently logged in account studentUDQF1@t000.gdazcs.com.

Click Next and Next again then click Create.

You should now see your user account with all the permissions assigned to it to be able to read information from this key vault.

Under Objetcs, click Secrets.

Click Generate/Import.

Set the name to mysecret and the value to a text string of your choice (you can use "banana" if you want to).

Click Create.

Task 4: Setting up the logic app
In search bar search for Logic apps and select it.

Click + Add.

For the Resource group, select AZ-305M7.

Give it a unique name.

Click Next until you reach Monitoring.

Select No to Enable Application Insights.

Click Review + create and then Create.

Task 5: Set the logic app to talk to the Key Vault
Open your newly created logic app from the resource group.

Under Workflows, click Workflows.

Click + Add

Name the workflow getmysecret and set the State type to Stateful then click Create.

Open the new workflow and select Designer on the left side under Developer.

Select Add a trigger.

In the Add a trigger pop-up, search for HTTP.

Select When HTTP request is received.

Click Save so the HTTP Post URL will populate

Click the + under the trigger and select Add an action.

Search for key vault.

Under Azure Key Vault, select Get secret (there are multiple key vault options, ensure you select the correct one)

Name the connection keyvaultconnection

Enter the name of the keyvault you created earlier in the key Vault Name setting.

Click Sign in and sign in with the account you added to the key vault permissions earlier, studentUDQF1@t000.gdazcs.com.

Select the name of the secret as mysecret

Click Save.

Return to the Overview and click Run -> Run.

This logic app is now continusly running.

Copy the long Workflow URL using the copy to clipboard button (you need to mouse over the Workflow URL for this to be displayed).

Paste this into your web browser, this will not return anything to the browser, only a blank page, but it is a HTTP trigger that will kick off the Logic app to receive the secret.

Back in the Azure Portal, click on the identifier number for the latest run to open a visual view.

Click on Get secret.

Scroll down until you see the body section of the output.

Observe that you have retreived the key from the keyvault using an Entra account.

Close the view then click Disable to stop the logic app from running.

Task 6: Getting a key using an application service principal
Return to the key vault created earlier.

Select Access policies.

Click + Create.

Select all under Secret permissions then click Next.

Under principal search for the name of your logic app (this will be the service principal that is created and linked to the logic app when it is created).

Click Next and Next again then click Create.

You should be able to see an application and an user section inside the vault access policies section.

Return to your logic app.

Under Workflows, click Workflows.

Open the new workflow and select Designer on the left side under Developer.

Select the workflow you created earlier.

Click the + button under the top node and select Add a parallel branch.

In the Add an action pop-up, search for HTTP.

Under HTTP, select HTTP.

In the URI identifier we need to insert the URI of the key vault.

Open new tab and connect back to the azure portal then return to your key vault in this new tab.

Select secrets under Objetcs.

Open your secret.

Select the current version.

Copy the Secret identifier URI to the clipboard (use the copy icon button next to the uri).

Return to the logic app and paste it into the URI field.

Underneath Advanced parameters, select Authentication.

Under Authentication type, select Managed Identity.

In audience set the value to https://vault.azure.net

Under Method, select GET from the drop-down menu.

Click Save.

Click Overview and select Enable.

Use the Workflow URL to trigger the Logic App as you did previously.

Click on the newly created Identifier ID number.

Click on HTTP to review the response to the request.

Review the body section to see the secret that has been retrieved from the key vault

You have now managed to set up a key vault, stored some secret information and called that secret information by the use of a logic app using 2 different authentication methods, firstly with an EntraID User Principal and second using a Managed service principal (the account of the logic app that was created, the service principal is created automatically at the time the logic app is created)

