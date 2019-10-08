(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{100:function(e,t,a){},101:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(49),i=a.n(r),c=(a(84),a(8)),s=a(9),o=a(11),m=a(10),u=a(13),p=a(12),d=a(2),g=a(17),h=(a(85),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={circularOpen:!1,french:!0,hamburgerMenu:!1},a.toggleCircularMenu=a.toggleCircularMenu.bind(Object(u.a)(a)),a.toggleLanguage=a.toggleLanguage.bind(Object(u.a)(a)),a.toggleHamburgerMenu=a.toggleHamburgerMenu.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"toggleCircularMenu",value:function(){this.setState({circularOpen:!this.state.circularOpen})}},{key:"toggleLanguage",value:function(){this.setState({french:!this.state.french})}},{key:"toggleHamburgerMenu",value:function(){this.setState({hamburgerMenu:!this.state.hamburgerMenu})}},{key:"render",value:function(){var e=this;return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-languages"},l.a.createElement("img",{onClick:this.props.context.changeLanguage,"data-language":"fr",src:"images/fr.png",alt:"french language icon"}),l.a.createElement("img",{onClick:this.props.context.changeLanguage,"data-language":"en",src:"images/en.png",alt:"english language icon"})),l.a.createElement("div",{className:"logo"},l.a.createElement(d.b,{className:"link",to:"/"},l.a.createElement("img",{src:"images/logo.png",alt:""}))),l.a.createElement("span",{style:{fontSize:"30px",cursor:"pointer"},className:this.state.hamburgerMenu?"hamburger-menu open":"hamburger-menu",onClick:this.toggleHamburgerMenu},"\u2630"),l.a.createElement("div",{className:this.state.hamburgerMenu?"overlay-menu overlay-menu-open":"overlay-menu"},l.a.createElement("div",{className:"close-btn",onClick:this.toggleHamburgerMenu},"\xd7"),l.a.createElement("div",{class:"overlay-content"},l.a.createElement(d.b,{className:"link-hamburger",onClick:this.toggleHamburgerMenu,to:"/projets"},"en"===e.props.context.state.language?l.a.createElement("p",null,"Bio/Projects"):l.a.createElement("p",null,"Bio/Projets")),l.a.createElement(d.b,{className:"link-hamburger",onClick:this.toggleHamburgerMenu,to:"/manifeste"},"en"===e.props.context.state.language?l.a.createElement("p",null,"Manifesto"):l.a.createElement("p",null,"Manifeste")),l.a.createElement(d.b,{className:"link-hamburger",onClick:this.toggleHamburgerMenu,to:"/r\xe9sum\xe9s"},"en"===e.props.context.state.language?l.a.createElement("p",null,"Summaries"):l.a.createElement("p",null,"R\xe9sum\xe9s")),l.a.createElement(d.b,{className:"link-hamburger",onClick:this.toggleHamburgerMenu,to:"/lettres"},"en"===e.props.context.state.language?l.a.createElement("p",null,"Letters"):l.a.createElement("p",null,"Lettres")),l.a.createElement(d.b,{className:"link-hamburger",onClick:this.toggleHamburgerMenu,to:"/partenaires"},"en"===e.props.context.state.language?l.a.createElement("p",null,"Partners"):l.a.createElement("p",null,"Partenaires")))),l.a.createElement("div",{onClick:this.toggleCircularMenu,className:this.state.circularOpen?"circular-menu top-right open":"circular-menu top-right"},l.a.createElement(d.b,{className:"link disc l0 rotate",to:"/partenaires"},"en"===e.props.context.state.language?l.a.createElement("div",null,"Partners"):l.a.createElement("div",null,"Partenaires")),l.a.createElement(d.b,{className:"link disc l1 rotate",to:"/lettres"},"en"===e.props.context.state.language?l.a.createElement("div",null,"Letters"):l.a.createElement("div",null,"Lettres")),l.a.createElement(d.b,{className:"link disc l2 rotate",to:"/r\xe9sum\xe9s"},"en"===e.props.context.state.language?l.a.createElement("div",null,"Summaries"):l.a.createElement("div",null,"R\xe9sum\xe9s")),l.a.createElement(d.b,{className:"link disc l3 rotate",to:"/manifeste"},"en"===e.props.context.state.language?l.a.createElement("div",null,"Manifesto"):l.a.createElement("div",null,"Manifeste")),l.a.createElement(d.b,{className:"link disc l4 rotate",to:"/projets"},"en"===e.props.context.state.language?l.a.createElement("div",null,"Bio/Projects"):l.a.createElement("div",null,"Bio/Projets")),this.state.open?l.a.createElement(d.b,{className:"link disc l5 toggle"},"en"===e.props.context.state.language?l.a.createElement("div",null,"Close"):l.a.createElement("div",null,"Fermer")):l.a.createElement(d.b,{className:"link disc l5 toggle"},(e.props.context.state.language,l.a.createElement("div",null,"Menu")))))}}]),t}(n.Component)),E=Object(g.e)(h),v=l.a.createContext(),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={language:""},a.changeLanguage=function(e){a.setState({language:e.target.dataset.language})},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(v.Provider,{value:{state:this.state,changeLanguage:this.changeLanguage}},this.props.children)}}]),t}(n.Component),f=(a(90),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"Home"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},l.a.createElement("path",{fill:"#F9B470","fill-opacity":"1",d:"M0,192L0,96L51.4,96L51.4,96L102.9,96L102.9,256L154.3,256L154.3,96L205.7,96L205.7,256L257.1,256L257.1,224L308.6,224L308.6,32L360,32L360,256L411.4,256L411.4,160L462.9,160L462.9,224L514.3,224L514.3,256L565.7,256L565.7,128L617.1,128L617.1,160L668.6,160L668.6,32L720,32L720,96L771.4,96L771.4,224L822.9,224L822.9,192L874.3,192L874.3,160L925.7,160L925.7,128L977.1,128L977.1,32L1028.6,32L1028.6,0L1080,0L1080,96L1131.4,96L1131.4,96L1182.9,96L1182.9,128L1234.3,128L1234.3,192L1285.7,192L1285.7,192L1337.1,192L1337.1,96L1388.6,96L1388.6,256L1440,256L1440,0L1388.6,0L1388.6,0L1337.1,0L1337.1,0L1285.7,0L1285.7,0L1234.3,0L1234.3,0L1182.9,0L1182.9,0L1131.4,0L1131.4,0L1080,0L1080,0L1028.6,0L1028.6,0L977.1,0L977.1,0L925.7,0L925.7,0L874.3,0L874.3,0L822.9,0L822.9,0L771.4,0L771.4,0L720,0L720,0L668.6,0L668.6,0L617.1,0L617.1,0L565.7,0L565.7,0L514.3,0L514.3,0L462.9,0L462.9,0L411.4,0L411.4,0L360,0L360,0L308.6,0L308.6,0L257.1,0L257.1,0L205.7,0L205.7,0L154.3,0L154.3,0L102.9,0L102.9,0L51.4,0L51.4,0L0,0L0,0Z"})),"            ","en"===e.state.language?l.a.createElement("div",{className:"intro-section"},l.a.createElement("div",{className:"about-section"},l.a.createElement("p",{className:"headline"},"Hi,"),l.a.createElement("p",{className:"main-sentence"},"My name is ",l.a.createElement("strong",{className:"bold"},"Lea Ikkache"),", I\u2019m an engineer, musician and campaigner for sustainable development and equality."),l.a.createElement("p",null,"After giving it a lot of thought and discovering many amazing persons and projects, I\u2019m pursuing what I believe to be the most impactful path : that of ",l.a.createElement("span",{className:"bold"},"education"),", ",l.a.createElement("span",{className:"bold"},"training")," and ",l.a.createElement("span",{className:"bold"},"writing"),"."),l.a.createElement("p",null,"I offer training in ",l.a.createElement("span",{className:"bold"},"entrepreneurship"),", ",l.a.createElement("span",{className:"bold"},"sustainability")," and ",l.a.createElement("span",{className:"bold"},"coding")," for individuals and organizations."))):l.a.createElement("div",{className:"intro-section"},l.a.createElement("div",{className:"about-section"},l.a.createElement("p",{className:"headline"},"Bonjour,"),l.a.createElement("p",{className:"main-sentence"},"Je suis ",l.a.createElement("strong",{className:"bold"},"L\xe9a Ikkache"),", ing\xe9nieure, musicienne, militante pour le d\xe9veloppement durable et l\u2019\xe9galit\xe9."),l.a.createElement("p",null,"Apr\xe8s une longue r\xe9flexion et de nombreuses d\xe9couvertes de personnes et de projets inspirants, je me lance dans la voie qui me semble avoir le meilleur ratio \xe9nergie d\xe9pens\xe9e / impact positif : celle de ",l.a.createElement("span",{className:"bold"},"l\u2019\xe9ducation"),", de la ",l.a.createElement("span",{className:"bold"},"formation")," et de ",l.a.createElement("span",{className:"bold"},"l\u2019\xe9criture"),"."),l.a.createElement("p",null,"Je propose des formations en ",l.a.createElement("span",{className:"bold"},"entrepreunariat"),", en ",l.a.createElement("span",{className:"bold"},"d\xe9veloppement durable"),", et en ",l.a.createElement("span",{className:"bold"},"programmation")," pour les particuliers et les organisations."))),"en"===e.state.language?l.a.createElement("div",{className:"goals-section-container"},l.a.createElement("div",{className:"goals-section"},l.a.createElement("p",{className:"headline"},"This website might be valuable to you if ..."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:"images/lost.svg",alt:""}),l.a.createElement("p",null,"You\u2019d like to get involved in sustainability or equality, but you\u2019re not sure about how to get started")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/value.svg",alt:""}),l.a.createElement("p",null,"You are calling your work into question, you want it to be more fulfilling and impactful")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/green-earth.svg",alt:""}),l.a.createElement("p",null,"You are looking for ways to convince people that sustainability and equality are relevant")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/lightbulb.svg",alt:""}),l.a.createElement("p",null,"You are curious about these subjects"))))):l.a.createElement("div",{className:"goals-section-container"},l.a.createElement("div",{className:"goals-section"},l.a.createElement("p",{className:"headline"},"Ce site est fait pour vous si ..."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:"images/lost.svg",alt:""}),l.a.createElement("p",null,"Vous \xeates int\xe9ress\xe9.e par les sujets du d\xe9veloppement durable, du d\xe9veloppement personnel et de l\u2019entrepreunariat, mais vous ne savez pas par o\xf9 commencer")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/value.svg",alt:""}),l.a.createElement("p",null,"Vous vous questionnez sur votre travail, vous voudriez qu\u2019il produise plus de valeur ou ait un impact plus positif")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/green-earth.svg",alt:""}),l.a.createElement("p",null,"Vous souhaitez compl\xe9ter votre discours pour convaincre de l\u2019utilit\xe9 d\xe9veloppement durable et de l\u2019\xe9galit\xe9")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/lightbulb.svg",alt:""}),l.a.createElement("p",null,"Vous \xeates curieux de ces sujets"))))))}))}}]),t}(n.Component)),L=a(3),j=a(35),w=a(18);function O(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function x(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?O(a,!0).forEach((function(t){Object(L.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):O(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).onScroll=a.onScroll.bind(Object(u.a)(a)),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"areChildrenInView",value:function(){var e=this.children.getBoundingClientRect(),t=window.innerHeight||document.documentElement.clientHeight;return e.bottom>=0&&e.bottom<=t||e.top>=0&&e.top<=t}},{key:"componentDidMount",value:function(){this.props.config.animations&&(window.addEventListener("scroll",this.onScroll),window.addEventListener("resize",this.onScroll),this.onScroll())}},{key:"componentWillUnmount",value:function(){window.removeEventListener("scroll",this.onScroll),window.removeEventListener("resize",this.onScroll)}},{key:"onScroll",value:function(){var e=this.areChildrenInView();this.props.onInView(e)}},{key:"render",value:function(){var e,t,a=this,n=this.props,r=n.children,i=n.even,c=n.inView,s=n.config,o=s.circleWidth,m=s.mediaWidthMed,u=s.paddingToItem,p=s.paddingToItemSmall,d=s.itemWidth,g=s.itemWidthMed,h=s.animations,E=s.lineWidth,v=s.evenItemOffset,b=s.offsetHidden,f=s.triangleWidth,j=s.triangleOffset,w=s.triangleHeight,O=s.activeColor,y=s.mediaWidthSmall,N=s.smallItemWidthPadding,k=s.itemPadding,C=o+u+f-E+v,S=C+d,P=C+g,M={right:"-".concat(f-1,"px"),borderWidth:"".concat(w,"px 0 ").concat(w,"px ").concat(f,"px"),borderColor:"transparent transparent transparent ".concat(O)},I={left:"-".concat(f-1,"px"),borderWidth:"".concat(w,"px ").concat(f,"px ").concat(w,"px 0"),borderColor:"transparent ".concat(O," transparent transparent")},W="@media screen and (min-width: ".concat(y,"px)\n       and (max-width: ").concat(m,"px)"),F="@media screen and (max-width: ".concat(y,"px)"),T={base:(e={position:"relative",bottom:"0",width:d+"px",padding:k+"px",background:O,visibility:h?"hidden":null,opacity:h?0:1,transition:h?"all .5s ease-in-out":null},Object(L.a)(e,W,{width:g+"px"}),Object(L.a)(e,F,{width:"calc(100vw - ".concat(f+o+N,"px)")}),Object(L.a)(e,"@media print",{width:"100%",left:0,transform:null}),e),inView:{transform:"none",visibility:"visible",opacity:"1"},even:(t={left:"-".concat(S,"px"),transform:h?"translate3d(-".concat(b,"px,0,0)"):null},Object(L.a)(t,W,{left:"-".concat(P,"px")}),Object(L.a)(t,F,{left:p+f+"px"}),t),odd:Object(L.a)({left:u+f+"px",transform:h?"translate3d(".concat(b,"px,0,0)"):null},F,{left:p+f+"px"}),triangle:{base:{position:"absolute",bottom:j+"px",width:"0",height:"0",borderStyle:"solid"},even:x({},M,Object(L.a)({},F,I)),odd:I}},V={};return s.addEvenPropToChildren&&(V=x({},V,{even:i})),l.a.createElement("div",{style:[T.base,i?T.even:T.odd,c&&T.inView]},l.a.createElement("span",{style:[T.triangle.base,i?T.triangle.even:T.triangle.odd,c&&T.triangle.inView]}),l.a.createElement("div",{ref:function(e){return a.children=e}},l.a.cloneElement(r,V)))}}]),t}(l.a.Component),N=Object(w.a)(y),k=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).onInView=a.onInView.bind(Object(u.a)(a)),a.state={inView:!1},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"onInView",value:function(e){this.setState({inView:e})}},{key:"render",value:function(){var e,t=this.props,a=t.children,n=(t.icon,Object(j.a)(t,["children","icon"])),r=this.state.inView,i=this.props.config,c=i.lineWidth,s=i.circleWidth,o=i.paddingTop,m=i.lineColor,u=i.activeColor,p=i.mediaWidthSmall,d=i.twoSidedOverlap,g=i.animations,h={base:(e={listStyleType:"none",position:"relative",width:c+"px",margin:"0 auto -".concat(d,"px auto"),paddingTop:o+"px",background:m},Object(L.a)(e,"@media screen and (max-width: ".concat(p,"px)"),{margin:"0 auto 0 20px"}),Object(L.a)(e,"@media print",{margin:0,width:"100%",paddingTop:0}),e),circle:{base:{position:"absolute",bottom:"0",transform:"translateX(-50%)",width:s+"px",height:s+"px",borderRadius:"50%",background:m,transition:g?"background .5s ease-in-out":null,zIndex:1},inner:{base:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"}},inView:{background:u}}};return l.a.createElement("div",{style:[h.base]},l.a.createElement("div",null,l.a.createElement(N,Object.assign({},n,{inView:r,onInView:this.onInView}),a)),l.a.createElement("span",{className:"no-print",style:[h.circle.base,r&&h.circle.inView]}))}}]),t}(l.a.Component),C=Object(w.a)(k),S={paddingTop:50,mediaWidthMed:900,mediaWidthSmall:700,activeColor:"#F45B69",color:"black",twoSidedOverlap:80,animations:!0,addEvenPropToChildren:!1,lineColor:"#FFF",circleWidth:30,paddingToItem:30,paddingToItemSmall:20,lineWidth:5,triangleWidth:16,triangleHeight:8,itemWidth:350,itemWidthMed:250,offsetHidden:200,triangleOffset:7,smallItemWidthPadding:50,itemPadding:16,evenItemOffset:0};function P(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var M=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={twoSided:!0},a.onTwoSidedChange=a.onTwoSidedChange.bind(Object(u.a)(a)),a.componentWillReceiveProps(e),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.children;var t=Object(j.a)(e,["children"]);this.mergedConfig=function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?P(a,!0).forEach((function(t){Object(L.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):P(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},S,{},t)}},{key:"componentWillMount",value:function(){var e=this.mergedConfig.mediaWidthSmall;window&&window.matchMedia&&(this.mqTwoSided=window.matchMedia("(min-width: ".concat(e,"px)")),this.mqTwoSided.addListener(this.onTwoSidedChange),this.onTwoSidedChange(this.mqTwoSided))}},{key:"componentWillUnmount",value:function(){this.mqTwoSided&&this.mqTwoSided.removeListener(this.onTwoSidedChange)}},{key:"onTwoSidedChange",value:function(e){this.setState({twoSided:e.matches})}},{key:"render",value:function(){var e=this,t=this.props.children,a=this.mergedConfig,n=a.color,r=a.twoSidedOverlap,i=this.state.twoSided,c=0,s={base:Object(L.a)({textAlign:"center",paddingBottom:i&&r+"px",color:n,overflow:"hidden"},this.mqTwoSidedString,{marginBottom:r+"px"})};return l.a.createElement("div",{style:[s.base]},l.a.Children.map(t,(function(t){return l.a.createElement(C,{even:c++%2===0&&i,config:e.mergedConfig},t)})))}}]),t}(l.a.Component),I=Object(w.a)(M),W=(a(97),a(27),a(39));function F(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"About"},l.a.createElement("div",{className:"Bio"},"en"===e.state.language?l.a.createElement("div",null,l.a.createElement("h1",{className:"headline"},"About me"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!")):l.a.createElement("div",null,l.a.createElement("h1",{className:"headline"},"A propos"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat vero maxime molestias esse magnam labore provident repellendus eos consectetur nemo tempora accusantium veritatis, odit repellat enim aperiam aspernatur minima harum!"))),l.a.createElement("div",{className:"Projects"},"en"===e.state.language?l.a.createElement("div",null,l.a.createElement("h1",{className:"headline"},"Projects")):l.a.createElement("div",null,l.a.createElement("h1",{className:"headline"},"Projets")),l.a.createElement(W.a,null,l.a.createElement(I,{activeColor:"#F49370"},l.a.createElement("div",{className:"project-container"},l.a.createElement("a",{href:""},l.a.createElement("h1",null,"CRoC")),l.a.createElement("img",{src:"images/croc.png",alt:""})),l.a.createElement("div",{className:"project-container"},l.a.createElement("a",{href:""},l.a.createElement("h1",null,"Third arm")),l.a.createElement("img",{src:"images/third_arm.jpg",alt:""})),l.a.createElement("div",{className:"project-container"},l.a.createElement("a",{href:""},l.a.createElement("h1",null,"Earsketch")),l.a.createElement("img",{src:"images/earsketch.png",alt:""})),l.a.createElement("div",{className:"project-container"},l.a.createElement("a",{href:""},l.a.createElement("h1",null,"I-corps")),l.a.createElement("img",{src:"images/icorps.jpg",alt:""})),l.a.createElement("div",{className:"project-container"},l.a.createElement("a",{href:""},l.a.createElement("h1",null,"RemeD")),l.a.createElement("img",{src:"images/remed.png",alt:""})),l.a.createElement("div",{className:"project-container"},l.a.createElement("a",{href:""},l.a.createElement("h1",null,"Women In Music Tech")),l.a.createElement("img",{src:"images/wimt.png",alt:""})),l.a.createElement("div",{className:"project-container"},l.a.createElement("a",{href:""},l.a.createElement("h1",null,"Whale Shark Project")),l.a.createElement("img",{src:"images/wsp.jpg",alt:""})),l.a.createElement("div",{className:"project-container"},l.a.createElement("a",{href:""},l.a.createElement("h1",null,"Spark")),l.a.createElement("img",{src:"images/spark.png",alt:""})),l.a.createElement("div",{className:"project-container"},l.a.createElement("a",{href:""},l.a.createElement("h1",null,"Rentr\xe9e de la fresque \xe0 CS")),l.a.createElement("img",{src:"images/fresque.jpg",alt:""})),l.a.createElement("div",{className:"project-container"},l.a.createElement("a",{href:""},l.a.createElement("h1",null,"Centre Egalit\xe9 des Chances")),l.a.createElement("img",{src:"images/cec.jpg",alt:""}))))))}))}a(98);function T(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"Manifesto"},"en"===e.state.language?l.a.createElement("h1",{className:"headline"},"Manifesto"):l.a.createElement("h1",{className:"headline"},"Manifeste"),l.a.createElement("section",null,"en"===e.state.language?l.a.createElement("h2",null,"Under construction ..."):l.a.createElement("h2",null,"En construction ..."),l.a.createElement("img",{src:"images/coming.svg",alt:""})))}))}function V(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"Summaries"},"en"===e.state.language?l.a.createElement("h1",{className:"headline"},"Summaries"):l.a.createElement("h1",{className:"headline"},"R\xe9sum\xe9s"))}))}a(99);function H(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"Letters"},"en"===e.state.language?l.a.createElement("h1",{className:"headline"},"Letters"):l.a.createElement("h1",{className:"headline"},"Lettres"),l.a.createElement("ul",{id:"hexGrid"},l.a.createElement("li",{class:"hex"},l.a.createElement("div",{class:"hexIn"},l.a.createElement("a",{class:"hexLink",href:"#"},l.a.createElement("img",{src:"images/pain.jpeg",alt:""}),"en"===e.state.language?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"English title"),l.a.createElement("p",null,"English summary")):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Essai sur la souffrance"),l.a.createElement("p",null,"Un r\xe9sum\xe9"))))),l.a.createElement("li",{class:"hex"},l.a.createElement("div",{class:"hexIn"},l.a.createElement("a",{class:"hexLink",href:"#"},l.a.createElement("img",{src:"images/sustainable.jpg",alt:""}),"en"===e.state.language?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"English title"),l.a.createElement("p",null,"English summary")):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Comprendre le d\xe9veloppement durable"),l.a.createElement("p",null,"Un r\xe9sum\xe9"))))),l.a.createElement("li",{class:"hex"},l.a.createElement("div",{class:"hexIn"},l.a.createElement("a",{class:"hexLink",href:"#"},l.a.createElement("img",{src:"images/path.jpg",alt:""}),"en"===e.state.language?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"English title"),l.a.createElement("p",null,"English summary")):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Par o\xf9 commencer"),l.a.createElement("p",null,"Un r\xe9sum\xe9"))))),l.a.createElement("li",{class:"hex"},l.a.createElement("div",{class:"hexIn"},l.a.createElement("a",{class:"hexLink",href:"#"},l.a.createElement("img",{src:"images/feminism.png",alt:""}),"en"===e.state.language?l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"English title"),l.a.createElement("p",null,"English summary")):l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,"Petit guide de f\xe9ministe d\xe9butant.e"),l.a.createElement("p",null,"Un r\xe9sum\xe9")))))))}))}function q(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"Prices"},"en"===e.state.language?l.a.createElement("div",null,"Prices"):l.a.createElement("div",null,"Prestations"))}))}function B(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"Partners"},"en"===e.state.language?l.a.createElement("h1",{className:"headline"},"Partners"):l.a.createElement("h1",{className:"headline"},"Partenaires"))}))}a(100);var z=function(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{context:e}),l.a.createElement(g.a,{exact:!0,path:"/",component:f}),l.a.createElement(g.a,{path:"/projets",component:F}),l.a.createElement(g.a,{path:"/manifeste",component:T}),l.a.createElement(g.a,{path:"/r\xe9sum\xe9s",component:V}),l.a.createElement(g.a,{path:"/lettres",component:H}),l.a.createElement(g.a,{path:"/prestations",component:q}),l.a.createElement(g.a,{path:"/partenaires",component:B}))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(b,null,l.a.createElement(d.a,null,l.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},27:function(e,t,a){},79:function(e,t,a){e.exports=a(101)},84:function(e,t,a){},85:function(e,t,a){},90:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){}},[[79,1,2]]]);
//# sourceMappingURL=main.86eb7c8d.chunk.js.map