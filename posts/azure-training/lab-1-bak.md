lab-1

<div id="tab-lab-guide" class="lab-tab position-relative pt-2 h-100" style="" role="tabpanel" aria-labelledby="tab-lab-guide-link">
    <div id="labGuideContainer" class="h-100">
        <div class="d-flex flex-column h-100">
            <div class="container-fluid">
                <h2><i class="fas fa-book"></i> Lab Guide</h2>
            </div>
            <div class="d-flex mb-2 flex-grow-0 container-fluid lab-guide-control">
                <div class="flex-grow-1">

<div class="btn-group btn-group-sm w-100 popover-help" id="labGuidePageSelector" data-toggle="popover" data-content="Select Lab Guide page" data-original-title="" title="" style="display: none;">
    <button type="button" class="btn btn-outline-dark dropdown-toggle btn-block text-left" data-boundary="window" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" role="button">Tagging resources and implementing policy restrictions</button>
    <div class="dropdown-menu dropdown-menu-left" role="menu" tabindex="-1">
            <a href="/Labs/LabGuidePageMarkup/ed078c33-d731-ef11-9561-00155d800002?pageId=246ab891-2cd2-ee11-9561-00155d800002" role="menuitemradio" class="dropdown-item lab-guide-page-link active" data-page-id="246ab891-2cd2-ee11-9561-00155d800002" aria-checked="true">Tagging resources and implementing policy restrictions</a>
    </div>
</div>
                </div>
                <div class="flex-grow-0 pl-1">
                    <button class="btn btn-sm btn-outline-dark popout-btn d-block w-100 popover-help" data-link="/Labs/LabGuide/ed078c33-d731-ef11-9561-00155d800002" aria-label="Open in another Window" data-toggle="popover" data-content="Open in another Window" data-original-title="" title="">
                        <i class="far fa-external-link"></i>
                    </button>
                </div>
                <div class="flex-grow-0 pl-1">
                    <div class="btn-group-toggle" data-toggle="buttons">
                        <label class="btn btn-sm btn-outline-dark popover-help active" for="show-screenshots-checkbox" id="show-screenshots-checkbox-btn" data-toggle="popover" data-content="Show/hide screenshots" data-original-title="" title="">
                            <input type="checkbox" id="show-screenshots-checkbox" checked="" aria-checked="true" aria-label="Show Screenshots"><i class="far fa-images"></i>
                        </label>
                    </div>
                </div>
            </div>
            <div class="lab-markdown reduced-headers pt-2 flex-grow-1 container-fluid" style="overflow-y: auto;overflow-x: hidden;" id="lab-guide-area"><h1>Module 01: Tagging resources and implementing policy restrictions</h1>
<div class="alert alert-secondary" role="alert">
<p class="has-line-data" data-line-start="3" data-line-end="4">In this lab, students will navigate the Azure portal, learning to create and manage resources such as virtual machines, storage accounts, and network components. They will set up a virtual machine, explore the Azure dashboard, and grasp cloud computing fundamentals within Azure, aiming to get comfortable with Azure's environment and basic resource management.</p>
</div>
<h2>Task 1: Creating and tagging resources</h2>
<div class="alert alert-secondary" role="alert">
<p class="has-line-data" data-line-start="9" data-line-end="10">In this task, you will create some resource that will then be used to demonstrate cost management.</p>
</div>
<ol class="task-list" data-group="1">
<li class="task-list-item" data-line-start="12" data-line-end="14" id="step-1">
<div class="task-step-checkbox checked" data-foo="17" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-1"></div><p class="has-line-data" data-line-start="12" data-line-end="13"> If necessary, log into <strong><a href="urn:gd:lg:a:select-vm" class="select-vm-action-link action-link" title="Switch to VM" data-ref="vmName" data-id="CLIENT1">CLIENT1</a></strong> with the username <strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="Admin"><code>Admin</code></a></strong> and password <strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="Pa55w.rd"><code>Pa55w.rd</code></a></strong></p>
</li>
<li class="task-list-item" data-line-start="14" data-line-end="16" id="step-2">
<div class="task-step-checkbox checked" data-foo="22" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-2"></div><p class="has-line-data" data-line-start="14" data-line-end="15"> Open a browser and navigate to the following URL: <strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="https://portal.azure.com">https://portal.azure.com</a></strong>.</p>
</li>
<li class="task-list-item" data-line-start="16" data-line-end="18" id="step-3">
<div class="task-step-checkbox checked" data-foo="27" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-3"></div><p class="has-line-data" data-line-start="16" data-line-end="17"> Log into the Azure Portal with the username <strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="studentJ6DU1@t000.gdazcs.com"><code>studentJ6DU1@t000.gdazcs.com</code></a></strong> and password <strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="DfrQawguF4aGqFjA"><code>DfrQawguF4aGqFjA</code></a></strong></p>
</li>
<li class="task-list-item" data-line-start="18" data-line-end="20" id="step-4">
<div class="task-step-checkbox checked" data-foo="32" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-4"></div><p class="has-line-data" data-line-start="18" data-line-end="19"> On the <strong>Welcome to Microsoft Azure</strong> dialogue box click <strong>Maybe Later</strong>.  If an Azure recommendations dialog box pops up click <strong>X</strong>.</p>
</li>
<li class="task-list-item" data-line-start="20" data-line-end="22" id="step-5">
<div class="task-step-checkbox checked" data-foo="37" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-5"></div><p class="has-line-data" data-line-start="20" data-line-end="21"> Select <strong>Cloud Shell</strong> from the Azure Portal tool bar.</p>
</li>
<li class="task-list-item" data-line-start="22" data-line-end="24" id="step-6">
<div class="task-step-checkbox checked" data-foo="42" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-6"></div><p class="has-line-data" data-line-start="22" data-line-end="23"> Select <strong>PowerShell</strong> on the Welcome screen.</p>
</li>
<li class="task-list-item" data-line-start="24" data-line-end="38" id="step-7">
<div class="task-step-checkbox checked" data-foo="47" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-7"></div><p class="has-line-data" data-line-start="24" data-line-end="25"> In the <strong>You have no storage mounted</strong> pane, click <strong>Show advanced settings</strong>, perform the following tasks:</p>
<ul>
<li class="has-line-data" data-line-start="26" data-line-end="28">
<p class="has-line-data" data-line-start="26" data-line-end="27">Leave the <strong>Subscription</strong> drop-down list entry set to its default value of <strong>CS-SUB-0164</strong>.</p>
</li>
<li class="has-line-data" data-line-start="28" data-line-end="30">
<p class="has-line-data" data-line-start="28" data-line-end="29">In the <strong>Cloud Shell region</strong> drop-down list, select the Azure region matching or near the location where you intend to deploy resources in this exercise.</p>
</li>
<li class="has-line-data" data-line-start="30" data-line-end="32">
<p class="has-line-data" data-line-start="30" data-line-end="31">In the <strong>Resource group</strong> section, ensure that the <strong>Create new</strong> option is selected and then, in the text box below, type a unique name to create a resource group.</p>
</li>
<li class="has-line-data" data-line-start="32" data-line-end="34">
<p class="has-line-data" data-line-start="32" data-line-end="33">In the <strong>Storage account</strong> section, ensure that the <strong>Create new</strong> option is selected and then, in the text box below, type a unique name consisting of a combination of between 3 and 24 characters and digits (<strong>Note</strong>: Storage Account names must be <strong>lowercase</strong>).</p>
</li>
<li class="has-line-data" data-line-start="34" data-line-end="36">
<p class="has-line-data" data-line-start="34" data-line-end="35">In the <strong>File share</strong> section, ensure that the <strong>Create new</strong> option is selected and then, in the text box below, type <strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="cloudshell"><code>cloudshell</code></a></strong>.</p>
</li>
<li class="has-line-data" data-line-start="36" data-line-end="38">
<p class="has-line-data" data-line-start="36" data-line-end="37">Click the <strong>Create storage</strong> button.</p>
</li>
</ul>
</li>
<li class="task-list-item" data-line-start="38" data-line-end="40" id="step-8">
<div class="task-step-checkbox checked" data-foo="84" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-8"></div><p class="has-line-data" data-line-start="38" data-line-end="39"> Wait for the <strong>Cloud Shell</strong> to finish its first-time setup procedures before you proceed to the next step.</p>
</li>
<li class="task-list-item" data-line-start="40" data-line-end="53" id="step-9">
<div class="task-step-checkbox checked" data-foo="89" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-9"></div><p class="has-line-data" data-line-start="40" data-line-end="41"> From the PowerShell Cloud Shell pane, run the following to create 2 resource groups called <strong>apple</strong> and <strong>pear</strong> (make sure to hit return after the last command to execute it):</p>
<pre class="code-badge-pre"><div class="code-badge align-items-top">
        <div class="code-badge-language">powershell</div>
        <div title="Copy to clipboard">
            <i class="fa fa-copy code-badge-copy-icon" data-code="# Create a resource group named 'apple'
