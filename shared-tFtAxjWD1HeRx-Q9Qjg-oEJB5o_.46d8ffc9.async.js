!(function(){var fr=Object.defineProperty,ur=Object.defineProperties;var dr=Object.getOwnPropertyDescriptors;var Ce=Object.getOwnPropertySymbols;var An=Object.prototype.hasOwnProperty,In=Object.prototype.propertyIsEnumerable;var wn=(I,R,s)=>R in I?fr(I,R,{enumerable:!0,configurable:!0,writable:!0,value:s}):I[R]=s,rt=(I,R)=>{for(var s in R||(R={}))An.call(R,s)&&wn(I,s,R[s]);if(Ce)for(var s of Ce(R))In.call(R,s)&&wn(I,s,R[s]);return I},Ft=(I,R)=>ur(I,dr(R));var Et=(I,R)=>{var s={};for(var w in I)An.call(I,w)&&R.indexOf(w)<0&&(s[w]=I[w]);if(I!=null&&Ce)for(var w of Ce(I))R.indexOf(w)<0&&In.call(I,w)&&(s[w]=I[w]);return s};(self.webpackChunkreact_form_simple=self.webpackChunkreact_form_simple||[]).push([[2816],{87357:function(I,R,s){"use strict";s.d(R,{Z:function(){return dt}});var w=s(87462),N=s(63366),Q=s(67294),q=s(90512),L=s(49731),d=s(86523),at=s(39707),B=s(96682),C=s(85893);const P=["className","component"];function U(Tt={}){const{themeId:bt,defaultTheme:gt,defaultClassName:lt="MuiBox-root",generateClassName:Ct}=Tt,Ut=(0,L.ZP)("div",{shouldForwardProp:Nt=>Nt!=="theme"&&Nt!=="sx"&&Nt!=="as"})(d.Z);return Q.forwardRef(function(Qt,qt){const yt=(0,B.Z)(gt),$t=(0,at.Z)(Qt),{className:fe,component:jt="div"}=$t,Bt=(0,N.Z)($t,P);return(0,C.jsx)(Ut,(0,w.Z)({as:jt,ref:qt,className:(0,q.Z)(fe,Ct?Ct(lt):lt),theme:bt&&yt[bt]||yt},Bt))})}var $=s(37078),D=s(44562),K=s(10606),G=s(93923);const z=(0,D.Z)();var dt=U({themeId:K.Z,defaultTheme:z,defaultClassName:G.Z.root,generateClassName:$.Z.generate})},93923:function(I,R,s){"use strict";var w=s(1588);const N=(0,w.Z)("MuiBox",["root"]);R.Z=N},39707:function(I,R,s){"use strict";s.d(R,{Z:function(){return at}});var w=s(87462),N=s(63366),Q=s(59766),q=s(44920);const L=["sx"],d=B=>{var C,P;const U={systemProps:{},otherProps:{}},$=(C=B==null||(P=B.theme)==null?void 0:P.unstable_sxConfig)!=null?C:q.Z;return Object.keys(B).forEach(D=>{$[D]?U.systemProps[D]=B[D]:U.otherProps[D]=B[D]}),U};function at(B){const{sx:C}=B,P=(0,N.Z)(B,L),{systemProps:U,otherProps:$}=d(P);let D;return Array.isArray(C)?D=[U,...C]:typeof C=="function"?D=(...K)=>{const G=C(...K);return(0,Q.P)(G)?(0,w.Z)({},U,G):U}:D=(0,w.Z)({},U,C),(0,w.Z)({},$,{sx:D})}},36883:function(I,R,s){"use strict";s.d(R,{B:function(){return P}});var w=s(97857),N=s.n(w),Q=s(13769),q=s.n(Q),L=s(67294),d=s(85893),at=["name","size","color","style"],B="//at.alicdn.com/t/c/font_4298426_gftuoqa6jhe.js",C="react-form-simple-icon-iconfont";function P($){var D=$.name,K=$.size,G=$.color,z=$.style,m=q()($,at);L.useLayoutEffect(function(){var gt=document.getElementById(C);if(!gt||gt.id!==C){var lt=document.createElement("script");lt.src=B,lt.id=C,document.body.appendChild(lt)}},[]);function dt(gt){var lt=parseFloat(gt);return isNaN(lt)?gt:"".concat(lt,"px")}var Tt=N()(N()({fill:G||"currentcolor",width:dt(K)||"1em",height:dt(K)||"1em"},z),{},{overflow:"hidden"}),bt="#icon-".concat(D);return(0,d.jsx)("svg",N()(N()({style:Tt},m),{},{"aria-hidden":"true",children:(0,d.jsx)("use",{xlinkHref:bt})}))}var U=null},37438:function(I,R,s){"use strict";s.r(R),s.d(R,{default:function(){return tr}});var w=s(97857),N=s.n(w),Q=s(13769),q=s.n(Q),L=s(67294),d=s(85893),at=["children","className","plain"];function B(e){var n=e.children,i=e.className,l=e.plain,h=q()(e,at);return(0,d.jsx)("button",N()(N()({},h),{},{className:"button ".concat([i,l?"plain-button":""].filter(Boolean).join(" ")),children:n}))}var C=s(66881),P=s(76658),U=function(){var n=(0,C.bU)(),i=n.base,l=(0,P.t)(),h=l.format,x=l.isDefaultLocal;return(0,d.jsx)(B,{className:"start-button",onClick:function(){var O=x()?"":i;C.m8.push("".concat(O,"/intro/start"))},children:h({id:"hero.action.button.start"})})},$=function(){return(0,d.jsx)(B,{plain:!0,className:"github-button",children:(0,d.jsx)("a",{href:"https://github.com/easy-form/react-form-simple",target:"blank",children:"Github"})})},D=s(33390),K=D;const G="[A-Za-z$_][0-9A-Za-z$_]*",z=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],m=["true","false","null","undefined","NaN","Infinity"],dt=["Object","Function","Boolean","Symbol","Math","Date","Number","BigInt","String","RegExp","Array","Float32Array","Float64Array","Int8Array","Uint8Array","Uint8ClampedArray","Int16Array","Int32Array","Uint16Array","Uint32Array","BigInt64Array","BigUint64Array","Set","Map","WeakSet","WeakMap","ArrayBuffer","SharedArrayBuffer","Atomics","DataView","JSON","Promise","Generator","GeneratorFunction","AsyncFunction","Reflect","Proxy","Intl","WebAssembly"],Tt=["Error","EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],bt=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],gt=["arguments","this","super","console","window","document","localStorage","sessionStorage","module","global"],lt=[].concat(bt,dt,Tt);function Ct(e){const n=e.regex,i=(Rt,{after:Vt})=>{const le="</"+Rt[0].slice(1);return Rt.input.indexOf(le,Vt)!==-1},l=G,h={begin:"<>",end:"</>"},x=/<[A-Za-z0-9\\._:-]+\s*\/>/,E={begin:/<[A-Za-z0-9\\._:-]+/,end:/\/[A-Za-z0-9\\._:-]+>|\/>/,isTrulyOpeningTag:(Rt,Vt)=>{const le=Rt[0].length+Rt.index,Te=Rt.input[le];if(Te==="<"||Te===","){Vt.ignoreMatch();return}Te===">"&&(i(Rt,{after:le})||Vt.ignoreMatch());let xn;const Mn=Rt.input.substring(le);if(xn=Mn.match(/^\s*=/)){Vt.ignoreMatch();return}if((xn=Mn.match(/^\s+extends\s+/))&&xn.index===0){Vt.ignoreMatch();return}}},O={$pattern:G,keyword:z,literal:m,built_in:lt,"variable.language":gt},Z="[0-9](_?[0-9])*",J=`\\.(${Z})`,et="0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*",ut={className:"number",variants:[{begin:`(\\b(${et})((${J})|\\.)?|(${J}))[eE][+-]?(${Z})\\b`},{begin:`\\b(${et})\\b((${J})\\b|\\.)?|(${J})\\b`},{begin:"\\b(0|[1-9](_?[0-9])*)n\\b"},{begin:"\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b"},{begin:"\\b0[bB][0-1](_?[0-1])*n?\\b"},{begin:"\\b0[oO][0-7](_?[0-7])*n?\\b"},{begin:"\\b0[0-7]+n?\\b"}],relevance:0},X={className:"subst",begin:"\\$\\{",end:"\\}",keywords:O,contains:[]},ct={begin:"html`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,X],subLanguage:"xml"}},it={begin:"css`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,X],subLanguage:"css"}},F={begin:"gql`",end:"",starts:{end:"`",returnEnd:!1,contains:[e.BACKSLASH_ESCAPE,X],subLanguage:"graphql"}},Ot={className:"string",begin:"`",end:"`",contains:[e.BACKSLASH_ESCAPE,X]},nt={className:"comment",variants:[e.COMMENT(/\/\*\*(?!\/)/,"\\*/",{relevance:0,contains:[{begin:"(?=@[A-Za-z]+)",relevance:0,contains:[{className:"doctag",begin:"@[A-Za-z]+"},{className:"type",begin:"\\{",end:"\\}",excludeEnd:!0,excludeBegin:!0,relevance:0},{className:"variable",begin:l+"(?=\\s*(-)|$)",endsParent:!0,relevance:0},{begin:/(?=[^\n])\s/,relevance:0}]}]}),e.C_BLOCK_COMMENT_MODE,e.C_LINE_COMMENT_MODE]},pt=[e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,ct,it,F,Ot,{match:/\$\d+/},ut];X.contains=pt.concat({begin:/\{/,end:/\}/,keywords:O,contains:["self"].concat(pt)});const It=[].concat(nt,X.contains),Pt=It.concat([{begin:/\(/,end:/\)/,keywords:O,contains:["self"].concat(It)}]),ce={className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:O,contains:Pt},er={variants:[{match:[/class/,/\s+/,l,/\s+/,/extends/,/\s+/,n.concat(l,"(",n.concat(/\./,l),")*")],scope:{1:"keyword",3:"title.class",5:"keyword",7:"title.class.inherited"}},{match:[/class/,/\s+/,l],scope:{1:"keyword",3:"title.class"}}]},Rn={relevance:0,match:n.either(/\bJSON/,/\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,/\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,/\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/),className:"title.class",keywords:{_:[...dt,...Tt]}},nr={label:"use_strict",className:"meta",relevance:10,begin:/^\s*['"]use (strict|asm)['"]/},rr={variants:[{match:[/function/,/\s+/,l,/(?=\s*\()/]},{match:[/function/,/\s*(?=\()/]}],className:{1:"keyword",3:"title.function"},label:"func.def",contains:[ce],illegal:/%/},sr={relevance:0,match:/\b[A-Z][A-Z_0-9]+\b/,className:"variable.constant"};function or(Rt){return n.concat("(?!",Rt.join("|"),")")}const ar={match:n.concat(/\b/,or([...bt,"super","import"]),l,n.lookahead(/\(/)),className:"title.function",relevance:0},ir={begin:n.concat(/\./,n.lookahead(n.concat(l,/(?![0-9A-Za-z$_(])/))),end:l,excludeBegin:!0,keywords:"prototype",className:"property",relevance:0},cr={match:[/get|set/,/\s+/,l,/(?=\()/],className:{1:"keyword",3:"title.function"},contains:[{begin:/\(\)/},ce]},Nn="(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|"+e.UNDERSCORE_IDENT_RE+")\\s*=>",lr={match:[/const|var|let/,/\s+/,l,/\s*/,/=\s*/,/(async\s*)?/,n.lookahead(Nn)],keywords:"async",className:{1:"keyword",3:"title.function"},contains:[ce]};return{name:"JavaScript",aliases:["js","jsx","mjs","cjs"],keywords:O,exports:{PARAMS_CONTAINS:Pt,CLASS_REFERENCE:Rn},illegal:/#(?![$_A-z])/,contains:[e.SHEBANG({label:"shebang",binary:"node",relevance:5}),nr,e.APOS_STRING_MODE,e.QUOTE_STRING_MODE,ct,it,F,Ot,nt,{match:/\$\d+/},ut,Rn,{className:"attr",begin:l+n.lookahead(":"),relevance:0},lr,{begin:"("+e.RE_STARTERS_RE+"|\\b(case|return|throw)\\b)\\s*",keywords:"return throw case",relevance:0,contains:[nt,e.REGEXP_MODE,{className:"function",begin:Nn,returnBegin:!0,end:"\\s*=>",contains:[{className:"params",variants:[{begin:e.UNDERSCORE_IDENT_RE,relevance:0},{className:null,begin:/\(\s*\)/,skip:!0},{begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:O,contains:Pt}]}]},{begin:/,/,relevance:0},{match:/\s+/,relevance:0},{variants:[{begin:h.begin,end:h.end},{match:x},{begin:E.begin,"on:begin":E.isTrulyOpeningTag,end:E.end}],subLanguage:"xml",contains:[{begin:E.begin,end:E.end,skip:!0,contains:["self"]}]}]},rr,{beginKeywords:"while if switch catch for"},{begin:"\\b(?!function)"+e.UNDERSCORE_IDENT_RE+"\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",returnBegin:!0,label:"func.def",contains:[ce,e.inherit(e.TITLE_MODE,{begin:l,className:"title.function"})]},{match:/\.\.\./,relevance:0},ir,{match:"\\$"+l,relevance:0},{match:[/\bconstructor(?=\s*\()/],className:{1:"title.function"},contains:[ce]},ar,sr,er,cr,{match:/\$[(.]/}]}}function Ut(e){const n=Ct(e),i=G,l=["any","void","number","boolean","string","object","never","symbol","bigint","unknown"],h={beginKeywords:"namespace",end:/\{/,excludeEnd:!0,contains:[n.exports.CLASS_REFERENCE]},x={beginKeywords:"interface",end:/\{/,excludeEnd:!0,keywords:{keyword:"interface extends",built_in:l},contains:[n.exports.CLASS_REFERENCE]},E={className:"meta",relevance:10,begin:/^\s*['"]use strict['"]/},O=["type","namespace","interface","public","private","protected","implements","declare","abstract","readonly","enum","override"],Z={$pattern:G,keyword:z.concat(O),literal:m,built_in:lt.concat(l),"variable.language":gt},J={className:"meta",begin:"@"+i},et=(X,ct,it)=>{const F=X.contains.findIndex(Ot=>Ot.label===ct);if(F===-1)throw new Error("can not find mode to replace");X.contains.splice(F,1,it)};Object.assign(n.keywords,Z),n.exports.PARAMS_CONTAINS.push(J),n.contains=n.contains.concat([J,h,x]),et(n,"shebang",e.SHEBANG()),et(n,"use_strict",E);const ut=n.contains.find(X=>X.label==="func.def");return ut.relevance=0,Object.assign(n,{name:"TypeScript",aliases:["ts","tsx","mts","cts"]}),n}K.registerLanguage("typescript",Ut);var Jt=function(){var n=(0,L.useRef)(null);return(0,L.useEffect)(function(){if(n.current){var i=n.current,l=s(39017).k,h=0,x=setInterval(function(){var E=l.slice(0,h+1);i.innerHTML=K.highlight(E,{language:"typescript"}).value,h++,h===l.length&&clearInterval(x)},30);return function(){clearInterval(x)}}},[n]),(0,d.jsx)("div",{className:"theme-atom-one-dark-wrap",children:(0,d.jsx)("pre",{className:"theme-atom-one-dark hljs",children:(0,d.jsx)("code",{children:(0,d.jsx)("div",{ref:n})})})})},Nt=s(87357),Qt=function(){var n=(0,P.t)(),i=n.format,l=n.isLocalZH_CN;return(0,d.jsxs)(Nt.Z,{children:[(0,d.jsx)("div",{style:N()({fontSize:"33px",letterSpacing:"3px"},l()?{lineHeight:1.8}:{letterSpacing:"0px"}),children:i({id:"hero.main.title"})}),(0,d.jsx)("div",{style:N()({marginTop:"30px",fontSize:"18px",letterSpacing:"2px"},l()?{lineHeight:1.8}:{letterSpacing:"0px",lineHeight:1.9}),children:i({id:"hero.main.desc"})})]})},qt=s(36883),yt=s(63682),$t=L.memo(function(){var e=(0,P.t)(),n=e.format,i=e.isLocalZH_CN,l=(0,yt.S)({icons:[{name:"code",title:n({id:"hero.feature.codeTitle"}),desc:n({id:"hero.feature.code"})},{name:"jiekou",title:n({id:"hero.feature.APITitle"}),desc:n({id:"hero.feature.API"})},{name:"shandian",title:n({id:"hero.feature.speedTitle"}),desc:n({id:"hero.feature.speed"})},{name:"kuozhan",title:n({id:"hero.feature.interfaceTilte"}),desc:n({id:"hero.feature.interface"})},{name:"buju",title:n({id:"hero.feature.layoutTitle"}),desc:n({id:"hero.feature.layout"})},{name:"T",title:n({id:"hero.feature.typeTitle"}),desc:n({id:"hero.feature.type"})}]}),h=l.icons,x=i(),E=h.map(function(O){return(0,d.jsx)("div",{className:"feature-item",children:(0,d.jsxs)("div",{style:{padding:"0 20px"},children:[(0,d.jsx)(qt.B,{name:O.name,size:45}),(0,d.jsx)("div",{style:{fontSize:"23px",marginTop:"6px"},children:O.title}),(0,d.jsx)("div",{className:"feature-item_desc",style:N()({marginTop:"15px",fontSize:"16px",lineHeight:"1.5"},x?{letterSpacing:"1px"}:{}),children:O.desc})]})})});return(0,d.jsx)("div",{className:"feature-contanier",children:E})}),fe=null,jt=s(75260),Bt=s(9463),_n=s(8679),En=s(48137),vn=s(27278),Le=d.Fragment;function tt(e,n,i){return jt.h.call(n,"css")?d.jsx(jt.E,(0,jt.c)(e,n),i):d.jsx(e,n,i)}function Sn(e,n,i){return hasOwnProperty.call(n,"css")?ReactJSXRuntime.jsxs(Emotion,createEmotionProps(e,n),i):ReactJSXRuntime.jsxs(e,n,i)}var o=s(70917),De=Object.defineProperty,Fe=(e,n,i)=>n in e?De(e,n,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[n]=i,zt=(e,n,i)=>(Fe(e,typeof n!="symbol"?n+"":n,i),i),ue=new Map,Mt=new WeakMap,de=0,me=void 0;function On(e){me=e}function je(e){return e?(Mt.has(e)||(de+=1,Mt.set(e,de.toString())),Mt.get(e)):"0"}function Be(e){return Object.keys(e).sort().filter(n=>e[n]!==void 0).map(n=>`${n}_${n==="root"?je(e.root):e[n]}`).toString()}function ke(e){const n=Be(e);let i=ue.get(n);if(!i){const l=new Map;let h;const x=new IntersectionObserver(E=>{E.forEach(O=>{var Z;const J=O.isIntersecting&&h.some(et=>O.intersectionRatio>=et);e.trackVisibility&&typeof O.isVisible=="undefined"&&(O.isVisible=J),(Z=l.get(O.target))==null||Z.forEach(et=>{et(J,O)})})},e);h=x.thresholds||(Array.isArray(e.threshold)?e.threshold:[e.threshold||0]),i={id:n,observer:x,elements:l},ue.set(n,i)}return i}function pe(e,n,i={},l=me){if(typeof window.IntersectionObserver=="undefined"&&l!==void 0){const Z=e.getBoundingClientRect();return n(l,{isIntersecting:l,target:e,intersectionRatio:typeof i.threshold=="number"?i.threshold:0,time:0,boundingClientRect:Z,intersectionRect:Z,rootBounds:Z}),()=>{}}const{id:h,observer:x,elements:E}=ke(i),O=E.get(e)||[];return E.has(e)||E.set(e,O),O.push(n),x.observe(e),function(){O.splice(O.indexOf(n),1),O.length===0&&(E.delete(e),x.unobserve(e)),E.size===0&&(x.disconnect(),ue.delete(h))}}function Pe(e){return typeof e.children!="function"}var ge=class extends L.Component{constructor(e){super(e),zt(this,"node",null),zt(this,"_unobserveCb",null),zt(this,"handleNode",n=>{this.node&&(this.unobserve(),!n&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=n||null,this.observeNode()}),zt(this,"handleChange",(n,i)=>{n&&this.props.triggerOnce&&this.unobserve(),Pe(this.props)||this.setState({inView:n,entry:i}),this.props.onChange&&this.props.onChange(n,i)}),this.state={inView:!!e.initialInView,entry:void 0}}componentDidMount(){this.unobserve(),this.observeNode()}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve()}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:n,rootMargin:i,trackVisibility:l,delay:h,fallbackInView:x}=this.props;this._unobserveCb=pe(this.node,this.handleChange,{threshold:e,root:n,rootMargin:i,trackVisibility:l,delay:h},x)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){const{children:e}=this.props;if(typeof e=="function"){const{inView:it,entry:F}=this.state;return e({inView:it,entry:F,ref:this.handleNode})}const ct=this.props,{as:n,triggerOnce:i,threshold:l,root:h,rootMargin:x,onChange:E,skip:O,trackVisibility:Z,delay:J,initialInView:et,fallbackInView:ut}=ct,X=Et(ct,["as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"]);return L.createElement(n||"div",rt({ref:this.handleNode},X),e)}};function te({threshold:e,delay:n,trackVisibility:i,rootMargin:l,root:h,triggerOnce:x,skip:E,initialInView:O,fallbackInView:Z,onChange:J}={}){var et;const[ut,X]=L.useState(null),ct=L.useRef(),[it,F]=L.useState({inView:!!O,entry:void 0});ct.current=J,L.useEffect(()=>{if(E||!ut)return;let pt;return pt=pe(ut,(It,Pt)=>{F({inView:It,entry:Pt}),ct.current&&ct.current(It,Pt),Pt.isIntersecting&&x&&pt&&(pt(),pt=void 0)},{root:h,rootMargin:l,threshold:e,trackVisibility:i,delay:n},Z),()=>{pt&&pt()}},[Array.isArray(e)?e.toString():e,ut,h,l,x,E,i,Z,n]);const Ot=(et=it.entry)==null?void 0:et.target,Gt=L.useRef();!ut&&Ot&&!x&&!E&&Gt.current!==Ot&&(Gt.current=Ot,F({inView:!!O,entry:void 0}));const nt=[X,it.inView,it.entry];return nt.ref=nt[0],nt.inView=nt[1],nt.entry=nt[2],nt}var Ue=s(14954);const $e=(0,o.F4)`
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
`,he=(0,o.F4)`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`,wt=(0,o.F4)`
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
`,be=(0,o.F4)`
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
`,Lt=(0,o.F4)`
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
`,Ht=(0,o.F4)`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`,ye=(0,o.F4)`
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
`,ze=(0,o.F4)`
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
`,He=(0,o.F4)`
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
`,Ze=(0,o.F4)`
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
`,Xe=(0,o.F4)`
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
`,xe=(0,o.F4)`
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
`,Ye=(0,o.F4)`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Ke=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ge=(0,o.F4)`
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
`,_e=(0,o.F4)`
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
`,Ve=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ee=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Dt=(0,o.F4)`
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
`,_=(0,o.F4)`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function H({duration:e=1e3,delay:n=0,timingFunction:i="ease",keyframes:l=Wt,iterationCount:h=1}){return(0,o.iv)`
    animation-duration: ${e}ms;
    animation-timing-function: ${i};
    animation-delay: ${n}ms;
    animation-name: ${l};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${h};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function W(e){return e==null}function p(e){return typeof e=="string"||typeof e=="number"||typeof e=="boolean"}function u(e,n){return i=>i?e():n()}function y(e){return u(e,()=>null)}function Y(e){return y(()=>({opacity:0}))(e)}const A=e=>{const{cascade:n=!1,damping:i=.5,delay:l=0,duration:h=1e3,fraction:x=0,keyframes:E=Wt,triggerOnce:O=!1,className:Z,style:J,childClassName:et,childStyle:ut,children:X,onVisibilityChange:ct}=e,it=(0,L.useMemo)(()=>H({keyframes:E,duration:h}),[h,E]);return W(X)?null:p(X)?tt(ne,Ft(rt({},e),{animationStyles:it,children:String(X)})):(0,Ue.isFragment)(X)?tt(Zt,Ft(rt({},e),{animationStyles:it})):tt(Le,{children:L.Children.map(X,(F,Ot)=>{if(!(0,L.isValidElement)(F))return null;const Gt=l+(n?Ot*h*i:0);switch(F.type){case"ol":case"ul":return tt(o.ms,{children:({cx:nt})=>tt(F.type,Ft(rt({},F.props),{className:nt(Z,F.props.className),style:Object.assign({},J,F.props.style),children:tt(A,Ft(rt({},e),{children:F.props.children}))}))});case"li":return tt(ge,{threshold:x,triggerOnce:O,onChange:ct,children:({inView:nt,ref:pt})=>tt(o.ms,{children:({cx:It})=>tt(F.type,Ft(rt({},F.props),{ref:pt,className:It(et,F.props.className),css:y(()=>it)(nt),style:Object.assign({},ut,F.props.style,Y(!nt),{animationDelay:Gt+"ms"})}))})});default:return tt(ge,{threshold:x,triggerOnce:O,onChange:ct,children:({inView:nt,ref:pt})=>tt("div",{ref:pt,className:Z,css:y(()=>it)(nt),style:Object.assign({},J,Y(!nt),{animationDelay:Gt+"ms"}),children:tt(o.ms,{children:({cx:It})=>tt(F.type,Ft(rt({},F.props),{className:It(et,F.props.className),style:Object.assign({},ut,F.props.style)}))})})})}})})},kt={display:"inline-block",whiteSpace:"pre"},ne=e=>{const{animationStyles:n,cascade:i=!1,damping:l=.5,delay:h=0,duration:x=1e3,fraction:E=0,triggerOnce:O=!1,className:Z,style:J,children:et,onVisibilityChange:ut}=e,{ref:X,inView:ct}=te({triggerOnce:O,threshold:E,onChange:ut});return u(()=>tt("div",{ref:X,className:Z,style:Object.assign({},J,kt),children:et.split("").map((it,F)=>tt("span",{css:y(()=>n)(ct),style:{animationDelay:h+F*x*l+"ms"},children:it},F))}),()=>tt(Zt,Ft(rt({},e),{children:et})))(i)},Zt=e=>{const{animationStyles:n,fraction:i=0,triggerOnce:l=!1,className:h,style:x,children:E,onVisibilityChange:O}=e,{ref:Z,inView:J}=te({triggerOnce:l,threshold:i,onChange:O});return tt("div",{ref:Z,className:h,css:y(()=>n)(J),style:Object.assign({},x,Y(!J)),children:E})};function Je(e){switch(e){case"bounce":return[$e,{transformOrigin:"center bottom"}];case"flash":return[he];case"headShake":return[wt,{animationTimingFunction:"ease-in-out"}];case"heartBeat":return[be,{animationTimingFunction:"ease-in-out"}];case"jello":return[Lt,{transformOrigin:"center"}];case"pulse":return[Ht,{animationTimingFunction:"ease-in-out"}];case"rubberBand":return[ye];case"shake":return[ze];case"shakeX":return[He];case"shakeY":return[We];case"swing":return[Ze,{transformOrigin:"top center"}];case"tada":return[Xe];case"wobble":return[xe]}}const ve=e=>{const E=e,{effect:n="bounce",style:i}=E,l=Et(E,["effect","style"]),[h,x]=useMemo(()=>Je(n),[n]);return jsx(A,rt({keyframes:h,style:Object.assign({},i,x)},l))},Qe=(0,o.F4)`
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
`,qe=(0,o.F4)`
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
`,Xt=(0,o.F4)`
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
`,vt=(0,o.F4)`
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
`;function Oe(e,n){switch(n){case"down":return e?nn:qe;case"left":return e?rn:tn;case"right":return e?sn:Se;case"up":return e?vt:Xt;default:return e?en:Qe}}const on=e=>{const x=e,{direction:n,reverse:i=!1}=x,l=Et(x,["direction","reverse"]),h=useMemo(()=>Oe(i,n),[n,i]);return jsx(A,rt({keyframes:h},l))},an=(0,o.F4)`
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
`,ln=(0,o.F4)`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,Yt=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,fn=(0,o.F4)`
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
`,b=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,M=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,j=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,V=(0,o.F4)`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,mt=(0,o.F4)`
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
`,Kt=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function ft(e,n,i){switch(i){case"bottom-left":return n?cn:Ke;case"bottom-right":return n?ln:Ge;case"down":return e?n?fn:_e:n?Yt:ee;case"left":return e?n?b:Ve:n?a:Wt;case"right":return e?n?j:Dt:n?M:Ee;case"top-left":return n?V:t;case"top-right":return n?mt:r;case"up":return e?n?Kt:_:n?St:c;default:return n?an:Ye}}const xt=e=>{const E=e,{big:n=!1,direction:i,reverse:l=!1}=E,h=Et(E,["big","direction","reverse"]),x=useMemo(()=>ft(n,l,i),[n,i,l]);return jsx(A,rt({keyframes:x},h))},Re=(0,o.F4)`
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
`,Ne=(0,o.F4)`
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
`,Me=(0,o.F4)`
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
`,un=(0,o.F4)`
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
`,dn=(0,o.F4)`
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
`;function mn(e,n){switch(n){case"horizontal":return e?un:Ne;case"vertical":return e?dn:Me;default:return Re}}const pn={backfaceVisibility:"visible"},re=e=>{const E=e,{direction:n,reverse:i=!1,style:l}=E,h=Et(E,["direction","reverse","style"]),x=useMemo(()=>mn(i,n),[n,i]);return jsx(A,rt({keyframes:x,style:Object.assign({},l,pn)},h))},we=(0,o.F4)`
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
`,ht=(0,o.F4)`
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
`,gn=(0,o.F4)`
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
`,v={transformOrigin:"top left"},hn=e=>{const l=e,{style:n}=l,i=Et(l,["style"]);return jsx(A,rt({keyframes:we,style:Object.assign({},n,v)},i))},st=e=>jsx(A,rt({keyframes:ht},e));function k(e){return e?se:gn}const oe=e=>{const h=e,{reverse:n=!1}=h,i=Et(h,["reverse"]),l=useMemo(()=>k(n),[n]);return jsx(A,rt({keyframes:l},i))},At=(0,o.F4)`
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
`,f=(0,o.F4)`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`,g=(0,o.F4)`
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
`,T=(0,o.F4)`
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
`,_t=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`,bn=(0,o.F4)`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;function yn(e,n){switch(n){case"bottom-left":return e?[T,{transformOrigin:"left bottom"}]:[ae,{transformOrigin:"left bottom"}];case"bottom-right":return e?[ot,{transformOrigin:"right bottom"}]:[ie,{transformOrigin:"right bottom"}];case"top-left":return e?[_t,{transformOrigin:"left bottom"}]:[f,{transformOrigin:"left bottom"}];case"top-right":return e?[bn,{transformOrigin:"right bottom"}]:[g,{transformOrigin:"right bottom"}];default:return e?[S,{transformOrigin:"center"}]:[At,{transformOrigin:"center"}]}}const mr=e=>{const O=e,{direction:n,reverse:i=!1,style:l}=O,h=Et(O,["direction","reverse","style"]),[x,E]=useMemo(()=>yn(i,n),[n,i]);return jsx(A,rt({keyframes:x,style:Object.assign({},l,E)},h))},Tn=(0,o.F4)`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Cn=(0,o.F4)`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Ln=(0,o.F4)`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Dn=(0,o.F4)`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Fn=(0,o.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,jn=(0,o.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,Bn=(0,o.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,kn=(0,o.F4)`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function Pn(e,n){switch(n){case"down":return e?Fn:Tn;case"right":return e?Bn:Ln;case"up":return e?kn:Dn;case"left":default:return e?jn:Cn}}const pr=e=>{const x=e,{direction:n,reverse:i=!1}=x,l=Et(x,["direction","reverse"]),h=useMemo(()=>Pn(i,n),[n,i]);return jsx(A,rt({keyframes:h},l))},Un=(0,o.F4)`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`,$n=(0,o.F4)`
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
`,zn=(0,o.F4)`
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
`,Hn=(0,o.F4)`
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
`,Zn=(0,o.F4)`
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
`,Xn=(0,o.F4)`
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
`,Yn=(0,o.F4)`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`,Kn=(0,o.F4)`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`,Gn=(0,o.F4)`
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
`;function Vn(e,n){switch(n){case"down":return e?Xn:$n;case"left":return e?Yn:zn;case"right":return e?Kn:Hn;case"up":return e?Gn:Wn;default:return e?Zn:Un}}const Jn=e=>{const x=e,{direction:n,reverse:i=!1}=x,l=Et(x,["direction","reverse"]),h=(0,L.useMemo)(()=>Vn(i,n),[n,i]);return tt(A,rt({keyframes:h},l))};var Qn=["children"],Ae=function(n){var i=n.children,l=q()(n,Qn);return(0,d.jsx)(Jn,N()(N()({triggerOnce:!0},l),{},{children:i}))},gr=null,Ie=function(n){var i=n.style,l=n.title,h=n.content;return(0,d.jsx)(Ae,{children:(0,d.jsxs)("div",{style:N()({marginBottom:"120px",textAlign:"center",width:"50%",marginLeft:"auto",marginRight:"auto"},i),children:[(0,d.jsx)("div",{style:{fontSize:"45px",fontWeight:"bold"},children:l}),(0,d.jsx)("div",{style:{marginTop:"50px",fontSize:"20px",lineHeight:"2"},children:h})]})})},hr=null,qn=s(57993);function tr(){var e=(0,P.t)(),n=e.format,i=e.isDefaultLocal,l=(0,C.bU)(),h=l.base,x=i()?"":h;return(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{style:{display:"flex",marginTop:"60px",position:"relative"},children:[(0,d.jsxs)("div",{style:{flex:1},children:[(0,d.jsx)(Ae,{children:(0,d.jsx)(Qt,{})}),(0,d.jsx)(Ae,{children:(0,d.jsxs)("div",{style:{marginTop:"50px"},children:[(0,d.jsx)(U,{}),(0,d.jsx)($,{})]})})]}),(0,d.jsx)("div",{children:(0,d.jsx)(Jt,{})})]}),(0,d.jsx)(Ae,{children:(0,d.jsxs)("div",{style:{marginTop:"80px"},children:[(0,d.jsx)($t,{}),(0,d.jsx)("div",{style:{marginTop:"180px"}})]})}),(0,d.jsx)(Ie,{style:{width:"100%"},title:n({id:"hero.text.modelUI.desc"}),content:(0,d.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,d.jsx)("span",{style:{flex:1},children:n({id:"hero.text.modelUI.content"})}),(0,d.jsx)("span",{style:{flex:1,marginLeft:"10px"},children:(0,d.jsx)("img",{src:qn.baseModelImg,alt:"",style:{width:"100%"}})})]})}),(0,d.jsx)(Ie,{style:{width:"50%"},title:n({id:"hero.text.watch.title.desc"}),content:n({id:"hero.text.watch.content.desc"})}),(0,d.jsx)(Ie,{style:{width:"80%"},title:n({id:"hero.text.watch.area.title.desc"}),content:n({id:"hero.text.watch.area.content.desc"})}),(0,d.jsx)(Ie,{title:n({id:"hero.text.try.desc"}),style:{width:"100%",marginTop:"180px"},content:(0,d.jsxs)("div",{children:[(0,d.jsx)(B,{plain:!0,style:{padding:"12px 60px",fontSize:"20px"},onClick:function(){C.m8.push("".concat(x,"/intro/start"))},children:n({id:"hero.action.button.start"})}),(0,d.jsx)(B,{plain:!0,style:{padding:"12px 60px",fontSize:"20px",margin:"0 15px"},onClick:function(){C.m8.push("".concat(x,"/api/use-form-start"))},children:"API"}),(0,d.jsx)(B,{plain:!0,style:{letterSpacing:0,padding:"12px 60px",fontSize:"20px"},onClick:function(){C.m8.push("".concat(x,"/types/use-form-return"))},children:"TS"})]})})]})}},76658:function(I,R,s){"use strict";s.d(R,{t:function(){return L}});var w=s(97857),N=s.n(w),Q=s(66881),q=s(67294);function L(){var at=(0,Q.YB)(),B=(0,Q.bU)(),C=(0,Q.WF)(),P=C.locales,U=(0,q.useRef)({format:function(D){var K=D.id,G=at.formatMessage({id:K});return G==null,G},isLocalZH_CN:function(){return B.id==="zh-CN"},isDefaultLocal:function(){var D;return B.id===((D=P[0])===null||D===void 0?void 0:D.id)}}).current;return N()({},U)}var d=null},63682:function(I,R,s){"use strict";s.d(R,{S:function(){return N}});var w=s(67294);function N(Q){var q=(0,w.useRef)(Q);return q.current}R.Z=N},84415:function(I,R){"use strict";var s;var w=Symbol.for("react.element"),N=Symbol.for("react.portal"),Q=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),at=Symbol.for("react.context"),B=Symbol.for("react.server_context"),C=Symbol.for("react.forward_ref"),P=Symbol.for("react.suspense"),U=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),D=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),G;G=Symbol.for("react.module.reference");function z(m){if(typeof m=="object"&&m!==null){var dt=m.$$typeof;switch(dt){case w:switch(m=m.type,m){case Q:case L:case q:case P:case U:return m;default:switch(m=m&&m.$$typeof,m){case B:case at:case C:case D:case $:case d:return m;default:return dt}}case N:return dt}}}s=at,s=d,s=w,s=C,s=Q,s=D,s=$,s=N,s=L,s=q,s=P,s=U,s=function(){return!1},s=function(){return!1},s=function(m){return z(m)===at},s=function(m){return z(m)===d},s=function(m){return typeof m=="object"&&m!==null&&m.$$typeof===w},s=function(m){return z(m)===C},R.isFragment=function(m){return z(m)===Q},s=function(m){return z(m)===D},s=function(m){return z(m)===$},s=function(m){return z(m)===N},s=function(m){return z(m)===L},s=function(m){return z(m)===q},s=function(m){return z(m)===P},s=function(m){return z(m)===U},s=function(m){return typeof m=="string"||typeof m=="function"||m===Q||m===L||m===q||m===P||m===U||m===K||typeof m=="object"&&m!==null&&(m.$$typeof===D||m.$$typeof===$||m.$$typeof===d||m.$$typeof===at||m.$$typeof===C||m.$$typeof===G||m.getModuleId!==void 0)},s=z},14954:function(I,R,s){"use strict";I.exports=s(84415)},33390:function(I){function R(t){return t instanceof Map?t.clear=t.delete=t.set=function(){throw new Error("map is read-only")}:t instanceof Set&&(t.add=t.clear=t.delete=function(){throw new Error("set is read-only")}),Object.freeze(t),Object.getOwnPropertyNames(t).forEach(r=>{const c=t[r],_=typeof c;(_==="object"||_==="function")&&!Object.isFrozen(c)&&R(c)}),t}class s{constructor(r){r.data===void 0&&(r.data={}),this.data=r.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function w(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function N(t,...r){const c=Object.create(null);for(const _ in t)c[_]=t[_];return r.forEach(function(_){for(const H in _)c[H]=_[H]}),c}const Q="</span>",q=t=>!!t.scope,L=(t,{prefix:r})=>{if(t.startsWith("language:"))return t.replace("language:","language-");if(t.includes(".")){const c=t.split(".");return[`${r}${c.shift()}`,...c.map((_,H)=>`${_}${"_".repeat(H+1)}`)].join(" ")}return`${r}${t}`};class d{constructor(r,c){this.buffer="",this.classPrefix=c.classPrefix,r.walk(this)}addText(r){this.buffer+=w(r)}openNode(r){if(!q(r))return;const c=L(r.scope,{prefix:this.classPrefix});this.span(c)}closeNode(r){q(r)&&(this.buffer+=Q)}value(){return this.buffer}span(r){this.buffer+=`<span class="${r}">`}}const at=(t={})=>{const r={children:[]};return Object.assign(r,t),r};class B{constructor(){this.rootNode=at(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(r){this.top.children.push(r)}openNode(r){const c=at({scope:r});this.add(c),this.stack.push(c)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(r){return this.constructor._walk(r,this.rootNode)}static _walk(r,c){return typeof c=="string"?r.addText(c):c.children&&(r.openNode(c),c.children.forEach(_=>this._walk(r,_)),r.closeNode(c)),r}static _collapse(r){typeof r!="string"&&r.children&&(r.children.every(c=>typeof c=="string")?r.children=[r.children.join("")]:r.children.forEach(c=>{B._collapse(c)}))}}class C extends B{constructor(r){super(),this.options=r}addText(r){r!==""&&this.add(r)}startScope(r){this.openNode(r)}endScope(){this.closeNode()}__addSublanguage(r,c){const _=r.root;c&&(_.scope=`language:${c}`),this.add(_)}toHTML(){return new d(this,this.options).value()}finalize(){return this.closeAllNodes(),!0}}function P(t){return t?typeof t=="string"?t:t.source:null}function U(t){return K("(?=",t,")")}function $(t){return K("(?:",t,")*")}function D(t){return K("(?:",t,")?")}function K(...t){return t.map(c=>P(c)).join("")}function G(t){const r=t[t.length-1];return typeof r=="object"&&r.constructor===Object?(t.splice(t.length-1,1),r):{}}function z(...t){return"("+(G(t).capture?"":"?:")+t.map(_=>P(_)).join("|")+")"}function m(t){return new RegExp(t.toString()+"|").exec("").length-1}function dt(t,r){const c=t&&t.exec(r);return c&&c.index===0}const Tt=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function bt(t,{joinWith:r}){let c=0;return t.map(_=>{c+=1;const H=c;let W=P(_),p="";for(;W.length>0;){const u=Tt.exec(W);if(!u){p+=W;break}p+=W.substring(0,u.index),W=W.substring(u.index+u[0].length),u[0][0]==="\\"&&u[1]?p+="\\"+String(Number(u[1])+H):(p+=u[0],u[0]==="("&&c++)}return p}).map(_=>`(${_})`).join(r)}const gt=/\b\B/,lt="[a-zA-Z]\\w*",Ct="[a-zA-Z_]\\w*",Ut="\\b\\d+(\\.\\d+)?",Jt="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Nt="\\b(0b[01]+)",Qt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",qt=(t={})=>{const r=/^#![ ]*\//;return t.binary&&(t.begin=K(r,/.*\b/,t.binary,/\b.*/)),N({scope:"meta",begin:r,end:/$/,relevance:0,"on:begin":(c,_)=>{c.index!==0&&_.ignoreMatch()}},t)},yt={begin:"\\\\[\\s\\S]",relevance:0},$t={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[yt]},fe={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[yt]},jt={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},Bt=function(t,r,c={}){const _=N({scope:"comment",begin:t,end:r,contains:[]},c);_.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const H=z("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return _.contains.push({begin:K(/[ ]+/,"(",H,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),_},_n=Bt("//","$"),En=Bt("/\\*","\\*/"),vn=Bt("#","$"),Le={scope:"number",begin:Ut,relevance:0},tt={scope:"number",begin:Jt,relevance:0},Sn={scope:"number",begin:Nt,relevance:0},o={scope:"regexp",begin:/\/(?=[^/\n]*\/)/,end:/\/[gimuy]*/,contains:[yt,{begin:/\[/,end:/\]/,relevance:0,contains:[yt]}]},De={scope:"title",begin:lt,relevance:0},Fe={scope:"title",begin:Ct,relevance:0},zt={begin:"\\.\\s*"+Ct,relevance:0};var Mt=Object.freeze({__proto__:null,APOS_STRING_MODE:$t,BACKSLASH_ESCAPE:yt,BINARY_NUMBER_MODE:Sn,BINARY_NUMBER_RE:Nt,COMMENT:Bt,C_BLOCK_COMMENT_MODE:En,C_LINE_COMMENT_MODE:_n,C_NUMBER_MODE:tt,C_NUMBER_RE:Jt,END_SAME_AS_BEGIN:function(t){return Object.assign(t,{"on:begin":(r,c)=>{c.data._beginMatch=r[1]},"on:end":(r,c)=>{c.data._beginMatch!==r[1]&&c.ignoreMatch()}})},HASH_COMMENT_MODE:vn,IDENT_RE:lt,MATCH_NOTHING_RE:gt,METHOD_GUARD:zt,NUMBER_MODE:Le,NUMBER_RE:Ut,PHRASAL_WORDS_MODE:jt,QUOTE_STRING_MODE:fe,REGEXP_MODE:o,RE_STARTERS_RE:Qt,SHEBANG:qt,TITLE_MODE:De,UNDERSCORE_IDENT_RE:Ct,UNDERSCORE_TITLE_MODE:Fe});function de(t,r){t.input[t.index-1]==="."&&r.ignoreMatch()}function me(t,r){t.className!==void 0&&(t.scope=t.className,delete t.className)}function On(t,r){r&&t.beginKeywords&&(t.begin="\\b("+t.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",t.__beforeBegin=de,t.keywords=t.keywords||t.beginKeywords,delete t.beginKeywords,t.relevance===void 0&&(t.relevance=0))}function je(t,r){Array.isArray(t.illegal)&&(t.illegal=z(...t.illegal))}function Be(t,r){if(t.match){if(t.begin||t.end)throw new Error("begin & end are not supported with match");t.begin=t.match,delete t.match}}function ke(t,r){t.relevance===void 0&&(t.relevance=1)}const pe=(t,r)=>{if(!t.beforeMatch)return;if(t.starts)throw new Error("beforeMatch cannot be used with starts");const c=Object.assign({},t);Object.keys(t).forEach(_=>{delete t[_]}),t.keywords=c.keywords,t.begin=K(c.beforeMatch,U(c.begin)),t.starts={relevance:0,contains:[Object.assign(c,{endsParent:!0})]},t.relevance=0,delete c.beforeMatch},Pe=["of","and","for","in","not","or","if","then","parent","list","value"],ge="keyword";function te(t,r,c=ge){const _=Object.create(null);return typeof t=="string"?H(c,t.split(" ")):Array.isArray(t)?H(c,t):Object.keys(t).forEach(function(W){Object.assign(_,te(t[W],r,W))}),_;function H(W,p){r&&(p=p.map(u=>u.toLowerCase())),p.forEach(function(u){const y=u.split("|");_[y[0]]=[W,Ue(y[0],y[1])]})}}function Ue(t,r){return r?Number(r):$e(t)?0:1}function $e(t){return Pe.includes(t.toLowerCase())}const he={},wt=t=>{console.error(t)},be=(t,...r)=>{console.log(`WARN: ${t}`,...r)},Lt=(t,r)=>{he[`${t}/${r}`]||(console.log(`Deprecated as of ${t}. ${r}`),he[`${t}/${r}`]=!0)},Ht=new Error;function ye(t,r,{key:c}){let _=0;const H=t[c],W={},p={};for(let u=1;u<=r.length;u++)p[u+_]=H[u],W[u+_]=!0,_+=m(r[u-1]);t[c]=p,t[c]._emit=W,t[c]._multi=!0}function ze(t){if(Array.isArray(t.begin)){if(t.skip||t.excludeBegin||t.returnBegin)throw wt("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),Ht;if(typeof t.beginScope!="object"||t.beginScope===null)throw wt("beginScope must be object"),Ht;ye(t,t.begin,{key:"beginScope"}),t.begin=bt(t.begin,{joinWith:""})}}function He(t){if(Array.isArray(t.end)){if(t.skip||t.excludeEnd||t.returnEnd)throw wt("skip, excludeEnd, returnEnd not compatible with endScope: {}"),Ht;if(typeof t.endScope!="object"||t.endScope===null)throw wt("endScope must be object"),Ht;ye(t,t.end,{key:"endScope"}),t.end=bt(t.end,{joinWith:""})}}function We(t){t.scope&&typeof t.scope=="object"&&t.scope!==null&&(t.beginScope=t.scope,delete t.scope)}function Ze(t){We(t),typeof t.beginScope=="string"&&(t.beginScope={_wrap:t.beginScope}),typeof t.endScope=="string"&&(t.endScope={_wrap:t.endScope}),ze(t),He(t)}function Xe(t){function r(p,u){return new RegExp(P(p),"m"+(t.case_insensitive?"i":"")+(t.unicodeRegex?"u":"")+(u?"g":""))}class c{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(u,y){y.position=this.position++,this.matchIndexes[this.matchAt]=y,this.regexes.push([y,u]),this.matchAt+=m(u)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const u=this.regexes.map(y=>y[1]);this.matcherRe=r(bt(u,{joinWith:"|"}),!0),this.lastIndex=0}exec(u){this.matcherRe.lastIndex=this.lastIndex;const y=this.matcherRe.exec(u);if(!y)return null;const Y=y.findIndex((kt,ne)=>ne>0&&kt!==void 0),A=this.matchIndexes[Y];return y.splice(0,Y),Object.assign(y,A)}}class _{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(u){if(this.multiRegexes[u])return this.multiRegexes[u];const y=new c;return this.rules.slice(u).forEach(([Y,A])=>y.addRule(Y,A)),y.compile(),this.multiRegexes[u]=y,y}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(u,y){this.rules.push([u,y]),y.type==="begin"&&this.count++}exec(u){const y=this.getMatcher(this.regexIndex);y.lastIndex=this.lastIndex;let Y=y.exec(u);if(this.resumingScanAtSamePosition()&&!(Y&&Y.index===this.lastIndex)){const A=this.getMatcher(0);A.lastIndex=this.lastIndex+1,Y=A.exec(u)}return Y&&(this.regexIndex+=Y.position+1,this.regexIndex===this.count&&this.considerAll()),Y}}function H(p){const u=new _;return p.contains.forEach(y=>u.addRule(y.begin,{rule:y,type:"begin"})),p.terminatorEnd&&u.addRule(p.terminatorEnd,{type:"end"}),p.illegal&&u.addRule(p.illegal,{type:"illegal"}),u}function W(p,u){const y=p;if(p.isCompiled)return y;[me,Be,Ze,pe].forEach(A=>A(p,u)),t.compilerExtensions.forEach(A=>A(p,u)),p.__beforeBegin=null,[On,je,ke].forEach(A=>A(p,u)),p.isCompiled=!0;let Y=null;return typeof p.keywords=="object"&&p.keywords.$pattern&&(p.keywords=Object.assign({},p.keywords),Y=p.keywords.$pattern,delete p.keywords.$pattern),Y=Y||/\w+/,p.keywords&&(p.keywords=te(p.keywords,t.case_insensitive)),y.keywordPatternRe=r(Y,!0),u&&(p.begin||(p.begin=/\B|\b/),y.beginRe=r(y.begin),!p.end&&!p.endsWithParent&&(p.end=/\B|\b/),p.end&&(y.endRe=r(y.end)),y.terminatorEnd=P(y.end)||"",p.endsWithParent&&u.terminatorEnd&&(y.terminatorEnd+=(p.end?"|":"")+u.terminatorEnd)),p.illegal&&(y.illegalRe=r(p.illegal)),p.contains||(p.contains=[]),p.contains=[].concat(...p.contains.map(function(A){return Ye(A==="self"?p:A)})),p.contains.forEach(function(A){W(A,y)}),p.starts&&W(p.starts,u),y.matcher=H(y),y}if(t.compilerExtensions||(t.compilerExtensions=[]),t.contains&&t.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return t.classNameAliases=N(t.classNameAliases||{}),W(t)}function xe(t){return t?t.endsWithParent||xe(t.starts):!1}function Ye(t){return t.variants&&!t.cachedVariants&&(t.cachedVariants=t.variants.map(function(r){return N(t,{variants:null},r)})),t.cachedVariants?t.cachedVariants:xe(t)?N(t,{starts:t.starts?N(t.starts):null}):Object.isFrozen(t)?N(t):t}var Ke="11.9.0";class Ge extends Error{constructor(r,c){super(r),this.name="HTMLInjectionError",this.html=c}}const ee=w,_e=N,Wt=Symbol("nomatch"),Ve=7,Ee=function(t){const r=Object.create(null),c=Object.create(null),_=[];let H=!0;const W="Could not find the language '{}', did you forget to load/include a language module?",p={disableAutodetect:!0,name:"Plain text",contains:[]};let u={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:C};function y(a){return u.noHighlightRe.test(a)}function Y(a){let b=a.className+" ";b+=a.parentNode?a.parentNode.className:"";const M=u.languageDetectRe.exec(b);if(M){const j=vt(M[1]);return j||(be(W.replace("{}",M[1])),be("Falling back to no-highlight mode for this block.",a)),j?M[1]:"no-highlight"}return b.split(/\s+/).find(j=>y(j)||vt(j))}function A(a,b,M){let j="",V="";typeof b=="object"?(j=a,M=b.ignoreIllegals,V=b.language):(Lt("10.7.0","highlight(lang, code, ...args) has been deprecated."),Lt("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),V=a,j=b),M===void 0&&(M=!0);const mt={code:j,language:V};Yt("before:highlight",mt);const St=mt.result?mt.result:kt(mt.language,mt.code,M);return St.code=mt.code,Yt("after:highlight",St),St}function kt(a,b,M,j){const V=Object.create(null);function mt(f,g){return f.keywords[g]}function St(){if(!v.keywords){st.addText(k);return}let f=0;v.keywordPatternRe.lastIndex=0;let g=v.keywordPatternRe.exec(k),S="";for(;g;){S+=k.substring(f,g.index);const T=ht.case_insensitive?g[0].toLowerCase():g[0],ot=mt(v,T);if(ot){const[_t,bn]=ot;if(st.addText(S),S="",V[T]=(V[T]||0)+1,V[T]<=Ve&&(oe+=bn),_t.startsWith("_"))S+=g[0];else{const yn=ht.classNameAliases[_t]||_t;xt(g[0],yn)}}else S+=g[0];f=v.keywordPatternRe.lastIndex,g=v.keywordPatternRe.exec(k)}S+=k.substring(f),st.addText(S)}function Kt(){if(k==="")return;let f=null;if(typeof v.subLanguage=="string"){if(!r[v.subLanguage]){st.addText(k);return}f=kt(v.subLanguage,k,!0,hn[v.subLanguage]),hn[v.subLanguage]=f._top}else f=Zt(k,v.subLanguage.length?v.subLanguage:null);v.relevance>0&&(oe+=f.relevance),st.__addSublanguage(f._emitter,f.language)}function ft(){v.subLanguage!=null?Kt():St(),k=""}function xt(f,g){f!==""&&(st.startScope(g),st.addText(f),st.endScope())}function Re(f,g){let S=1;const T=g.length-1;for(;S<=T;){if(!f._emit[S]){S++;continue}const ot=ht.classNameAliases[f[S]]||f[S],_t=g[S];ot?xt(_t,ot):(k=_t,St(),k=""),S++}}function Ne(f,g){return f.scope&&typeof f.scope=="string"&&st.openNode(ht.classNameAliases[f.scope]||f.scope),f.beginScope&&(f.beginScope._wrap?(xt(k,ht.classNameAliases[f.beginScope._wrap]||f.beginScope._wrap),k=""):f.beginScope._multi&&(Re(f.beginScope,g),k="")),v=Object.create(f,{parent:{value:v}}),v}function Me(f,g,S){let T=dt(f.endRe,S);if(T){if(f["on:end"]){const ot=new s(f);f["on:end"](g,ot),ot.isMatchIgnored&&(T=!1)}if(T){for(;f.endsParent&&f.parent;)f=f.parent;return f}}if(f.endsWithParent)return Me(f.parent,g,S)}function un(f){return v.matcher.regexIndex===0?(k+=f[0],1):(ie=!0,0)}function dn(f){const g=f[0],S=f.rule,T=new s(S),ot=[S.__beforeBegin,S["on:begin"]];for(const _t of ot)if(_t&&(_t(f,T),T.isMatchIgnored))return un(g);return S.skip?k+=g:(S.excludeBegin&&(k+=g),ft(),!S.returnBegin&&!S.excludeBegin&&(k=g)),Ne(S,f),S.returnBegin?0:g.length}function mn(f){const g=f[0],S=b.substring(f.index),T=Me(v,f,S);if(!T)return Wt;const ot=v;v.endScope&&v.endScope._wrap?(ft(),xt(g,v.endScope._wrap)):v.endScope&&v.endScope._multi?(ft(),Re(v.endScope,f)):ot.skip?k+=g:(ot.returnEnd||ot.excludeEnd||(k+=g),ft(),ot.excludeEnd&&(k=g));do v.scope&&st.closeNode(),!v.skip&&!v.subLanguage&&(oe+=v.relevance),v=v.parent;while(v!==T.parent);return T.starts&&Ne(T.starts,f),ot.returnEnd?0:g.length}function pn(){const f=[];for(let g=v;g!==ht;g=g.parent)g.scope&&f.unshift(g.scope);f.forEach(g=>st.openNode(g))}let re={};function we(f,g){const S=g&&g[0];if(k+=f,S==null)return ft(),0;if(re.type==="begin"&&g.type==="end"&&re.index===g.index&&S===""){if(k+=b.slice(g.index,g.index+1),!H){const T=new Error(`0 width match regex (${a})`);throw T.languageName=a,T.badRule=re.rule,T}return 1}if(re=g,g.type==="begin")return dn(g);if(g.type==="illegal"&&!M){const T=new Error('Illegal lexeme "'+S+'" for mode "'+(v.scope||"<unnamed>")+'"');throw T.mode=v,T}else if(g.type==="end"){const T=mn(g);if(T!==Wt)return T}if(g.type==="illegal"&&S==="")return 1;if(ae>1e5&&ae>g.index*3)throw new Error("potential infinite loop, way more iterations than matches");return k+=S,S.length}const ht=vt(a);if(!ht)throw wt(W.replace("{}",a)),new Error('Unknown language: "'+a+'"');const gn=Xe(ht);let se="",v=j||gn;const hn={},st=new u.__emitter(u);pn();let k="",oe=0,At=0,ae=0,ie=!1;try{if(ht.__emitTokens)ht.__emitTokens(b,st);else{for(v.matcher.considerAll();;){ae++,ie?ie=!1:v.matcher.considerAll(),v.matcher.lastIndex=At;const f=v.matcher.exec(b);if(!f)break;const g=b.substring(At,f.index),S=we(g,f);At=f.index+S}we(b.substring(At))}return st.finalize(),se=st.toHTML(),{language:a,value:se,relevance:oe,illegal:!1,_emitter:st,_top:v}}catch(f){if(f.message&&f.message.includes("Illegal"))return{language:a,value:ee(b),illegal:!0,relevance:0,_illegalBy:{message:f.message,index:At,context:b.slice(At-100,At+100),mode:f.mode,resultSoFar:se},_emitter:st};if(H)return{language:a,value:ee(b),illegal:!1,relevance:0,errorRaised:f,_emitter:st,_top:v};throw f}}function ne(a){const b={value:ee(a),illegal:!1,relevance:0,_top:p,_emitter:new u.__emitter(u)};return b._emitter.addText(a),b}function Zt(a,b){b=b||u.languages||Object.keys(r);const M=ne(a),j=b.filter(vt).filter(on).map(ft=>kt(ft,a,!1));j.unshift(M);const V=j.sort((ft,xt)=>{if(ft.relevance!==xt.relevance)return xt.relevance-ft.relevance;if(ft.language&&xt.language){if(vt(ft.language).supersetOf===xt.language)return 1;if(vt(xt.language).supersetOf===ft.language)return-1}return 0}),[mt,St]=V,Kt=mt;return Kt.secondBest=St,Kt}function Je(a,b,M){const j=b&&c[b]||M;a.classList.add("hljs"),a.classList.add(`language-${j}`)}function ve(a){let b=null;const M=Y(a);if(y(M))return;if(Yt("before:highlightElement",{el:a,language:M}),a.dataset.highlighted){console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.",a);return}if(a.children.length>0&&(u.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(a)),u.throwUnescapedHTML))throw new Ge("One of your code blocks includes unescaped HTML.",a.innerHTML);b=a;const j=b.textContent,V=M?A(j,{language:M,ignoreIllegals:!0}):Zt(j);a.innerHTML=V.value,a.dataset.highlighted="yes",Je(a,M,V.language),a.result={language:V.language,re:V.relevance,relevance:V.relevance},V.secondBest&&(a.secondBest={language:V.secondBest.language,relevance:V.secondBest.relevance}),Yt("after:highlightElement",{el:a,result:V,text:j})}function Qe(a){u=_e(u,a)}const qe=()=>{Xt(),Lt("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function tn(){Xt(),Lt("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let Se=!1;function Xt(){if(document.readyState==="loading"){Se=!0;return}document.querySelectorAll(u.cssSelector).forEach(ve)}function en(){Se&&Xt()}typeof window!="undefined"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",en,!1);function nn(a,b){let M=null;try{M=b(t)}catch(j){if(wt("Language definition for '{}' could not be registered.".replace("{}",a)),H)wt(j);else throw j;M=p}M.name||(M.name=a),r[a]=M,M.rawDefinition=b.bind(null,t),M.aliases&&Oe(M.aliases,{languageName:a})}function rn(a){delete r[a];for(const b of Object.keys(c))c[b]===a&&delete c[b]}function sn(){return Object.keys(r)}function vt(a){return a=(a||"").toLowerCase(),r[a]||r[c[a]]}function Oe(a,{languageName:b}){typeof a=="string"&&(a=[a]),a.forEach(M=>{c[M.toLowerCase()]=b})}function on(a){const b=vt(a);return b&&!b.disableAutodetect}function an(a){a["before:highlightBlock"]&&!a["before:highlightElement"]&&(a["before:highlightElement"]=b=>{a["before:highlightBlock"](Object.assign({block:b.el},b))}),a["after:highlightBlock"]&&!a["after:highlightElement"]&&(a["after:highlightElement"]=b=>{a["after:highlightBlock"](Object.assign({block:b.el},b))})}function cn(a){an(a),_.push(a)}function ln(a){const b=_.indexOf(a);b!==-1&&_.splice(b,1)}function Yt(a,b){const M=a;_.forEach(function(j){j[M]&&j[M](b)})}function fn(a){return Lt("10.7.0","highlightBlock will be removed entirely in v12.0"),Lt("10.7.0","Please use highlightElement now."),ve(a)}Object.assign(t,{highlight:A,highlightAuto:Zt,highlightAll:Xt,highlightElement:ve,highlightBlock:fn,configure:Qe,initHighlighting:qe,initHighlightingOnLoad:tn,registerLanguage:nn,unregisterLanguage:rn,listLanguages:sn,getLanguage:vt,registerAliases:Oe,autoDetection:on,inherit:_e,addPlugin:cn,removePlugin:ln}),t.debugMode=function(){H=!1},t.safeMode=function(){H=!0},t.versionString=Ke,t.regex={concat:K,lookahead:U,either:z,optional:D,anyNumberOfTimes:$};for(const a in Mt)typeof Mt[a]=="object"&&R(Mt[a]);return Object.assign(t,Mt),t},Dt=Ee({});Dt.newInstance=()=>Ee({}),I.exports=Dt,Dt.HighlightJS=Dt,Dt.default=Dt},39017:function(I){"use strict";I.exports=JSON.parse(`{"k":"import { useForm } from 'react-form-simple';\\r\\nexport default function App() {\\r\\n  const { render, model } = useForm({ name: '' });\\r\\n  const renderName = render('name')(<input />);\\r\\n  const renderSubmit = (\\r\\n    <button\\r\\n      onClick={() => {\\r\\n        console.log({ model });\\r\\n      }}\\r\\n    >\\r\\n      submit\\r\\n    </button>\\r\\n  );\\r\\n  return (\\r\\n    <>\\r\\n      {renderName}\\r\\n      {renderSubmit}\\r\\n    </>\\r\\n  );\\r\\n}\\r\\n"}`)}}]);
}());