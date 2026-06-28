Module 08: Kusto (KQL) queries and execution
KQL, or Kusto Query Language, is a powerful query language used primarily for analyzing large datasets stored in Azure Data Explorer (ADX) and other services that support KQL, such as Microsoft Azure Monitor, Azure Sentinel, and Microsoft Defender for Cloud. In this lab you will find many example queries that are run against an example data set. This lab content is taken from the SC-200 course, if you have already completed that course and have some familiarty with KQL there is a second option for you at the end of these examples under "Optional objective"

KQL Labs
KQL, or Kusto Query Language, is a powerful query language used primarily for analyzing large datasets stored in Azure Data Explorer (ADX) and other services that support KQL, such as Microsoft Azure Monitor, Azure Sentinel, and Microsoft Defender for Cloud. In this lab you will find many example queries that are run against an example data set. This lab content is taken from the SC-200 course, if you have already completed that course and have some familiarty with KQL there is a second option for you at the end of these examples under "Optional objective"

Exercise 1: Create queries using Kusto Query Language (KQL)
Task 1: Access the KQL testing area
In this task, you will access a Log Analytics environment where you can practice writing KQL statements.

Go to https://aka.ms/lademo in your browser. Login with the Azure credentials.

Close the Log Analytics video pop-up window that appears.

Explore the available tables listed in the tab on the left side of the screen.

In the query editor, enter the following query and select the Run button. You should see the query results in the bottom window.

SecurityEvent
Notice that you have reached the maximum number of results (30,000).

Change the Time range to Last 30 minutes in the Query Window.

Next to the first record, select the > to expand the information for the row.

Task 2: Run Basic KQL Statements
In this task, you will build basic KQL statements.

Important: For each query, clear the previous statement from the Query Window or open a new Query Window by selecting + after the last opened tab (up to 25).

The following statement demonstrates the search operator, which searches all columns in the table for the value. In the Query Window enter the following statement and select Run:

search "new"
The following statement demonstrates search across tables listed within the in clause. In the Query Window enter the following statement and select Run:

search in (SecurityEvent,App*) "new"
Change back the Time range to Last 24 hours in the Query Window.

The following statements demonstrates the where operator, which filters on a specific predicate. In the Query Window enter the following statement and select Run:

Important: You should select Run after entering each query from the code blocks below.

SecurityEvent
| where TimeGenerated > ago(1h)
Note: The Time range now shows Set in query since we are filtering with the TimeGenerated column.

SecurityEvent
| where TimeGenerated > ago(1h) and EventID == 4624
SecurityEvent
| where TimeGenerated > ago(1h)
| where EventID == 4624
| where AccountType =~ "user"
SecurityEvent
| where TimeGenerated > ago(1h) and EventID in (4624, 4625)

The following statement demonstrates the use of the let statement to declare variables. In the Query Window enter the following statement and select Run:

let timeOffset = 1h;
let discardEventId = 4688;
SecurityEvent
| where TimeGenerated > ago(timeOffset*2) and TimeGenerated < ago(timeOffset)
| where EventID != discardEventId
The following statement demonstrates the use of the let statement to declare a dynamic list. In the Query Window enter the following statement and select Run:

let suspiciousAccounts = datatable(account: string) [
  @"NA\timadmin",
  @"NT AUTHORITY\SYSTEM"
];
SecurityEvent
| where TimeGenerated > ago(1h)
| where Account in (suspiciousAccounts)
Tip: You can re-format the query easily by selecting the ellipsis (...) in the Query window and select Format query.

The following statement demonstrates the use of the let statement to declare a dynamic table. In the Query Window enter the following statement and select Run:

let LowActivityAccounts =
    SecurityEvent
    | summarize cnt = count() by Account
    | where cnt < 1000;
LowActivityAccounts | where Account contains "sql"
Change the Time range to Last hour in the Query Window. This will limit our results for the following statements.

The following statement demonstrates the extend operator, which creates a calculated column and adds it to the result set. In the Query Window enter the following statement and select Run:

