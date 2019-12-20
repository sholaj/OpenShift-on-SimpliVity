(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{226:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"cluster-monitoring"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-monitoring","aria-hidden":"true"}},[e._v("#")]),e._v(" Cluster monitoring")]),e._v(" "),a("p",[e._v("You can configure persistent storage for the cluster monitoring components using the Ansible playbook\n"),a("code",[e._v("playbooks/monitoring.yml")]),e._v(". This playbook automates the configuration of persistent storage for the Prometheus\nand Alertmanager pods.")]),e._v(" "),a("p",[e._v("A separate storage volume is created for each Prometheus and Alertmanager pod. On the OpenShift Container Platform,\nthis is achieved using persistent volume claims (PVC) and persistent volumes (PV). You can customize both the storage\nclass and the size of the persistent volumes used to store Prometheus and Alertmanager data by editing the\nfollowing variables in the file "),a("code",[e._v("playbooks/roles/monitoring/vars/main.yml")]),e._v(":")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("Variable")]),e._v(" "),a("th",{staticStyle:{"text-align":"left"}},[e._v("Description")])])]),e._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("prometheus_pv_size")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Size of the persistent volume used to hold Prometheus data (default size is "),a("code",[e._v("'40Gi'")]),e._v(")")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("prometheus_pv_storage_class")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("The storage class to use when creating Prometheus persistent volumes (default storage class name is "),a("code",[e._v("'thin'")]),e._v(")")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("alertmanager_pv_size")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("Size of the persistent volume used to hold Alertmanager data (default size is "),a("code",[e._v("'40Gi'")]),e._v(")")])]),e._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v("alertmanager_pv_storage_class")]),e._v(" "),a("td",{staticStyle:{"text-align":"left"}},[e._v("The storage class to use when creating Alertmanager persistent volumes (default storage class name is "),a("code",[e._v("'thin'")]),e._v(")")])])])]),e._v(" "),a("p",[e._v("After making the appropriate customizations to the above variables, re-deploy the  cluster monitoring components by changing into the directory where you cloned the OpenShift-on-SimpliVity repository and running the appropriate playbook:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ cd ~/OpenShift-on-SimpliVity\n\n$ ansible-playbook -i hosts playbooks/monitoring.yml\n")])])]),a("p",[e._v("The playbook takes approximately 1-2 minutes to complete.  However, it may take some additional time for the various cluster monitoring components to successfully re-launch with their newly created persistent storage volumes:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("$ oc get pvc -n openshift-monitoring\n\nNAME                                     STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS   AGE\nalertmanager-claim-alertmanager-main-0   Bound    pvc-3ec286d3-0d3b-11ea-9074-00505681c3ee   40Gi       RWO            thin           2m23s\nalertmanager-claim-alertmanager-main-1   Bound    pvc-3ec845dd-0d3b-11ea-9074-00505681c3ee   40Gi       RWO            thin           2m23s\nalertmanager-claim-alertmanager-main-2   Bound    pvc-3ed13223-0d3b-11ea-9074-00505681c3ee   40Gi       RWO            thin           2m23s\nprometheus-claim-prometheus-k8s-0        Bound    pvc-3ee82db4-0d3b-11ea-9074-00505681c3ee   40Gi       RWO            thin           2m23s\nprometheus-claim-prometheus-k8s-1        Bound    pvc-3ef1c00a-0d3b-11ea-9074-00505681c3ee   40Gi       RWO            thin           2m23s\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);