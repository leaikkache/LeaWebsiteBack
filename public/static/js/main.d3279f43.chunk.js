(window.webpackJsonpclient=window.webpackJsonpclient||[]).push([[0],{23:function(e,a,t){e.exports=t(38)},28:function(e,a,t){},29:function(e,a,t){},35:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){},38:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(20),s=t.n(r),c=(t(28),t(7)),i=t(8),o=t(10),m=t(9),u=t(14),L=t(11),g=t(2),p=t(6),d=(t(29),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={open:!1,french:!0},t.toggleOpen=t.toggleOpen.bind(Object(u.a)(t)),t.toggleLanguage=t.toggleLanguage.bind(Object(u.a)(t)),t}return Object(L.a)(a,e),Object(i.a)(a,[{key:"toggleOpen",value:function(){this.setState({open:!this.state.open})}},{key:"toggleLanguage",value:function(){this.setState({french:!this.state.french})}},{key:"render",value:function(){var e=this;return l.a.createElement("nav",null,l.a.createElement("div",{className:"nav-languages"},l.a.createElement("img",{onClick:this.props.context.changeLanguage,"data-language":"fr",src:"images/fr.png",alt:"french language icon"}),l.a.createElement("img",{onClick:this.props.context.changeLanguage,"data-language":"en",src:"images/en.png",alt:"english language icon"})),l.a.createElement("div",{className:"logo"},l.a.createElement(g.b,{className:"link",to:"/"},l.a.createElement("img",{src:"images/logo.png",alt:""}))),l.a.createElement("div",null),l.a.createElement("div",{onClick:this.toggleOpen,className:this.state.open?"circular-menu top-right open":"circular-menu top-right"},l.a.createElement(g.b,{className:"link disc l0 rotate",to:"/partenaires"},"en"===e.props.context.state.language?l.a.createElement("div",null,"Partners"):l.a.createElement("div",null,"Partenaires")),l.a.createElement(g.b,{className:"link disc l1 rotate",to:"/prestations"},"en"===e.props.context.state.language?l.a.createElement("div",null,"Prices"):l.a.createElement("div",null,"Prestations")),l.a.createElement(g.b,{className:"link disc l2 rotate",to:"/lettres"},"en"===e.props.context.state.language?l.a.createElement("div",null,"Letters"):l.a.createElement("div",null,"Lettres")),l.a.createElement(g.b,{className:"link disc l3 rotate",to:"/r\xe9sum\xe9s"},"en"===e.props.context.state.language?l.a.createElement("div",null,"Summaries"):l.a.createElement("div",null,"R\xe9sum\xe9s")),l.a.createElement(g.b,{className:"link disc l3 rotate",to:"/manifeste"},"en"===e.props.context.state.language?l.a.createElement("div",null,"Manifesto"):l.a.createElement("div",null,"Manifeste")),l.a.createElement(g.b,{className:"link disc l4 rotate",to:"/projets"},"en"===e.props.context.state.language?l.a.createElement("div",null,"Bio/Projects"):l.a.createElement("div",null,"Bio/Projets")),this.state.open?l.a.createElement(g.b,{className:"link disc l5 toggle"},"en"===e.props.context.state.language?l.a.createElement("div",null,"Close"):l.a.createElement("div",null,"Fermer")):l.a.createElement(g.b,{className:"link disc l5 toggle"},(e.props.context.state.language,l.a.createElement("div",null,"Menu")))))}}]),a}(n.Component)),E=Object(p.e)(d),v=l.a.createContext(),h=function(e){function a(){var e,t;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={language:""},t.changeLanguage=function(e){t.setState({language:e.target.dataset.language})},t}return Object(L.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(v.Provider,{value:{state:this.state,changeLanguage:this.changeLanguage}},this.props.children)}}]),a}(n.Component),f=(t(35),function(e){function a(){return Object(c.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(L.a)(a,e),Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"Home"},l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},l.a.createElement("path",{fill:"#F9B470","fill-opacity":"1",d:"M0,192L0,96L51.4,96L51.4,96L102.9,96L102.9,256L154.3,256L154.3,96L205.7,96L205.7,256L257.1,256L257.1,224L308.6,224L308.6,32L360,32L360,256L411.4,256L411.4,160L462.9,160L462.9,224L514.3,224L514.3,256L565.7,256L565.7,128L617.1,128L617.1,160L668.6,160L668.6,32L720,32L720,96L771.4,96L771.4,224L822.9,224L822.9,192L874.3,192L874.3,160L925.7,160L925.7,128L977.1,128L977.1,32L1028.6,32L1028.6,0L1080,0L1080,96L1131.4,96L1131.4,96L1182.9,96L1182.9,128L1234.3,128L1234.3,192L1285.7,192L1285.7,192L1337.1,192L1337.1,96L1388.6,96L1388.6,256L1440,256L1440,0L1388.6,0L1388.6,0L1337.1,0L1337.1,0L1285.7,0L1285.7,0L1234.3,0L1234.3,0L1182.9,0L1182.9,0L1131.4,0L1131.4,0L1080,0L1080,0L1028.6,0L1028.6,0L977.1,0L977.1,0L925.7,0L925.7,0L874.3,0L874.3,0L822.9,0L822.9,0L771.4,0L771.4,0L720,0L720,0L668.6,0L668.6,0L617.1,0L617.1,0L565.7,0L565.7,0L514.3,0L514.3,0L462.9,0L462.9,0L411.4,0L411.4,0L360,0L360,0L308.6,0L308.6,0L257.1,0L257.1,0L205.7,0L205.7,0L154.3,0L154.3,0L102.9,0L102.9,0L51.4,0L51.4,0L0,0L0,0Z"})),"            ","en"===e.state.language?l.a.createElement("div",{className:"intro-section"},l.a.createElement("div",{className:"about-section"},l.a.createElement("p",{className:"headline"},"Hi,"),l.a.createElement("p",{className:"main-sentence"},"My name is ",l.a.createElement("strong",{className:"bold"},"Lea Ikkache"),", I\u2019m an engineer, musician and campaigner for sustainable development and equality."),l.a.createElement("p",null,"After giving it a lot of thought and discovering many amazing persons and projects, I\u2019m pursuing what I believe to be the most impactful path : that of ",l.a.createElement("span",{className:"bold"},"education"),", ",l.a.createElement("span",{className:"bold"},"training")," and ",l.a.createElement("span",{className:"bold"},"writing"),"."),l.a.createElement("p",null,"I offer training in ",l.a.createElement("span",{className:"bold"},"entrepreneurship"),", ",l.a.createElement("span",{className:"bold"},"sustainability")," and ",l.a.createElement("span",{className:"bold"},"coding")," for individuals and organizations."))):l.a.createElement("div",{className:"intro-section"},l.a.createElement("div",{className:"about-section"},l.a.createElement("p",{className:"headline"},"Bonjour,"),l.a.createElement("p",{className:"main-sentence"},"Je suis ",l.a.createElement("strong",{className:"bold"},"L\xe9a Ikkache"),", ing\xe9nieure, musicienne, militante pour le d\xe9veloppement durable et l\u2019\xe9galit\xe9."),l.a.createElement("p",null,"Apr\xe8s une longue r\xe9flexion et de nombreuses d\xe9couvertes de personnes et de projets inspirants, je me lance dans la voie qui me semble avoir le meilleur ratio \xe9nergie d\xe9pens\xe9e / impact positif : celle de ",l.a.createElement("span",{className:"bold"},"l\u2019\xe9ducation"),", de la ",l.a.createElement("span",{className:"bold"},"formation")," et de ",l.a.createElement("span",{className:"bold"},"l\u2019\xe9criture"),"."),l.a.createElement("p",null,"Je propose des formations en ",l.a.createElement("span",{className:"bold"},"entrepreunariat"),", en ",l.a.createElement("span",{className:"bold"},"d\xe9veloppement durable"),", et en ",l.a.createElement("span",{className:"bold"},"programmation")," pour les particuliers et les organisations."))),l.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1440 320"},l.a.createElement("path",{fill:"#F9B470","fill-opacity":"1",d:"M0,192L0,32L43.6,32L43.6,320L87.3,320L87.3,288L130.9,288L130.9,224L174.5,224L174.5,320L218.2,320L218.2,224L261.8,224L261.8,288L305.5,288L305.5,96L349.1,96L349.1,192L392.7,192L392.7,160L436.4,160L436.4,224L480,224L480,256L523.6,256L523.6,160L567.3,160L567.3,160L610.9,160L610.9,32L654.5,32L654.5,192L698.2,192L698.2,224L741.8,224L741.8,256L785.5,256L785.5,160L829.1,160L829.1,64L872.7,64L872.7,160L916.4,160L916.4,32L960,32L960,96L1003.6,96L1003.6,288L1047.3,288L1047.3,288L1090.9,288L1090.9,160L1134.5,160L1134.5,64L1178.2,64L1178.2,288L1221.8,288L1221.8,256L1265.5,256L1265.5,288L1309.1,288L1309.1,96L1352.7,96L1352.7,320L1396.4,320L1396.4,160L1440,160L1440,320L1396.4,320L1396.4,320L1352.7,320L1352.7,320L1309.1,320L1309.1,320L1265.5,320L1265.5,320L1221.8,320L1221.8,320L1178.2,320L1178.2,320L1134.5,320L1134.5,320L1090.9,320L1090.9,320L1047.3,320L1047.3,320L1003.6,320L1003.6,320L960,320L960,320L916.4,320L916.4,320L872.7,320L872.7,320L829.1,320L829.1,320L785.5,320L785.5,320L741.8,320L741.8,320L698.2,320L698.2,320L654.5,320L654.5,320L610.9,320L610.9,320L567.3,320L567.3,320L523.6,320L523.6,320L480,320L480,320L436.4,320L436.4,320L392.7,320L392.7,320L349.1,320L349.1,320L305.5,320L305.5,320L261.8,320L261.8,320L218.2,320L218.2,320L174.5,320L174.5,320L130.9,320L130.9,320L87.3,320L87.3,320L43.6,320L43.6,320L0,320L0,320Z"})),"en"===e.state.language?l.a.createElement("div",{className:"goals-section-container"},l.a.createElement("div",{className:"goals-section"},l.a.createElement("p",{className:"headline"},"This website might be valuable to you if ..."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:"images/lost.svg",alt:""}),l.a.createElement("p",null,"You\u2019d like to get involved in sustainability or equality, but you\u2019re not sure about how to get started")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/value.svg",alt:""}),l.a.createElement("p",null,"You are calling your work into question, you want it to be more fulfilling and impactful")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/green-earth.svg",alt:""}),l.a.createElement("p",null,"You are looking for ways to convince people that sustainability and equality are relevant")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/lightbulb.svg",alt:""}),l.a.createElement("p",null,"You are curious about these subjects"))))):l.a.createElement("div",{className:"goals-section-container"},l.a.createElement("div",{className:"goals-section"},l.a.createElement("p",{className:"headline"},"Ce site est fait pour vous si ..."),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("img",{src:"images/lost.svg",alt:""}),l.a.createElement("p",null,"Vous \xeates int\xe9ress\xe9.e par les sujets du d\xe9veloppement durable, du d\xe9veloppement personnel et de l\u2019entrepreunariat, mais vous ne savez pas par o\xf9 commencer")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/value.svg",alt:""}),l.a.createElement("p",null,"Vous vous questionnez sur votre travail, vous voudriez qu\u2019il produise plus de valeur ou ait un impact plus positif")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/green-earth.svg",alt:""}),l.a.createElement("p",null,"Vous souhaitez compl\xe9ter votre discours pour convaincre de l\u2019utilit\xe9 d\xe9veloppement durable et de l\u2019\xe9galit\xe9")),l.a.createElement("li",null,l.a.createElement("img",{src:"images/lightbulb.svg",alt:""}),l.a.createElement("p",null,"Vous \xeates curieux de ces sujets"))))))}))}}]),a}(n.Component));t(36);function b(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"Projects"},"en"===e.state.language?l.a.createElement("div",null,l.a.createElement("h1",null,"Projects")):l.a.createElement("div",null,l.a.createElement("h1",null,"Projets")),l.a.createElement("div",{className:"hexagons-container"},l.a.createElement("div",{className:"hexagon"}),l.a.createElement("div",{className:"hexagon"}),l.a.createElement("div",{className:"hexagon"}),l.a.createElement("div",{className:"hexagon"}),l.a.createElement("div",{className:"hexagon"}),l.a.createElement("div",{className:"hexagon"}),l.a.createElement("div",{className:"hexagon"})))}))}function N(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"Manifesto"},"en"===e.state.language?l.a.createElement("div",null,"Manifesto"):l.a.createElement("div",null,"Manifeste"))}))}function j(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"Summaries"},"en"===e.state.language?l.a.createElement("div",null,"Summaries"):l.a.createElement("div",null,"R\xe9sum\xe9s"))}))}function w(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"Letters"},"en"===e.state.language?l.a.createElement("div",null,"Letters"):l.a.createElement("div",null,"Lettres"))}))}function k(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"Prices"},"en"===e.state.language?l.a.createElement("div",null,"Prices"):l.a.createElement("div",null,"Prestations"))}))}function x(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"Partners"},"en"===e.state.language?l.a.createElement("div",null,"Partners"):l.a.createElement("div",null,"Partenaires"))}))}t(37);var y=function(){return l.a.createElement(v.Consumer,null,(function(e){return l.a.createElement("div",{className:"App"},l.a.createElement(E,{context:e}),l.a.createElement(p.a,{exact:!0,path:"/",component:f}),l.a.createElement(p.a,{path:"/projets",component:b}),l.a.createElement(p.a,{path:"/manifeste",component:N}),l.a.createElement(p.a,{path:"/r\xe9sum\xe9s",component:j}),l.a.createElement(p.a,{path:"/lettres",component:w}),l.a.createElement(p.a,{path:"/prestations",component:k}),l.a.createElement(p.a,{path:"/partenaires",component:x}))}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(h,null," ",l.a.createElement(g.a,null," ",l.a.createElement(y,null)," ")," "),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[23,1,2]]]);
//# sourceMappingURL=main.d3279f43.chunk.js.map