SecurityEvent
| where TimeGenerated > ago(1h)
| where ProcessName != "" and Process != ""
| extend StartDir =  substring(ProcessName,0, string_size(ProcessName)-string_size(Process))
The following statement demonstrates the order by operator, which sorts the rows of the input table by one or more columns in ascending or descending order. The order by operator is an alias to the sort by operator. In the Query Window enter the following statement and select Run:

SecurityEvent
| where TimeGenerated > ago(1h)
| where ProcessName != "" and Process != ""
| extend StartDir =  substring(ProcessName,0, string_size(ProcessName)-string_size(Process)) 
| order by StartDir desc, Process asc
The following statements demonstrate the project operator, which selects the columns to include in the order specified. In the Query Window enter the following statement and select Run:

SecurityEvent
| where TimeGenerated > ago(1h)
| where ProcessName != "" and Process != ""
| extend StartDir =  substring(ProcessName,0, string_size(ProcessName)-string_size(Process)) 
| order by StartDir desc, Process asc
| project Process, StartDir
The following statements demonstrate the project-away operator, which selects the columns to exclude from the output. In the Query Window enter the following statement and select Run:

SecurityEvent
| where TimeGenerated > ago(1h
| where ProcessName != "" and Process != ""
| extend StartDir =  substring(ProcessName,0, string_size(ProcessName)-string_size(Process)) 
| order by StartDir desc, Process asc
| project-away ProcessName
Task 3: Analyze Results in KQL with the Summarize Operator
In this task, you will build KQL statements to aggregate data. Summarize groups the rows according to the by group columns, and calculates aggregations over each group.

The following statement demonstrates the count() function, which returns a count of the group. In the Query Window enter the following statement and select Run:

SecurityEvent
| where TimeGenerated > ago(1h) and EventID == 4688
| summarize count() by Process, Computer
The following statement demonstrates the count() function, but in this example, we name the column as cnt. In the Query Window enter the following statement and select Run:

SecurityEvent
| where TimeGenerated > ago(1h) and EventID == 4624
| summarize cnt=count() by AccountType, Computer
The following statement demonstrates the dcount() function, which returns an approximate distinct count of the group elements. In the Query Window enter the following statement and select Run:

SecurityEvent
| where TimeGenerated > ago(1h)
| summarize dcount(IpAddress)
The following statement is a rule to detect Invalid password failures across multiple applications for the same account. In the Query Window enter the following statement and select Run:

let timeframe = 30d;
let threshold = 1;
SigninLogs
| where TimeGenerated >= ago(timeframe)
| where ResultDescription has "Invalid password"
| summarize applicationCount = dcount(AppDisplayName) by UserPrincipalName, IPAddress
| where applicationCount >= threshold
The following statement demonstrates the arg_max() function, which returns one or more expressions when the argument is maximized. The following statement will return the most current row from the SecurityEvent table for the computer SQL10.NA.contosohotels.com. The * in the arg_max function requests all columns for the row. In the Query Window enter the following statement and select Run:

SecurityEvent
| where Computer == "SQL10.na.contosohotels.com"
| summarize arg_max(TimeGenerated,*) by Computer
The following statement demonstrates the arg_min() function, which returns one or more expressions when the argument is minimized. In this statement, the oldest SecurityEvent for the computer SQL10.NA.contosohotels.com will be returned as the result set. In the Query Window enter the following statement and select Run:

SecurityEvent
| where Computer == "SQL10.na.contosohotels.com"
| summarize arg_min(TimeGenerated,*) by Computer
The following statements demonstrate the importance of understanding results based on the order of the pipe. In the Query Window enter the following queries and run each query separately:

Query 1 will have Accounts for which the last activity was a login. The SecurityEvent table will first be summarized and return the most current row for each Account. Then only rows with EventID equals 4624 (login) will be returned.

SecurityEvent
| summarize arg_max(TimeGenerated, *) by Account
| where EventID == 4624
Query 2 will have the most recent login for Accounts that have logged in. The SecurityEvent table will be filtered to only include EventID = 4624. Then these results will be summarized for the most current login row by Account.

SecurityEvent
| where EventID == 4624
| summarize arg_max(TimeGenerated, *) by Account
Note: You can also review the "Total CPU" and "Data used for processed query" by selecting the "Query details" link on the lower right and compare the data between both statements.

The following statement demonstrates the make_list() function, which returns a list of all the values within the group. This KQL query will first filter the EventID with the where operator. Next, for each Computer, the results are a JSON array of Accounts. The resulting JSON array will include duplicate accounts. In the Query Window enter the following statement and select Run:

SecurityEvent
| where TimeGenerated > ago(1h)
| where EventID == 4624
| summarize make_list(Account) by Computer
The following statement demonstrates the make_set() function, which returns a set of distinct values within the group. This KQL query will first filter the EventID with the where operator. Next, for each Computer, the results are a JSON array of unique Accounts. In the Query Window enter the following statement and select Run:

SecurityEvent  
| where TimeGenerated > ago(1h)
| where EventID == 4624  
| summarize make_set(Account) by Computer
Task 4: Create visualizations in KQL with the Render Operator
In this task, you will use generate visualizations with KQL statements.

The following statement demonstrates the render operator (which renders results as a graphical output), using a barchart visualization. In the Query Window enter the following statement and select Run:

SecurityEvent
| where TimeGenerated > ago(1h)
| summarize count() by Account
| render barchart
The following statement demonstrates the render operator visualizing results with a time series. The bin() function rounds all values in a timeframe and groups them, used frequently in combination with summarize. If you have a scattered set of values, the values are grouped into a smaller set of specific values. Combining the generated results and pipe them to a render operator with a timechart provides a time series visualization. In the Query Window enter the following statement and select Run:

SecurityEvent
| where TimeGenerated > ago(1h)
| summarize count() by bin(TimeGenerated, 1m)
| render timechart
Task 5: Build multi-table statements in KQL
In this task, you will build multi-table KQL statements.

Change the Time range to Last hour in the Query Window. This will limit our results for the following statements.

The following statement demonstrates the union operator, which takes two or more tables and returns all their rows. Understanding how results are passed and impacted with the pipe character is essential. In the Query Window enter the following statements and select Run for each query separately to see the results:

Query 1 will return all rows of SecurityEvent and all rows of SigninLogs.

SecurityEvent
| union SigninLogs
Query 2 will return one row and column, which is the count of all rows of SigninLogs and all rows of SecurityEvent.

SecurityEvent
| union SigninLogs
| summarize count()
Query 3 will return all rows of SecurityEvent and one (last) row for SigninLogs. The last row for SigninLogs will have the summarized count of the total number of rows.

SecurityEvent
| union (SigninLogs | summarize count() | project count_)
Note: The 'empty row' in the results will show the summarized count of SigninLogs.

The following statement demonstrates the union operator support to union multiple tables with wildcards. In the Query Window enter the following statement and select Run:

union App*
| summarize count() by Type
The following statement demonstrates the join operator, which merges the rows of two tables to form a new table by matching values of the specified column(s) from each table. In the Query Window enter the following statement and select Run:

SecurityEvent
| where EventID == 4624
| summarize LogOnCount=count() by  EventID, Account
| project LogOnCount, Account
| join kind = inner( 
 SecurityEvent
| where EventID == 4634
| summarize LogOffCount=count() by  EventID, Account
| project LogOffCount, Account
) on Account
Important: The first table specified in the join is considered the Left table. The table after the join operator is the right table. When working with columns from the tables, the $left.Column name and $right.Column name is to distinguish which tables column are referenced. The join operator supports a full range of types: flouter, inner, innerunique, leftanti, leftantisemi, leftouter, leftsemi, rightanti, rightantisemi, rightouter, rightsemi.

Change back the Time range to Last 24 hours in the Query Window.

Task 6: Work with string data in KQL
In this task, you will work with structured and unstructured string fields with KQL statements.

The following statement demonstrates the extract function, which gets a match for a regular expression from a source string. You have the option to convert the extracted substring to the indicated type. In the Query Window, enter the following statement and select Run:

print extract("x=([0-9.]+)", 1, "hello x=45.6|wo") == "45.6"
The following statements use the extract function to pull out the Account Name from the Account field of the SecurityEvent table. In the Query Window enter the following statement and select Run:

SecurityEvent  
| where EventID == 4672 and AccountType == 'User' 
| extend Account_Name = extract(@"^(.*\\)?([^@]*)(@.*)?$", 2, tolower(Account))
| summarize LoginCount = count() by Account_Name
| where Account_Name != "" 
| where LoginCount < 10
The following statement demonstrates the parse operator, which evaluates a string expression and parses its value into one or more calculated columns. Use for structuring unstructured data. In the Query Window enter the following statement and select Run:

let Traces = datatable(EventText:string)
[
"Event: NotifySliceRelease (resourceName=PipelineScheduler, totalSlices=27, sliceNumber=23, lockTime=02/17/2016 08:40:01, releaseTime=02/17/2016 08:40:01, previousLockTime=02/17/2016 08:39:01)",
"Event: NotifySliceRelease (resourceName=PipelineScheduler, totalSlices=27, sliceNumber=15, lockTime=02/17/2016 08:40:00, releaseTime=02/17/2016 08:40:00, previousLockTime=02/17/2016 08:39:00)",
"Event: NotifySliceRelease (resourceName=PipelineScheduler, totalSlices=27, sliceNumber=20, lockTime=02/17/2016 08:40:01, releaseTime=02/17/2016 08:40:01, previousLockTime=02/17/2016 08:39:01)",
"Event: NotifySliceRelease (resourceName=PipelineScheduler, totalSlices=27, sliceNumber=22, lockTime=02/17/2016 08:41:01, releaseTime=02/17/2016 08:41:00, previousLockTime=02/17/2016 08:40:01)",
"Event: NotifySliceRelease (resourceName=PipelineScheduler, totalSlices=27, sliceNumber=16, lockTime=02/17/2016 08:41:00, releaseTime=02/17/2016 08:41:00, previousLockTime=02/17/2016 08:40:00)"
];
Traces   
| parse EventText with * "resourceName=" resourceName ", totalSlices=" totalSlices:long * "sliceNumber=" sliceNumber:long * "lockTime=" lockTime ", releaseTime=" releaseTime:date "," * "previousLockTime=" previousLockTime:date ")" *  
| project resourceName, totalSlices, sliceNumber, lockTime, releaseTime, previousLockTime
The following statement demonstrates working with dynamic fields, which are special since they can take on any value of other data types. In this example, The DeviceDetail field from the SigninLogs table is of type dynamic. In the Query Window enter the following statement and select Run:

SigninLogs
| extend OS = DeviceDetail.operatingSystem
The following example shows how to break out packed fields for SigninLogs. In the Query Window enter the following statement and select Run:

SigninLogs
| extend OS = DeviceDetail.operatingSystem, Browser = DeviceDetail.browser
| extend StatusCode = tostring(Status.errorCode), StatusDetails = tostring(Status.additionalDetails)
| extend Date = startofday(TimeGenerated)
| summarize count() by Date, Identity, UserDisplayName, UserPrincipalName, IPAddress, ResultType, ResultDescription, StatusCode, StatusDetails
| sort by Date
Important: Although the dynamic type appears JSON-like, it can hold values that the JSON model does not represent because they do not exist in JSON. Therefore, in serializing dynamic values into a JSON representation, values that JSON cannot represent are serialized into string values.

The following statements demonstrates operators to manipulate JSON stored in string fields. Many logs submit data in JSON format, which requires you to know how to transform JSON data to fields that can be queried. In the Query Window enter the following statement and select Run:

SigninLogs
| extend AuthDetails =  parse_json(AuthenticationDetails) 
| extend AuthMethod =  AuthDetails[0].authenticationMethod 
| extend AuthResult = AuthDetails[0].["authenticationStepResultDetail"] 
| project AuthMethod, AuthResult, AuthDetails 
The following statement demonstrates the mv-expand operator, which turns dynamic arrays into rows (multi-value expansion).

SigninLogs 
| mv-expand AuthDetails = parse_json(AuthenticationDetails) 
| project AuthDetails
Expand the first row by selecting ">" and then again next to AuthDetails to review the expanded results.

The following statement demonstrates the mv-apply operator, which applies a subquery to each record and returns the union of the results of all subqueries.

SigninLogs 
| mv-apply AuthDetails = parse_json(AuthenticationDetails) on
(where AuthDetails.authenticationMethod == "Password")
A function is a log query that can be used in other log queries with the saved name as a command. To create a function, after running your query, select the Save button and then select Save As function from the drop-down. Enter the name your want (for example: PrivLogins) in the Function name box and enter a Legacy category (for example: General) and select Save. The function will be available in KQL by using the function's alias:

Note: You will not be able to do this in the lademo environment used for this lab since your account has only Reader permissions, but it is an important concept to make your queries more efficient and effective.

PrivLogins  
Optional Objective
This is an optional challenge should you wish to test your KQL skills.

To support ongoing learning with KQL Microsoft have created the Kusto Detective ageny at the following URL.

https://detective.kusto.io/

If you are looking for a more challenging approach take a look at the Season 1 and Season 2 challenges. Below you will find example answers for the first 4 cases the Season 1 of Kusto Detective agency to get you started. The rest of season 1 and season 2 are to be worked out from the game. Good luck detective!

Case 0
# Summarises the Score column
Onboarding
| summarize sum(Score)
Case 1
// Expand list of rf_ids into seperate rows
// Make the dynamic type rif_ids into a string
// Join the modified Shelves table with the Book table based on matching rd_ids
// Summarise the weight_gram for each book based on the shelf they are on
// Create a new column that stores the calculated difference between the total_weight and sum_weight_gram, the true weight of the shelf
// Then sort by the weight_difference, the top result is the shelf the missing book is on

Shelves
| mv-expand rf_ids
| extend rf_ids = tostring(rf_ids)
| join kind=inner (Books) on $left.rf_ids == $right.rf_id 
| summarize sum(weight_gram) by shelf, total_weight
| extend weight_difference = total_weight - sum_weight_gram
| sort by weight_difference 
Case 2
// This one got really long, but it works and that's what counts
// The goal is to remove the inflated values from the "Poppy" votes

// To do this we isolate the "Poppy" votes
// Then summarise them using bin() on TImestamp, which basically summarises them based on a 10 minute limit.
// This creates normal vote counts, but also the massively inflated ones
// To utilise the series_decompose_anomalies function it needs a list, so we make that using make_list()
// The series_decompose_anomalies creates several lists with information regarding the vote lists
// Based on this list we can change the outliers, which is done using array_iff()
// Then we simply summarise to make it compatibale with the second collection
let poppy_votes = Votes
| where vote == "Poppy"
| summarize votes = count() by bin(Timestamp, 10m), vote, via_ip
| summarize all_votes = make_list(votes) by vote, via_ip
| extend series_decompose_anomalies(all_votes)
| extend all_votes = array_iff(series_decompose_anomalies_all_votes_ad_score, 1, all_votes)
| extend votes = array_sum(all_votes)
| summarize Count = sum(votes) by vote
| extend Count = tolong(Count);

// Here we use the same functions as provided by the case brief, but omit the "Poppy" votes at first
// Only after summarising do we add the normalised "Poppy" vote count, and then calculate the percentages
Votes
| where vote  != "Poppy"
| summarize Count=count() by vote
| union poppy_votes
| as hint.materialized=true T
| extend Total = toscalar(T | summarize sum(Count))
| project vote, Percentage = round(Count*100.0 / Total, 1), Count
| order by Count
Case 3
// Idea is to look at all the cars that were at 157th Ave and 148th Street between 08:31am and 08:40am
// Then somehow find three cars that has their last entries on the same Ave and Street

// This should be all possible VIN that they could have used
let possible_VINs = Traffic
| `where Street == 148 and Ave == 157 and Timestamp >= datetime(2022-10-16 08:31) and Timestamp <= datetime(2022-10-16 08:40)`
| distinct VIN
| summarize VINs = make_list(VIN);
// Look for when three of these VINs appear at the same street and 
let last_seen = Traffic
| where Timestamp > datetime(2022-10-16 08:40)
| where VIN in (possible_VINs)
| summarize max_time = max(Timestamp) by VIN
| summarize Timestamps = make_list(max_time);
// Look at the last time each car was seen and sort by ave and street
Traffic
| where VIN in (possible_VINs) and Timestamp in (last_seen)
| summarize test=make_list(VIN) by Ave, Street
| extend len = array_length(test)
| sort by len
| where len == 3