(function(e,t,n,r){"use strict";var i="qoopido",s="support/element/svg",o=function(){return[].push.apply(arguments,[t,n,r]),t[i]=t[i]||{},t[i][s]=e.apply(null,arguments)};typeof define=="function"&&define.amd?define(["qoopido/support"],o):o(t[i].support)})(function(e,t,n,r){"use strict";return e.addTest("/element/svg",function(e){n.createElementNS&&n.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect?e.resolve():e.reject()}),e.test["/element/svg"]},window,document);