New-AzResourceGroup -Name &quot;apple&quot; -Location &quot;EastUS&quot;"></i>
        </div>
     </div><code class="has-line-data language-powershell hljs" data-line-start="43" data-line-end="46"><span class="hljs-comment"># Create a resource group named 'apple'</span>
<span class="hljs-built_in">New-AzResourceGroup</span> <span class="hljs-literal">-Name</span> <span class="hljs-string">"apple"</span> <span class="hljs-literal">-Location</span> <span class="hljs-string">"EastUS"</span>
</code></pre>
<pre class="code-badge-pre"><div class="code-badge align-items-top">
        <div class="code-badge-language">powershell</div>
        <div title="Copy to clipboard">
            <i class="code-badge-copy-icon fa fa-copy" data-code="# Create a resource group named 'pear'
New-AzResourceGroup -Name &quot;pear&quot; -Location &quot;EastUS&quot;"></i>
        </div>
     </div><code class="has-line-data language-powershell hljs" data-line-start="48" data-line-end="51"><span class="hljs-comment"># Create a resource group named 'pear'</span>
<span class="hljs-built_in">New-AzResourceGroup</span> <span class="hljs-literal">-Name</span> <span class="hljs-string">"pear"</span> <span class="hljs-literal">-Location</span> <span class="hljs-string">"EastUS"</span>
</code></pre>
</li>
<li class="task-list-item" data-line-start="53" data-line-end="88" id="step-10">
<div class="task-step-checkbox checked" data-foo="96" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-10"></div><p class="has-line-data" data-line-start="53" data-line-end="54"> Now we will create some resources in these 2 resource groups</p>
<h1>Enable verbose output</h1>
<pre class="code-badge-pre"><div class="code-badge align-items-top">
        <div class="code-badge-language">powershell</div>
        <div title="Copy to clipboard">
            <i class="code-badge-copy-icon fa fa-copy" data-code="$VerbosePreference = 'Continue'"></i>
        </div>
     </div><code class="has-line-data language-powershell hljs" data-line-start="57" data-line-end="59"><span class="hljs-variable">$VerbosePreference</span> = <span class="hljs-string">'Continue'</span>
</code></pre>
<h1>Create virtual networks in the 'apple' resource group</h1>
<pre class="code-badge-pre"><div class="code-badge align-items-top">
        <div class="code-badge-language">powershell</div>
        <div title="Copy to clipboard">
            <i class="code-badge-copy-icon fa fa-copy" data-code="$appleResourceGroupName = &quot;apple&quot;
