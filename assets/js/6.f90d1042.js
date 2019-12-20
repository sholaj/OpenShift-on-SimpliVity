(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{206:function(e,a,n){e.exports=n.p+"assets/img/kibana-efk-hostname.aaa615c8.png"},218:function(e,a,n){"use strict";n.r(a);var t=n(0),o=Object(t.a)({},(function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"playbook-for-cluster-logging"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#playbook-for-cluster-logging","aria-hidden":"true"}},[e._v("#")]),e._v(" Playbook for cluster logging")]),e._v(" "),t("p",[e._v("Before running the playbook, you should log in as an admin user (either "),t("code",[e._v("kubeadmin")]),e._v(" or\nany other user that has the "),t("code",[e._v("cluster_admin")]),e._v(" role):")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ export KUBECONFIG ~/.ocp/auth/kubeconfig\n$ oc login -u kubeadmin -p <password>\n$ cd ~/OpenShift-on-SimpliVity\n")])])]),t("h2",{attrs:{id:"deploying-the-small-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#deploying-the-small-profile","aria-hidden":"true"}},[e._v("#")]),e._v(" Deploying the small profile")]),e._v(" "),t("p",[e._v("After making the customizations appropriate to your environment, deploy the "),t("code",[e._v("small")]),e._v(" EFK stack. In the following example,\nthe configuration specified:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('efk_channel=4.2\nefk_profile="small"\n')])])]),t("p",[e._v("Run the "),t("code",[e._v("playbooks/efk.yml")]),e._v(" playbook:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ ansible-playbook -i hosts playbooks/efk.yml\n")])])]),t("p",[e._v("The playbook takes approximately 1-2 minutes to complete.  However, it may take several additional minutes for the\nvarious Cluster Logging components to successfully deploy to the OpenShift Container Platform cluster.\nYou can observere the logging pods being created:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get pod -n openshift-logging\n\nNAME                                            READY   STATUS              RESTARTS   AGE\ncluster-logging-operator-789f86bc5d-52864       1/1     Running             0          36s\nelasticsearch-cdm-98n13kgt-1-68c7c496b7-7h58d   0/2     ContainerCreating   0          14s\nfluentd-4xxjm                                   0/1     ContainerCreating   0          13s\nfluentd-ds6v7                                   0/1     ContainerCreating   0          13s\nfluentd-gp6mn                                   0/1     ContainerCreating   0          13s\nfluentd-mv29x                                   0/1     ContainerCreating   0          13s\nfluentd-pnpgj                                   0/1     ContainerCreating   0          13s\nfluentd-sfkcl                                   0/1     ContainerCreating   0          13s\nkibana-6db8448b8c-whlfc                         0/2     ContainerCreating   0          14s\n")])])]),t("p",[e._v("Once the pods are ready, you can check the distribution of the pods across the nodes. Fluentd is deployed on each\nnode in the cluster, while only one instance of Elasticsearch and one of Kibana is deployed.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ kubectl get pod -n openshift-logging -o custom-columns='Name:{.metadata.name},Node:{.spec.nodeName}'\n\nName                                            Node\ncluster-logging-operator-789f86bc5d-52864       ocpp-worker2\nelasticsearch-cdm-98n13kgt-1-68c7c496b7-7h58d   ocpp-worker2\nfluentd-4xxjm                                   ocpp-master1\nfluentd-ds6v7                                   ocpp-worker2\nfluentd-gp6mn                                   ocpp-master2\nfluentd-mv29x                                   ocpp-master0\nfluentd-pnpgj                                   ocpp-worker1\nfluentd-sfkcl                                   ocpp-worker0\nkibana-6db8448b8c-whlfc                         ocpp-worker2\n")])])]),t("p",[e._v("You can see the mininim and maximum resource requirements for the small Elasticsearch pod, using the "),t("code",[e._v("oc describe pod")]),e._v("\ncommand, in the "),t("code",[e._v("Requests")]),e._v(" and "),t("code",[e._v("Limits")]),e._v(" fields:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc describe pod elasticsearch-cdm-98n13kgt-1-68c7c496b7-7h58d -n openshift-logging\nName:               elasticsearch-cdm-98n13kgt-1-68c7c496b7-7h58d\nNamespace:          openshift-logging\nPriority:           0\nPriorityClassName:  <none>\nNode:               ocpp-worker2/10.15.163.215\nStart Time:         Fri, 13 Dec 2019 09:01:26 -0500\n...\nStatus:             Running\nIP:                 10.129.2.9\nControlled By:      ReplicaSet/elasticsearch-cdm-98n13kgt-1-68c7c496b7\nContainers:\n  elasticsearch:\n    Container ID:   cri-o://7baffe9ccc070660805a8fe42d6f62564420b893aa547b570b3342944a10ca43\n    Image:          registry.redhat.io/openshift4/ose-logging-elasticsearch5@sha256:ddcead06ec96b837804f8299d6cbd6ba33e46c9555cdc96a7aba8c820f9bd29f\n    Image ID:       registry.redhat.io/openshift4/ose-logging-elasticsearch5@sha256:ddcead06ec96b837804f8299d6cbd6ba33e46c9555cdc96a7aba8c820f9bd29f\n    Ports:          9300/TCP, 9200/TCP\n    Host Ports:     0/TCP, 0/TCP\n    State:          Running\n      Started:      Fri, 13 Dec 2019 09:02:44 -0500\n    Ready:          True\n    Restart Count:  0\n    Limits:\n      memory:  2Gi\n    Requests:\n      cpu:      200m\n      memory:   2Gi\n")])])]),t("p",[e._v("To view the Kibana dashboard, determine the route:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get route -n openshift-logging\n\nNAME     HOST/PORT                                             PATH   SERVICES   PORT    TERMINATION          WILDCARD\nkibana   kibana-openshift-logging.apps.ocpproxy.hpecloud.org          kibana     <all>   reencrypt/Redirect   None\n")])])]),t("p",[e._v("In your browser, log in and view the Kibana dashboard using the returned route, in this case,\n"),t("code",[e._v("https://kibana-openshift-logging.apps.ocpproxy.hpecloud.org")]),e._v(".")]),e._v(" "),t("p",[t("img",{attrs:{src:n(206),alt:'" "',title:"Figure.  Kibana dashboard"}})]),e._v(" "),t("p",[t("strong",[e._v("Figure. Kibana dashboard")])]),e._v(" "),t("h2",{attrs:{id:"migrating-from-the-small-to-the-large-profile"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#migrating-from-the-small-to-the-large-profile","aria-hidden":"true"}},[e._v("#")]),e._v(" Migrating from the small to the large profile")]),e._v(" "),t("p",[e._v("It is possible to expand this initial "),t("code",[e._v("small")]),e._v(" profile to the "),t("code",[e._v("large")]),e._v(" profile using the same playbook. You will need to add\nextra worker nodes that have the capacity to accept the larger workload. You can add the new nodes before or after you use\nthe playbook to do the migration, as the result will be the same. In the following example, the playbook is run before the\naddition of new nodes, for illustration purposes.")]),e._v(" "),t("p",[e._v("Re-run the playbook, but this time specify the "),t("code",[e._v("large")]),e._v(" profile. As an alternative to updating your configuration file,\nyou can set the value on the command line:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ ansible-playbook -i hosts playbooks/efk.yml -e efk_profile=large\n")])])]),t("p",[e._v("Notice how there are now 2 Elasticsearch pods in the "),t("code",[e._v("pending")]),e._v(" state as the Kubernetes scheduler cannot find any nodes\nthat can fulfil the larger minimum requirements (16 GB memory) for the new Elasticsearch pods.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ kubectl get pod -n openshift-logging\nNAME                                            READY   STATUS      RESTARTS   AGE\ncluster-logging-operator-789f86bc5d-52864       1/1     Running     0          22m\ncurator-1576246800-fbwph                        0/1     Completed   0          3m25s\nelasticsearch-cdm-98n13kgt-1-68c7c496b7-7h58d   2/2     Running     0          22m\nelasticsearch-cdm-98n13kgt-2-77b48d47dd-kszvv   0/2     Pending     0          4m39s\nelasticsearch-cdm-98n13kgt-3-ff8844764-2pjcd    0/2     Pending     0          4m38s\nfluentd-4xxjm                                   1/1     Running     0          22m\nfluentd-ds6v7                                   1/1     Running     0          22m\nfluentd-gp6mn                                   1/1     Running     0          22m\nfluentd-mv29x                                   1/1     Running     0          22m\nfluentd-pnpgj                                   1/1     Running     0          22m\nfluentd-sfkcl                                   1/1     Running     0          22m\nkibana-6db8448b8c-ff8m7                         2/2     Running     0          4m39s\nkibana-6db8448b8c-whlfc                         2/2     Running     0          22m\n")])])]),t("p",[e._v("You can use the "),t("code",[e._v("oc describe pod")]),e._v(" command to determine that the new Elasticsearch pods cannot be scheduled due to\nthe larger memory requirements:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc describe pod elasticsearch-cdm-98n13kgt-2-77b48d47dd-kszvv -n openshift-logging | tail\n\nQoS Class:       Burstable\nNode-Selectors:  kubernetes.io/os=linux\nTolerations:     node.kubernetes.io/disk-pressure:NoSchedule\n                 node.kubernetes.io/memory-pressure:NoSchedule\n                 node.kubernetes.io/not-ready:NoExecute for 300s\n                 node.kubernetes.io/unreachable:NoExecute for 300s\nEvents:\n  Type     Reason            Age                  From               Message\n  ----     ------            ----                 ----               -------\n  Warning  FailedScheduling  82s (x5 over 3m59s)  default-scheduler  0/5 nodes are available: 5 Insufficient memory.\n")])])]),t("p",[e._v("Now add extra worker nodes to your cluster, setting the "),t("code",[e._v("cpu")]),e._v(" and "),t("code",[e._v("ram")]),e._v(" attributes to sufficiently large values.\nIn your hosts file, add new entries in the "),t("code",[e._v("[rhcos_worker]")]),e._v(" group:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("[rhcos_worker]\n...\nhpe-worker5   ansible_host=10.15.155.215  cpus=8 ram=32768  # Larger worker node for EFK\nhpe-worker6   ansible_host=10.15.155.216  cpus=8 ram=32768  # Larger worker node for EFK\nhpe-worker7   ansible_host=10.15.155.217  cpus=8 ram=32768  # Larger worker node for EFK\n")])])]),t("p",[e._v("In the above example, each of these large CoreOS worker nodes will be allocated 8 virtual CPU cores and 32GB of RAM.\nThese values override the default limits of 4 virtual CPU cores and 16GB RAM defined in the "),t("code",[e._v("group_vars/worker.yml")]),e._v(" file.")]),e._v(" "),t("p",[e._v("Deploy the additional, large worker nodes using the procedure described in the section "),t("a",{attrs:{href:"../worker-nodes/coreos"}},[e._v("Deploying CoreOS worker nodes")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ ansible-playbook -i hosts playbooks/scale.yml\n")])])]),t("p",[e._v("Check that the new nodes are ready, in this case "),t("code",[e._v("ocpp-worker5")]),e._v(", "),t("code",[e._v("ocpp-worker6")]),e._v(" and "),t("code",[e._v("ocpp-worker7")]),e._v(".")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc get nodes\n\nNAME           STATUSS    AGE     VERSION\nocpp-master0   Ready    master   30h     v1.14.6+31a56cf75\nocpp-master1   Ready    master   30h     v1.14.6+31a56cf75\nocpp-master2   Ready    master   30h     v1.14.6+31a56cf75\nocpp-worker0   Ready    worker   30h     v1.14.6+31a56cf75\nocpp-worker1   Ready    worker   30h     v1.14.6+31a56cf75\nocpp-worker2   Ready    worker   30h     v1.14.6+31a56cf75\nocpp-worker5   Ready    worker   1m      v1.14.6+31a56cf75\nocpp-worker6   Ready    worker   1m      v1.14.6+31a56cf75\nocpp-worker7   Ready    worker   1m      v1.14.6+31a56cf75\n")])])]),t("p",[e._v("Once the pods are ready, check  how the Elasticsearch pods are distributed across the new nodes:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ kubectl get pod -n openshift-logging -o custom-columns='Name:{.metadata.name},Node:{.spec.nodeName}'\n\nName                                            Node\ncluster-logging-operator-789f86bc5d-52864       ocpp-worker2\ncurator-1576248600-cscbg                        ocpp-worker7\nelasticsearch-cdm-98n13kgt-1-59477757c4-v8cxc   ocpp-worker7\nelasticsearch-cdm-98n13kgt-2-77b48d47dd-kszvv   ocpp-worker5\nelasticsearch-cdm-98n13kgt-3-ff8844764-2pjcd    ocpp-worker6\nfluentd-4xxjm                                   ocpp-master1\nfluentd-ds6v7                                   ocpp-worker2\nfluentd-gp6mn                                   ocpp-master2\nfluentd-lggqs                                   ocpp-worker5\nfluentd-mv29x                                   ocpp-master0\nfluentd-pnpgj                                   ocpp-worker1\nfluentd-r2s4l                                   ocpp-worker7\nfluentd-sfkcl                                   ocpp-worker0\nfluentd-zztmq                                   ocpp-worker6\nkibana-6db8448b8c-ff8m7                         ocpp-worker0\nkibana-6db8448b8c-whlfc                         ocpp-worker2\n")])])]),t("p",[e._v("The two pending Elasticsearch pods have been scheduled on two of the new larger nodes, "),t("code",[e._v("ocpp-worker5")]),e._v(" and "),t("code",[e._v("ocpp-worker6")]),e._v(". The original Elasticsearch pod is terminated and restarted on the third of the larger nodes, "),t("code",[e._v("ocpp-worker7")]),e._v(".")]),e._v(" "),t("p",[e._v("If you now examine the Elasticsearch pod on  "),t("code",[e._v("ocpp-worker7")]),e._v(", you will see that the minimum and maximum\nresource requirements have changed, as shown in the "),t("code",[e._v("Requests")]),e._v(" and "),t("code",[e._v("Limits")]),e._v(" fields:")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("$ oc describe pod elasticsearch-cdm-98n13kgt-1-59477757c4-m8m5w -n openshift-logging                                  Name:               elasticsearch-cdm-98n13kgt-1-59477757c4-m8m5w\n\nNamespace:          openshift-logging\nPriority:           0\nPriorityClassName:  <none>\nNode:               ocpp-worker7/10.15.163.220\nStart Time:         Fri, 13 Dec 2019 10:04:13 -0500\n...\nStatus:             Running\nIP:                 10.130.2.7\nControlled By:      ReplicaSet/elasticsearch-cdm-98n13kgt-1-59477757c4\nContainers:\n  elasticsearch:\n    Container ID:   cri-o://42e8169e2c2bd3acbd2b059a12ee33f2fb85a42eb15d36a4a2faf6c6ab13ef3d\n    Image:          registry.redhat.io/openshift4/ose-logging-elasticsearch5@sha256:ddcead06ec96b837804f8299d6cbd6ba33e46c9555cdc96a7aba8c820f9bd29f\n    Image ID:       registry.redhat.io/openshift4/ose-logging-elasticsearch5@sha256:ddcead06ec96b837804f8299d6cbd6ba33e46c9555cdc96a7aba8c820f9bd29f\n    Ports:          9300/TCP, 9200/TCP\n    Host Ports:     0/TCP, 0/TCP\n    State:          Running\n      Started:      Fri, 13 Dec 2019 10:04:38 -0500\n    Ready:          True\n    Restart Count:  0\n    Limits:\n      memory:  16Gi\n    Requests:\n      cpu:      1\n      memory:   16Gi\n")])])])])}),[],!1,null,null,null);a.default=o.exports}}]);