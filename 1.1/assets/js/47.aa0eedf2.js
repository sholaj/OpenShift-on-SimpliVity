(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{246:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"create-the-red-hat-linux-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-the-red-hat-linux-template","aria-hidden":"true"}},[e._v("#")]),e._v(" Create the Red Hat Linux template")]),e._v(" "),a("p",[e._v("To create the Red Hat Linux VM template that will be used as the base image for all non-RHCOS VM nodes,\nyou first create a Virtual Machine, install the base RHEL 7.6 OS and then convert the VM to a VM Template.\nAny additional software installations and/or system configuration is performed subsequently using Ansible,\nrather than in the template itself.")]),e._v(" "),a("p",[e._v("As the creation of the template is a one-time task, this procedure has not been automated. The steps required to manually create a VM template are outlined below.")]),e._v(" "),a("p",[e._v("Log in to vCenter and create a new Virtual Machine with the following characteristics:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("Guest OS Family")]),e._v(": Linux, Guest OS Version: Red Hat Enterprise Linux (64-bit)")]),e._v(" "),a("li",[a("strong",[e._v("Hard Disk size")]),e._v(": 50GB, (Thin provisioning)")]),e._v(" "),a("li",[a("strong",[e._v("Network")]),e._v(": A single network controller connected to the network or VLAN of your choice. All VMs will connect to this same network.")]),e._v(" "),a("li",[a("strong",[e._v("Optional")]),e._v(": Remove the floppy drive")])]),e._v(" "),a("p",[e._v("Install Red Hat Enterprise 7.6:")]),e._v(" "),a("ol",[a("li",[e._v("Select a language.")]),e._v(" "),a("li",[e._v("For the software selection, choose "),a("strong",[e._v("Infrastructure Server")]),e._v(" as the base environment and add the "),a("strong",[e._v("Guest Agents")]),e._v(" from the lists of add-ons available for this environment.")]),e._v(" "),a("li",[e._v("Configure the network settings so that you can later access the VM using SSH from your Ansible controller node. Specify an IP address for the network interface, a default gateway and DNS settings.")]),e._v(" "),a("li",[e._v("Specify a password for the root account and optionally create an admin user.")]),e._v(" "),a("li",[e._v("Wait for the installation to finish and for the VM to reboot.")])]),e._v(" "),a("h2",{attrs:{id:"update-packages"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-packages","aria-hidden":"true"}},[e._v("#")]),e._v(" Update packages")]),e._v(" "),a("ul",[a("li",[e._v("Change the hostname of the VM giving it a name that you will recognize in your Red Hat Account. This VM name is used as the value for the "),a("code",[e._v("support_template")]),e._v(" variable in your "),a("code",[e._v("group_vars\\all\\vars.yml")]),e._v(" configuration file. For example, to change the hostname of the VM to "),a("strong",[e._v("ocp-rhel760")]),e._v(" use the following command:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ nmcli general hostname ocp-rhel760\n")])])]),a("ul",[a("li",[e._v("Register the system with the Red Hat Network and attach it to a subscription. You can do this using the following command if you have created activations keys:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ subscription-manager register --org=<your_org> --activationkey=<activation key> --auto-attach\n")])])]),a("ul",[a("li",[e._v("If your Red Hat Network account does not use organization IDs and activation keys, you can instead register the server using your RHN username and password:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ subscription-manager register --username <your_username> --password <your_password> --auto-attach\n")])])]),a("ul",[a("li",[e._v("Use "),a("code",[e._v("yum update")]),e._v(" to install the latest packages:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ yum -y update\n")])])]),a("ul",[a("li",[e._v("Install the "),a("code",[e._v("cloud-init")]),e._v(" package, which will be used to customize any VMs created from this template VM:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ yum install -y https://github.com/vmware/cloud-init-vmware-guestinfo/releases/download/v1.1.0/cloud-init-vmware-guestinfo-1.1.0-1.el7.noarch.rpm\n")])])]),a("ul",[a("li",[e._v("Un-register the system from the Red Hat Network and remove subscription data:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("# subscription-manager unregister\n")])])]),a("h2",{attrs:{id:"finalize-the-template"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#finalize-the-template","aria-hidden":"true"}},[e._v("#")]),e._v(" Finalize the template")]),e._v(" "),a("p",[e._v("Perform the following steps on the VM to finalize its creation:")]),e._v(" "),a("ol",[a("li",[a("p",[e._v("Remove any customizations from the VM by running the following commands from the "),a("strong",[e._v("VMware Virtual Machine Console:")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ rm /etc/ssh/ssh_host_*\n$ nmcli con del ens192\n$ logrotate -f /etc/logrotate.conf\n$ rm /var/log/*-201?*\n$ history -c\t\t    \n")])])])]),e._v(" "),a("li",[a("p",[e._v("If you have used a static IP address when creating the template, you should remove the networking configuration.")])]),e._v(" "),a("li",[a("p",[e._v("Shutdown the VM")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ shutdown -h now\n")])])])]),e._v(" "),a("li",[a("p",[e._v("Convert the VM into a template by right-clicking on your VM in vCenter and selecting "),a("code",[e._v("Template -> Convert to Template")]),e._v(". The  VM will be replaced by a new template visible under VM Templates in Folders, ready for future use.")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);