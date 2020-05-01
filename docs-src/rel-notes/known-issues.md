# Known issues

Known issues in this release of Red Hat OpenShift Container Platform (OCP) on HPE SimpliVity:

- Disaster recovery for OpenShift Container Platform is broken for various deployments, including bare metal and vSphere. ([BZ#1718436](https://bugzilla.redhat.com/show_bug.cgi?id=1718436))

- The playbooks make the master nodes non-schedulable. By default, the OCP 4.2 installer generates Kubernetes manifests which would make the master nodes schedulable in an attempt to support clusters with smaller footprints. However, a limitation with Kubernetes means router pods running on control plane machines will not be reachable by the ingress load balancer. The playbooks modify a manifest generated by the installer prior to running the actual installation in order to make the master nodes non-schedulable.

- Ansible `2.9.1` has a known issues that causes the cluster deployment to fail. The tested and recommended version of Ansible is `2.8.5`. Versions newer than `2.9.1` may work but have not been tested.
