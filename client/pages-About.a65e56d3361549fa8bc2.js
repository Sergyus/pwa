(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[89],{807:(e,a,t)=>{"use strict";t.d(a,{Z:()=>s});var r=t(9603),l=t(3721),o=t(7378),n=(t(3615),t(8944)),c=t(4649),i=o.forwardRef((function(e,a){var t=e.classes,c=e.className,i=e.component,s=void 0===i?"div":i,m=(0,l.Z)(e,["classes","className","component"]);return o.createElement(s,(0,r.Z)({className:(0,n.Z)(t.root,c),ref:a},m))}));const s=(0,c.Z)({root:{padding:16,"&:last-child":{paddingBottom:24}}},{name:"MuiCardContent"})(i)},4840:(e,a,t)=>{"use strict";t.d(a,{Z:()=>m});var r=t(9603),l=t(3721),o=t(7378),n=(t(3615),t(8944)),c=t(489),i=t(4649),s=o.forwardRef((function(e,a){var t=e.classes,i=e.className,s=e.raised,m=void 0!==s&&s,d=(0,l.Z)(e,["classes","className","raised"]);return o.createElement(c.Z,(0,r.Z)({className:(0,n.Z)(t.root,i),elevation:m?8:1,ref:a},d))}));const m=(0,i.Z)({root:{overflow:"hidden"}},{name:"MuiCard"})(s)},7074:(e,a,t)=>{"use strict";t.d(a,{Z:()=>l});var r=t(7378);function l(e){return r.createElement("h1",{className:"app-title"},e.title)}},8218:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>x});var r=t(7074),l=t(4344),o=t(7378),n=t(807),c=t(4840),i=t(9603),s=t(3721),m=(t(3615),t(8944)),d=t(2546);const p=(0,d.Z)(o.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel");var u=t(4649),y=t(4662),g=t(1487),b=t(3056),v=t(7196);function f(e){return"Backspace"===e.key||"Delete"===e.key}var h=o.forwardRef((function(e,a){var t=e.avatar,r=e.classes,l=e.className,n=e.clickable,c=e.color,d=void 0===c?"default":c,u=e.component,y=e.deleteIcon,h=e.disabled,E=void 0!==h&&h,C=e.icon,S=e.label,k=e.onClick,Z=e.onDelete,x=e.onKeyDown,R=e.onKeyUp,N=e.size,w=void 0===N?"medium":N,T=e.variant,I=void 0===T?"default":T,L=(0,s.Z)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),$=o.useRef(null),_=(0,g.Z)($,a),P=function(e){e.stopPropagation(),Z&&Z(e)},z=!(!1===n||!k)||n,D="small"===w,A=u||(z?v.Z:"div"),U=A===v.Z?{component:"div"}:{},O=null;if(Z){var M=(0,m.Z)("default"!==d&&("default"===I?r["deleteIconColor".concat((0,b.Z)(d))]:r["deleteIconOutlinedColor".concat((0,b.Z)(d))]),D&&r.deleteIconSmall);O=y&&o.isValidElement(y)?o.cloneElement(y,{className:(0,m.Z)(y.props.className,r.deleteIcon,M),onClick:P}):o.createElement(p,{className:(0,m.Z)(r.deleteIcon,M),onClick:P})}var H=null;t&&o.isValidElement(t)&&(H=o.cloneElement(t,{className:(0,m.Z)(r.avatar,t.props.className,D&&r.avatarSmall,"default"!==d&&r["avatarColor".concat((0,b.Z)(d))])}));var K=null;return C&&o.isValidElement(C)&&(K=o.cloneElement(C,{className:(0,m.Z)(r.icon,C.props.className,D&&r.iconSmall,"default"!==d&&r["iconColor".concat((0,b.Z)(d))])})),o.createElement(A,(0,i.Z)({role:z||Z?"button":void 0,className:(0,m.Z)(r.root,l,"default"!==d&&[r["color".concat((0,b.Z)(d))],z&&r["clickableColor".concat((0,b.Z)(d))],Z&&r["deletableColor".concat((0,b.Z)(d))]],"default"!==I&&[r.outlined,{primary:r.outlinedPrimary,secondary:r.outlinedSecondary}[d]],E&&r.disabled,D&&r.sizeSmall,z&&r.clickable,Z&&r.deletable),"aria-disabled":!!E||void 0,tabIndex:z||Z?0:void 0,onClick:k,onKeyDown:function(e){e.currentTarget===e.target&&f(e)&&e.preventDefault(),x&&x(e)},onKeyUp:function(e){e.currentTarget===e.target&&(Z&&f(e)?Z(e):"Escape"===e.key&&$.current&&$.current.blur()),R&&R(e)},ref:_},U,L),H||K,o.createElement("span",{className:(0,m.Z)(r.label,D&&r.labelSmall)},S),O)}));const E=(0,u.Z)((function(e){var a="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],t=(0,y.U1)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(a),backgroundColor:a,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,y._4)(a,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,y._4)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,y._4)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,y._4)(a,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,y._4)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,y._4)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,y.U1)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,y.U1)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,y.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:t,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,y.U1)(t,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,y.U1)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,y.U1)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,y.U1)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,y.U1)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(h),C=(0,d.Z)(o.createElement("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var S=o.forwardRef((function(e,a){var t=e.alt,r=e.children,l=e.classes,n=e.className,c=e.component,d=void 0===c?"div":c,p=e.imgProps,u=e.sizes,y=e.src,g=e.srcSet,b=e.variant,v=void 0===b?"circle":b,f=(0,s.Z)(e,["alt","children","classes","className","component","imgProps","sizes","src","srcSet","variant"]),h=null,E=function(e){var a=e.src,t=e.srcSet,r=o.useState(!1),l=r[0],n=r[1];return o.useEffect((function(){if(a||t){n(!1);var e=!0,r=new Image;return r.src=a,r.srcSet=t,r.onload=function(){e&&n("loaded")},r.onerror=function(){e&&n("error")},function(){e=!1}}}),[a,t]),l}({src:y,srcSet:g}),S=y||g,k=S&&"error"!==E;return h=k?o.createElement("img",(0,i.Z)({alt:t,src:y,srcSet:g,sizes:u,className:l.img},p)):null!=r?r:S&&t?t[0]:o.createElement(C,{className:l.fallback}),o.createElement(d,(0,i.Z)({className:(0,m.Z)(l.root,l.system,l[v],n,!k&&l.colorDefault),ref:a},f),h)}));const k=(0,u.Z)((function(e){return{root:{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none"},colorDefault:{color:e.palette.background.default,backgroundColor:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[600]},circle:{},circular:{},rounded:{borderRadius:e.shape.borderRadius},square:{borderRadius:0},img:{width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4},fallback:{width:"75%",height:"75%"}}}),{name:"MuiAvatar"})(S);var Z=t(71);function x(){var e=(0,Z.$)(["menu"]).t;return o.createElement(o.Fragment,null,o.createElement(r.Z,{title:e("about")}),o.createElement(c.Z,null,o.createElement(n.Z,null,o.createElement(l.Z,{gutterBottom:!0,variant:"h6",component:"h2"},"TECHNOLOGY STACK"),o.createElement("br",null),o.createElement("div",null,o.createElement(E,{label:"REACT",color:"primary",avatar:o.createElement(k,null,"R")}),o.createElement(E,{label:"Typescript",color:"primary"}),o.createElement(E,{label:"MobX",color:"primary"}),o.createElement(E,{label:"Material UI",color:"primary"}),o.createElement(E,{label:"i18n",color:"primary"})),o.createElement("br",null),o.createElement("div",null,o.createElement(E,{label:"HTML/SCSS",color:"primary",avatar:o.createElement(k,null,"H")}),o.createElement(E,{label:"Responsive",color:"primary"}),o.createElement(E,{label:"Animation",color:"primary"})),o.createElement("br",null),o.createElement("hr",null),o.createElement("br",null),o.createElement("div",null,o.createElement(E,{label:"Node.js",color:"primary",avatar:o.createElement(k,null,"N")}),o.createElement(E,{label:"Express",color:"primary"}),o.createElement(E,{label:"Morgan",color:"primary"}),o.createElement(E,{label:"SSR",color:"primary"}),o.createElement(E,{label:"PWA",color:"primary"})),o.createElement("br",null),o.createElement("div",null,o.createElement(E,{label:"REST API",color:"primary",avatar:o.createElement(k,null,"R")}),o.createElement(E,{label:"GRAPHQL",color:"primary",avatar:o.createElement(k,null,"G")}),o.createElement(E,{label:"WS",color:"primary",avatar:o.createElement(k,null,"W")})))))}}}]);