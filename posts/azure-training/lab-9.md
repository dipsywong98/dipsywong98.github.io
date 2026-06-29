Module 9: Azure Firewall deployment and network routing
Scenario

In this lab, you will learn how Azure Firewall can be deployed in your environment. Azure Firewall is a managed cloud-based network security service that protects your Azure Virtual Network resources.

Deploy Azure Firewall.
Create default routes to change the traffic flows through the firewall and setup rules on the firewall.
What you will build

Screenshot

Exercise 1: Create a Network
Task 1: Create a Virtual Network
If necessary, log into CLIENT1 with the username Admin and password Pa55w.rd

Open a browser and navigate to the following URL: https://portal.azure.com.

Log into the Azure Portal with the username student5BYXQ@t001.gdazcs.com and password 8ZPT6uTD28r2Ulho.

In the search bar at the top of the portal search for and select Virtual networks.

Click + Create.

Specify the following settings for your new virtual network then click the IP Addresses tab.

Resource Group: Select AZ-305M9-TY2C9AQS7K

Virtual network name: FWVNet

Region: East US

Enter the following settings then click Save.

IPv4 Address Space: 10.0.0.0/16

Click Default then enter the following configuration and click Save.

Subnet name: AzureFirewallSubnet (Choose subnet purpose: Azure Firewall)

Starting address: 10.0.0.0/24

Click Review + Create then Create

Note: We'll deploy the Azure Firewall in a later step.

Task 2: Create the subnets required
In the Azure portal, select Virtual Networks from the left navigation.

Select the FWVNet virtual network

Under Settings on the left, click Subnets. Click + Subnet to create a new subnet using the following settings and click Save.

Name: Workload-SN

Subnet Address range: 10.0.2.0/24

Add another subnet using the following settings:

Name: Jump-SN

Subnet Address range: 10.0.3.0/24

Accept the defaults and click Save.

You have now created all the necessary networking infrastructure. Next you will create a virtual machine.

Task 3: Create a virtual machine to use as a jump box
Within the Azure portal, click + Create a Resource and click Create under Windows Server 2019 Datacenter.

Specify the following configuration:

Resource Group: Select AZ-305M9-TY2C9AQS7K

Virtual machine name: Srv-Jump

Region: (US) East US

Size: IMPORTANT - ensure the size is set to Standard D2s v3

Username:localadmin

Password/Confirm Password: 8ZPT6uTD28r2Ulho

Inbound Port Rules

Public inbound ports: Allow selected ports
Select inbound ports: RDP (3389)

At the top of the page click the Networking tab.

Set the Virtual Network to FWVNet and the subnet to Jump-SN

Public IP: If it is not already created, click Create new and name it Srv-Jump-ip and click OK .

Click Review + create and then click Create.

Task 4: Create a virtual machine to use as the protected server
Create another Windows Server 2019 Datacenter virtual machine using the following values:

Resource Group: AZ-305M9-TY2C9AQS7K

Virtual machine name: Srv-Work

Region: choose the same region as before

Size: IMPORTANT - ensure the size is set to Standard D2s v3

Username: localadmin

Password/Confirm Password: 8ZPT6uTD28r2Ulho

On the Networking tab on the top

Virtual Network: FWVNet

Subnet: Workload-SN

Public IP: None

Click Review + create and then click Create.

At this point, we have all the necessary infrastructure ready and will now deploy the Azure Firewall.

Exercise 2: Deploy the Azure Firewall
Task 1: Deploy the Azure Firewall
In the portal search bar, search for Firewalls. Click Firewalls from the returned results and click + Create or Create firewall.

Specify the following settings and click Review + Create and then Create.

Resource Group: AZ-305M9-TY2C9AQS7K

Name: AzureFW

Region: Use the same region as before

Availability Zone: None

Firewall SKU: Standard

Firewall management: Use Firewall rules (classic) to manage this firewall.

Choose a virtual network: Use existing

Virtual network: FWVNet

Public IP: (Add new) azureFirewalls-ip then press OK

Forced tunneling: Disabled

Note The Firewall will take a few minutes to deploy.

Navigate to the firewall and note the private ip address.

Click azureFirewalls-ip then make note of the public ip address.

Task 2: Create the default route table
We will now create the default route

In the portal, click + Create a resource then search for and select Route Table and click Create.

Specify the following configuration and click Create.

Name: FW-Route

Resource Group: AZ-305M9-TY2C9AQS7K

Region: The same region you've been using

When the route table is created click Go to Resource in the notifications to open the route table you just created.

Select Subnets under Settings on the left and click + Associate. Choose the FWVNet virtual network and the Workload-SN subnet from the dropdowns and click OK.

Task 3: Add a route to the route table
Click Routes on the left under Settings and click + Add.

Specify the following configuration and click Add.

Route name: FW-DG

Destination type: IP Addresses

Destination IP addresses/CIDR ranges: 0.0.0.0/0

Next hop type: Virtual appliance

Next hop address: The private ip address of your Azure firewall that you made note of earlier

Task 4: Configure an application rule
You will now configure an application rule on the firewall.

Open the AZ-305M9-TY2C9AQS7K resource group and select the Azure Firewall.

Under Settings on the left, click Rules (classic).

Click Application rule collection tab then click + Add application rule collection

Specify the following configuration and click Add.

Name: App-Coll01

Priority: 200

Action: Allow

Enter the following details in the Target FQDNs section

Name: AllowGH

Source: 10.0.2.0/24

Protocol: http, https

Target FQDN: github.com

You will now configure a network rule.

Task 5: Configure a network rule
Click Network rule collection then click + Add network rule collection

Specify the following configuration and click Add:

Name: Net-Coll01

Priority: 200

Action: Allow

Enter the following details in the Rules (IP Addresses) section:

Name: Allow-DNS

Protocol: UDP

Source: 10.0.2.0/24

Destination Addreses: 8.8.8.8,1.1.1.1

Destination port: 53

You will now change the DNS servers on the Srv-Work NIC

Task 6: Change DNS for Srv-Work NIC
Within the Azure portal, click Virtual Machines on the left navigation and open the Srv-Work VM.

Click Network settings on the left under Networking, then by where it says Network Interface:, click srv-workXXX to open the network interface configuration.

Under Settings on the left click DNS Servers then click Custom.

Add the following DNS servers and click Save.

The public IP address of the Azure Firewall you noted earlier

8.8.8.8

1.1.1.1

Upon completion restart the Srv-Work virtual machine by clicking Restart on the virtual machine overview page.

You will now test the firewall

Task 7: Testing
Note the private ip address of the Srv-Work VM on the Overview blade.

Navigate to srv-jump VM. On the overview page, Click Connect then Select under Native RDP. Download and open the RDP file, click Connect and login using:

Username: localadmin

Password: 8ZPT6uTD28r2Ulho

From within Srv-Jump launch the remote desktop client by clicking the Windows start button, then search for and select mstsc.exe.

Enter the private ip address of Srv-Work, click Connect and login using the following credentials:

Username: localadmin

Password: 8ZPT6uTD28r2Ulho

In the Srv-Work VM, start Internet Explorer and navigate to: https://github.com

This works (you will receive an error that GitHub no longer supports IE and several warnings - you can ignore all of them)

Now try another site: http://abc.com

This is blocked because no rule matched.

Screenshot

Result:

In this lab, you deployed a jump box and a simulated production server and then configured the Azure Firewall to only allow access to GitHub.com from the production server. You then tested by accessing the production server from a Jumpbox and connected to GitHub successfully and abc.com unsucessfully because it is blocked.