$appleLocation = &quot;EastUS&quot;
$vnetNames = @(&quot;vnet1&quot;, &quot;vnet2&quot;, &quot;vnet3&quot;)
foreach ($vnetName in $vnetNames) {
    # Define the subnet configuration for the virtual networks
    $subnetConfig = New-AzVirtualNetworkSubnetConfig -Name &quot;default&quot; -AddressPrefix &quot;10.0.0.0/24&quot;

    # Create the virtual networks
    New-AzVirtualNetwork -Name $vnetName -ResourceGroupName $appleResourceGroupName -Location $appleLocation -AddressPrefix &quot;10.0.0.0/16&quot; -Subnet $subnetConfig
}"></i>
        </div>
     </div><code class="has-line-data language-powershell hljs" data-line-start="62" data-line-end="73"><span class="hljs-variable">$appleResourceGroupName</span> = <span class="hljs-string">"apple"</span>
<span class="hljs-variable">$appleLocation</span> = <span class="hljs-string">"EastUS"</span>
<span class="hljs-variable">$vnetNames</span> = <span class="hljs-selector-tag">@</span>(<span class="hljs-string">"vnet1"</span>, <span class="hljs-string">"vnet2"</span>, <span class="hljs-string">"vnet3"</span>)
<span class="hljs-keyword">foreach</span> (<span class="hljs-variable">$vnetName</span> <span class="hljs-keyword">in</span> <span class="hljs-variable">$vnetNames</span>) {
    <span class="hljs-comment"># Define the subnet configuration for the virtual networks</span>
    <span class="hljs-variable">$subnetConfig</span> = <span class="hljs-built_in">New-AzVirtualNetworkSubnetConfig</span> <span class="hljs-literal">-Name</span> <span class="hljs-string">"default"</span> <span class="hljs-literal">-AddressPrefix</span> <span class="hljs-string">"10.0.0.0/24"</span>

    <span class="hljs-comment"># Create the virtual networks</span>
    <span class="hljs-built_in">New-AzVirtualNetwork</span> <span class="hljs-literal">-Name</span> <span class="hljs-variable">$vnetName</span> <span class="hljs-literal">-ResourceGroupName</span> <span class="hljs-variable">$appleResourceGroupName</span> <span class="hljs-literal">-Location</span> <span class="hljs-variable">$appleLocation</span> <span class="hljs-literal">-AddressPrefix</span> <span class="hljs-string">"10.0.0.0/16"</span> <span class="hljs-literal">-Subnet</span> <span class="hljs-variable">$subnetConfig</span>
}
</code></pre>
<h1>Create disks in the 'pear' resource group</h1>
<pre class="code-badge-pre"><div class="code-badge align-items-top">
        <div class="code-badge-language">powershell</div>
        <div title="Copy to clipboard">
            <i class="code-badge-copy-icon fa fa-copy" data-code="$pearResourceGroupName = &quot;pear&quot;
$pearLocation = &quot;EastUS&quot;
$diskNames = @(&quot;Disk1&quot;, &quot;Disk2&quot;, &quot;Disk3&quot;)
foreach ($diskName in $diskNames) {
    # Create disk configuration
    $diskConfig = New-AzDiskConfig -Location $pearLocation -CreateOption Empty -DiskSizeGB 128

    # Create the disks
    New-AzDisk -DiskName $diskName -Disk $diskConfig -ResourceGroupName $pearResourceGroupName
}"></i>
        </div>
     </div><code class="has-line-data language-powershell hljs" data-line-start="76" data-line-end="87"><span class="hljs-variable">$pearResourceGroupName</span> = <span class="hljs-string">"pear"</span>
