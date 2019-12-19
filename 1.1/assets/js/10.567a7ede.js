(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{206:function(e,t,a){e.exports=a.p+"assets/img/csi-datastore.2094aee4.png"},216:function(e,t,a){"use strict";a.r(t);var s=a(0),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"container-storage-interface-csi-driver"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#container-storage-interface-csi-driver","aria-hidden":"true"}},[e._v("#")]),e._v(" Container Storage Interface (CSI) driver")]),e._v(" "),s("p",[e._v("When deploying this solution, the vSphere Cloud Provider legacy storage plugin is installed by default.\nIf you are running version 6.7 U3 of VMware ESX, you can use the playbooks to take advantage of the new support\nfor the Container Storage Interface (CSI) plugin.")]),e._v(" "),s("p",[e._v("The playbook "),s("code",[e._v("playbook/csi.yml")]),e._v(" codifies the instructions for manually installing the vSphere Container Storage Interface\ndriver that are available at\n"),s("a",{attrs:{href:"https://docs.vmware.com/en/VMware-vSphere/6.7/Cloud-Native-Storage/GUID-039425C1-597F-46FF-8BAA-C5A46FF10E63.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.vmware.com/en/VMware-vSphere/6.7/Cloud-Native-Storage/GUID-039425C1-597F-46FF-8BAA-C5A46FF10E63.html"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Without configuration, the playbook will use an existing datastore for the persistent CSI volumes, specifically the\nfirst datastore in the Ansible variable "),s("code",[e._v("datastores")]),e._v(". If you want the playbook to automatically provision a separate\ndatastore for CSI, you must follow the relevant instructions in the section on\n"),s("a",{attrs:{href:"../config-core/simplivity-config"}},[e._v("HPE SimpliVity configuration")]),e._v(". In particular, you need to\nidentify the IP address of the OmniStack appliance(s) in your HPE SimpliVity cluster, using the variable\n"),s("code",[e._v("simplivity_appliances")]),e._v(".")]),e._v(" "),s("h2",{attrs:{id:"configuration-variables-for-csi"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#configuration-variables-for-csi","aria-hidden":"true"}},[e._v("#")]),e._v(" Configuration variables for CSI")]),e._v(" "),s("p",[e._v("The variables related to CSI configuration are described in the table below.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),e._v(" "),s("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),s("tbody",[s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("csi_datastore_name")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("The name of the datastore which will hold the persistent volumes. If this variable is not configured, the first datastore listed in the Ansible variable "),s("code",[e._v("datastores")]),e._v(" is used.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("csi_datastore_size")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Optional size of CSI datastore, specified in GB. Defaults to 512 GB. If an existing datastore is used for CSI persistent volumes, this variable is ignored.")])]),e._v(" "),s("tr",[s("td",{staticStyle:{"text-align":"left"}},[s("code",[e._v("csi_storageclass_name")])]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("group_vars/all/vars.yml")]),e._v(" "),s("td",{staticStyle:{"text-align":"left"}},[e._v("Name of the storage class to be created. If a storage class already exists with this name, it will remain unmodified. If no value is specified for this variable, a storage class named "),s("code",[e._v("csivols")]),e._v(" will be created, provided one with this name does not already exist.")])])])]),e._v(" "),s("p",[e._v("While it is possible to use an exising datastore, it is recommended that you create a dedicated one for CSI volumes, either manually or using the automated provisioning.")]),e._v(" "),s("h2",{attrs:{id:"running-the-playbook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#running-the-playbook","aria-hidden":"true"}},[e._v("#")]),e._v(" Running the playbook")]),e._v(" "),s("p",[e._v("Before running the playbook, you should log in as an admin user (either "),s("code",[e._v("kubeadmin")]),e._v(" or\nany other user that has the "),s("code",[e._v("cluster_admin")]),e._v(" role):")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ export KUBECONFIG ~/.ocp/auth/kubeconfig\n$ oc login -u kubeadmin -p <password>\n$ cd ~/OpenShift-on-SimpliVity\n")])])]),s("p",[e._v("Once you have configured the appropriate variables, run the playbook:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ ansible-playbook -i hosts playbooks/csi.yml\n")])])]),s("p",[e._v("Once the playbook has finished, you can check that the CSI pods are operational and that storage class has been created.")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("oc get pods -n kube-system\n\nNAME                       READY   STATUS    RESTARTS   AGE\nvsphere-csi-controller-0   5/5     Running   0          90m\nvsphere-csi-node-9b4sf     3/3     Running   0          90m\nvsphere-csi-node-dqht2     3/3     Running   0          90m\n")])])]),s("p",[e._v("Assuming the following configuration:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('csi_datastore_name: "OCP_CSI_DATASTORE"\ncsi_datastore_size: 200\ncsi_storageclass_name: "ocp-csi-sc"\n')])])]),s("p",[e._v("You should check that the appropriate storage class named "),s("code",[e._v("ocp-csi-sc")]),e._v(" has been created:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("$ oc get sc\n\nNAME             PROVISIONER                    AGE\nocp-csi-sc       csi.vsphere.vmware.com         26m\nthin (default)   kubernetes.io/vsphere-volume   5h39m\n")])])]),s("p",[e._v("In VMware vCenter UI, you can see that the datastore has been created with the correct size:")]),e._v(" "),s("p",[s("img",{attrs:{src:a(206),alt:'" "',title:"Figure.  CSI datastore"}})]),e._v(" "),s("p",[s("strong",[e._v("Figure. CSI datastore")])]),e._v(" "),s("h2",{attrs:{id:"further-information"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#further-information","aria-hidden":"true"}},[e._v("#")]),e._v(" Further information")]),e._v(" "),s("p",[e._v("General information on CSI in Kubernetes is available at\n"),s("a",{attrs:{href:"https://kubernetes-csi.github.io/docs/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://kubernetes-csi.github.io/docs/"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Information on the VMware CSI driver is at\n"),s("a",{attrs:{href:"https://github.com/kubernetes-sigs/vsphere-csi-driver",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://github.com/kubernetes-sigs/vsphere-csi-driver"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("Documentation on using CSI in OpenShift is available at\n"),s("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.2/storage/persistent-storage/persistent-storage-csi.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.2/storage/persistent-storage/persistent-storage-csi.html"),s("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);