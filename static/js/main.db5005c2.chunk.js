(this["webpackJsonpmy-site"]=this["webpackJsonpmy-site"]||[]).push([[0],[,,function(e,t,a){e.exports={projectTitle:"ProjectArticle_projectTitle__6jVQf",articleImage:"ProjectArticle_articleImage__2S8J8",imageCaption:"ProjectArticle_imageCaption__3_pgP",multiImageContainer:"ProjectArticle_multiImageContainer__1xCos",projectLink:"ProjectArticle_projectLink__1ozXo",articleDescription:"ProjectArticle_articleDescription__J7Lhf"}},,,,function(e,t,a){e.exports={animatedLinkBlue:"AnimatedLinks_animatedLinkBlue__2kQkd",animatedLinkBlack:"AnimatedLinks_animatedLinkBlack__3puZS"}},,,,function(e,t,a){e.exports={sectionH2Header:"Sections_sectionH2Header__2e-nm",sectionH3Header:"Sections_sectionH3Header__1tqKW"}},,,,,,,,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(1),n=a.n(i),c=a(19),s=a.n(c),o=(a(29),a(9)),r=a(3),l=(a(30),a(13)),A=a(14),h=a(6),d=a.n(h),j=(a(31),a(0));var g=function(){var e=Object(i.useState)(!1),t=Object(l.a)(e,2),a=t[0],n=t[1];function c(){n(!1)}function s(e){var t=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:t+-50})}return Object(j.jsx)("div",{children:Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsx)("div",{className:"menu-button ",onClick:function(){n(!a)},children:a?Object(j.jsx)("i",{className:"fas fa-times"}):Object(j.jsx)("i",{className:"fas fa-bars"})}),Object(j.jsx)(o.b,{className:"navbar-logo",to:"/",children:"THOMAS NGUYEN"}),Object(j.jsx)("div",{className:a?"nav-menu nav-menu-open":"nav-menu",children:Object(j.jsxs)("ul",{className:"nav-menu-content",children:[Object(j.jsx)("li",{children:Object(j.jsx)(o.b,{to:"/",className:"nav-menu-item ".concat(d.a.animatedLinkBlack),onClick:c,children:"Home"})}),Object(j.jsx)("li",{children:Object(j.jsx)(A.a,{to:"/#skills-section",scroll:function(e){return s(e)},className:"nav-menu-item ".concat(d.a.animatedLinkBlack),onClick:c,children:"Skills"})}),Object(j.jsx)("li",{children:Object(j.jsx)(A.a,{to:"/#about-section",scroll:function(e){return s(e)},className:"nav-menu-item ".concat(d.a.animatedLinkBlack),onClick:c,children:"About"})}),Object(j.jsx)("li",{children:Object(j.jsx)(A.a,{to:"/#projects-section",scroll:function(e){return s(e)},className:"nav-menu-item ".concat(d.a.animatedLinkBlack),onClick:c,children:"Projects"})})]})})]})})};a(38);var m=function(){return Object(j.jsxs)("footer",{children:[Object(j.jsx)("h2",{children:"Thomas Nguyen Ly"}),Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:d.a.animatedLinkBlue,href:"mailto:thomas.nguyen47@gmail.com",children:"Contact"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:d.a.animatedLinkBlue,href:"https://www.linkedin.com/in/thomas-nguyen-ly-09a3351b2/",target:"_blank",rel:"noreferrer",children:"LinkedIn"})}),Object(j.jsx)("li",{children:Object(j.jsx)("a",{className:d.a.animatedLinkBlue,href:"https://github.com/ThomasNLy",target:"_blank",rel:"noreferrer",children:"GitHub"})})]})]})};var u,b,p=function(){var e=Object(r.f)();return Object(i.useEffect)((function(){window.scrollTo(0,0)}),[e]),null},C=a(22),I=a(23),O=a(24),w=a.n(O),f=[];var B=function(e){var t=Object(i.useState)(null),a=Object(l.a)(t,2),n=a[0],c=a[1],s=Object(i.useState)(null),o=Object(l.a)(s,2),r=o[0],A=o[1],h=e.styling;u=.45*window.innerHeight,window.innerWidth>=768&&(b=.93*window.innerWidth),b=window.innerWidth>=1024?.7*window.innerWidth:.95*window.innerWidth,Object(i.useEffect)((function(){return window.addEventListener("resize",g),function(){return window.removeEventListener("resize",g)}}));var d=function(){function e(t,a){Object(C.a)(this,e),this.loc=t,this.theta=a.noise(.005*t.x,.02*t.y)*a.TWO_PI,this.vel=a.createVector(2*a.cos(this.theta),2*a.sin(this.theta)),this.opacity=255,this.p5=a}return Object(I.a)(e,[{key:"run",value:function(){this.update(),this.display()}},{key:"update",value:function(){this.loc.add(this.vel)}},{key:"display",value:function(){this.p5.fill(255,255,255,this.opacity),this.p5.noStroke(),this.p5.ellipse(this.loc.x,this.loc.y,5,5)}}]),e}();function g(){n&&(window.innerWidth>=768&&(b=.93*window.innerWidth),b=window.innerWidth>=1024?.7*window.innerWidth:.95*window.innerWidth,n.resizeCanvas(b,r.offsetHeight),u=.45*window.innerHeight)}return Object(j.jsx)(w.a,{setup:function(e,t){c(e),A(t),t.classList.add(h),e.createCanvas(b,u).parent(t),e.background("#214976");for(var a=0;a<1e3;a++)f.push(new d(e.createVector(e.random(0,b),e.random(u/1.25)),e))},draw:function(e){e.frameRate(25),e.background("#214976"),f.forEach((function(e){e.run(),function(e){e.loc.x<0&&(e.loc.x=b);e.loc.x>b&&(e.loc.x=0);e.loc.y<0&&(e.loc.y=u);e.loc.y>u&&(e.loc.y=0)}(e)}))}})};a(39);var v=function(){return Object(j.jsx)("section",{className:"hero-section",children:Object(j.jsxs)("div",{className:"content-wrapper",children:[Object(j.jsx)(B,{styling:"p5-canvas"}),Object(j.jsxs)("div",{className:"hero-text",children:[Object(j.jsx)("p",{children:"Thomas Nguyen"}),Object(j.jsx)("p",{children:"Web Developer"}),Object(j.jsx)("p",{children:"Interactive Designer"})]}),Object(j.jsxs)("div",{className:"explore-indicator",children:[Object(j.jsx)("p",{children:"Explore"}),Object(j.jsx)("i",{className:"fas fa-caret-down"})]})]})})},x=(a(40),a(10)),Q=a.n(x);var E=function(){return Object(j.jsxs)("section",{id:"skills-section",children:[Object(j.jsx)("h2",{className:Q.a.sectionH2Header,children:"SKILLS"}),Object(j.jsxs)("div",{className:"skills-container",children:[Object(j.jsxs)("div",{className:"skill-set",children:[Object(j.jsx)("h3",{className:Q.a.sectionH3Header,children:"PROGRAMMING"}),Object(j.jsxs)("ul",{className:"subskills",children:[Object(j.jsx)("li",{children:"HTML"}),Object(j.jsx)("li",{children:"CSS"}),Object(j.jsx)("li",{children:"JavaScript"}),Object(j.jsx)("li",{children:"Java"})]})]}),Object(j.jsxs)("div",{className:"skill-set",children:[Object(j.jsx)("h3",{className:Q.a.sectionH3Header,children:"FRAMEWORKS"}),Object(j.jsxs)("ul",{className:"subskills",children:[Object(j.jsx)("li",{children:"React"}),Object(j.jsx)("li",{children:"Bootstrap"})]})]}),Object(j.jsxs)("div",{className:"skill-set",children:[Object(j.jsx)("h3",{className:Q.a.sectionH3Header,children:"DESIGN"}),Object(j.jsxs)("ul",{className:"subskills",children:[Object(j.jsx)("li",{children:"Adobe XD"}),Object(j.jsx)("li",{children:"Photoshop"}),Object(j.jsx)("li",{children:"Illustrator"})]})]})]})]})};a(41);var H=function(){return Object(j.jsxs)("section",{id:"about-section",children:[Object(j.jsx)("h2",{className:Q.a.sectionH2Header,children:"ABOUT"}),Object(j.jsx)("p",{children:"Hi! And welcome to my website. My name is Thomas and I am an aspiring Web Developer/Front End Developer. I graduated with a degree in Digital Media and some of my interests are UI/UX design, creative coding, creating interactive media and video game development."}),Object(j.jsx)("a",{className:"cv-link ".concat(d.a.animatedLinkBlue),href:"https://docs.google.com/document/d/18ANrP7eHyplLL9P2I0maKEOk4HFeu61G/edit?usp=sharing&ouid=117781079038070538627&rtpof=true&sd=true",target:"_blank",rel:"noreferrer",children:"CV/Resume"})]})};a(42);var k=function(e){var t=e.imgSrc,a=e.imgSrcSet,i=e.altText,n=e.projectTitle,c=e.link;return Object(j.jsxs)("div",{className:"card",children:[Object(j.jsx)("img",{src:t,alt:i,srcSet:a}),Object(j.jsxs)("div",{className:"card-content",children:[Object(j.jsx)("h3",{className:Q.a.sectionH3Header,children:n}),Object(j.jsx)(o.b,{to:c,className:"project-link ".concat(d.a.animatedLinkBlue),children:"View Project"})]})]})},N=(a(43),a.p+"static/media/covid_stats_thumbnail.ae17675f.png"),V=a.p+"static/media/covid_stats_thumbnail_mobile.08340946.png",y=a.p+"static/media/login_system_thumbnail.3bcf07f9.png",S="data:image/png;base64,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",P=a.p+"static/media/phostop_thumbnail.c21564ed.png",T=a.p+"static/media/phostop_thumbnail_mobile.46cfd89f.png";var L=function(){return Object(j.jsxs)("section",{id:"projects-section",children:[Object(j.jsx)("h2",{className:Q.a.sectionH2Header,children:"PROJECTS"}),Object(j.jsxs)("div",{className:"projects-container",children:[Object(j.jsx)(k,{imgSrc:V,imgSrcSet:"".concat(V," 400w, ").concat(N," 800w"),altText:"thumbnail of COVID STATS CAN's landing page",projectTitle:"COVID STATS CAN",link:"/covid-stats-can"}),Object(j.jsx)(k,{imgSrc:S,imgSrcSet:"".concat(S," 400w, ").concat(y," 800w"),altText:"thumbnail of Login System's landing page",projectTitle:"LOGIN SYSTEM",link:"/login-system"}),Object(j.jsx)(k,{imgSrc:P,imgSrcSet:"".concat(T," 400w, ").concat(P," 800w"),altText:"thumbnail of PhoStop's landing page",projectTitle:"PHOSTOP",link:"/phostop"})]})]})};var W=function(){return Object(j.jsxs)(n.a.Fragment,{children:[Object(j.jsx)(v,{}),Object(j.jsx)(E,{}),Object(j.jsx)(H,{}),Object(j.jsx)(L,{})]})},q=a(2),R=a.n(q),X=a.p+"static/media/covid_stats_statusBar.3e383d31.png";var Z=function(){return Object(j.jsxs)("article",{children:[Object(j.jsx)("h1",{className:R.a.projectTitle,children:"COVID STATS CAN"}),Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{className:R.a.articleImage,src:N,alt:"The Covid Stats Can webpage's landing page"}),Object(j.jsx)("figcaption",{className:R.a.imageCaption,children:"Website"})]}),Object(j.jsxs)("div",{className:R.a.articleDescription,children:[Object(j.jsx)("p",{children:"The purpose of this project was for me to learn how to create a react web app along with integrating web APIs into websites. The idea came to me as I kept hearing on the news and multiple media outlets how bad the COVID-19 pandemic was getting on a daily basis, but I wasn\u2019t able to find any concrete statistics in relation to the virus. Examples of this being the total amount of active cases/percentage of the population infected, the recovery rate for infected individuals and mortality rate. With this project I hope to accomplish just that through data visualization."}),Object(j.jsx)("p",{children:"Built with ReactJS, CSS and Open Covid API."}),Object(j.jsx)("a",{href:"https://github.com/ThomasNLy/project_3_covid_stat_website",rel:"noreferrer",className:R.a.projectLink,children:"Source Code"}),Object(j.jsx)("a",{href:"https://thomasnly.github.io/project_3_covid_stat_website/",rel:"noreferrer",className:R.a.projectLink,children:"Go to website"})]}),Object(j.jsx)("img",{className:R.a.articleImage,src:X,alt:"A figure displaying the various status bars and their different meanings: number of cases, recovered and mortality rate"}),Object(j.jsx)("div",{className:R.a.articleDescription,children:Object(j.jsx)("p",{children:"I wanted to present the information in a way that would be easily readable for the user rather than just showing pure stats in the form of numbers and percentages. Originally the thought of having it purely be numbers would suffice but I wanted a point of reference for what the numbers were supposed to relate too. By using bars that fill up based on the number of cases, recovery rate and mortality rate in relation to each provinces\u2019 population it gives a better perspective on the severity of the situation through a visual basis. Along with that is their respective colour coordination to indicate what each bar represents."})})]})},G=a.p+"static/media/login_system_forgotpassword.ce898491.png",U=a.p+"static/media/login_system_profile.f0cb75ca.png";var F=function(){return Object(j.jsxs)("article",{children:[Object(j.jsx)("h1",{className:R.a.projectTitle,children:"Login System"}),Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{className:R.a.articleImage,src:y,alt:"The login webpage's landing page"}),Object(j.jsx)("figcaption",{className:R.a.imageCaption,children:"Website"})]}),Object(j.jsxs)("div",{className:R.a.articleDescription,children:[Object(j.jsx)("p",{children:"The login page for a web service or app that allows users to sign up, login in or delete their account."}),Object(j.jsx)("p",{children:"My approach to this project was to create something that allowed me to utilize my knowledge of CSS animation and JavaScript along with its Object Oriented Programing (OOP) paradigm."}),Object(j.jsxs)("p",{children:["On the home page a user is able to login by entering their user name and password and clicking the sign in button. They may also click on the ",Object(j.jsx)("b",{children:"Forgot Password"})," link which will redirect them to the Forgot Password page in order to retrieve their password. In the event they don\u2019t have an account they may click on the ",Object(j.jsx)("b",{children:"Join Us"})," link to sign up for an account."]}),Object(j.jsx)("p",{children:"In order for a user to login in I had to have a back end database for the webpage to interact with to verify that the username and password entered was correct, however I wanted to focus on front end for this project. My solution to this problem was to utilize the browser\u2019s storage to cache the information and act as my database. A default account setup has also been setup with the username and password being admin."}),Object(j.jsx)("p",{children:"Built with HTML, CSS and JavaScript."}),Object(j.jsx)("a",{href:"https://github.com/ThomasNLy/project_2_login_page",rel:"noreferrer",className:R.a.projectLink,children:"Source Code"}),Object(j.jsx)("a",{href:"https://thomasnly.github.io/project_2_login_page/",rel:"noreferrer",className:R.a.projectLink,children:"Go to website"})]}),Object(j.jsxs)("div",{className:R.a.multiImageContainer,children:[Object(j.jsx)("img",{className:R.a.articleImage,src:G,alt:"The forgot password page"}),Object(j.jsx)("img",{className:R.a.articleImage,src:U,alt:"The account page with a module asking  if the user wants to delete their account"})]}),Object(j.jsx)("div",{className:R.a.articleDescription,children:Object(j.jsxs)("p",{children:["One of the most important things I wanted to focus on with this project was the UI and UX. I wanted to ensure that feedback was given whenever a user interacted with the website. Such as implementing a banner to scroll down on the forgot password page to let them know an email has been sent to reset their password. Along with that was having a modal pop up if they chose to delete their account to focus their attention on the decision they were about to make."," "]})})]})},Y=a.p+"static/media/phostop_homepage.eed41749.png";var M=function(){return Object(j.jsxs)("article",{children:[Object(j.jsx)("h1",{className:R.a.projectTitle,children:"PHOSTOP"}),Object(j.jsxs)("figure",{children:[Object(j.jsx)("img",{className:R.a.articleImage,src:P,alt:"The PhoStop's landing page hero section"}),Object(j.jsx)("figcaption",{className:R.a.imageCaption,children:"Website"})]}),Object(j.jsxs)("div",{className:R.a.articleDescription,children:[Object(j.jsx)("p",{children:"PhoStop is a website for a Vietnamese restaurant that focuses on incorporating fresh local ingredients into traditional recipes to create top tier delicious meals."}),Object(j.jsx)("p",{children:"Built with HTML, CSS and JavaScript."}),Object(j.jsx)("a",{href:"https://github.com/ThomasNLy/project_1_restaurant",target:"_blank",rel:"noreferrer",className:R.a.projectLink,children:"Source Code"}),Object(j.jsx)("a",{href:"https://thomasnly.github.io/project_1_restaurant/",target:"_blank",rel:"noreferrer",className:R.a.projectLink,children:"Go to website"})]}),Object(j.jsx)("img",{className:R.a.articleImage,src:Y,alt:"The entire homepage of Phostop's website"}),Object(j.jsxs)("div",{className:R.a.articleDescription,children:[Object(j.jsx)("p",{children:"For this project I wanted to create something connected to my cultural roots. To me food was a way for me to reconnect with my heritage growing up in a western society. I remember growing up having very fond memories of visiting the local family owned pho shops once a week in order to take part and enjoy the foods my parents grew up on before moving to North America."}),Object(j.jsx)("p",{children:"I wanted to change the perception of how Vietnamese food was viewed especially on social media. I noticed online rarely would I ever see any of my friends or people I know would talk about or post photos of the meal they had on a night out involving Vietnamese food. When it came to designing the website I wanted to elevate the status of Vietnamese food by making the restaurant social media worthy."})]})]})};var D=function(){return Object(j.jsx)(n.a.Fragment,{children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(g,{}),Object(j.jsxs)("div",{className:"container",children:[Object(j.jsxs)("div",{className:"page-content",children:[Object(j.jsx)(p,{}),Object(j.jsxs)(r.c,{children:[Object(j.jsx)(r.a,{path:"/",component:W,exact:!0}),Object(j.jsx)(r.a,{path:"/covid-stats-can",component:Z}),Object(j.jsx)(r.a,{path:"/login-system",component:F}),Object(j.jsx)(r.a,{path:"/phostop",component:M})]})]}),Object(j.jsx)(m,{})]})]})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,45)).then((function(t){var a=t.getCLS,i=t.getFID,n=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),i(e),n(e),c(e),s(e)}))};s.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(D,{})}),document.getElementById("root")),z()}],[[44,1,2]]]);
//# sourceMappingURL=main.db5005c2.chunk.js.map