<span class="hljs-variable">$pearLocation</span> = <span class="hljs-string">"EastUS"</span>
<span class="hljs-variable">$diskNames</span> = <span class="hljs-selector-tag">@</span>(<span class="hljs-string">"Disk1"</span>, <span class="hljs-string">"Disk2"</span>, <span class="hljs-string">"Disk3"</span>)
<span class="hljs-keyword">foreach</span> (<span class="hljs-variable">$diskName</span> <span class="hljs-keyword">in</span> <span class="hljs-variable">$diskNames</span>) {
    <span class="hljs-comment"># Create disk configuration</span>
    <span class="hljs-variable">$diskConfig</span> = <span class="hljs-built_in">New-AzDiskConfig</span> <span class="hljs-literal">-Location</span> <span class="hljs-variable">$pearLocation</span> <span class="hljs-literal">-CreateOption</span> Empty <span class="hljs-literal">-DiskSizeGB</span> <span class="hljs-number">128</span>

    <span class="hljs-comment"># Create the disks</span>
    <span class="hljs-built_in">New-AzDisk</span> <span class="hljs-literal">-DiskName</span> <span class="hljs-variable">$diskName</span> <span class="hljs-literal">-Disk</span> <span class="hljs-variable">$diskConfig</span> <span class="hljs-literal">-ResourceGroupName</span> <span class="hljs-variable">$pearResourceGroupName</span>
}
</code></pre>
</li>
<li class="task-list-item" data-line-start="88" data-line-end="90" id="step-11">
<div class="task-step-checkbox checked" data-foo="113" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-11"></div><p class="has-line-data" data-line-start="88" data-line-end="89"> Minimize Cloud Shell as you will need it again at a later stage.</p>
</li>
<li class="task-list-item" data-line-start="90" data-line-end="92" id="step-12">
<div class="task-step-checkbox checked" data-foo="118" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-12"></div><p class="has-line-data" data-line-start="90" data-line-end="91"> In the Azure portal, Navigate to <strong>Resource groups</strong> and open the resource group <strong>apple</strong>.</p>
</li>
<li class="task-list-item" data-line-start="92" data-line-end="94" id="step-13">
<div class="task-step-checkbox checked" data-foo="123" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-13"></div><p class="has-line-data" data-line-start="92" data-line-end="93"> On the <strong>Resource group</strong> blade, click <strong>Tags</strong>.</p>
</li>
<li class="task-list-item" data-line-start="94" data-line-end="101" id="step-14">
<div class="task-step-checkbox checked" data-foo="128" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-14"></div><p class="has-line-data" data-line-start="94" data-line-end="95"> Enter the following values and click <strong>Apply</strong>.</p>
<table class="table table-sm table-striped table-bordered" role="presentation">
<thead>
<tr>
<th>Setting</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Name</td>
<td><strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="Fruit"><code>Fruit</code></a></strong></td>
</tr>
<tr>
<td>Value</td>
<td><strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="Apple"><code>Apple</code></a></strong></td>
</tr>
</tbody>
</table>
</li>
<li class="task-list-item" data-line-start="101" data-line-end="103" id="step-15">
<div class="task-step-checkbox checked" data-foo="163" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-15"></div><p class="has-line-data" data-line-start="101" data-line-end="102"> In the Azure portal, Navigate to <strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="Resource groups"><code>Resource groups</code></a></strong> and open the resource group <strong>pear</strong>.</p>
</li>
<li class="task-list-item" data-line-start="103" data-line-end="105" id="step-16">
<div class="task-step-checkbox checked" data-foo="168" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-16"></div><p class="has-line-data" data-line-start="103" data-line-end="104"> On the <strong>Resource group</strong> blade, click <strong>Tags</strong>.</p>
</li>
<li class="task-list-item" data-line-start="105" data-line-end="112" id="step-17">
<div class="task-step-checkbox checked" data-foo="173" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-17"></div><p class="has-line-data" data-line-start="105" data-line-end="106"> Enter the following and click <strong>Apply</strong>.</p>
<table class="table table-sm table-striped table-bordered" role="presentation">
<thead>
<tr>
<th>Setting</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Name</td>
<td><strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="Fruit"><code>Fruit</code></a></strong></td>
</tr>
<tr>
<td>Value</td>
<td><strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="Pear"><code>Pear</code></a></strong></td>
</tr>
</tbody>
</table>
</li>
<li class="task-list-item" data-line-start="112" data-line-end="114" id="step-18">
<div class="task-step-checkbox checked" data-foo="208" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-18"></div><p class="has-line-data" data-line-start="112" data-line-end="113"> On the <strong>Resource group</strong> blade, click <strong>Overview</strong> then click on <strong>Disk1</strong>.</p>
</li>
<li class="task-list-item" data-line-start="114" data-line-end="116" id="step-19">
<div class="task-step-checkbox checked" data-foo="213" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-19"></div><p class="has-line-data" data-line-start="114" data-line-end="115"> On the <strong>Disk</strong> blade, click on <strong>Tags</strong>.</p>
</li>
<li class="task-list-item" data-line-start="116" data-line-end="118" id="step-20">
<div class="task-step-checkbox checked" data-foo="218" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-20"></div><p class="has-line-data" data-line-start="116" data-line-end="117"> Notice that <strong>Disk1</strong> does not have a tag as tags do not inherit from the resource group automatically.</p>
</li>
<li class="task-list-item" data-line-start="118" data-line-end="120" id="step-21">
<div class="task-step-checkbox checked" data-foo="223" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-21"></div><p class="has-line-data" data-line-start="118" data-line-end="119"> Select <strong>Cloud Shell</strong> from the Azure Portal tool bar.</p>
</li>
<li class="task-list-item" data-line-start="120" data-line-end="161" id="step-22">
<div class="task-step-checkbox checked" data-foo="228" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-22"></div><p class="has-line-data" data-line-start="120" data-line-end="121"> We will now assign tags to the disks and the vnets using the following Powershell script in the cloud shell:</p>
<h1>Enable verbose output</h1>
<pre class="code-badge-pre"><div class="code-badge align-items-top">
        <div class="code-badge-language">powershell</div>
        <div title="Copy to clipboard">
            <i class="code-badge-copy-icon fa-copy fa" data-code="$VerbosePreference = 'Continue'"></i>
        </div>
     </div><code class="has-line-data language-powershell hljs" data-line-start="124" data-line-end="126"><span class="hljs-variable">$VerbosePreference</span> = <span class="hljs-string">'Continue'</span>
</code></pre>
<h1>Resource groups to process</h1>
<pre class="code-badge-pre"><div class="code-badge align-items-top">
        <div class="code-badge-language">powershell</div>
        <div title="Copy to clipboard">
            <i class="code-badge-copy-icon fa fa-copy" data-code="$resourceGroups = @(&quot;apple&quot;, &quot;pear&quot;)"></i>
        </div>
     </div><code class="has-line-data language-powershell hljs" data-line-start="129" data-line-end="131"><span class="hljs-variable">$resourceGroups</span> = <span class="hljs-selector-tag">@</span>(<span class="hljs-string">"apple"</span>, <span class="hljs-string">"pear"</span>)
</code></pre>
<h1>Tag to be applied</h1>
<pre class="code-badge-pre"><div class="code-badge align-items-top">
        <div class="code-badge-language">powershell</div>
        <div title="Copy to clipboard">
            <i class="code-badge-copy-icon fa fa-copy" data-code="$tag = @{project=&quot;az305labwork&quot;}"></i>
        </div>
     </div><code class="has-line-data language-powershell hljs" data-line-start="134" data-line-end="136"><span class="hljs-variable">$tag</span> = <span class="hljs-selector-tag">@</span>{project=<span class="hljs-string">"az305labwork"</span>}
