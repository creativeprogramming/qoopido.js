(function(e,t,n,r){"use strict";var i="qoopido",s="support/capability/datauri",o=function(){return[].push.apply(arguments,[t,n,r]),t[i]=t[i]||{},t[i][s]=e.apply(null,arguments)};typeof define=="function"&&define.amd?define(["qoopido/support"],o):o(t[i].support)})(function(e,t,n,r){"use strict";return e.addTest("/capability/datauri",function(t){var n=e.getElement("image");n.onerror=function(){t.reject()},n.onload=function(){n.width===1&&n.height===1?t.resolve():t.reject()},n.src="data:image/gif;base64,R0lGODlhAQABAIAAAP///////yH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="}),e.test["/capability/datauri"]},window,document);