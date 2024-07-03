!(function(){var lr=Object.defineProperty,fr=Object.defineProperties;var ur=Object.getOwnPropertyDescriptors;var Ke=Object.getOwnPropertySymbols;var Fn=Object.prototype.hasOwnProperty,Un=Object.prototype.propertyIsEnumerable;var Qn=(U,y,s)=>y in U?lr(U,y,{enumerable:!0,configurable:!0,writable:!0,value:s}):U[y]=s,rt=(U,y)=>{for(var s in y||(y={}))Fn.call(y,s)&&Qn(U,s,y[s]);if(Ke)for(var s of Ke(y))Un.call(y,s)&&Qn(U,s,y[s]);return U},Tt=(U,y)=>fr(U,ur(y));var Bt=(U,y)=>{var s={};for(var Q in U)Fn.call(U,Q)&&y.indexOf(Q)<0&&(s[Q]=U[Q]);if(U!=null&&Ke)for(var Q of Ke(U))y.indexOf(Q)<0&&Un.call(U,Q)&&(s[Q]=U[Q]);return s};(self.webpackChunkreact_form_simple=self.webpackChunkreact_form_simple||[]).push([[2816],{87357:function(U,y,s){"use strict";s.d(y,{Z:function(){return ut}});var Q=s(87462),x=s(63366),_=s(67294),$=s(90512),P=s(49731),u=s(86523),at=s(39707),D=s(96682),K=s(85893);const L=["className","component"];function N(Ot={}){const{themeId:mt,defaultTheme:ht,defaultClassName:At="MuiBox-root",generateClassName:Kt}=Ot,Nt=(0,P.ZP)("div",{shouldForwardProp:xt=>xt!=="theme"&&xt!=="sx"&&xt!=="as"})(u.Z);return _.forwardRef(function(_t,$t){const Ct=(0,D.Z)(ht),kt=(0,at.Z)(_t),{className:le,component:Rt="div"}=kt,Dt=(0,x.Z)(kt,L);return(0,K.jsx)(Nt,(0,Q.Z)({as:Rt,ref:$t,className:(0,$.Z)(le,Kt?Kt(At):At),theme:mt&&Ct[mt]||Ct},Dt))})}var k=s(37078),M=s(44562),V=s(10606),J=s(93923);const X=(0,M.Z)();var ut=N({themeId:V.Z,defaultTheme:X,defaultClassName:J.Z.root,generateClassName:k.Z.generate})},93923:function(U,y,s){"use strict";var Q=s(1588);const x=(0,Q.Z)("MuiBox",["root"]);y.Z=x},39707:function(U,y,s){"use strict";s.d(y,{Z:function(){return at}});var Q=s(87462),x=s(63366),_=s(59766),$=s(44920);const P=["sx"],u=D=>{var K,L;const N={systemProps:{},otherProps:{}},k=(K=D==null||(L=D.theme)==null?void 0:L.unstable_sxConfig)!=null?K:$.Z;return Object.keys(D).forEach(M=>{k[M]?N.systemProps[M]=D[M]:N.otherProps[M]=D[M]}),N};function at(D){const{sx:K}=D,L=(0,x.Z)(D,P),{systemProps:N,otherProps:k}=u(L);let M;return Array.isArray(K)?M=[N,...K]:typeof K=="function"?M=(...V)=>{const J=K(...V);return(0,_.P)(J)?(0,Q.Z)({},N,J):N}:M=(0,Q.Z)({},N,K),(0,Q.Z)({},k,{sx:M})}},36883:function(U,y,s){"use strict";s.d(y,{B:function(){return L}});var Q=s(97857),x=s.n(Q),_=s(13769),$=s.n(_),P=s(67294),u=s(85893),at=["name","size","color","style"],D="//at.alicdn.com/t/c/font_4298426_gftuoqa6jhe.js",K="react-form-simple-icon-iconfont";function L(k){var M=k.name,V=k.size,J=k.color,X=k.style,g=$()(k,at);P.useLayoutEffect(function(){var ht=document.getElementById(K);if(!ht||ht.id!==K){var At=document.createElement("script");At.src=D,At.id=K,document.body.appendChild(At)}},[]);function ut(ht){var At=parseFloat(ht);return isNaN(At)?ht:"".concat(At,"px")}var Ot=x()(x()({fill:J||"currentcolor",width:ut(V)||"1em",height:ut(V)||"1em"},X),{},{overflow:"hidden"}),mt="#icon-".concat(M);return(0,u.jsx)("svg",x()(x()({style:Ot},g),{},{"aria-hidden":"true",children:(0,u.jsx)("use",{xlinkHref:mt})}))}var N=null},41457:function(U,y,s){"use strict";s.r(y),s.d(y,{default:function(){return tr}});var Q=s(97857),x=s.n(Q),_=s(13769),$=s.n(_),P=s(67294),u=s(85893),at=["children","className","plain"];function D(e){var n=e.children,i=e.className,A=e.plain,p=$()(e,at);return(0,u.jsx)("button",x()(x()({},p),{},{className:"button ".concat([i,A?"plain-button":""].filter(Boolean).join(" ")),children:n}))}var K=s(66881),L=s(76658),N=function(){var n=(0,K.bU)(),i=n.base,A=(0,L.t)(),p=A.format,E=A.isDefaultLocal;return(0,u.jsx)(D,{className:"start-button",onClick:function(){var v=E()?"":i;K.m8.push("".concat(v,"/intro/start"))},children:p({id:"hero.action.button.start"})})},k=function(){return(0,u.jsx)(D,{plain:!0,className:"github-button",children:(0,u.jsx)("a",{href:"https://github.com/easy-form/react-form-simple",target:"blank",children:"Github"})})},M=s(33390),V=M;const J="[A-Za-z$_][0-9A-Za-z$_]*",X=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],g=["true","false","null","undefined","NaN","Infinity"],ut=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Ot=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],mt=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],ht=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],At=[].concat(mt,ut,Ot);function Kt(e){const n=e.regex,i=(yt,{after:Zt})=>{const Ae="</"+yt[0].slice(1);return yt.input.indexOf(Ae,Zt)!==-1},A=J,p={begin:"<>",end:"</>"},E=/<[A-Za-z0-9\\._:-]+\s*\/>/,B={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(yt,Zt)=>{const Ae=yt[0].length+yt.index,Oe=yt.input[Ae];if(Oe==="<"||Oe===","){Zt.ignoreMatch();return}Oe===">"&&(i(yt,{after:Ae})||Zt.ignoreMatch());let En;const wn=yt.input.substring(Ae);if(En=wn.match(/^\s*=/)){Zt.ignoreMatch();return}if((En=wn.match(/^\s+extends\s+/))&&En.index===0){Zt.ignoreMatch();return}}},v={$pattern:J,keyword:X,literal:g,built_in:At,"variable.language":ht},z="[0-9](_?[0-9])*",q=`\\.(${z})`,et="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",ft={className:"number",variants:[{begin:`(\\b(${et})((${q})|\\.)?|(${q}))[eE][+-]?(${z})\\b`},{begin:`\\b(${et})\\b((${q})\\b|\\.)?|(${q})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},H={className:"subst",begin:"\\$\\{",end:"\\}",keywords:v,contains:[]},ct={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,H],subLanguage:"xml"}},it={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,H],subLanguage:"css"}},T={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,H],subLanguage:"graphql"}},vt={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,H]},nt={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:A+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},dt=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,ct,it,T,vt,{match:/\$\d+/},ft];H.contains=dt.concat({begin:/\{/,end:/\}/,keywords:v,contains:["self"].concat(dt)});const Ut=[].concat(nt,H.contains),Lt=Ut.concat([{begin:/\(/,end:/\)/,keywords:v,contains:["self"].concat(Ut)}]),ce={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:v,contains:Lt},er={variants:[{match:[/class/,/\s+/,A,/\s+/,/extends/,/\s+/,n.concat(A,"(",n.concat(/\./,A),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,A],scope:{1:"keyword",3:"title.class"}}]},yn={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...ut,...Ot]}},nr={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},rr={variants:[{match:[/function/,/\s+/,A,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ce],illegal:/%/},sr={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function or(yt){return n.concat("(?!",yt.join("|"),")")}const ar={match:n.concat(/\b/,or([...mt,"super","import"]),A,n.lookahead(/\(/)),className:"title.function",relevance:0},ir={begin:n.concat(/\./,n.lookahead(n.concat(A,/(?![0-9A-Za-z$_(])/))),end:A,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},cr={match:[/get|set/,/\s+/,A,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ce]},xn="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",Ar={match:[/const|var|let/,/\s+/,A,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(xn)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ce]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:v,exports:{PARAMS_CONTAINS:Lt,CLASS_REFERENCE:yn},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),nr,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,ct,it,T,vt,nt,{match:/\$\d+/},ft,yn,{className:"attr",begin:A+n.lookahead(":"),relevance:0},Ar,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[nt,e.REGEXP_MODE,{className:"function",begin:xn,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:v,contains:Lt}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:p.begin,end:p.end},{match:E},{begin:B.begin,"on:begin":B.isTrulyOpeningTag,end:B.end}],subLanguage:"xml",contains:[{begin:B.begin,end:B.end,skip:!0,contains:["self"]}]}]},rr,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ce,e.inherit(e.TITLE_MODE,{begin:A,className:"title.function"})]},{match:/\.\.\./,relevance:0},ir,{match:"\\$"+A,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ce]},ar,sr,er,cr,{match:/\$[(.]/}]}}function Nt(e){const n=Kt(e),i=J,A=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],p={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[n.exports.CLASS_REFERENCE]},E={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:A},contains:[n.exports.CLASS_REFERENCE]},B={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},v=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],z={$pattern:J,keyword:X.concat(v),literal:g,built_in:At.concat(A),"variable.language":ht},q={className:"meta",begin:"@"+i},et=(H,ct,it)=>{const T=H.contains.findIndex(vt=>vt.label===ct);if(T===-1)throw new Error("can not find mode to replace");H.contains.splice(T,1,it)};Object.assign(n.keywords,z),n.exports.PARAMS_CONTAINS.push(q),n.contains=n.contains.concat([q,p,E]),et(n,"shebang",e.SHEBANG()),et(n,"use_strict",B);const ft=n.contains.find(H=>H.label==="func.def");return ft.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),n}V.registerLanguage("typescript",Nt);var qt=function(){var n=(0,P.useRef)(null);return(0,P.useEffect)(function(){if(n.current){var i=n.current,A=s(39017).k,p=0,E=setInterval(function(){var B=A.slice(0,p+1);i.innerHTML=V.highlight(B,{language:"typescript"}).value,p++,p===A.length&&clearInterval(E)},30);return function(){clearInterval(E)}}},[n]),(0,u.jsx)("div",{className:"theme-atom-one-dark-wrap",children:(0,u.jsx)("pre",{className:"theme-atom-one-dark hljs",children:(0,u.jsx)("code",{children:(0,u.jsx)("div",{ref:n})})})})},xt=s(87357),_t=function(){var n=(0,L.t)(),i=n.format,A=n.isLocalZH_CN;return(0,u.jsxs)(xt.Z,{children:[(0,u.jsx)("div",{style:x()({fontSize:"33px",letterSpacing:"3px"},A()?{lineHeight:1.8}:{letterSpacing:"0px"}),children:i({id:"hero.main.title"})}),(0,u.jsx)("div",{style:x()({marginTop:"30px",fontSize:"18px",letterSpacing:"2px"},A()?{lineHeight:1.8}:{letterSpacing:"0px",lineHeight:1.9}),children:i({id:"hero.main.desc"})})]})},$t=s(36883),Ct=s(63682),kt=P.memo(function(){var e=(0,L.t)(),n=e.format,i=e.isLocalZH_CN,A=(0,Ct.S)({icons:[{name:"code",title:n({id:"hero.feature.codeTitle"}),desc:n({id:"hero.feature.code"})},{name:"jiekou",title:n({id:"hero.feature.APITitle"}),desc:n({id:"hero.feature.API"})},{name:"shandian",title:n({id:"hero.feature.speedTitle"}),desc:n({id:"hero.feature.speed"})},{name:"kuozhan",title:n({id:"hero.feature.interfaceTilte"}),desc:n({id:"hero.feature.interface"})},{name:"buju",title:n({id:"hero.feature.layoutTitle"}),desc:n({id:"hero.feature.layout"})},{name:"T",title:n({id:"hero.feature.typeTitle"}),desc:n({id:"hero.feature.type"})}]}),p=A.icons,E=i(),B=p.map(function(v){return(0,u.jsx)("div",{className:"feature-item",children:(0,u.jsxs)("div",{style:{padding:"0 20px"},children:[(0,u.jsx)($t.B,{name:v.name,size:45}),(0,u.jsx)("div",{style:{fontSize:"23px",marginTop:"6px"},children:v.title}),(0,u.jsx)("div",{className:"feature-item_desc",style:x()({marginTop:"15px",fontSize:"16px",lineHeight:"1.5"},E?{letterSpacing:"1px"}:{}),children:v.desc})]})})});return(0,u.jsx)("div",{className:"feature-contanier",children:B})}),le=null,Rt=s(75260),Dt=s(9463),bn=s(8679),Bn=s(48137),In=s(27278),Pe=u.Fragment;function tt(e,n,i){return Rt.h.call(n,"css")?u.jsx(Rt.E,(0,Rt.c)(e,n),i):u.jsx(e,n,i)}function Sn(e,n,i){return hasOwnProperty.call(n,"css")?ReactJSXRuntime.jsxs(Emotion,createEmotionProps(e,n),i):ReactJSXRuntime.jsxs(e,n,i)}var o=s(70917),Me=Object.defineProperty,Te=(e,n,i)=>n in e?Me(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,Xt=(e,n,i)=>(Te(e,typeof n!="symbol"?n+"":n,i),i),fe=new Map,wt=new WeakMap,ue=0,ge=void 0;function vn(e){ge=e}function Re(e){return e?(wt.has(e)||(ue+=1,wt.set(e,ue.toString())),wt.get(e)):"0"}function De(e){return Object.keys(e).sort().filter(n=>e[n]!==void 0).map(n=>`${n}_${n==="root"?Re(e.root):e[n]}`).toString()}function je(e){const n=De(e);let i=fe.get(n);if(!i){const A=new Map;let p;const E=new IntersectionObserver(B=>{B.forEach(v=>{var z;const q=v.isIntersecting&&p.some(et=>v.intersectionRatio>=et);e.trackVisibility&&typeof v.isVisible=="undefined"&&(v.isVisible=q),(z=A.get(v.target))==null||z.forEach(et=>{et(q,v)})})},e);p=E.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:n,observer:E,elements:A},fe.set(n,i)}return i}function de(e,n,i={},A=ge){if(typeof window.IntersectionObserver=="undefined"&&A!==void 0){const z=e.getBoundingClientRect();return n(A,{isIntersecting:A,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:z,intersectionRect:z,rootBounds:z}),()=>{}}const{id:p,observer:E,elements:B}=je(i),v=B.get(e)||[];return B.has(e)||B.set(e,v),v.push(n),E.observe(e),function(){v.splice(v.indexOf(n),1),v.length===0&&(B.delete(e),E.unobserve(e)),B.size===0&&(E.disconnect(),fe.delete(p))}}function Le(e){return typeof e.children!="function"}var he=class extends P.Component{constructor(e){super(e),Xt(this,"node",null),Xt(this,"_unobserveCb",null),Xt(this,"handleNode",n=>{this.node&&(this.unobserve(),!n&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=n||null,this.observeNode()}),Xt(this,"handleChange",(n,i)=>{n&&this.props.triggerOnce&&this.unobserve(),Le(this.props)||this.setState({inView:n,entry:i}),this.props.onChange&&this.props.onChange(n,i)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:n,rootMargin:i,trackVisibility:A,delay:p,fallbackInView:E}=this.props;this._unobserveCb=de(this.node,this.handleChange,{threshold:e,root:n,rootMargin:i,trackVisibility:A,delay:p},E)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:it,entry:T}=this.state;return e({inView:it,entry:T,ref:this.handleNode})}const ct=this.props,{as:n,triggerOnce:i,threshold:A,root:p,rootMargin:E,onChange:B,skip:v,trackVisibility:z,delay:q,initialInView:et,fallbackInView:ft}=ct,H=Bt(ct,["as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"]);return P.createElement(n||"div",rt({ref:this.handleNode},H),e)}};function te({threshold:e,delay:n,trackVisibility:i,rootMargin:A,root:p,triggerOnce:E,skip:B,initialInView:v,fallbackInView:z,onChange:q}={}){var et;const[ft,H]=P.useState(null),ct=P.useRef(),[it,T]=P.useState({inView:!!v,entry:void 0});ct.current=q,P.useEffect(()=>{if(B||!ft)return;let dt;return dt=de(ft,(Ut,Lt)=>{T({inView:Ut,entry:Lt}),ct.current&&ct.current(Ut,Lt),Lt.isIntersecting&&E&&dt&&(dt(),dt=void 0)},{root:p,rootMargin:A,threshold:e,trackVisibility:i,delay:n},z),()=>{dt&&dt()}},[Array.isArray(e)?e.toString():e,ft,p,A,E,B,i,z,n]);const vt=(et=it.entry)==null?void 0:et.target,Jt=P.useRef();!ft&&vt&&!E&&!B&&Jt.current!==vt&&(Jt.current=vt,T({inView:!!v,entry:void 0}));const nt=[H,it.inView,it.entry];return nt.ref=nt[0],nt.inView=nt[1],nt.entry=nt[2],nt}var Ne=s(14954);const ke=(0,o.F4)`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`,pe=(0,o.F4)`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,Qt=(0,o.F4)`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`,me=(0,o.F4)`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`,Pt=(0,o.F4)`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`,Yt=(0,o.F4)`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Ce=(0,o.F4)`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Xe=(0,o.F4)`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,Ye=(0,o.F4)`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`,We=(0,o.F4)`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`,ze=(0,o.F4)`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`,He=(0,o.F4)`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,Ee=(0,o.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ge=(0,o.F4)`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Ve=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Je=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,ee=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,be=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Wt=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ze=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Be=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Mt=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,t=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,r=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,c=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,b=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function Y({duration:e=1e3,delay:n=0,timingFunction:i="ease",keyframes:A=Wt,iterationCount:p=1}){return(0,o.iv)`
    animation-duration: ${e}ms;
    animation-timing-function: ${i};
    animation-delay: ${n}ms;
    animation-name: ${A};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${p};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function W(e){return e==null}function d(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function f(e,n){return i=>i?e():n()}function C(e){return f(e,()=>null)}function G(e){return C(()=>({opacity:0}))(e)}const F=e=>{const{cascade:n=!1,damping:i=.5,delay:A=0,duration:p=1e3,fraction:E=0,keyframes:B=Wt,triggerOnce:v=!1,className:z,style:q,childClassName:et,childStyle:ft,children:H,onVisibilityChange:ct}=e,it=(0,P.useMemo)(()=>Y({keyframes:B,duration:p}),[p,B]);return W(H)?null:d(H)?tt(ne,Tt(rt({},e),{animationStyles:it,children:String(H)})):(0,Ne.isFragment)(H)?tt(zt,Tt(rt({},e),{animationStyles:it})):tt(Pe,{children:P.Children.map(H,(T,vt)=>{if(!(0,P.isValidElement)(T))return null;const Jt=A+(n?vt*p*i:0);switch(T.type){case"ol":case"ul":return tt(o.ms,{children:({cx:nt})=>tt(T.type,Tt(rt({},T.props),{className:nt(z,T.props.className),style:Object.assign({},q,T.props.style),children:tt(F,Tt(rt({},e),{children:T.props.children}))}))});case"li":return tt(he,{threshold:E,triggerOnce:v,onChange:ct,children:({inView:nt,ref:dt})=>tt(o.ms,{children:({cx:Ut})=>tt(T.type,Tt(rt({},T.props),{ref:dt,className:Ut(et,T.props.className),css:C(()=>it)(nt),style:Object.assign({},ft,T.props.style,G(!nt),{animationDelay:Jt+"ms"})}))})});default:return tt(he,{threshold:E,triggerOnce:v,onChange:ct,children:({inView:nt,ref:dt})=>tt("div",{ref:dt,className:z,css:C(()=>it)(nt),style:Object.assign({},q,G(!nt),{animationDelay:Jt+"ms"}),children:tt(o.ms,{children:({cx:Ut})=>tt(T.type,Tt(rt({},T.props),{className:Ut(et,T.props.className),style:Object.assign({},ft,T.props.style)}))})})})}})})},jt={display:"inline-block",whiteSpace:"pre"},ne=e=>{const{animationStyles:n,cascade:i=!1,damping:A=.5,delay:p=0,duration:E=1e3,fraction:B=0,triggerOnce:v=!1,className:z,style:q,children:et,onVisibilityChange:ft}=e,{ref:H,inView:ct}=te({triggerOnce:v,threshold:B,onChange:ft});return f(()=>tt("div",{ref:H,className:z,style:Object.assign({},q,jt),children:et.split("").map((it,T)=>tt("span",{css:C(()=>n)(ct),style:{animationDelay:p+T*E*A+"ms"},children:it},T))}),()=>tt(zt,Tt(rt({},e),{children:et})))(i)},zt=e=>{const{animationStyles:n,fraction:i=0,triggerOnce:A=!1,className:p,style:E,children:B,onVisibilityChange:v}=e,{ref:z,inView:q}=te({triggerOnce:A,threshold:i,onChange:v});return tt("div",{ref:z,className:p,css:C(()=>n)(q),style:Object.assign({},E,G(!q)),children:B})};function qe(e){switch(e){case"bounce":return[ke,{transformOrigin:"center bottom"}];case"flash":return[pe];case"headShake":return[Qt,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[me,{animationTimingFunction:"ease-in-out"}];case"jello":return[Pt,{transformOrigin:"center"}];case"pulse":return[Yt,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[Ce];case"shake":return[Xe];case"shakeX":return[Ye];case"shakeY":return[We];case"swing":return[ze,{transformOrigin:"top center"}];case"tada":return[He];case"wobble":return[Ee]}}const Ie=e=>{const B=e,{effect:n="bounce",style:i}=B,A=Bt(B,["effect","style"]),[p,E]=useMemo(()=>qe(n),[n]);return jsx(F,rt({keyframes:p,style:Object.assign({},i,E)},A))},_e=(0,o.F4)`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`,$e=(0,o.F4)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,tn=(0,o.F4)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Se=(0,o.F4)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ht=(0,o.F4)`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,en=(0,o.F4)`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`,nn=(0,o.F4)`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`,rn=(0,o.F4)`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`,sn=(0,o.F4)`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`,It=(0,o.F4)`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;function ve(e,n){switch(n){case"down":return e?nn:$e;case"left":return e?rn:tn;case"right":return e?sn:Se;case"up":return e?It:Ht;default:return e?en:_e}}const on=e=>{const E=e,{direction:n,reverse:i=!1}=E,A=Bt(E,["direction","reverse"]),p=useMemo(()=>ve(i,n),[n,i]);return jsx(F,rt({keyframes:p},A))},an=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,cn=(0,o.F4)`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,An=(0,o.F4)`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Gt=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,ln=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,a=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,m=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,w=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,R=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Z=(0,o.F4)`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,gt=(0,o.F4)`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,St=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,Vt=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function lt(e,n,i){switch(i){case"bottom-left":return n?cn:Ve;case"bottom-right":return n?An:Je;case"down":return e?n?ln:be:n?Gt:ee;case"left":return e?n?m:Ze:n?a:Wt;case"right":return e?n?R:Mt:n?w:Be;case"top-left":return n?Z:t;case"top-right":return n?gt:r;case"up":return e?n?Vt:b:n?St:c;default:return n?an:Ge}}const Et=e=>{const B=e,{big:n=!1,direction:i,reverse:A=!1}=B,p=Bt(B,["big","direction","reverse"]),E=useMemo(()=>lt(n,A,i),[n,i,A]);return jsx(F,rt({keyframes:E},p))},ye=(0,o.F4)`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`,xe=(0,o.F4)`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,we=(0,o.F4)`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`,fn=(0,o.F4)`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`,un=(0,o.F4)`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;function gn(e,n){switch(n){case"horizontal":return e?fn:xe;case"vertical":return e?un:we;default:return ye}}const dn={backfaceVisibility:"visible"},re=e=>{const B=e,{direction:n,reverse:i=!1,style:A}=B,p=Bt(B,["direction","reverse","style"]),E=useMemo(()=>gn(i,n),[n,i]);return jsx(F,rt({keyframes:E,style:Object.assign({},A,dn)},p))},Qe=(0,o.F4)`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`,pt=(0,o.F4)`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`,hn=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,se=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`,I={transformOrigin:"top left"},pn=e=>{const A=e,{style:n}=A,i=Bt(A,["style"]);return jsx(F,rt({keyframes:Qe,style:Object.assign({},n,I)},i))},st=e=>jsx(F,rt({keyframes:pt},e));function j(e){return e?se:hn}const oe=e=>{const p=e,{reverse:n=!1}=p,i=Bt(p,["reverse"]),A=useMemo(()=>j(n),[n]);return jsx(F,rt({keyframes:A},i))},Ft=(0,o.F4)`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,ae=(0,o.F4)`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,ie=(0,o.F4)`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,l=(0,o.F4)`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,h=(0,o.F4)`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,S=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`,O=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`,ot=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,bt=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,mn=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;function Cn(e,n){switch(n){case"bottom-left":return e?[O,{transformOrigin:"left bottom"}]:[ae,{transformOrigin:"left bottom"}];case"bottom-right":return e?[ot,{transformOrigin:"right bottom"}]:[ie,{transformOrigin:"right bottom"}];case"top-left":return e?[bt,{transformOrigin:"left bottom"}]:[l,{transformOrigin:"left bottom"}];case"top-right":return e?[mn,{transformOrigin:"right bottom"}]:[h,{transformOrigin:"right bottom"}];default:return e?[S,{transformOrigin:"center"}]:[Ft,{transformOrigin:"center"}]}}const gr=e=>{const v=e,{direction:n,reverse:i=!1,style:A}=v,p=Bt(v,["direction","reverse","style"]),[E,B]=useMemo(()=>Cn(i,n),[n,i]);return jsx(F,rt({keyframes:E,style:Object.assign({},A,B)},p))},On=(0,o.F4)`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Kn=(0,o.F4)`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Pn=(0,o.F4)`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Mn=(0,o.F4)`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Tn=(0,o.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Rn=(0,o.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Dn=(0,o.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,jn=(0,o.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function Ln(e,n){switch(n){case"down":return e?Tn:On;case"right":return e?Dn:Pn;case"up":return e?jn:Mn;case"left":default:return e?Rn:Kn}}const dr=e=>{const E=e,{direction:n,reverse:i=!1}=E,A=Bt(E,["direction","reverse"]),p=useMemo(()=>Ln(i,n),[n,i]);return jsx(F,rt({keyframes:p},A))},Nn=(0,o.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,kn=(0,o.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Xn=(0,o.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Yn=(0,o.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Wn=(0,o.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,zn=(0,o.F4)`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`,Hn=(0,o.F4)`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`,Gn=(0,o.F4)`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Vn=(0,o.F4)`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Jn=(0,o.F4)`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;function Zn(e,n){switch(n){case"down":return e?Hn:kn;case"left":return e?Gn:Xn;case"right":return e?Vn:Yn;case"up":return e?Jn:Wn;default:return e?zn:Nn}}const qn=e=>{const E=e,{direction:n,reverse:i=!1}=E,A=Bt(E,["direction","reverse"]),p=(0,P.useMemo)(()=>Zn(i,n),[n,i]);return tt(F,rt({keyframes:p},A))};var _n=["children"],Fe=function(n){var i=n.children,A=$()(n,_n);return(0,u.jsx)(qn,x()(x()({triggerOnce:!0},A),{},{children:i}))},hr=null,Ue=function(n){var i=n.style,A=n.title,p=n.content;return(0,u.jsx)(Fe,{children:(0,u.jsxs)("div",{style:x()({marginBottom:"120px",textAlign:"center",width:"50%",marginLeft:"auto",marginRight:"auto"},i),children:[(0,u.jsx)("div",{style:{fontSize:"45px",fontWeight:"bold"},children:A}),(0,u.jsx)("div",{style:{marginTop:"50px",fontSize:"20px",lineHeight:"2"},children:p})]})})},pr=null,$n="data:image/png;base64,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";function tr(){var e=(0,L.t)(),n=e.format,i=e.isDefaultLocal,A=(0,K.bU)(),p=A.base,E=i()?"":p;return(0,u.jsxs)("div",{children:[(0,u.jsxs)("div",{style:{display:"flex",marginTop:"60px",position:"relative"},children:[(0,u.jsxs)("div",{style:{flex:1},children:[(0,u.jsx)(Fe,{children:(0,u.jsx)(_t,{})}),(0,u.jsx)(Fe,{children:(0,u.jsxs)("div",{style:{marginTop:"50px"},children:[(0,u.jsx)(N,{}),(0,u.jsx)(k,{})]})})]}),(0,u.jsx)("div",{children:(0,u.jsx)(qt,{})})]}),(0,u.jsx)(Fe,{children:(0,u.jsxs)("div",{style:{marginTop:"80px"},children:[(0,u.jsx)(kt,{}),(0,u.jsx)("div",{style:{marginTop:"180px"}})]})}),(0,u.jsx)(Ue,{style:{width:"100%"},title:n({id:"hero.text.modelUI.desc"}),content:(0,u.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,u.jsx)("span",{style:{flex:1},children:n({id:"hero.text.modelUI.content"})}),(0,u.jsx)("span",{style:{flex:1,marginLeft:"10px"},children:(0,u.jsx)("img",{src:$n,alt:"",style:{width:"100%"}})})]})}),(0,u.jsx)(Ue,{style:{width:"50%"},title:n({id:"hero.text.watch.title.desc"}),content:n({id:"hero.text.watch.content.desc"})}),(0,u.jsx)(Ue,{style:{width:"80%"},title:n({id:"hero.text.watch.area.title.desc"}),content:n({id:"hero.text.watch.area.content.desc"})}),(0,u.jsx)(Ue,{title:n({id:"hero.text.try.desc"}),style:{width:"100%",marginTop:"180px"},content:(0,u.jsxs)("div",{children:[(0,u.jsx)(D,{plain:!0,style:{padding:"12px 60px",fontSize:"20px"},onClick:function(){K.m8.push("".concat(E,"/intro/start"))},children:n({id:"hero.action.button.start"})}),(0,u.jsx)(D,{plain:!0,style:{padding:"12px 60px",fontSize:"20px",margin:"0 15px"},onClick:function(){K.m8.push("".concat(E,"/api/use-form-start"))},children:"API"}),(0,u.jsx)(D,{plain:!0,style:{letterSpacing:0,padding:"12px 60px",fontSize:"20px"},onClick:function(){K.m8.push("".concat(E,"/types/use-form-return"))},children:"TS"})]})})]})}},76658:function(U,y,s){"use strict";s.d(y,{t:function(){return P}});var Q=s(97857),x=s.n(Q),_=s(66881),$=s(67294);function P(){var at=(0,_.YB)(),D=(0,_.bU)(),K=(0,_.WF)(),L=K.locales,N=(0,$.useRef)({format:function(M){var V=M.id,J=at.formatMessage({id:V});return J==null,J},isLocalZH_CN:function(){return D.id==="zh-CN"},isDefaultLocal:function(){var M;return D.id===((M=L[0])===null||M===void 0?void 0:M.id)}}).current;return x()({},N)}var u=null},63682:function(U,y,s){"use strict";s.d(y,{S:function(){return x}});var Q=s(67294);function x(_){var $=(0,Q.useRef)(_);return $.current}y.Z=x},84415:function(U,y){"use strict";var s;var Q=Symbol.for("react.element"),x=Symbol.for("react.portal"),_=Symbol.for("react.fragment"),$=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),at=Symbol.for("react.context"),D=Symbol.for("react.server_context"),K=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),N=Symbol.for("react.suspense_list"),k=Symbol.for("react.memo"),M=Symbol.for("react.lazy"),V=Symbol.for("react.offscreen"),J;J=Symbol.for("react.module.reference");function X(g){if(typeof g=="object"&&g!==null){var ut=g.$$typeof;switch(ut){case Q:switch(g=g.type,g){case _:case P:case $:case L:case N:return g;default:switch(g=g&&g.$$typeof,g){case D:case at:case K:case M:case k:case u:return g;default:return ut}}case x:return ut}}}s=at,s=u,s=Q,s=K,s=_,s=M,s=k,s=x,s=P,s=$,s=L,s=N,s=function(){return!1},s=function(){return!1},s=function(g){return X(g)===at},s=function(g){return X(g)===u},s=function(g){return typeof g=="object"&&g!==null&&g.$$typeof===Q},s=function(g){return X(g)===K},y.isFragment=function(g){return X(g)===_},s=function(g){return X(g)===M},s=function(g){return X(g)===k},s=function(g){return X(g)===x},s=function(g){return X(g)===P},s=function(g){return X(g)===$},s=function(g){return X(g)===L},s=function(g){return X(g)===N},s=function(g){return typeof g=="string"||typeof g=="function"||g===_||g===P||g===$||g===L||g===N||g===V||typeof g=="object"&&g!==null&&(g.$$typeof===M||g.$$typeof===k||g.$$typeof===u||g.$$typeof===at||g.$$typeof===K||g.$$typeof===J||g.getModuleId!==void 0)},s=X},14954:function(U,y,s){"use strict";U.exports=s(84415)},33390:function(U){function y(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(r=>{const c=t[r],b=typeof c;(b==="object"||b==="function")&&!Object.isFrozen(c)&&y(c)}),t}class s{constructor(r){r.data===void 0&&(r.data={}),this.data=r.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Q(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function x(t,...r){const c=Object.create(null);for(const b in t)c[b]=t[b];return r.forEach(function(b){for(const Y in b)c[Y]=b[Y]}),c}const _="</span>",$=t=>!!t.scope,P=(t,{prefix:r})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){const c=t.split(".");return[`${r}${c.shift()}`,...c.map((b,Y)=>`${b}${"_".repeat(Y+1)}`)].join(" ")}return`${r}${t}`};class u{constructor(r,c){this.buffer="",this.classPrefix=c.classPrefix,r.walk(this)}addText(r){this.buffer+=Q(r)}openNode(r){if(!$(r))return;const c=P(r.scope,{prefix:this.classPrefix});this.span(c)}closeNode(r){$(r)&&(this.buffer+=_)}value(){return this.buffer}span(r){this.buffer+=`<span class="${r}">`}}const at=(t={})=>{const r={children:[]};return Object.assign(r,t),r};class D{constructor(){this.rootNode=at(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(r){this.top.children.push(r)}openNode(r){const c=at({scope:r});this.add(c),this.stack.push(c)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(r){return this.constructor._walk(r,this.rootNode)}static _walk(r,c){return typeof c=="string"?r.addText(c):c.children&&(r.openNode(c),c.children.forEach(b=>this._walk(r,b)),r.closeNode(c)),r}static _collapse(r){typeof r!="string"&&r.children&&(r.children.every(c=>typeof c=="string")?r.children=[r.children.join("")]:r.children.forEach(c=>{D._collapse(c)}))}}class K extends D{constructor(r){super(),this.options=r}addText(r){r!==""&&this.add(r)}startScope(r){this.openNode(r)}endScope(){this.closeNode()}__addSublanguage(r,c){const b=r.root;c&&(b.scope=`language:${c}`),this.add(b)}toHTML(){return new u(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function L(t){return t?typeof t=="string"?t:t.source:null}function N(t){return V("(?=",t,")")}function k(t){return V("(?:",t,")*")}function M(t){return V("(?:",t,")?")}function V(...t){return t.map(c=>L(c)).join("")}function J(t){const r=t[t.length-1];return typeof r=="object"&&r.constructor===Object?(t.splice(t.length-1,1),r):{}}function X(...t){return"("+(J(t).capture?"":"?:")+t.map(b=>L(b)).join("|")+")"}function g(t){return new RegExp(t.toString()+"|").exec("").length-1}function ut(t,r){const c=t&&t.exec(r);return c&&c.index===0}const Ot=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function mt(t,{joinWith:r}){let c=0;return t.map(b=>{c+=1;const Y=c;let W=L(b),d="";for(;W.length>0;){const f=Ot.exec(W);if(!f){d+=W;break}d+=W.substring(0,f.index),W=W.substring(f.index+f[0].length),f[0][0]==="\\"&&f[1]?d+="\\"+String(Number(f[1])+Y):(d+=f[0],f[0]==="("&&c++)}return d}).map(b=>`(${b})`).join(r)}const ht=/\b\B/,At="[a-zA-Z]\\w*",Kt="[a-zA-Z_]\\w*",Nt="\\b\\d+(\\.\\d+)?",qt="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",xt="\\b(0b[01]+)",_t="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",$t=(t={})=>{const r=/^#![ ]*\//;return t.binary&&(t.begin=V(r,/.*\b/,t.binary,/\b.*/)),x({scope:"meta",begin:r,end:/$/,relevance:0,"on:begin":(c,b)=>{c.index!==0&&b.ignoreMatch()}},t)},Ct={begin:"\\\\[\\s\\S]",relevance:0},kt={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[Ct]},le={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[Ct]},Rt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Dt=function(t,r,c={}){const b=x({scope:"comment",begin:t,end:r,contains:[]},c);b.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const Y=X("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return b.contains.push({begin:V(/[ ]+/,"(",Y,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),b},bn=Dt("//","$"),Bn=Dt("/\\*","\\*/"),In=Dt("#","$"),Pe={scope:"number",begin:Nt,relevance:0},tt={scope:"number",begin:qt,relevance:0},Sn={scope:"number",begin:xt,relevance:0},o={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[Ct,{begin:/\[/,end:/\]/,relevance:0,contains:[Ct]}]},Me={scope:"title",begin:At,relevance:0},Te={scope:"title",begin:Kt,relevance:0},Xt={begin:"\\.\\s*"+Kt,relevance:0};var wt=Object.freeze({__proto__:null,APOS_STRING_MODE:kt,BACKSLASH_ESCAPE:Ct,BINARY_NUMBER_MODE:Sn,BINARY_NUMBER_RE:xt,COMMENT:Dt,C_BLOCK_COMMENT_MODE:Bn,C_LINE_COMMENT_MODE:bn,C_NUMBER_MODE:tt,C_NUMBER_RE:qt,END_SAME_AS_BEGIN:function(t){return Object.assign(t,{"on:begin":(r,c)=>{c.data._beginMatch=r[1]},"on:end":(r,c)=>{c.data._beginMatch!==r[1]&&c.ignoreMatch()}})},HASH_COMMENT_MODE:In,IDENT_RE:At,MATCH_NOTHING_RE:ht,METHOD_GUARD:Xt,NUMBER_MODE:Pe,NUMBER_RE:Nt,PHRASAL_WORDS_MODE:Rt,QUOTE_STRING_MODE:le,REGEXP_MODE:o,RE_STARTERS_RE:_t,SHEBANG:$t,TITLE_MODE:Me,UNDERSCORE_IDENT_RE:Kt,UNDERSCORE_TITLE_MODE:Te});function ue(t,r){t.input[t.index-1]==="."&&r.ignoreMatch()}function ge(t,r){t.className!==void 0&&(t.scope=t.className,delete t.className)}function vn(t,r){r&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=ue,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function Re(t,r){Array.isArray(t.illegal)&&(t.illegal=X(...t.illegal))}function De(t,r){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function je(t,r){t.relevance===void 0&&(t.relevance=1)}const de=(t,r)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const c=Object.assign({},t);Object.keys(t).forEach(b=>{delete t[b]}),t.keywords=c.keywords,t.begin=V(c.beforeMatch,N(c.begin)),t.starts={relevance:0,contains:[Object.assign(c,{endsParent:!0})]},t.relevance=0,delete c.beforeMatch},Le=["of","and","for","in","not","or","if","then","parent","list","value"],he="keyword";function te(t,r,c=he){const b=Object.create(null);return typeof t=="string"?Y(c,t.split(" ")):Array.isArray(t)?Y(c,t):Object.keys(t).forEach(function(W){Object.assign(b,te(t[W],r,W))}),b;function Y(W,d){r&&(d=d.map(f=>f.toLowerCase())),d.forEach(function(f){const C=f.split("|");b[C[0]]=[W,Ne(C[0],C[1])]})}}function Ne(t,r){return r?Number(r):ke(t)?0:1}function ke(t){return Le.includes(t.toLowerCase())}const pe={},Qt=t=>{console.error(t)},me=(t,...r)=>{console.log(`WARN: ${t}`,...r)},Pt=(t,r)=>{pe[`${t}/${r}`]||(console.log(`Deprecated as of ${t}. ${r}`),pe[`${t}/${r}`]=!0)},Yt=new Error;function Ce(t,r,{key:c}){let b=0;const Y=t[c],W={},d={};for(let f=1;f<=r.length;f++)d[f+b]=Y[f],W[f+b]=!0,b+=g(r[f-1]);t[c]=d,t[c]._emit=W,t[c]._multi=!0}function Xe(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw Qt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Yt;if(typeof t.beginScope!="object"||t.beginScope===null)throw Qt("beginScope must be object"),Yt;Ce(t,t.begin,{key:"beginScope"}),t.begin=mt(t.begin,{joinWith:""})}}function Ye(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw Qt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Yt;if(typeof t.endScope!="object"||t.endScope===null)throw Qt("endScope must be object"),Yt;Ce(t,t.end,{key:"endScope"}),t.end=mt(t.end,{joinWith:""})}}function We(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function ze(t){We(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),Xe(t),Ye(t)}function He(t){function r(d,f){return new RegExp(L(d),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(f?"g":""))}class c{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(f,C){C.position=this.position++,this.matchIndexes[this.matchAt]=C,this.regexes.push([C,f]),this.matchAt+=g(f)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const f=this.regexes.map(C=>C[1]);this.matcherRe=r(mt(f,{joinWith:"|"}),!0),this.lastIndex=0}exec(f){this.matcherRe.lastIndex=this.lastIndex;const C=this.matcherRe.exec(f);if(!C)return null;const G=C.findIndex((jt,ne)=>ne>0&&jt!==void 0),F=this.matchIndexes[G];return C.splice(0,G),Object.assign(C,F)}}class b{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(f){if(this.multiRegexes[f])return this.multiRegexes[f];const C=new c;return this.rules.slice(f).forEach(([G,F])=>C.addRule(G,F)),C.compile(),this.multiRegexes[f]=C,C}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(f,C){this.rules.push([f,C]),C.type==="begin"&&this.count++}exec(f){const C=this.getMatcher(this.regexIndex);C.lastIndex=this.lastIndex;let G=C.exec(f);if(this.resumingScanAtSamePosition()&&!(G&&G.index===this.lastIndex)){const F=this.getMatcher(0);F.lastIndex=this.lastIndex+1,G=F.exec(f)}return G&&(this.regexIndex+=G.position+1,this.regexIndex===this.count&&this.considerAll()),G}}function Y(d){const f=new b;return d.contains.forEach(C=>f.addRule(C.begin,{rule:C,type:"begin"})),d.terminatorEnd&&f.addRule(d.terminatorEnd,{type:"end"}),d.illegal&&f.addRule(d.illegal,{type:"illegal"}),f}function W(d,f){const C=d;if(d.isCompiled)return C;[ge,De,ze,de].forEach(F=>F(d,f)),t.compilerExtensions.forEach(F=>F(d,f)),d.__beforeBegin=null,[vn,Re,je].forEach(F=>F(d,f)),d.isCompiled=!0;let G=null;return typeof d.keywords=="object"&&d.keywords.$pattern&&(d.keywords=Object.assign({},d.keywords),G=d.keywords.$pattern,delete d.keywords.$pattern),G=G||/\w+/,d.keywords&&(d.keywords=te(d.keywords,t.case_insensitive)),C.keywordPatternRe=r(G,!0),f&&(d.begin||(d.begin=/\B|\b/),C.beginRe=r(C.begin),!d.end&&!d.endsWithParent&&(d.end=/\B|\b/),d.end&&(C.endRe=r(C.end)),C.terminatorEnd=L(C.end)||"",d.endsWithParent&&f.terminatorEnd&&(C.terminatorEnd+=(d.end?"|":"")+f.terminatorEnd)),d.illegal&&(C.illegalRe=r(d.illegal)),d.contains||(d.contains=[]),d.contains=[].concat(...d.contains.map(function(F){return Ge(F==="self"?d:F)})),d.contains.forEach(function(F){W(F,C)}),d.starts&&W(d.starts,f),C.matcher=Y(C),C}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=x(t.classNameAliases||{}),W(t)}function Ee(t){return t?t.endsWithParent||Ee(t.starts):!1}function Ge(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(r){return x(t,{variants:null},r)})),t.cachedVariants?t.cachedVariants:Ee(t)?x(t,{starts:t.starts?x(t.starts):null}):Object.isFrozen(t)?x(t):t}var Ve="11.9.0";class Je extends Error{constructor(r,c){super(r),this.name="HTMLInjectionError",this.html=c}}const ee=Q,be=x,Wt=Symbol("nomatch"),Ze=7,Be=function(t){const r=Object.create(null),c=Object.create(null),b=[];let Y=!0;const W="Could not find the language '{}', did you forget to load/include a language module?",d={disableAutodetect:!0,name:"Plain text",contains:[]};let f={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:K};function C(a){return f.noHighlightRe.test(a)}function G(a){let m=a.className+" ";m+=a.parentNode?a.parentNode.className:"";const w=f.languageDetectRe.exec(m);if(w){const R=It(w[1]);return R||(me(W.replace("{}",w[1])),me("Falling back to no-highlight mode for this block.",a)),R?w[1]:"no-highlight"}return m.split(/\s+/).find(R=>C(R)||It(R))}function F(a,m,w){let R="",Z="";typeof m=="object"?(R=a,w=m.ignoreIllegals,Z=m.language):(Pt("10.7.0","highlight(lang, code, ...args) has been deprecated."),Pt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),Z=a,R=m),w===void 0&&(w=!0);const gt={code:R,language:Z};Gt("before:highlight",gt);const St=gt.result?gt.result:jt(gt.language,gt.code,w);return St.code=gt.code,Gt("after:highlight",St),St}function jt(a,m,w,R){const Z=Object.create(null);function gt(l,h){return l.keywords[h]}function St(){if(!I.keywords){st.addText(j);return}let l=0;I.keywordPatternRe.lastIndex=0;let h=I.keywordPatternRe.exec(j),S="";for(;h;){S+=j.substring(l,h.index);const O=pt.case_insensitive?h[0].toLowerCase():h[0],ot=gt(I,O);if(ot){const[bt,mn]=ot;if(st.addText(S),S="",Z[O]=(Z[O]||0)+1,Z[O]<=Ze&&(oe+=mn),bt.startsWith("_"))S+=h[0];else{const Cn=pt.classNameAliases[bt]||bt;Et(h[0],Cn)}}else S+=h[0];l=I.keywordPatternRe.lastIndex,h=I.keywordPatternRe.exec(j)}S+=j.substring(l),st.addText(S)}function Vt(){if(j==="")return;let l=null;if(typeof I.subLanguage=="string"){if(!r[I.subLanguage]){st.addText(j);return}l=jt(I.subLanguage,j,!0,pn[I.subLanguage]),pn[I.subLanguage]=l._top}else l=zt(j,I.subLanguage.length?I.subLanguage:null);I.relevance>0&&(oe+=l.relevance),st.__addSublanguage(l._emitter,l.language)}function lt(){I.subLanguage!=null?Vt():St(),j=""}function Et(l,h){l!==""&&(st.startScope(h),st.addText(l),st.endScope())}function ye(l,h){let S=1;const O=h.length-1;for(;S<=O;){if(!l._emit[S]){S++;continue}const ot=pt.classNameAliases[l[S]]||l[S],bt=h[S];ot?Et(bt,ot):(j=bt,St(),j=""),S++}}function xe(l,h){return l.scope&&typeof l.scope=="string"&&st.openNode(pt.classNameAliases[l.scope]||l.scope),l.beginScope&&(l.beginScope._wrap?(Et(j,pt.classNameAliases[l.beginScope._wrap]||l.beginScope._wrap),j=""):l.beginScope._multi&&(ye(l.beginScope,h),j="")),I=Object.create(l,{parent:{value:I}}),I}function we(l,h,S){let O=ut(l.endRe,S);if(O){if(l["on:end"]){const ot=new s(l);l["on:end"](h,ot),ot.isMatchIgnored&&(O=!1)}if(O){for(;l.endsParent&&l.parent;)l=l.parent;return l}}if(l.endsWithParent)return we(l.parent,h,S)}function fn(l){return I.matcher.regexIndex===0?(j+=l[0],1):(ie=!0,0)}function un(l){const h=l[0],S=l.rule,O=new s(S),ot=[S.__beforeBegin,S["on:begin"]];for(const bt of ot)if(bt&&(bt(l,O),O.isMatchIgnored))return fn(h);return S.skip?j+=h:(S.excludeBegin&&(j+=h),lt(),!S.returnBegin&&!S.excludeBegin&&(j=h)),xe(S,l),S.returnBegin?0:h.length}function gn(l){const h=l[0],S=m.substring(l.index),O=we(I,l,S);if(!O)return Wt;const ot=I;I.endScope&&I.endScope._wrap?(lt(),Et(h,I.endScope._wrap)):I.endScope&&I.endScope._multi?(lt(),ye(I.endScope,l)):ot.skip?j+=h:(ot.returnEnd||ot.excludeEnd||(j+=h),lt(),ot.excludeEnd&&(j=h));do I.scope&&st.closeNode(),!I.skip&&!I.subLanguage&&(oe+=I.relevance),I=I.parent;while(I!==O.parent);return O.starts&&xe(O.starts,l),ot.returnEnd?0:h.length}function dn(){const l=[];for(let h=I;h!==pt;h=h.parent)h.scope&&l.unshift(h.scope);l.forEach(h=>st.openNode(h))}let re={};function Qe(l,h){const S=h&&h[0];if(j+=l,S==null)return lt(),0;if(re.type==="begin"&&h.type==="end"&&re.index===h.index&&S===""){if(j+=m.slice(h.index,h.index+1),!Y){const O=new Error(`0 width match regex (${a})`);throw O.languageName=a,O.badRule=re.rule,O}return 1}if(re=h,h.type==="begin")return un(h);if(h.type==="illegal"&&!w){const O=new Error('Illegal lexeme "'+S+'" for mode "'+(I.scope||"<unnamed>")+'"');throw O.mode=I,O}else if(h.type==="end"){const O=gn(h);if(O!==Wt)return O}if(h.type==="illegal"&&S==="")return 1;if(ae>1e5&&ae>h.index*3)throw new Error("potential infinite loop, way more iterations than matches");return j+=S,S.length}const pt=It(a);if(!pt)throw Qt(W.replace("{}",a)),new Error('Unknown language: "'+a+'"');const hn=He(pt);let se="",I=R||hn;const pn={},st=new f.__emitter(f);dn();let j="",oe=0,Ft=0,ae=0,ie=!1;try{if(pt.__emitTokens)pt.__emitTokens(m,st);else{for(I.matcher.considerAll();;){ae++,ie?ie=!1:I.matcher.considerAll(),I.matcher.lastIndex=Ft;const l=I.matcher.exec(m);if(!l)break;const h=m.substring(Ft,l.index),S=Qe(h,l);Ft=l.index+S}Qe(m.substring(Ft))}return st.finalize(),se=st.toHTML(),{language:a,value:se,relevance:oe,illegal:!1,_emitter:st,_top:I}}catch(l){if(l.message&&l.message.includes("Illegal"))return{language:a,value:ee(m),illegal:!0,relevance:0,_illegalBy:{message:l.message,index:Ft,context:m.slice(Ft-100,Ft+100),mode:l.mode,resultSoFar:se},_emitter:st};if(Y)return{language:a,value:ee(m),illegal:!1,relevance:0,errorRaised:l,_emitter:st,_top:I};throw l}}function ne(a){const m={value:ee(a),illegal:!1,relevance:0,_top:d,_emitter:new f.__emitter(f)};return m._emitter.addText(a),m}function zt(a,m){m=m||f.languages||Object.keys(r);const w=ne(a),R=m.filter(It).filter(on).map(lt=>jt(lt,a,!1));R.unshift(w);const Z=R.sort((lt,Et)=>{if(lt.relevance!==Et.relevance)return Et.relevance-lt.relevance;if(lt.language&&Et.language){if(It(lt.language).supersetOf===Et.language)return 1;if(It(Et.language).supersetOf===lt.language)return-1}return 0}),[gt,St]=Z,Vt=gt;return Vt.secondBest=St,Vt}function qe(a,m,w){const R=m&&c[m]||w;a.classList.add("hljs"),a.classList.add(`language-${R}`)}function Ie(a){let m=null;const w=G(a);if(C(w))return;if(Gt("before:highlightElement",{el:a,language:w}),a.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",a);return}if(a.children.length>0&&(f.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(a)),f.throwUnescapedHTML))throw new Je("One of your code blocks includes unescaped HTML.",a.innerHTML);m=a;const R=m.textContent,Z=w?F(R,{language:w,ignoreIllegals:!0}):zt(R);a.innerHTML=Z.value,a.dataset.highlighted="yes",qe(a,w,Z.language),a.result={language:Z.language,re:Z.relevance,relevance:Z.relevance},Z.secondBest&&(a.secondBest={language:Z.secondBest.language,relevance:Z.secondBest.relevance}),Gt("after:highlightElement",{el:a,result:Z,text:R})}function _e(a){f=be(f,a)}const $e=()=>{Ht(),Pt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function tn(){Ht(),Pt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Se=!1;function Ht(){if(document.readyState==="loading"){Se=!0;return}document.querySelectorAll(f.cssSelector).forEach(Ie)}function en(){Se&&Ht()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",en,!1);function nn(a,m){let w=null;try{w=m(t)}catch(R){if(Qt("Language definition for '{}' could not be registered.".replace("{}",a)),Y)Qt(R);else throw R;w=d}w.name||(w.name=a),r[a]=w,w.rawDefinition=m.bind(null,t),w.aliases&&ve(w.aliases,{languageName:a})}function rn(a){delete r[a];for(const m of Object.keys(c))c[m]===a&&delete c[m]}function sn(){return Object.keys(r)}function It(a){return a=(a||"").toLowerCase(),r[a]||r[c[a]]}function ve(a,{languageName:m}){typeof a=="string"&&(a=[a]),a.forEach(w=>{c[w.toLowerCase()]=m})}function on(a){const m=It(a);return m&&!m.disableAutodetect}function an(a){a["before:highlightBlock"]&&!a["before:highlightElement"]&&(a["before:highlightElement"]=m=>{a["before:highlightBlock"](Object.assign({block:m.el},m))}),a["after:highlightBlock"]&&!a["after:highlightElement"]&&(a["after:highlightElement"]=m=>{a["after:highlightBlock"](Object.assign({block:m.el},m))})}function cn(a){an(a),b.push(a)}function An(a){const m=b.indexOf(a);m!==-1&&b.splice(m,1)}function Gt(a,m){const w=a;b.forEach(function(R){R[w]&&R[w](m)})}function ln(a){return Pt("10.7.0","highlightBlock will be removed entirely in v12.0"),Pt("10.7.0","Please use highlightElement now."),Ie(a)}Object.assign(t,{highlight:F,highlightAuto:zt,highlightAll:Ht,highlightElement:Ie,highlightBlock:ln,configure:_e,initHighlighting:$e,initHighlightingOnLoad:tn,registerLanguage:nn,unregisterLanguage:rn,listLanguages:sn,getLanguage:It,registerAliases:ve,autoDetection:on,inherit:be,addPlugin:cn,removePlugin:An}),t.debugMode=function(){Y=!1},t.safeMode=function(){Y=!0},t.versionString=Ve,t.regex={concat:V,lookahead:N,either:X,optional:M,anyNumberOfTimes:k};for(const a in wt)typeof wt[a]=="object"&&y(wt[a]);return Object.assign(t,wt),t},Mt=Be({});Mt.newInstance=()=>Be({}),U.exports=Mt,Mt.HighlightJS=Mt,Mt.default=Mt},39017:function(U){"use strict";U.exports=JSON.parse(`{"k":"import { useForm } from 'react-form-simple';\\r\\nexport default function App() {\\r\\n  const { render, model } = useForm({ name: '' });\\r\\n  const renderName = render('name')(<input />);\\r\\n  const renderSubmit = (\\r\\n    <button\\r\\n      onClick={() => {\\r\\n        console.log({ model });\\r\\n      }}\\r\\n    >\\r\\n      submit\\r\\n    </button>\\r\\n  );\\r\\n  return (\\r\\n    <>\\r\\n      {renderName}\\r\\n      {renderSubmit}\\r\\n    </>\\r\\n  );\\r\\n}\\r\\n"}`)}}]);
}());