</code></pre>
<h1>Loop through each resource group</h1>
<pre class="code-badge-pre"><div class="code-badge align-items-top">
        <div class="code-badge-language">powershell</div>
        <div title="Copy to clipboard">
            <i class="code-badge-copy-icon fa fa-copy" data-code="foreach ($resourceGroup in $resourceGroups) {
    Write-Verbose &quot;Processing Resource Group: $resourceGroup&quot;

    # Get all resources in the resource group
    $resources = Get-AzResource -ResourceGroupName $resourceGroup
    Write-Verbose &quot;Found $($resources.Count) resources in $resourceGroup&quot;

    # Loop through each resource and apply the tag
    foreach ($resource in $resources) {
        Write-Verbose &quot;Applying tag to Resource: $($resource.ResourceName)&quot;

        # Merge existing tags with the new tag
        $currentTags = $resource.Tags
        if ($currentTags -eq $null) { $currentTags = @{} }
        $newTags = $currentTags + $tag

        # Apply the tags to the resource
        Set-AzResource -ResourceId $resource.ResourceId -Tag $newTags -Force -Verbose
    }
}"></i>
        </div>
     </div><code class="has-line-data language-powershell hljs" data-line-start="139" data-line-end="160"><span class="hljs-keyword">foreach</span> (<span class="hljs-variable">$resourceGroup</span> <span class="hljs-keyword">in</span> <span class="hljs-variable">$resourceGroups</span>) {
    <span class="hljs-built_in">Write-Verbose</span> <span class="hljs-string">"Processing Resource Group: <span class="hljs-variable">$resourceGroup</span>"</span>

    <span class="hljs-comment"># Get all resources in the resource group</span>
    <span class="hljs-variable">$resources</span> = <span class="hljs-built_in">Get-AzResource</span> <span class="hljs-literal">-ResourceGroupName</span> <span class="hljs-variable">$resourceGroup</span>
    <span class="hljs-built_in">Write-Verbose</span> <span class="hljs-string">"Found <span class="hljs-variable">$</span>(<span class="hljs-variable">$resources</span>.Count) resources in <span class="hljs-variable">$resourceGroup</span>"</span>

    <span class="hljs-comment"># Loop through each resource and apply the tag</span>
    <span class="hljs-keyword">foreach</span> (<span class="hljs-variable">$resource</span> <span class="hljs-keyword">in</span> <span class="hljs-variable">$resources</span>) {
        <span class="hljs-built_in">Write-Verbose</span> <span class="hljs-string">"Applying tag to Resource: <span class="hljs-variable">$</span>(<span class="hljs-variable">$resource</span>.ResourceName)"</span>

        <span class="hljs-comment"># Merge existing tags with the new tag</span>
        <span class="hljs-variable">$currentTags</span> = <span class="hljs-variable">$resource</span>.Tags
        <span class="hljs-keyword">if</span> (<span class="hljs-variable">$currentTags</span> <span class="hljs-operator">-eq</span> <span class="hljs-variable">$null</span>) { <span class="hljs-variable">$currentTags</span> = <span class="hljs-selector-tag">@</span>{} }
        <span class="hljs-variable">$newTags</span> = <span class="hljs-variable">$currentTags</span> + <span class="hljs-variable">$tag</span>

        <span class="hljs-comment"># Apply the tags to the resource</span>
        <span class="hljs-built_in">Set-AzResource</span> <span class="hljs-literal">-ResourceId</span> <span class="hljs-variable">$resource</span>.ResourceId <span class="hljs-literal">-Tag</span> <span class="hljs-variable">$newTags</span> <span class="hljs-literal">-Force</span> <span class="hljs-literal">-Verbose</span>
    }
}
</code></pre>
</li>
<li class="task-list-item" data-line-start="161" data-line-end="163" id="step-23">
<div class="task-step-checkbox checked" data-foo="249" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-23"></div><p class="has-line-data" data-line-start="161" data-line-end="162"> Minimize Cloud Shell as you will need it again at a later stage.</p>
</li>
<li class="task-list-item" data-line-start="163" data-line-end="165" id="step-24">
<div class="task-step-checkbox checked" data-foo="254" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-24"></div><p class="has-line-data" data-line-start="163" data-line-end="164"> Return to the Resource group <strong>pear</strong> and select <strong>Disk1</strong>, click <strong>Tags</strong> and notice the newly assigned tag.</p>
</li>
<li class="task-list-item" data-line-start="165" data-line-end="167" id="step-25">
<div class="task-step-checkbox checked" data-foo="259" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-25"></div><p class="has-line-data" data-line-start="165" data-line-end="166"> We now have a number of resources that have been tagged on both the Resource group level and the resource level, we can use these tags to more effectively perform cost management.</p>
</li>
</ol>
<h2>Task 2: Viewing resources and filtering for tags in cost management</h2>
<ol class="task-list" data-group="2">
<li class="task-list-item" data-line-start="169" data-line-end="171" id="step-26">
<div class="task-step-checkbox checked" data-foo="269" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-26"></div><p class="has-line-data" data-line-start="169" data-line-end="170"> In the Azure portal, search for and select <strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="Cost management + billing"><code>Cost management + billing</code></a></strong>, you can find this on the navigation bar on the left or by searching in the search bar at the top.</p>
</li>
<li class="task-list-item" data-line-start="171" data-line-end="173" id="step-27">
<div class="task-step-checkbox checked" data-foo="274" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-27"></div><p class="has-line-data" data-line-start="171" data-line-end="172"> Inside <strong>Cost Management + Billing</strong> select <strong>Cost Management</strong>.</p>
</li>
<li class="task-list-item" data-line-start="173" data-line-end="175" id="step-28">
<div class="task-step-checkbox checked" data-foo="279" tabindex="0" role="checkbox" aria-checked="true" aria-labelledby="step-28"></div><p class="has-line-data" data-line-start="173" data-line-end="174"> Under <strong>Cost Management</strong>, select <strong>Cost Analysis</strong>.</p>
</li>
<li class="task-list-item" data-line-start="175" data-line-end="177" id="step-29">
<div class="task-step-checkbox" data-foo="284" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-29"></div><p class="has-line-data" data-line-start="175" data-line-end="176"> Click <strong>Resource Groups</strong>.</p>
</li>
<li class="task-list-item" data-line-start="177" data-line-end="179" id="step-30">
<div class="task-step-checkbox" data-foo="289" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-30"></div><p class="has-line-data" data-line-start="177" data-line-end="178"> Here you can see your costs of your Azure resources by Resource group.</p>
</li>
<li class="task-list-item" data-line-start="179" data-line-end="181" id="step-31">
<div class="task-step-checkbox" data-foo="294" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-31"></div><p class="has-line-data" data-line-start="179" data-line-end="180"> Click the <strong>Customize</strong> button in this Resource Group list tab.</p>
</li>
<li class="task-list-item" data-line-start="181" data-line-end="183" id="step-32">
<div class="task-step-checkbox" data-foo="299" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-32"></div><p class="has-line-data" data-line-start="181" data-line-end="182"> Click <strong>Convert to customizable view</strong> button.</p>
</li>
<li class="task-list-item" data-line-start="183" data-line-end="185" id="step-33">
<div class="task-step-checkbox" data-foo="304" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-33"></div><p class="has-line-data" data-line-start="183" data-line-end="184"> Here we can create our own view to group together the resources by Tag.</p>
</li>
<li class="task-list-item" data-line-start="185" data-line-end="187" id="step-34">
<div class="task-step-checkbox" data-foo="309" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-34"></div><p class="has-line-data" data-line-start="185" data-line-end="186"> Click <strong>Group by: Resource group name</strong> on the top right of the list of resources.</p>
</li>
<li class="task-list-item" data-line-start="187" data-line-end="189" id="step-35">
<div class="task-step-checkbox" data-foo="314" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-35"></div><p class="has-line-data" data-line-start="187" data-line-end="188"> Scroll down in the list of <strong>Group By</strong> and select <strong>Tag</strong>.</p>
</li>
<li class="task-list-item" data-line-start="189" data-line-end="191" id="step-36">
<div class="task-step-checkbox" data-foo="319" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-36"></div><p class="has-line-data" data-line-start="189" data-line-end="190"> Here you can select the tags created earlier of <strong>fruit:apple</strong> <strong>fruit:pear</strong> and <strong>project:az305labwork</strong> if you have worked through to this point quickly you may not yet see these tags appear as they can take some time (up to 24 hours) to appear in cost management after being initially assigned to resources. This will not effect the next part of the lab.</p>
</li>
<li class="task-list-item" data-line-start="191" data-line-end="193" id="step-37">
<div class="task-step-checkbox" data-foo="324" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-37"></div><p class="has-line-data" data-line-start="191" data-line-end="192"> Take note of the <strong>Save</strong>, <strong>Save As</strong> and <strong>Share</strong> buttons for this custom view allowing co-authoring and collaboration of cost manangement views accross Azure administrators.</p>
</li>
</ol>
<h2>Task 3: Creating Policy's to restrict Virtual machine locations</h2>
<ol class="task-list" data-group="3">
<li class="task-list-item" data-line-start="195" data-line-end="197" id="step-38">
<div class="task-step-checkbox" data-foo="334" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-38"></div><p class="has-line-data" data-line-start="195" data-line-end="196"> In the Azure portal navigate to <strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="Resource Groups"><code>Resource Groups</code></a></strong> and click <strong>+ Create</strong>.</p>
</li>
<li class="task-list-item" data-line-start="197" data-line-end="199" id="step-39">
<div class="task-step-checkbox" data-foo="339" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-39"></div><p class="has-line-data" data-line-start="197" data-line-end="198"> Create a Resource Group called <strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="UKVirtualMachines"><code>UKVirtualMachines</code></a></strong> and set the Region to <strong>UK South</strong> then click <strong>Review and Create</strong> and then <strong>Create</strong></p>
</li>
<li class="task-list-item" data-line-start="199" data-line-end="201" id="step-40">
<div class="task-step-checkbox" data-foo="344" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-40"></div><p class="has-line-data" data-line-start="199" data-line-end="200"> We have created a <strong>Resource group</strong> that is in <strong>(Europe) UK South</strong> but is not restricted to resources in UK South. To prove this point we will now deploy a simple virtual machine to this resource group that is hosted in <strong>East US</strong>.</p>
</li>
<li class="task-list-item" data-line-start="201" data-line-end="203" id="step-41">
<div class="task-step-checkbox" data-foo="349" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-41"></div><p class="has-line-data" data-line-start="201" data-line-end="202"> In the Azure portal, search for and select <strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="Virtual Machines"><code>Virtual Machines</code></a></strong>.</p>
</li>
<li class="task-list-item" data-line-start="203" data-line-end="205" id="step-42">
<div class="task-step-checkbox" data-foo="354" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-42"></div><p class="has-line-data" data-line-start="203" data-line-end="204"> Click <strong>+ Create</strong> then select <strong>Azure virtual machine</strong>.</p>
</li>
<li class="task-list-item" data-line-start="205" data-line-end="217" id="step-43">
<div class="task-step-checkbox" data-foo="359" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-43"></div><p class="has-line-data" data-line-start="205" data-line-end="206"> Set the following settings:</p>
<table class="table table-sm table-striped table-bordered" role="presentation">
<thead>
<tr>
<th>Setting</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Resource Group</td>
<td><strong>UKVirtualMachines</strong></td>
</tr>
<tr>
<td>Virtual Machine Name</td>
<td><strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="AmericaVM"><code>AmericaVM</code></a></strong></td>
</tr>
<tr>
<td>Region</td>
<td><strong>(US) East US</strong></td>
</tr>
<tr>
<td>Availablity options</td>
<td><strong>No infrastructure redudancy required</strong></td>
</tr>
<tr>
<td>Authentication type</td>
<td><strong>Password</strong></td>
</tr>
<tr>
<td>Username</td>
<td><strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="AmericanAdmin"><code>AmericanAdmin</code></a></strong></td>
</tr>
<tr>
<td>Password</td>
<td><strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="DfrQawguF4aGqFjA"><code>DfrQawguF4aGqFjA</code></a></strong></td>
</tr>
</tbody>
</table>
</li>
<li class="task-list-item" data-line-start="217" data-line-end="219" id="step-44">
<div class="task-step-checkbox" data-foo="434" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-44"></div><p class="has-line-data" data-line-start="217" data-line-end="218"> Click <strong>Review + Create</strong>.</p>
</li>
<li class="task-list-item" data-line-start="219" data-line-end="221" id="step-45">
<div class="task-step-checkbox" data-foo="439" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-45"></div><p class="has-line-data" data-line-start="219" data-line-end="220"> Then click <strong>Create</strong> and wait for the machine to deploy.</p>
</li>
<li class="task-list-item" data-line-start="221" data-line-end="223" id="step-46">
<div class="task-step-checkbox" data-foo="444" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-46"></div><p class="has-line-data" data-line-start="221" data-line-end="222"> We can see that the <strong>AmericaVM</strong> can deploy to the resource group for the UK machines, we are now going to restrict this action with a policy.</p>
</li>
<li class="task-list-item" data-line-start="223" data-line-end="225" id="step-47">
<div class="task-step-checkbox" data-foo="449" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-47"></div><p class="has-line-data" data-line-start="223" data-line-end="224"> Search for <strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="Policy"><code>Policy</code></a></strong> in the search bar and Select <strong>Policy</strong>.</p>
</li>
<li class="task-list-item" data-line-start="225" data-line-end="227" id="step-48">
<div class="task-step-checkbox" data-foo="454" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-48"></div><p class="has-line-data" data-line-start="225" data-line-end="226"> Under <strong>Authoring</strong>, click <strong>Definitions</strong>.</p>
</li>
<li class="task-list-item" data-line-start="227" data-line-end="229" id="step-49">
<div class="task-step-checkbox" data-foo="459" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-49"></div><p class="has-line-data" data-line-start="227" data-line-end="228"> In the <strong>Filter by name or ID...</strong> under <strong>Search</strong>, search for <strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="Allowed Locations"><code>Allowed Locations</code></a></strong>.</p>
</li>
<li class="task-list-item" data-line-start="229" data-line-end="231" id="step-50">
<div class="task-step-checkbox" data-foo="464" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-50"></div><p class="has-line-data" data-line-start="229" data-line-end="230"> Select the <strong>Allowed locations</strong> Policy.</p>
</li>
<li class="task-list-item" data-line-start="231" data-line-end="233" id="step-51">
<div class="task-step-checkbox" data-foo="469" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-51"></div><p class="has-line-data" data-line-start="231" data-line-end="232"> Click <strong>Assign</strong>.</p>
</li>
<li class="task-list-item" data-line-start="233" data-line-end="235" id="step-52">
<div class="task-step-checkbox" data-foo="474" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-52"></div><p class="has-line-data" data-line-start="233" data-line-end="234"> In the <strong>Basics</strong> tab, under <strong>Scope</strong>, click the <strong>...(ellipsis)</strong>.</p>
</li>
<li class="task-list-item" data-line-start="235" data-line-end="237" id="step-53">
<div class="task-step-checkbox" data-foo="479" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-53"></div><p class="has-line-data" data-line-start="235" data-line-end="236"> Select the subscription <strong>CS-SUB-0164</strong> and Resource group <strong>UKVirtualMachines</strong> then click <strong>Select</strong>.</p>
</li>
<li class="task-list-item" data-line-start="237" data-line-end="239" id="step-54">
<div class="task-step-checkbox" data-foo="484" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-54"></div><p class="has-line-data" data-line-start="237" data-line-end="238"> Scroll down and notice <strong>Policy Enforcement</strong> is set to <strong>Enabled</strong>, this means the Policy will take effect immediately and also effect resources that are not compliant with the policy (like the AmericaVM we just deployed, lets see what happens to it later).</p>
</li>
<li class="task-list-item" data-line-start="239" data-line-end="241" id="step-55">
<div class="task-step-checkbox" data-foo="489" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-55"></div><p class="has-line-data" data-line-start="239" data-line-end="240"> Click <strong>Parameters</strong> and in the drop down list under <strong>Allowed locations</strong>, select <strong>UK South</strong>.</p>
</li>
<li class="task-list-item" data-line-start="241" data-line-end="243" id="step-56">
<div class="task-step-checkbox" data-foo="494" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-56"></div><p class="has-line-data" data-line-start="241" data-line-end="242"> Click <strong>Review + Create</strong> then click <strong>Create</strong></p>
</li>
<li class="task-list-item" data-line-start="243" data-line-end="245" id="step-57">
<div class="task-step-checkbox" data-foo="499" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-57"></div><p class="has-line-data" data-line-start="243" data-line-end="244"> Return to the main Policy windows and select <strong>compliance</strong></p>
</li>
<li class="task-list-item" data-line-start="245" data-line-end="247" id="step-58">
<div class="task-step-checkbox" data-foo="504" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-58"></div><p class="has-line-data" data-line-start="245" data-line-end="246"> Here you can see your policy applied to the resource group, this could take a few minutes to take effect and you may need to refresh the portal</p>
</li>
<li class="task-list-item" data-line-start="247" data-line-end="249" id="step-59">
<div class="task-step-checkbox" data-foo="509" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-59"></div><p class="has-line-data" data-line-start="247" data-line-end="248"> Return to the <strong>UKVirtualMachines</strong> resource group</p>
</li>
<li class="task-list-item" data-line-start="249" data-line-end="251" id="step-60">
<div class="task-step-checkbox" data-foo="514" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-60"></div><p class="has-line-data" data-line-start="249" data-line-end="250"> Notice the <strong>AmericaVM</strong> Virtual machine is still there even though it is not compliant, Azure will not delete a non-compliant resource unless you explicitly make a remediation for that action.</p>
</li>
<li class="task-list-item" data-line-start="251" data-line-end="253" id="step-61">
<div class="task-step-checkbox" data-foo="519" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-61"></div><p class="has-line-data" data-line-start="251" data-line-end="252"> Search for and select <strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="virtual machines"><code>virtual machines</code></a></strong> in the search bar, click <strong>+ Create -&gt; Azure virtual machine</strong></p>
</li>
<li class="task-list-item" data-line-start="253" data-line-end="265" id="step-62">
<div class="task-step-checkbox" data-foo="524" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-62"></div><p class="has-line-data" data-line-start="253" data-line-end="254"> Use the following settings to create a virtual machine:</p>
<table class="table table-sm table-striped table-bordered" role="presentation">
<thead>
<tr>
<th>Setting</th>
<th>Value</th>
</tr>
</thead>
<tbody>
<tr>
<td>Resource Group</td>
<td><strong>UKVirtualMachines</strong></td>
</tr>
<tr>
<td>Virtual Machine Name</td>
<td><strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="AmericaVMWest"><code>AmericaVMWest</code></a></strong></td>
</tr>
<tr>
<td>Region</td>
<td><strong>West US</strong></td>
</tr>
<tr>
<td>Availablity options</td>
<td><strong>No infrastructure redudancy required</strong></td>
</tr>
<tr>
<td>Authentication type</td>
<td><strong>Password</strong></td>
</tr>
<tr>
<td>Username</td>
<td><strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="AmericanAdmin"><code>AmericanAdmin</code></a></strong></td>
</tr>
<tr>
<td>Password</td>
<td><strong><a href="urn:gd:lg:a:send-vm-keys" class="paste-action-link action-link" title="Paste text into VM" data-str="DfrQawguF4aGqFjA"><code>DfrQawguF4aGqFjA</code></a></strong></td>
</tr>
</tbody>
</table>
</li>
<li class="task-list-item" data-line-start="265" data-line-end="267" id="step-63">
<div class="task-step-checkbox" data-foo="599" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-63"></div><p class="has-line-data" data-line-start="265" data-line-end="266"> Click <strong>Review + create</strong> and you will be presented with an error of <strong>Validation Failed</strong>, click on it.</p>
</li>
<li class="task-list-item" data-line-start="267" data-line-end="269" id="step-64">
<div class="task-step-checkbox" data-foo="604" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-64"></div><p class="has-line-data" data-line-start="267" data-line-end="268"> In the Summary you can see <strong>disallowed by policy</strong>.</p>
</li>
<li class="task-list-item" data-line-start="269" data-line-end="271" id="step-65">
<div class="task-step-checkbox" data-foo="609" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-65"></div><p class="has-line-data" data-line-start="269" data-line-end="270"> click <strong>Raw Error</strong> to see the full error, in the message section of this large JSON you can see the exact policy that has denied this deployment.</p>
</li>
<li class="task-list-item" data-line-start="271" data-line-end="299" id="step-66">
<div class="task-step-checkbox" data-foo="614" tabindex="0" role="checkbox" aria-checked="false" aria-labelledby="step-66"></div><p class="has-line-data" data-line-start="271" data-line-end="272"> You can now use the following script in the Azure Cloud Shell to clean up the resources used in this lab by force deleting the resource groups and the contents of them. You may wish to backtrack to take another look at cost management at this point to see if you can now filter by tag, you may also want to to experiment with deploying other resources in different regions to your restricted resource group. Or, you may wish to have a look at some other other default policies on offer, inlcuding those for restricting the SKU (or size) of virtual mahcines that can be deployed. Remember, policies can be deployed at the resource group level, the subscription level and even at the mangement group level.</p>
<h1>Enable verbose output</h1>
<pre class="code-badge-pre"><div class="code-badge align-items-top">
        <div class="code-badge-language">powershell</div>
        <div title="Copy to clipboard">
            <i class="code-badge-copy-icon fa fa-copy" data-code="$VerbosePreference = 'Continue'"></i>
        </div>
     </div><code class="has-line-data language-powershell hljs" data-line-start="275" data-line-end="277"><span class="hljs-variable">$VerbosePreference</span> = <span class="hljs-string">'Continue'</span>
