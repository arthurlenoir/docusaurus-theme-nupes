"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[3085],{6416:function(e,a,n){n.r(a),n.d(a,{default:function(){return u}});var l=n(7294),t=n(6010),i=n(2350),c=n(9962),s=n.n(c),m=n(1575),r=n(833),o=n(5281),d="mdxPageWrapper_zHyg";function u(e){var a=e.content,n=a.metadata,c=n.title,u=n.description,v=n.frontMatter,f=v.wrapperClassName,N=v.hide_table_of_contents;return l.createElement(r.FG,{className:(0,t.default)(null!=f?f:o.k.wrapper.mdxPages,o.k.page.mdxPage)},l.createElement(r.d,{title:c,description:u}),l.createElement(i.default,null,l.createElement("main",{className:"container container--fluid margin-vert--lg"},l.createElement("div",{className:(0,t.default)("row",d)},l.createElement("div",{className:(0,t.default)("col",!N&&"col--8")},l.createElement(s(),null,l.createElement(a,null))),!N&&a.toc&&l.createElement("div",{className:"col col--2"},l.createElement(m.Z,{toc:a.toc,minHeadingLevel:v.toc_min_heading_level,maxHeadingLevel:v.toc_max_heading_level}))))))}},1575:function(e,a,n){n.d(a,{Z:function(){return o}});var l=n(7462),t=n(3366),i=n(7294),c=n(6010),s=n(4909),m="tableOfContents_cNA8",r=["className"];function o(e){var a=e.className,n=(0,t.Z)(e,r);return i.createElement("div",{className:(0,c.default)(m,"thin-scrollbar",a)},i.createElement(s.Z,(0,l.Z)({},n,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},4909:function(e,a,n){n.d(a,{Z:function(){return u}});var l=n(7462),t=n(3366),i=n(7294);function c(e){var a=e.toc,n=e.className,l=e.linkClassName,t=e.isChild;return a.length?i.createElement("ul",{className:t?void 0:n},a.map((function(e){return i.createElement("li",{key:e.id},i.createElement("a",{href:"#"+e.id,className:null!=l?l:void 0,dangerouslySetInnerHTML:{__html:e.value}}),i.createElement(c,{isChild:!0,toc:e.children,className:n,linkClassName:l}))}))):null}var s=i.memo(c),m=n(6668),r=n(9665),o=n(6841),d=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function u(e){var a=e.toc,n=e.className,c=void 0===n?"table-of-contents table-of-contents__left-border":n,u=e.linkClassName,v=void 0===u?"table-of-contents__link":u,f=e.linkActiveClassName,N=void 0===f?void 0:f,g=e.minHeadingLevel,k=e.maxHeadingLevel,_=(0,t.Z)(e,d),C=(0,m.L)(),E=null!=g?g:C.tableOfContents.minHeadingLevel,h=null!=k?k:C.tableOfContents.maxHeadingLevel,p=(0,r.b)({toc:a,minHeadingLevel:E,maxHeadingLevel:h}),b=(0,i.useMemo)((function(){if(v&&N)return{linkClassName:v,linkActiveClassName:N,minHeadingLevel:E,maxHeadingLevel:h}}),[v,N,E,h]);return(0,o.S)(b),i.createElement(s,(0,l.Z)({toc:p,className:c,linkClassName:v},_))}}}]);