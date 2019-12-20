(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{227:function(e,t,r){"use strict";r.r(t);var s=r(0),a=Object(s.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"image-registry"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#image-registry","aria-hidden":"true"}},[e._v("#")]),e._v(" Image registry")]),e._v(" "),r("p",[e._v("The default vSphere Cloud Provider does not support the "),r("code",[e._v("ReadWriteMany")]),e._v(" access mode required by the Image Registry.\nAs a result, the playbook for initial cluster deployment, "),r("code",[e._v("site.yml")]),e._v(", deploys an NFS virtual machine. A number of NFS\nshares are created and exported by the playbooks, and the Image Registry uses one of these NFS shares.")]),e._v(" "),r("p",[e._v("The number of NFS shares created by the playbooks can be customized using the variable "),r("code",[e._v("num_nfs_shares")]),e._v(" in the\nconfiguration file "),r("code",[e._v("group_vars/all/vars.yml")]),e._v(". Only one share is required by the Image Registry service.")])])}),[],!1,null,null,null);t.default=a.exports}}]);