</code></pre>
<h1>Resource groups to delete</h1>
<pre class="code-badge-pre"><div class="code-badge align-items-top">
        <div class="code-badge-language">powershell</div>
        <div title="Copy to clipboard">
            <i class="code-badge-copy-icon fa fa-copy" data-code="$resourceGroups = @(&quot;apple&quot;, &quot;pear&quot;, &quot;UKVirtualMachines&quot;)"></i>
        </div>
     </div><code class="has-line-data language-powershell hljs" data-line-start="280" data-line-end="282"><span class="hljs-variable">$resourceGroups</span> = <span class="hljs-selector-tag">@</span>(<span class="hljs-string">"apple"</span>, <span class="hljs-string">"pear"</span>, <span class="hljs-string">"UKVirtualMachines"</span>)
</code></pre>
<h1>Loop through each resource group and delete</h1>
<pre class="code-badge-pre"><div class="code-badge align-items-top">
        <div class="code-badge-language">powershell</div>
        <div title="Copy to clipboard">
            <i class="code-badge-copy-icon fa fa-copy" data-code="foreach ($resourceGroup in $resourceGroups) {
    # Force delete the resource group and all its contents
    Remove-AzResourceGroup -Name $resourceGroup -Force -AsJob
}"></i>
        </div>
     </div><code class="has-line-data language-powershell hljs" data-line-start="285" data-line-end="290"><span class="hljs-keyword">foreach</span> (<span class="hljs-variable">$resourceGroup</span> <span class="hljs-keyword">in</span> <span class="hljs-variable">$resourceGroups</span>) {
    <span class="hljs-comment"># Force delete the resource group and all its contents</span>
    <span class="hljs-built_in">Remove-AzResourceGroup</span> <span class="hljs-literal">-Name</span> <span class="hljs-variable">$resourceGroup</span> <span class="hljs-literal">-Force</span> <span class="hljs-literal">-AsJob</span>
}
</code></pre>
</li>
</ol>
</div>
            <div class="d-flex flex-grow-0 container-fluid lab-guide-paging p-0 justify-content-between d-none p-1 border-top">
                <button class="btn btn-secondary rounded-0 d-none prev-page">&lt; Previous</button>
                <button class="btn btn-primary rounded-0 d-none next-page ml-auto">Next &gt;</button>
            </div>
        </div>
    </div>
    <div id="labGuidePoppedOutContainer" class="text-center" style="display:none;">
        <p>Your lab guide is open in another window</p>
        <p class="text-muted"><i class="fal fa-window fa-9x"></i></p>
        <p><button class="btn btn-brand d-block w-100 focus-popout-btn">Show Lab Guide</button></p>
    </div>
</div>