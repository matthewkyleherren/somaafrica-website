"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[5691],{65579:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(19480),r=a.n(n);const s={free:{name:"Inactive Project",members:0,is_active:!0,cost:0,createdAt:new Date("January 1, 2010"),endDate:void 0,versions:1,api_access:!0,custom_domain:!1,custom_pages:!1,whitelabel:!1,errors:!1,password:!1,glossary:!1,landing_page:!1,usability:!1,stylesheet:!1,javascript:!1,html:!1,extra_html:!1,user_analytics:!1,doc_metrics:!1,changelogs:!1,reference:!0,guides:!1,admins:!1,jwt:!0},startup:{name:"Startup",members:10,is_active:!0,cost:59,createdAt:new Date("January 1, 2010"),endDate:new Date("August 28, 2018"),versions:1e4,api_access:!0,custom_domain:!0,custom_pages:!0,whitelabel:!1,errors:!1,password:!0,glossary:!0,landing_page:!0,usability:!0,stylesheet:!0,javascript:!1,html:!0,extra_html:!1,user_analytics:!1,doc_metrics:!0,variables:!0,jwt:!0,changelogs:!0,reference:!0,guides:!0,admins:!0},business:{name:"Business",is_active:!0,members:1e3,cost:199,createdAt:new Date("January 1, 2010"),endDate:new Date("August 28, 2018"),versions:1e4,api_access:!0,custom_domain:!0,custom_pages:!0,whitelabel:!0,errors:!0,password:!0,glossary:!0,landing_page:!0,usability:!0,stylesheet:!0,javascript:!0,html:!0,extra_html:!0,user_analytics:!0,doc_metrics:!0,variables:!0,jwt:!0,changelogs:!0,reference:!0,guides:!0,admins:!0,healthCheck:!0}};function c(e,t){var a;return null===(a=null==s?void 0:s[e])||void 0===a?void 0:a[t]}s.freelaunch=r()(s.free),s.freelaunch.cost=0,s.freelaunch.stylesheet=!1,s.freelaunch.createdAt=new Date("May 4, 2020"),s.freelaunch.endDate=void 0,s.freelaunch.members=5,s.freelaunch.admins=!0,s.freelaunch.versions=3,s.freelaunch.name="Free",s.startup2018=r()(s.startup),s.startup2018.cost=99,s.startup2018.stylesheet=!1,s.startup2018.createdAt=new Date("August 28, 2018"),s.startup2018.endDate=void 0,s.business2018=r()(s.business),s.business2018.cost=399,s.business2018.javascript=!1,s.business2018.createdAt=new Date("August 28, 2018"),s.business2018.endDate=void 0,s.enterprise=r()(s.business),s.enterprise.cost=0,s.enterprise.members=1e4,s.enterprise.javascript=!0,s.enterprise.pdf=!0,s.enterprise.name="Enterprise",s.enterprise.createdAt=new Date("January 1, 2010"),s.enterprise.endDate=void 0,s.opensource=r()(s.startup),s.opensource.name="Open Source",s.opensource.is_active=!0,s.opensource.password=!1,s.opensource.custom_domain=!1,s.opensource.cost=0,s.opensource.createdAt=new Date("January 1, 2010"),s.opensource.endDate=void 0;a(21725);function i(e,t){return c(e,t)}},85691:(e,t,a)=>{a.d(t,{Z:()=>F});a(52277);var n=a(13980),r=a.n(n),s=a(2784),c=a(47933),i=a(68128),o=a(19545),l=a(65579),u=a(46377),d=a(7560),m=a(54530),p=a(85354),f=(a(80061),a(4517)),g=a(37462),h=a(5089);const v="Nav3C5f8FcjkaHj",b="Sidebar1t2G1ZJq-vU1",y="Sidebar-headingTRQyOa2pk0gh",_="Sidebar-link2Dsha-r-GKh2",E="Sidebar-listWrapper6Q9_yUrG906C",D="Sidebar-list3cZWQLaBf9k8",w="Sidebar-item23D-2Kd61_k3",R="Sidebar-link-expandIcon2yVH6SarI6NW",S="Sidebar-link_deprecated2xLRLrwYS-C8",k="Sidebar-link_parent3OBrzjAJRSfq",N="Sidebar-link_deprecated-icon1TLWr7KfHfCp",A="Sidebar-link-pageIcon2sQE9C4g_faB",C="Sidebar-link-externalIcon1RcnjKm-3Ft8",j="Sidebar-link-buttonWrapper3hnFHNku8_BJ",T="Sidebar-link-textLuTE1ySm4Kqn",I="Sidebar-methodfUM3m6FEWm6w";var Z=["isActive","to"],x=["activeItemRef","pages","className","linkClass"],L=a(21023).join,O=function(e){return"children"in e&&e.children.length>0},H=function(e){var t,a=e.activeItemRef,n=e.activeDoc,r=e.page,i=e.children,o=e.pathRoot,l=e.linkClass,u=void 0===l?"":l,v=r.isReference,b=r.deprecated,y=r.link_external,E=r.link_url,D=r.slug,x=r.title,H=r.type,B=r.icon,W=(0,f.UO)().slug,J=(0,s.useState)(!1),K=(0,p.Z)(J,2),U=K[0],P=K[1],F=(0,s.useState)(u),Q=(0,p.Z)(F,2),q=Q[0],G=Q[1],M="link"===H,z=M&&y,V=O(r)&&"basic"===r.type&&!0===(null==r?void 0:r.isBodyEmpty),Y=o||(v?"reference":"docs"),X=V?r.children[0].slug:D,$=D===(W||n);(0,s.useEffect)((function(){var e,t=null===(e=r.children)||void 0===e?void 0:e.some((function(e){return e.slug===(W||n)}));G(!W&&$?"".concat(u," active"):u),P(!(!i||!$&&!t))}),[i,$,u,r.children,D,n,W]);var ee=M?function(e){e.isActive;var t=e.to,a=(0,m.Z)(e,Z);return s.createElement("a",(0,d.Z)({},a,{href:t}),a.children)}:c.OL,te=function(e){e.preventDefault(),P(!U)};return s.createElement("li",{className:"".concat(w).concat(U?" subnav-expanded":"")},s.createElement(ee,(0,d.Z)({},$?{ref:a}:null,{className:"".concat(_," ").concat(i?k:""," ").concat(b?S:""," ").concat(q," text-wrap rm-Sidebar-link"),isActive:function(e){return e&&!V},rel:z?"noopener":void 0,target:z?"_blank":"_self",to:M?E:L("/",Y,"RealtimePage"===r.pageType?"intro":"",X)}),!!b&&s.createElement(h.ZP,{content:"Deprecated ".concat("endpoint"===r.type?"Endpoint":"Doc"),interactive:!1,placement:"bottom"},s.createElement("span",{className:"icon-alert-circle ".concat(N)})),s.createElement("span",{className:T},!!i&&s.createElement("button",{"aria-expanded":U,"aria-label":"".concat(U?"Hide":"Show"," subpages for ").concat(x),className:j,onClick:te,onKeyDown:function(e){return[" ","Enter"].includes(e.key)&&te(e)}},s.createElement("i",{className:"".concat(R," icon-chevron-rightward")})),null!=B&&B.length?s.createElement("i",{className:"".concat(A," ").concat(B)}):null,s.createElement("span",null,x)),!!M&&s.createElement("i",{className:"".concat(C," icon-arrow-up-right")}),"endpoint"===r.type&&!(null==r||null===(t=r.api)||void 0===t||!t.method)&&"RealtimePage"!==r.pageType&&s.createElement(g.Z,{className:I,fixedWidth:!0,type:r.api.method.toLowerCase()})),i)},B=function e(t){var a=t.activeItemRef,n=t.pages,r=t.className,c=void 0===r?"":r,i=t.linkClass,o=void 0===i?"":i,l=(0,m.Z)(t,x);return s.createElement("ul",{className:"".concat(c," ").concat(D," rm-Sidebar-list")},n.map((function(t){return!t.hidden&&(O(t)?s.createElement(H,(0,d.Z)({key:"page-".concat(t.slug),activeItemRef:a,page:t},l),s.createElement(e,(0,d.Z)({activeItemRef:a,className:"subpages",pages:t.children},l))):s.createElement(H,(0,d.Z)({key:"page-".concat(t.slug),activeItemRef:a,linkClass:"childless ".concat("subpages"===c?"subpage":o),page:t},l)))})))};B.propTypes={activeDoc:r().string,activeItemRef:r().oneOfType([r().func,r().shape({current:r().any})]),className:r().string,linkClass:r().string,pages:r().array},H.propTypes={activeDoc:r().string,activeItemRef:r().oneOfType([r().func,r().shape({current:r().any})]),children:r().any,linkClass:r().string,page:r().object,pathRoot:r().string};const W=B;a(78851);const J=function(){var e=(0,s.useRef)(),t=(0,s.useRef)(),a=(0,s.useRef)(),n=(0,f.TH)(),r=n.hash,c=n.pathname;return(0,s.useEffect)((function(){var n;if(a.current){var s=a.current.closest(".rm-Sidebar-list");s.style.display="flex";var c=a.current.getBoundingClientRect(),i=c.top,o=c.height;if(s.style.display="",!(i+o<=window.innerHeight)){var l=i>t.current.clientHeight-t.current.offsetTop,u=null==r?void 0:r.startsWith("#");l&&!u&&window.scrollTo({top:e.current.getBoundingClientRect().top,left:0,behavior:"smooth"});var d=l?t.current.clientHeight:i-e.current.clientHeight/2;n=setTimeout((function(){e.current.scrollTop=d}),0)}}return function(){n&&clearTimeout(n)}}),[r,c]),{scrollAreaRef:e,scrollContentRef:t,activeItemRef:a}};var K=function(){return s.createElement("div",{className:"disabled-warning"},s.createElement("i",{"aria-hidden":"true",className:"icon icon-notification"})," Only admins can see this",s.createElement(c.rU,{rel:"noreferrer",target:"_blank",to:"/dash?to=usability#modules"},"Enable it for everyone ",s.createElement("i",{"aria-hidden":"true",className:"fa fa-chevron-right"})))},U=function(){var e=(0,s.useContext)(i.xI).project.subdomain;return s.createElement("div",{className:"readme-logo",id:"readmeLogo"},"Powered by ",s.createElement("a",{"aria-label":"ReadMe",href:"https://readme.com?ref_src=hub&project=".concat(e),style:{color:"unset"}},s.createElement("i",{className:"icon icon-readme",style:{display:"inline-block",minWidth:71}})))},P=function(e){var t,a=e.activeDoc,n=e.categories,r=e.className,c=e.header,d=e.pathRoot,m=e.navClass,p=void 0===m?"":m,f=e.id,g=(0,o.Z)().isPlayground,h=(0,s.useContext)(i.xI).project,_=(0,u.iZ)((function(e){return"hide"===e.data.appearance.footer.readme_logo})),D=J(),w=D.scrollAreaRef,R=D.scrollContentRef,S=D.activeItemRef;return s.createElement("nav",{ref:w,className:"".concat(r?"".concat(r," "):"").concat(v," hub-sidebar reference-redesign").concat("docs"===d?" rm-Sidebar_guides":"").concat(p?" ".concat(p):""," rm-Sidebar"),id:f||"hub-sidebar"},c,s.createElement("section",{ref:R,className:"".concat(b," rm-Sidebar hub-sidebar-content")},!g&&!(null!=h&&null!==(t=h.modules)&&void 0!==t&&t[d]||"edit"===d)&&s.createElement(K,null),Array.isArray(n)&&n.map((function(e){var t=e.title,n=e.pages,r=e.slug,c=e.categoryType;return s.createElement("div",{key:r,className:"".concat(E," rm-Sidebar-section")},"RealtimeCategory"!==c&&s.createElement("h3",{className:"".concat(y," rm-Sidebar-heading")},t),s.createElement(W,{activeItemRef:S,activeDoc:a,pathRoot:d,pages:n}))})),!((0,l.Z)(null==h?void 0:h.plan,"whitelabel")||_)&&s.createElement(U,null)))};P.propTypes={activeDoc:r().string,categories:r().array,className:r().string,header:r().oneOfType([r().elementType,r().object]),id:r().string,navClass:r().string,pathRoot:r().string};const F=s.memo(P)}}]);