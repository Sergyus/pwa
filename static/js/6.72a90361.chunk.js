(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[6],{249:function(e,t,n){e.exports={title:"styles_title__r6XvL"}},250:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var a=n(4),i=n(249),r=n.n(i);n(0);function c(e){return Object(a.jsx)("h1",{className:r.a.title,children:e.title})}},254:function(e,t,n){"use strict";var a=n(2),i=n(6),r=n(0),c=(n(9),n(7)),s=n(199),o=n(8),l=r.forwardRef((function(e,t){var n=e.classes,o=e.className,l=e.raised,d=void 0!==l&&l,u=Object(i.a)(e,["classes","className","raised"]);return r.createElement(s.a,Object(a.a)({className:Object(c.a)(n.root,o),elevation:d?8:1,ref:t},u))}));t.a=Object(o.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(l)},255:function(e,t,n){"use strict";var a=n(2),i=n(6),r=n(0),c=(n(9),n(7)),s=n(8),o=r.forwardRef((function(e,t){var n=e.classes,s=e.className,o=e.component,l=void 0===o?"div":o,d=Object(i.a)(e,["classes","className","component"]);return r.createElement(l,Object(a.a)({className:Object(c.a)(n.root,s),ref:t},d))}));t.a=Object(s.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(o)},268:function(e,t,n){"use strict";var a=n(6),i=n(2),r=n(0),c=(n(9),n(7)),s=n(8),o=[0,1,2,3,4,5,6,7,8,9,10],l=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=parseFloat(e);return"".concat(n/t).concat(String(e).replace(String(n),"")||"px")}var u=r.forwardRef((function(e,t){var n=e.alignContent,s=void 0===n?"stretch":n,o=e.alignItems,l=void 0===o?"stretch":o,d=e.classes,u=e.className,f=e.component,x=void 0===f?"div":f,g=e.container,m=void 0!==g&&g,p=e.direction,j=void 0===p?"row":p,v=e.item,b=void 0!==v&&v,h=e.justify,w=void 0===h?"flex-start":h,O=e.lg,y=void 0!==O&&O,S=e.md,C=void 0!==S&&S,W=e.sm,N=void 0!==W&&W,M=e.spacing,k=void 0===M?0:M,z=e.wrap,E=void 0===z?"wrap":z,I=e.xl,B=void 0!==I&&I,G=e.xs,D=void 0!==G&&G,R=e.zeroMinWidth,U=void 0!==R&&R,_=Object(a.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),F=Object(c.a)(d.root,u,m&&[d.container,0!==k&&d["spacing-xs-".concat(String(k))]],b&&d.item,U&&d.zeroMinWidth,"row"!==j&&d["direction-xs-".concat(String(j))],"wrap"!==E&&d["wrap-xs-".concat(String(E))],"stretch"!==l&&d["align-items-xs-".concat(String(l))],"stretch"!==s&&d["align-content-xs-".concat(String(s))],"flex-start"!==w&&d["justify-xs-".concat(String(w))],!1!==D&&d["grid-xs-".concat(String(D))],!1!==N&&d["grid-sm-".concat(String(N))],!1!==C&&d["grid-md-".concat(String(C))],!1!==y&&d["grid-lg-".concat(String(y))],!1!==B&&d["grid-xl-".concat(String(B))]);return r.createElement(x,Object(i.a)({className:F,ref:t},_))})),f=Object(s.a)((function(e){return Object(i.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var n={};return o.forEach((function(a){var i=e.spacing(a);0!==i&&(n["spacing-".concat(t,"-").concat(a)]={margin:"-".concat(d(i,2)),width:"calc(100% + ".concat(d(i),")"),"& > $item":{padding:d(i,2)}})})),n}(e,"xs"),e.breakpoints.keys.reduce((function(t,n){return function(e,t,n){var a={};l.forEach((function(e){var t="grid-".concat(n,"-").concat(e);if(!0!==e)if("auto"!==e){var i="".concat(Math.round(e/12*1e8)/1e6,"%");a[t]={flexBasis:i,flexGrow:0,maxWidth:i}}else a[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else a[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===n?Object(i.a)(e,a):e[t.breakpoints.up(n)]=a}(t,e,n),t}),{}))}),{name:"MuiGrid"})(u);t.a=f},292:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return b}));var a=n(4),i=n(69),r=n.n(i),c=n(82),s=n(50),o=n(250),l=n(0),d=n(64),u=n(83),f=n(140),x=new(function(){function e(){Object(d.a)(this,e),this.api=f.a}return Object(u.a)(e,[{key:"getUsers",value:function(e){return this.api.getUsers(e)}}]),e}()),g=n(24),m=n(268),p=n(254),j=n(255),v=n(100);function b(){Object(l.useEffect)((function(){h()}),[]);var e=Object(l.useState)(!0),t=Object(s.a)(e,2),n=t[0],i=t[1],d=Object(l.useState)([]),u=Object(s.a)(d,2),f=u[0],b=u[1],h=function(){var e=Object(c.a)(r.a.mark((function e(){var t,n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.getUsers({params:{page:1,limit:9}});case 2:t=e.sent,n=t.loading,a=t.data,b(a.users.data),i(n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(o.a,{title:"Apollo GQL"}),n&&Object(a.jsx)(g.a,{}),Object(a.jsx)(m.a,{container:!0,spacing:1,children:f.map((function(e){return Object(a.jsx)(m.a,{item:!0,xs:12,sm:6,md:4,children:Object(a.jsx)(p.a,{children:Object(a.jsxs)(j.a,{children:[Object(a.jsx)(v.a,{color:"textSecondary",gutterBottom:!0,children:e.name}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"username: "}),e.username]}),Object(a.jsxs)("div",{children:[Object(a.jsx)("strong",{children:"email: "}),e.email]})]})})},e.id)}))})]})}}}]);
//# sourceMappingURL=6.72a90361.chunk.js.map