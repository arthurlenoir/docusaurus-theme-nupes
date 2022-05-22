"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[6103],{4118:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(3366),l=a(7294),r=a(6010),i=a(2350),s=a(9960),o=a(5999),m="sidebar_TMXw",c="sidebarItemTitle_V4zb",u="sidebarItemList_uHd5",d="sidebarItem_spIe",g="sidebarItemLink_eqrF",p="sidebarItemLinkActive_XZSJ";function v(e){var t=e.sidebar;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.default)(m,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.default)(c,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.default)(u,"clean-list")},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(s.default,{isNavLink:!0,to:e.permalink,className:g,activeClassName:p},e.title))})))))}var f=a(3102);function b(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.default,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function h(e){return l.createElement(f.Zo,{component:b,props:e})}var E=a(7524);function _(e){var t=e.sidebar,a=(0,E.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(h,{sidebar:t}):l.createElement(v,{sidebar:t}):null}var N=["sidebar","toc","children"];function k(e){var t=e.sidebar,a=e.toc,s=e.children,o=(0,n.Z)(e,N),m=t&&t.items.length>0;return l.createElement(i.default,o,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(_,{sidebar:t}),l.createElement("main",{className:(0,r.default)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},6244:function(e,t,a){a.d(t,{Z:function(){return Z}});var n=a(7294),l=a(6010),r=a(5999),i=a(9960),s=a(4996),o=a(8824),m=a(8780),c=a(9962),u=a.n(c),d=a(6753),g="blogPostTitle_rzP5",p="blogPostData_Zg1s",v="blogPostDetailsFull_h6_j",f=a(62);function b(e){return e.href?n.createElement(i.default,e):n.createElement(n.Fragment,null,e.children)}function h(e){var t=e.author,a=t.name,l=t.title,r=t.url,i=t.imageURL,s=t.email,o=r||s&&"mailto:"+s||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},i&&n.createElement(b,{href:o,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(b,{href:o,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var E="authorCol_FlmR",_="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function k(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var r=t.every((function(e){return!e.name}));return n.createElement("div",{className:(0,l.default)("margin-top--md margin-bottom--sm",r?_:"row")},t.map((function(e,t){var i;return n.createElement("div",{className:(0,l.default)(!r&&"col col--6",r?N:E),key:t},n.createElement(h,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function Z(e){var t,a,c=(a=(0,o.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,r.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),b=(0,s.useBaseUrlUtils)().withBaseUrl,h=e.children,E=e.frontMatter,_=e.assets,N=e.metadata,Z=e.truncated,P=e.isBlogPostPage,L=void 0!==P&&P,C=N.date,T=N.formattedDate,x=N.permalink,y=N.tags,I=N.readingTime,w=N.title,A=N.editUrl,H=N.authors,M=null!=(t=_.image)?t:E.image,U=!L&&Z,B=y.length>0,R=L?"h1":"h2";return n.createElement("article",{className:L?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(R,{className:g,itemProp:"headline"},L?w:n.createElement(i.default,{itemProp:"url",to:x},w)),n.createElement("div",{className:(0,l.default)(p,"margin-vert--md")},n.createElement("time",{dateTime:C,itemProp:"datePublished"},T),void 0!==I&&n.createElement(n.Fragment,null," \xb7 ",c(I))),n.createElement(k,{authors:H,assets:_})),M&&n.createElement("meta",{itemProp:"image",content:b(M,{absolute:!0})}),n.createElement("div",{id:L?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(u(),null,h)),(B||Z)&&n.createElement("footer",{className:(0,l.default)("row docusaurus-mt-lg",L&&v)},B&&n.createElement("div",{className:(0,l.default)("col",{"col--9":U})},n.createElement(f.Z,{tags:y})),L&&A&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(d.Z,{editUrl:A})),U&&n.createElement("div",{className:(0,l.default)("col text--right",{"col--3":B})},n.createElement(i.default,{to:N.permalink,"aria-label":(0,r.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},n.createElement("b",null,n.createElement(r.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9360:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),l=a(4118),r=a(6244),i=a(7462),s=a(5999),o=a(1750);function m(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(o.Z,(0,i.Z)({},a,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(o.Z,(0,i.Z)({},t,{subLabel:n.createElement(s.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var c=a(833),u=a(5281),d=a(1575),g=a(6010);function p(e){var t,a=e.content,l=a.assets,r=a.metadata,i=r.title,s=r.description,o=r.date,m=r.tags,u=r.authors,d=r.frontMatter,g=d.keywords,p=null!=(t=l.image)?t:d.image;return n.createElement(c.d,{title:i,description:s,keywords:g,image:p},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:o}),u.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),m.length>0&&n.createElement("meta",{property:"article:tag",content:m.map((function(e){return e.label})).join(",")}))}function v(e){var t=e.content,a=e.sidebar,i=t.assets,s=t.metadata,o=s.nextItem,c=s.prevItem,u=s.frontMatter,g=u.hide_table_of_contents,p=u.toc_min_heading_level,v=u.toc_max_heading_level;return n.createElement(l.Z,{sidebar:a,toc:!g&&t.toc&&t.toc.length>0?n.createElement(d.Z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:v}):void 0},n.createElement(r.Z,{frontMatter:u,assets:i,metadata:s,isBlogPostPage:!0},n.createElement(t,null)),(o||c)&&n.createElement(m,{nextItem:o,prevItem:c}))}function f(e){return n.createElement(c.FG,{className:(0,g.default)(u.k.wrapper.blogPages,u.k.page.blogPostPage)},n.createElement(p,e),n.createElement(v,e))}},6753:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7294),l=a(5999),r=a(7462),i=a(3366),s=a(6010),o="iconEdit_dcUD",m=["className"];function c(e){var t=e.className,a=(0,i.Z)(e,m);return n.createElement("svg",(0,r.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.default)(o,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var u=a(5281);function d(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.k.common.editThisPage},n.createElement(c,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},1750:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(6010),r=a(9960);function i(e){var t=e.permalink,a=e.title,i=e.subLabel,s=e.isNext;return n.createElement(r.default,{className:(0,l.default)("pagination-nav__link",s?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},i&&n.createElement("div",{className:"pagination-nav__sublabel"},i),n.createElement("div",{className:"pagination-nav__label"},a))}},1575:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7462),l=a(3366),r=a(7294),i=a(6010),s=a(4909),o="tableOfContents_cNA8",m=["className"];function c(e){var t=e.className,a=(0,l.Z)(e,m);return r.createElement("div",{className:(0,i.default)(o,"thin-scrollbar",t)},r.createElement(s.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},4909:function(e,t,a){a.d(t,{Z:function(){return d}});var n=a(7462),l=a(3366),r=a(7294);function i(e){var t=e.toc,a=e.className,n=e.linkClassName,l=e.isChild;return t.length?r.createElement("ul",{className:l?void 0:a},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))}))):null}var s=r.memo(i),o=a(6668),m=a(9665),c=a(6841),u=["toc","className","linkClassName","linkActiveClassName","minHeadingLevel","maxHeadingLevel"];function d(e){var t=e.toc,a=e.className,i=void 0===a?"table-of-contents table-of-contents__left-border":a,d=e.linkClassName,g=void 0===d?"table-of-contents__link":d,p=e.linkActiveClassName,v=void 0===p?void 0:p,f=e.minHeadingLevel,b=e.maxHeadingLevel,h=(0,l.Z)(e,u),E=(0,o.L)(),_=null!=f?f:E.tableOfContents.minHeadingLevel,N=null!=b?b:E.tableOfContents.maxHeadingLevel,k=(0,m.b)({toc:t,minHeadingLevel:_,maxHeadingLevel:N}),Z=(0,r.useMemo)((function(){if(g&&v)return{linkClassName:g,linkActiveClassName:v,minHeadingLevel:_,maxHeadingLevel:N}}),[g,v,_,N]);return(0,c.S)(Z),r.createElement(s,(0,n.Z)({toc:k,className:i,linkClassName:g},h))}},7774:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(6010),r=a(9960),i="tag_hD8n",s="tagRegular_D6E_",o="tagWithCount_i0QQ";function m(e){var t=e.permalink,a=e.label,m=e.count;return n.createElement(r.default,{href:t,className:(0,l.default)(i,m?o:s)},a,m&&n.createElement("span",null,m))}},62:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(6010),r=a(5999),i=a(7774),s="tags_XVD_",o="tag_JSN8";function m(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.default)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:o},n.createElement(i.Z,{label:t,permalink:a}))}))))}}}]);