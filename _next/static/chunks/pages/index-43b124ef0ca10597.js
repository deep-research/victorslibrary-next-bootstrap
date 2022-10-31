(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4369)}])},9749:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageLoaderProps",{enumerable:!0,get:function(){return d.ImageLoaderProps}}),t.default=function(e){let t,r;var i,{src:a,sizes:g,unoptimized:_=!1,priority:j=!1,loading:b,className:w,quality:v,width:y,height:N,fill:E,style:S,onLoad:C,onLoadingComplete:z,placeholder:P="empty",blurDataURL:k}=e,O=o(e,["src","sizes","unoptimized","priority","loading","className","quality","width","height","fill","style","onLoad","onLoadingComplete","placeholder","blurDataURL"]);let L=s.useContext(u.ImageConfigContext),I=s.useMemo(()=>{let e=h||L||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return n({},e,{allSizes:t,deviceSizes:r})},[L]),R=O,A=R.loader||f.default;if(delete R.loader,"__next_img_default"in A){if("custom"===I.loader)throw Error('Image with src "'.concat(a,'" is missing "loader" prop.')+"\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader")}else{let D=A;A=e=>{let{config:t}=e,r=o(e,["config"]);return D(r)}}let H="",M=p(y),T=p(N);if("object"==typeof(i=a)&&(m(i)||void 0!==i.src)){let G=m(a)?a.default:a;if(!G.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ".concat(JSON.stringify(G)));if(!G.height||!G.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ".concat(JSON.stringify(G)));if(t=G.blurWidth,r=G.blurHeight,k=k||G.blurDataURL,H=G.src,!E){if(M||T){if(M&&!T){let B=M/G.width;T=Math.round(G.height*B)}else if(!M&&T){let W=T/G.height;M=Math.round(G.width*W)}}else M=G.width,T=G.height}}let q=!j&&("lazy"===b||void 0===b);((a="string"==typeof a?a:H).startsWith("data:")||a.startsWith("blob:"))&&(_=!0,q=!1),I.unoptimized&&(_=!0);let[F,V]=s.useState(!1),[U,Z]=s.useState(!1),J=p(v),Q=Object.assign(E?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0}:{},U?{}:{color:"transparent"},S),X="blur"===P&&k&&!F?{backgroundSize:Q.objectFit||"cover",backgroundPosition:Q.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:'url("data:image/svg+xml;charset=utf-8,'.concat(c.getImageBlurSvg({widthInt:M,heightInt:T,blurWidth:t,blurHeight:r,blurDataURL:k}),'")')}:{},K=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:a,sizes:o,loader:s}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:l,kind:c}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let a=/(^|\s)(1?\d?\d)vw/g,o=[];for(let s;s=a.exec(r);s)o.push(parseInt(s[2]));if(o.length){let l=.01*Math.min(...o);return{widths:i.filter(e=>e>=n[0]*l),kind:"w"}}return{widths:i,kind:"w"}}if("number"!=typeof t)return{widths:n,kind:"w"};let c=[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))];return{widths:c,kind:"x"}}(t,i,o),d=l.length-1;return{sizes:o||"w"!==c?o:"100vw",srcSet:l.map((e,n)=>"".concat(s({config:t,src:r,quality:a,width:e})," ").concat("w"===c?e:n+1).concat(c)).join(", "),src:s({config:t,src:r,quality:a,width:l[d]})}}({config:I,src:a,unoptimized:_,width:M,quality:J,sizes:g,loader:A}),Y=a,$="imagesrcset",ee="imagesizes";$="imageSrcSet",ee="imageSizes";let et={[$]:K.srcSet,[ee]:K.sizes,crossOrigin:R.crossOrigin},er=s.useRef(C);s.useEffect(()=>{er.current=C},[C]);let en=s.useRef(z);s.useEffect(()=>{en.current=z},[z]);let ei=n({isLazy:q,imgAttributes:K,heightInt:T,widthInt:M,qualityInt:J,className:w,imgStyle:Q,blurStyle:X,loading:b,config:I,fill:E,unoptimized:_,placeholder:P,loader:A,srcString:Y,onLoadRef:er,onLoadingCompleteRef:en,setBlurComplete:V,setShowAltText:Z},R);return s.default.createElement(s.default.Fragment,null,s.default.createElement(x,Object.assign({},ei)),j?s.default.createElement(l.default,null,s.default.createElement("link",Object.assign({key:"__nimg-"+K.src+K.srcSet+K.sizes,rel:"preload",as:"image",href:K.srcSet?void 0:K.src},et))):null)};var n=r(6495).Z,i=r(2648).Z,a=r(1598).Z,o=r(7273).Z,s=a(r(7294)),l=i(r(3121)),c=r(2675),d=r(139),u=r(8730);r(670);var f=i(r(9824));let h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function m(e){return void 0!==e.default}function p(e){return"number"==typeof e||void 0===e?e:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function g(e,t,r,i,a,o){if(!e||e["data-loaded-src"]===t)return;e["data-loaded-src"]=t;let s="decode"in e?e.decode():Promise.resolve();s.catch(()=>{}).then(()=>{if(e.parentNode){if("blur"===r&&o(!0),null==i?void 0:i.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let s=!1,l=!1;i.current(n({},t,{nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>s,isPropagationStopped:()=>l,persist(){},preventDefault(){s=!0,t.preventDefault()},stopPropagation(){l=!0,t.stopPropagation()}}))}(null==a?void 0:a.current)&&a.current(e)}})}let x=e=>{var{imgAttributes:t,heightInt:r,widthInt:i,qualityInt:a,className:l,imgStyle:c,blurStyle:d,isLazy:u,fill:f,placeholder:h,loading:m,srcString:p,config:x,unoptimized:_,loader:j,onLoadRef:b,onLoadingCompleteRef:w,setBlurComplete:v,setShowAltText:y,onLoad:N,onError:E}=e,S=o(e,["imgAttributes","heightInt","widthInt","qualityInt","className","imgStyle","blurStyle","isLazy","fill","placeholder","loading","srcString","config","unoptimized","loader","onLoadRef","onLoadingCompleteRef","setBlurComplete","setShowAltText","onLoad","onError"]);return m=u?"lazy":m,s.default.createElement(s.default.Fragment,null,s.default.createElement("img",Object.assign({},S,t,{width:i,height:r,decoding:"async","data-nimg":f?"fill":"1",className:l,loading:m,style:n({},c,d),ref:s.useCallback(e=>{e&&(E&&(e.src=e.src),e.complete&&g(e,p,h,b,w,v))},[p,h,b,w,v,E]),onLoad(e){let t=e.currentTarget;g(t,p,h,b,w,v)},onError(e){y(!0),"blur"===h&&v(!0),E&&E(e)}})))};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2675:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getImageBlurSvg=function(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:a}=e,o=n||t,s=i||r,l=a.startsWith("data:image/jpeg")?"%3CfeComponentTransfer%3E%3CfeFuncA type='discrete' tableValues='1 1'/%3E%3C/feComponentTransfer%3E%":"";return o&&s?"%3Csvg xmlns='http%3A//www.w3.org/2000/svg' viewBox='0 0 ".concat(o," ").concat(s,"'%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='").concat(n&&i?"1":"20","'/%3E").concat(l,"%3C/filter%3E%3Cimage preserveAspectRatio='none' filter='url(%23b)' x='0' y='0' height='100%25' width='100%25' href='").concat(a,"'/%3E%3C/svg%3E"):"%3Csvg xmlns='http%3A//www.w3.org/2000/svg'%3E%3Cimage style='filter:blur(20px)' x='0' y='0' height='100%25' width='100%25' href='".concat(a,"'/%3E%3C/svg%3E")}},9824:function(e,t){"use strict";function r(e){let{config:t,src:r,width:n,quality:i}=e;return r.endsWith(".svg")&&!t.dangerouslyAllowSVG?r:"".concat(t.path,"?url=").concat(encodeURIComponent(r),"&w=").concat(n,"&q=").concat(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,r.__next_img_default=!0,t.default=r},4369:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return d}});var n=r(5893),i=r(9008),a=r.n(i),o=r(5675),s=r.n(o),l=r(7160),c=r.n(l);function d(){return(0,n.jsxs)("div",{className:c().container,children:[(0,n.jsxs)(a(),{children:[(0,n.jsx)("title",{children:"Create Next App"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsxs)("main",{className:c().main,children:[(0,n.jsxs)("h1",{className:c().title,children:["Welcome to ",(0,n.jsx)("a",{href:"https://nextjs.org",children:"Next.js!"})]}),(0,n.jsxs)("p",{className:c().description,children:["Get started by editing"," ",(0,n.jsx)("code",{className:c().code,children:"pages/index.js"})]}),(0,n.jsxs)("div",{className:c().grid,children:[(0,n.jsxs)("a",{href:"https://nextjs.org/docs",className:c().card,children:[(0,n.jsx)("h2",{children:"Documentation →"}),(0,n.jsx)("p",{children:"Find in-depth information about Next.js features and API."})]}),(0,n.jsxs)("a",{href:"https://nextjs.org/learn",className:c().card,children:[(0,n.jsx)("h2",{children:"Learn →"}),(0,n.jsx)("p",{children:"Learn about Next.js in an interactive course with quizzes!"})]}),(0,n.jsxs)("a",{href:"https://github.com/vercel/next.js/tree/canary/examples",className:c().card,children:[(0,n.jsx)("h2",{children:"Examples →"}),(0,n.jsx)("p",{children:"Discover and deploy boilerplate example Next.js projects."})]}),(0,n.jsxs)("a",{href:"https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",className:c().card,children:[(0,n.jsx)("h2",{children:"Deploy →"}),(0,n.jsx)("p",{children:"Instantly deploy your Next.js site to a public URL with Vercel."})]})]})]}),(0,n.jsxs)("div",{className:"dropdown",children:[(0,n.jsx)("button",{className:"btn btn-secondary dropdown-toggle",type:"button","data-bs-toggle":"dropdown","aria-expanded":"false",children:"Dropdown button"}),(0,n.jsxs)("ul",{className:"dropdown-menu",children:[(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"dropdown-item",href:"#",children:"Action"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"dropdown-item",href:"#",children:"Another action"})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{className:"dropdown-item",href:"#",children:"Something else here"})})]})]}),(0,n.jsx)("footer",{className:c().footer,children:(0,n.jsxs)("a",{href:"https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",target:"_blank",rel:"noopener noreferrer",children:["Powered by"," ",(0,n.jsx)("span",{className:c().logo,children:(0,n.jsx)(s(),{src:"/vercel.svg",alt:"Vercel Logo",width:72,height:16})})]})})]})}},7160:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",footer:"Home_footer____T7K",title:"Home_title__T09hD",description:"Home_description__41Owk",code:"Home_code__suPER",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb"}},9008:function(e,t,r){e.exports=r(3121)},5675:function(e,t,r){e.exports=r(9749)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);