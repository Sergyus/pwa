(this.webpackJsonpwww=this.webpackJsonpwww||[]).push([[8],{249:function(e,a,t){e.exports={title:"styles_title__r6XvL"}},250:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var r=t(4),o=t(249),c=t.n(o);t(0);function l(e){return Object(r.jsx)("h1",{className:c.a.title,children:e.title})}},254:function(e,a,t){"use strict";var r=t(2),o=t(6),c=t(0),l=(t(9),t(7)),n=t(199),i=t(8),s=c.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.raised,d=void 0!==s&&s,b=Object(o.a)(e,["classes","className","raised"]);return c.createElement(n.a,Object(r.a)({className:Object(l.a)(t.root,i),elevation:d?8:1,ref:a},b))}));a.a=Object(i.a)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},255:function(e,a,t){"use strict";var r=t(2),o=t(6),c=t(0),l=(t(9),t(7)),n=t(8),i=c.forwardRef((function(e,a){var t=e.classes,n=e.className,i=e.component,s=void 0===i?"div":i,d=Object(o.a)(e,["classes","className","component"]);return c.createElement(s,Object(r.a)({className:Object(l.a)(t.root,n),ref:a},d))}));a.a=Object(n.a)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},288:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return w}));var r=t(4),o=t(250),c=t(100),l=t(0),n=t(255),i=t(254),s=t(2),d=t(6),b=(t(9),t(7)),p=t(116),m=Object(p.a)(l.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),u=t(8),j=t(25),y=t(17),h=t(11),g=t(115);function f(e){return"Backspace"===e.key||"Delete"===e.key}var v=l.forwardRef((function(e,a){var t=e.avatar,r=e.classes,o=e.className,c=e.clickable,n=e.color,i=void 0===n?"default":n,p=e.component,u=e.deleteIcon,j=e.disabled,v=void 0!==j&&j,O=e.icon,x=e.label,C=e.onClick,S=e.onDelete,k=e.onKeyDown,w=e.onKeyUp,R=e.size,N=void 0===R?"medium":R,E=e.variant,T=void 0===E?"default":E,I=Object(d.a)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),$=l.useRef(null),P=Object(y.a)($,a),z=function(e){e.stopPropagation(),S&&S(e)},L=!(!1===c||!C)||c,D="small"===N,M=p||(L?g.a:"div"),A=M===g.a?{component:"div"}:{},H=null;if(S){var K=Object(b.a)("default"!==i&&("default"===T?r["deleteIconColor".concat(Object(h.a)(i))]:r["deleteIconOutlinedColor".concat(Object(h.a)(i))]),D&&r.deleteIconSmall);H=u&&l.isValidElement(u)?l.cloneElement(u,{className:Object(b.a)(u.props.className,r.deleteIcon,K),onClick:z}):l.createElement(m,{className:Object(b.a)(r.deleteIcon,K),onClick:z})}var F=null;t&&l.isValidElement(t)&&(F=l.cloneElement(t,{className:Object(b.a)(r.avatar,t.props.className,D&&r.avatarSmall,"default"!==i&&r["avatarColor".concat(Object(h.a)(i))])}));var W=null;return O&&l.isValidElement(O)&&(W=l.cloneElement(O,{className:Object(b.a)(r.icon,O.props.className,D&&r.iconSmall,"default"!==i&&r["iconColor".concat(Object(h.a)(i))])})),l.createElement(M,Object(s.a)({role:L||S?"button":void 0,className:Object(b.a)(r.root,o,"default"!==i&&[r["color".concat(Object(h.a)(i))],L&&r["clickableColor".concat(Object(h.a)(i))],S&&r["deletableColor".concat(Object(h.a)(i))]],"default"!==T&&[r.outlined,{primary:r.outlinedPrimary,secondary:r.outlinedSecondary}[i]],v&&r.disabled,D&&r.sizeSmall,L&&r.clickable,S&&r.deletable),"aria-disabled":!!v||void 0,tabIndex:L||S?0:void 0,onClick:C,onKeyDown:function(e){e.currentTarget===e.target&&f(e)&&e.preventDefault(),k&&k(e)},onKeyUp:function(e){e.currentTarget===e.target&&(S&&f(e)?S(e):"Escape"===e.key&&$.current&&$.current.blur()),w&&w(e)},ref:P},A,I),F||W,l.createElement("span",{className:Object(b.a)(r.label,D&&r.labelSmall)},x),H)})),O=Object(u.a)((function(e){var a="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],t=Object(j.c)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(a),backgroundColor:a,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:Object(j.b)(a,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:Object(j.b)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:Object(j.b)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:Object(j.b)(a,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:Object(j.b)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:Object(j.b)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(j.c)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(j.c)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:Object(j.c)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:t,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:Object(j.c)(t,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:Object(j.c)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:Object(j.c)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:Object(j.c)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:Object(j.c)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(v),x=Object(p.a)(l.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var C=l.forwardRef((function(e,a){var t=e.alt,r=e.children,o=e.classes,c=e.className,n=e.component,i=void 0===n?"div":n,p=e.imgProps,m=e.sizes,u=e.src,j=e.srcSet,y=e.variant,h=void 0===y?"circle":y,g=Object(d.a)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),f=null,v=function(e){var a=e.src,t=e.srcSet,r=l.useState(!1),o=r[0],c=r[1];return l.useEffect((function(){if(a||t){c(!1);var e=!0,r=new Image;return r.src=a,r.srcSet=t,r.onload=function(){e&&c("loaded")},r.onerror=function(){e&&c("error")},function(){e=!1}}}),[a,t]),o}({src:u,srcSet:j}),O=u||j,C=O&&"error"!==v;return f=C?l.createElement("img",Object(s.a)({alt:t,src:u,srcSet:j,sizes:m,className:o.img},p)):null!=r?r:O&&t?t[0]:l.createElement(x,{className:o.fallback}),l.createElement(i,Object(s.a)({className:Object(b.a)(o.root,o.system,o[h],c,!C&&o.colorDefault),ref:a},g),f)})),S=Object(u.a)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(C),k=t(247);function w(){var e=Object(k.a)(["menu"]).t;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(o.a,{title:e("about")}),Object(r.jsx)(i.a,{children:Object(r.jsxs)(n.a,{children:[Object(r.jsx)(c.a,{gutterBottom:!0,variant:"h6",component:"h2",children:"TECHNOLOGY STACK"}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{label:"REACT",color:"primary",avatar:Object(r.jsx)(S,{children:"R"})}),Object(r.jsx)(O,{label:"Typescript",color:"primary"}),Object(r.jsx)(O,{label:"MobX",color:"primary"}),Object(r.jsx)(O,{label:"Material UI",color:"primary"}),Object(r.jsx)(O,{label:"i18n",color:"primary"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{label:"HTML/SCSS",color:"primary",avatar:Object(r.jsx)(S,{children:"H"})}),Object(r.jsx)(O,{label:"Responsive",color:"primary"}),Object(r.jsx)(O,{label:"Animation",color:"primary"})]}),Object(r.jsx)("br",{}),Object(r.jsx)("hr",{}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{label:"Node.js",color:"primary",avatar:Object(r.jsx)(S,{children:"N"})}),Object(r.jsx)(O,{label:"Express",color:"primary"}),Object(r.jsx)(O,{label:"Morgan",color:"primary"}),Object(r.jsx)(O,{label:"SSR",color:"primary"}),Object(r.jsx)(O,{label:"PWA",color:"primary"})]}),Object(r.jsx)("br",{}),Object(r.jsxs)("div",{children:[Object(r.jsx)(O,{label:"REST API",color:"primary",avatar:Object(r.jsx)(S,{children:"R"})}),Object(r.jsx)(O,{label:"GRAPHQL",color:"primary",avatar:Object(r.jsx)(S,{children:"G"})}),Object(r.jsx)(O,{label:"WS",color:"primary",avatar:Object(r.jsx)(S,{children:"W"})})]})]})})]})}}}]);
//# sourceMappingURL=8.9586a8bb.chunk.js.map