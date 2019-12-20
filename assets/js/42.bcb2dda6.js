(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{214:function(e,r,t){"use strict";t.r(r);var o=t(0),n=Object(o.a)({},(function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"workload-placement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#workload-placement","aria-hidden":"true"}},[e._v("#")]),e._v(" Workload placement")]),e._v(" "),t("p",[e._v("You may want to control the placement of certain workloads on specific nodes in your cluster. Sample\nworkloads might include:")]),e._v(" "),t("ul",[t("li",[e._v("OpenShift Container Platform infrastructure components such as the default router, the container image registry and the cluster metrics collection (monitoring service)")]),e._v(" "),t("li",[e._v("Cluster aggregated logging. While this is also an OpenShift Container Platform infrastructure component, the specific CPU and memory requirements may lead you to placing this infrastructure component on dedicates nodes")]),e._v(" "),t("li",[e._v("AI and machine learning workloads that may require nodes with GPUs")])]),e._v(" "),t("p",[e._v("While you could attempt to use the specifications for default and maximum resource requirements (CPU and memory)\nto determine placement, node labels provide a more powerful and flexible mechanism. In order to add\nlabels to OCP nodes, you can edit your "),t("code",[e._v("hosts")]),e._v(" inventory file to include the labels and then run the playbook\n"),t("code",[e._v("playbooks/label.yml")]),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"infrastructure-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#infrastructure-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Infrastructure nodes")]),e._v(" "),t("p",[e._v("The following OpenShift Container Platform components are infrastructure components:")]),e._v(" "),t("ul",[t("li",[e._v("Kubernetes and OpenShift Container Platform control plane services that run on masters")]),e._v(" "),t("li",[e._v("The default router")]),e._v(" "),t("li",[e._v("The container image registry")]),e._v(" "),t("li",[e._v("The cluster metrics collection, or monitoring service")]),e._v(" "),t("li",[e._v("Cluster aggregated logging")]),e._v(" "),t("li",[e._v("Service brokers")])]),e._v(" "),t("p",[e._v("You can dedicate some of your worker nodes to perform the role of infrastructure nodes, by setting the\nlabel "),t("code",[e._v("node-role.kubernetes.io/infra")]),e._v(" on the specific nodes.")]),e._v(" "),t("p",[e._v("The following example assumes you have five ordinary worker nodes, with the following specification\nin your "),t("code",[e._v("hosts")]),e._v(" file:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[rhcos_worker]\nocp-worker0   ansible_host=10.15.155.213\nocp-worker1   ansible_host=10.15.155.214\nocp-worker2   ansible_host=10.15.155.215\nocp-worker3   ansible_host=10.15.155.216\nocp-worker4   ansible_host=10.15.155.217\n")])])]),t("p",[e._v("When you run the "),t("code",[e._v("oc get nodes")]),e._v(" command, you should just see the "),t("code",[e._v("worker")]),e._v(" role associated\nwith these nodes:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get nodes\nNAME          STATUS   ROLES    AGE   VERSION\nocp-master0   Ready    master   41h   v1.14.6+31a56cf75\nocp-master1   Ready    master   41h   v1.14.6+31a56cf75\nocp-master2   Ready    master   41h   v1.14.6+31a56cf75\nocp-worker0   Ready    worker   41h   v1.14.6+31a56cf75\nocp-worker1   Ready    worker   41h   v1.14.6+31a56cf75\nocp-worker2   Ready    worker   22m   v1.14.6+31a56cf75\nocp-worker3   Ready    worker   22m   v1.14.6+31a56cf75\nocp-worker4   Ready    worker   22m   v1.14.6+31a56cf75\n")])])]),t("p",[e._v("In this example, three worker nodes ("),t("code",[e._v("ocp-worker2")]),e._v(", "),t("code",[e._v("ocp-worker3")]),e._v(", "),t("code",[e._v("ocp-worker4")]),e._v(") will be tagged as\ninfrastructure nodes. In your hosts file, add the appropriate label to these three nodes as shown below:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[rhcos_worker]\nocp-worker0   ansible_host=10.15.155.213\nocp-worker1   ansible_host=10.15.155.214\nocp-worker2   ansible_host=10.15.155.215 k8s_labels=\'{"node-role.kubernetes.io/infra":""}\'\nocp-worker3   ansible_host=10.15.155.216 k8s_labels=\'{"node-role.kubernetes.io/infra":""}\'\nocp-worker4   ansible_host=10.15.155.217 k8s_labels=\'{"node-role.kubernetes.io/infra":""}\'\n')])])]),t("p",[e._v("Run the playbook "),t("code",[e._v("playbooks/label.yml")]),e._v(" to associate the label with the nodes:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cd ~/OpenShift-on-SimpliVity\n\n$ ansible-playbook -i hosts playbooks/label.yml\n")])])]),t("p",[e._v("Now, when you run the command "),t("code",[e._v("oc get nodes")]),e._v(", you will see that the roles for these three nodes are\n"),t("code",[e._v("infra,worker")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get nodes\n\nNAME          STATUS   ROLES          AGE   VERSION\nocp-master0   Ready    master         41h   v1.14.6+31a56cf75\nocp-master1   Ready    master         41h   v1.14.6+31a56cf75\nocp-master2   Ready    master         41h   v1.14.6+31a56cf75\nocp-worker0   Ready    worker         41h   v1.14.6+31a56cf75\nocp-worker1   Ready    worker         41h   v1.14.6+31a56cf75\nocp-worker2   Ready    infra,worker   25m   v1.14.6+31a56cf75\nocp-worker3   Ready    infra,worker   25m   v1.14.6+31a56cf75\nocp-worker4   Ready    infra,worker   25m   v1.14.6+31a56cf75\n")])])]),t("p",[t("strong",[e._v("Note:")]),e._v(" It would be advisable to create anti-affinity rules for your infrastructure nodes,\nto ensure that VMs performing the same role are kept apart and run on different underlying ESXi hosts.")]),e._v(" "),t("h2",{attrs:{id:"custom-labels"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#custom-labels","aria-hidden":"true"}},[e._v("#")]),e._v(" Custom labels")]),e._v(" "),t("p",[e._v("You can add your own labels to nodes, to assist in workload placement. To see what labels are already\non a node, you can use the "),t("code",[e._v("--show-labels")]),e._v(" flag on the "),t("code",[e._v("oc get node")]),e._v(" command:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get node --show-labels ocp-worker0\n\nNAME          STATUS   ROLES    AGE   VERSION             LABELS\nocp-worker0   Ready    worker   41h   v1.14.6+31a56cf75   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/arch=amd64,kubernetes.io/hostname=ocp-worker0,kubernetes.io/os=linux,node-role.kubernetes.io/worker=,node.openshift.io/os_id=rhcos\n")])])]),t("p",[e._v("Update your "),t("code",[e._v("hosts")]),e._v(" inventory file with your custom labels, for example, "),t("code",[e._v("mylabel")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('[rhcos_worker]\nocp-worker0   ansible_host=10.15.155.213 k8s_labels=\'{"mylabel":"yes"}\'\nocp-worker1   ansible_host=10.15.155.214 k8s_labels=\'{"mylabel":"yes"}\'\nocp-worker2   ansible_host=10.15.155.215 k8s_labels=\'{"node-role.kubernetes.io/infra":"", "mylabel":"yes"}\'\nocp-worker3   ansible_host=10.15.155.216 k8s_labels=\'{"node-role.kubernetes.io/infra":""}\'\nocp-worker4   ansible_host=10.15.155.217 k8s_labels=\'{"node-role.kubernetes.io/infra":""}\'\n')])])]),t("p",[e._v("Now run the "),t("code",[e._v("playbooks/label.yml")]),e._v(" playbook again to add the custom label to the appropriate nodes:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ cd ~/OpenShift-on-SimpliVity\n\n$ ansible-playbook -i hosts playbooks/label.yml\n")])])]),t("p",[e._v("Re-run the "),t("code",[e._v("oc get node")]),e._v(" command to see the custom label added to the nodes:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("oc get node --show-labels ocp-worker0\n\nNAME          STATUS   ROLES    AGE   VERSION             LABELS\nocp-worker0   Ready    worker   41h   v1.14.6+31a56cf75   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/arch=amd64,kubernetes.io/hostname=ocp-worker0,kubernetes.io/os=linux,mylabel=yes,node-role.kubernetes.io/worker=,node.openshift.io/os_id=rhcos\n")])])]),t("p",[e._v("Notice also how the infrastructure node "),t("code",[e._v("ocp-worker2")]),e._v(" has been updated with the custom label "),t("code",[e._v("mylabel")]),e._v(", adding to the\n"),t("code",[e._v("node-role.kubernetes.io/infra")]),e._v(" label from earlier:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get node --show-labels ocp-worker2\n\nNAME          STATUS   ROLES          AGE   VERSION             LABELS\nocp-worker2   Ready    infra,worker   28m   v1.14.6+31a56cf75   beta.kubernetes.io/arch=amd64,beta.kubernetes.io/os=linux,kubernetes.io/arch=amd64,kubernetes.io/hostname=ocp-worker2,kubernetes.io/os=linux,mylabel=yes,node-role.kubernetes.io/infra=,node-role.kubernetes.io/worker=,node.openshift.io/os_id=rhcos\n")])])]),t("h2",{attrs:{id:"moving-router-replicas-to-infrastructure-nodes"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#moving-router-replicas-to-infrastructure-nodes","aria-hidden":"true"}},[e._v("#")]),e._v(" Moving router replicas to infrastructure nodes")]),e._v(" "),t("p",[e._v("If you want to move router replicas to your instrastructure nodes, you can configure the approriate custom resource. First, check what nodes your routers are currently running on:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get pod -n openshift-ingress -o wide\n\nNAME                              READY   STATUS    RESTARTS   AGE   IP              NODE          NOMINATED NODE   READINESS GATES\nrouter-default-5f4497984c-qpjsr   1/1     Running   0          41h   10.15.155.214   ocp-worker1   <none>           <none>\nrouter-default-5f4497984c-t9bxw   1/1     Running   0          41h   10.15.155.213   ocp-worker0   <none>           <none>\n")])])]),t("p",[e._v("Update the custom resource to specify that you want this component placed on the infrastructure nodes:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('$ oc patch ingresscontroller/default --type=merge -n openshift-ingress-operator -p \'{"spec": {"nodePlacement":{"nodeSelector":{"matchLabels":{"node-role.kubernetes.io/infra": ""}}}}}\'\n\ningresscontroller.operator.openshift.io/default patched\n\n')])])]),t("p",[e._v("Now check the two router pods to see them migrating to the infrastructure nodes:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get pod -n openshift-ingress -o wide\n\nNAME                              READY   STATUS              RESTARTS   AGE   IP              NODE\nrouter-default-588447654b-cdnkr   0/1     ContainerCreating   0          3s    10.15.155.216   ocp-worker3\nrouter-default-5f4497984c-qpjsr   0/1     Terminating         0          41h   10.15.155.214   ocp-worker1\nrouter-default-5f4497984c-t9bxw   1/1     Running             0          41h   10.15.155.213   ocp-worker0\n")])])]),t("p",[e._v("The routers will be terminated, one at a time, and restarted on an infrastructure node:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get pod -n openshift-ingress -o wide\nNAME                              READY   STATUS              RESTARTS   AGE   IP              NODE\nrouter-default-588447654b-cdnkr   1/1     Running             0          20s   10.15.155.216   ocp-worker3\nrouter-default-588447654b-gt9cg   0/1     ContainerCreating   0          2s    10.15.155.217   ocp-worker4\nrouter-default-5f4497984c-t9bxw   0/1     Terminating         0          41h   10.15.155.213   ocp-worker0\n")])])]),t("p",[e._v("Finally, both routers will have moved to infrastructure nodes, in this case from "),t("code",[e._v("ocp-worker0")]),e._v(" and "),t("code",[e._v("ocp-worker1")]),e._v(" to\n"),t("code",[e._v("ocp-worker3")]),e._v(" and "),t("code",[e._v("ocp-worker4")]),e._v(":")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get pod -n openshift-ingress -o wide\nNAME                              READY   STATUS    RESTARTS   AGE   IP              NODE\nrouter-default-588447654b-cdnkr   1/1     Running   0          25s   10.15.155.216   ocp-worker3\nrouter-default-588447654b-gt9cg   1/1     Running   0          7s    10.15.155.217   ocp-worker4\n")])])]),t("p",[e._v("More information on how to move router components is available in the documentation at "),t("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.2/machine_management/creating-infrastructure-machinesets.html#infrastructure-moving-router_creating-infrastructure-machinesets",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.2/machine_management/creating-infrastructure-machinesets.html#infrastructure-moving-router_creating-infrastructure-machinesets"),t("OutboundLink")],1)]),e._v(" "),t("h2",{attrs:{id:"moving-other-infrastructure-components"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#moving-other-infrastructure-components","aria-hidden":"true"}},[e._v("#")]),e._v(" Moving other infrastructure components")]),e._v(" "),t("p",[e._v("The OpenShift Container Platform documentation contains information on how to migrate other infrastructure components:")]),e._v(" "),t("ul",[t("li",[t("strong",[e._v("image registry:")]),e._v(" "),t("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.2/machine_management/creating-infrastructure-machinesets.html#infrastructure-moving-registry_creating-infrastructure-machinesets",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.2/machine_management/creating-infrastructure-machinesets.html#infrastructure-moving-registry_creating-infrastructure-machinesets"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("strong",[e._v("monitoring resources:")]),e._v(" "),t("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.2/machine_management/creating-infrastructure-machinesets.html#infrastructure-moving-monitoring_creating-infrastructure-machinesets",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.2/machine_management/creating-infrastructure-machinesets.html#infrastructure-moving-monitoring_creating-infrastructure-machinesets"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("strong",[e._v("cluster logging:")]),e._v(" "),t("a",{attrs:{href:"https://docs.openshift.com/container-platform/4.2/machine_management/creating-infrastructure-machinesets.html#infrastructure-moving-logging_creating-infrastructure-machinesets",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://docs.openshift.com/container-platform/4.2/machine_management/creating-infrastructure-machinesets.html#infrastructure-moving-logging_creating-infrastructure-machinesets"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=n.exports}}]);