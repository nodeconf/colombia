(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{148:function(e,t,a){"use strict";a.r(t);var n=a(7),c=a.n(n),r=a(0),l=a.n(r),s=a(153),m=a(35),o=a.n(m);function i(e){return l.a.createElement("li",{className:"section-schedule__li"},l.a.createElement("article",{className:"section-schedule__card single"},l.a.createElement("div",{className:"section-schedule__data"},l.a.createElement("div",{className:"section-schedule__start-time"},e.from),e.to&&l.a.createElement("div",{className:"section-schedule__end-time"},e.to)),l.a.createElement("div",{className:"section-schedule__information"},l.a.createElement("h2",{className:"section-schedule__activity start-event "+e.eventColor},e.text))))}function d(){return l.a.createElement("ul",{className:"section-schedule__ul"},l.a.createElement("h2",null,"June 21st"),l.a.createElement(i,{from:"9:00am",to:"10:00am",text:"Registration and snacks",eventColor:"red"}),l.a.createElement(i,{from:"10:00am",to:"12:00am",text:"Workshop by NodeSource"}),l.a.createElement(i,{from:"10:00am",to:"12:00am",text:"Workshop by Genius Sports"}),l.a.createElement(i,{from:"10:00am",to:"12:00am",text:"Workshop by Genius PSL"}),l.a.createElement(i,{from:"10:00am",to:"12:00am",text:"NodeSchool by MedellinJS",eventColor:"green"}),l.a.createElement(i,{from:"12:00pm",to:"2:00pm",text:"Lunch",eventColor:"red"}),l.a.createElement(i,{from:"2:00pm",to:"6:00pm",text:"Code + Learn",eventColor:"green"}))}a(34),a(165);function u(e){return l.a.createElement("li",{className:"section-schedule__li"},l.a.createElement("article",{className:"section-schedule__card"},l.a.createElement("div",{className:"section-schedule__speaker-content"},l.a.createElement("figure",{className:"section-schedule__speaker-img"},e.figure()),l.a.createElement("h3",{className:"section-schedule__speaker-name"},e.name),l.a.createElement("div",{className:"section-schedule__speaker-social"},l.a.createElement("a",{href:e.twitterUrl,target:"_blank",rel:"noopener noreferrer",className:"section-speakers__icon"},l.a.createElement("i",{className:"icon-twitter"})))),l.a.createElement("div",{className:"section-schedule__information"},l.a.createElement("div",{className:"section-schedule__data"},l.a.createElement("div",{className:"section-schedule__start-time"},e.from)),l.a.createElement("h3",{className:"section-schedule__activity"},e.talkName),l.a.createElement("p",{className:"section-schedule__description",dangerouslySetInnerHTML:{__html:e.talkDesc}}))))}var E=a(166);function h(){return l.a.createElement("ul",{className:"section-schedule__ul"},l.a.createElement("h2",null,"June 22nd"),l.a.createElement(i,{from:"8:00am",to:"8:50am",text:"Registration and snacks",eventColor:"red"}),l.a.createElement(i,{from:"8:50am",to:"9:00am",text:"Opening Event"}),l.a.createElement(u,Object.assign({from:"9:00am"},E.a.anna)),l.a.createElement(u,Object.assign({from:"9:30am"},E.a.diego)),l.a.createElement(u,Object.assign({from:"10:00am"},E.a.matt)),l.a.createElement(i,{from:"10:30am",to:"11:00am",text:"Break y snacks",eventColor:"red"}),l.a.createElement(u,Object.assign({from:"11:00am"},E.a.james)),l.a.createElement(u,Object.assign({from:"11:30am"},E.a.andrea)),l.a.createElement(u,Object.assign({from:"12:00m"},E.a.miguel)),l.a.createElement(i,{from:"12:30pm",to:"1:00pm",text:"Lunch",eventColor:"red"}),l.a.createElement(i,{from:"1:30pm",to:"2:00pm",text:"Node.js Panel",eventColor:"green"}),l.a.createElement(u,Object.assign({from:"2:30pm"},E.a.tierney)),l.a.createElement(u,Object.assign({from:"3:00pm"},E.a.erick)),l.a.createElement(u,Object.assign({from:"3:30pm"},E.a.vladimir)),l.a.createElement(i,{from:"4:00pm",to:"4:30pm",text:"Break y snacks",eventColor:"red"}),l.a.createElement(u,Object.assign({from:"4:30pm"},E.a.ujjwal)),l.a.createElement(u,Object.assign({from:"5:00pm"},E.a.kat)),l.a.createElement(u,Object.assign({from:"5:30pm"},E.a.guillermo)),l.a.createElement(i,{from:"6:00pm",to:"7:30pm",text:"Networking and closing",eventColor:"end-event"}),l.a.createElement(i,{from:"7:30pm",text:"After Party",eventColor:"after-party"}))}a(232);var p=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={day:1},a.pickDay=a.pickDay.bind(o()(a)),a}c()(t,e);var a=t.prototype;return a.pickDay=function(e,t){e.preventDefault(),this.setState({day:t})},a.render=function(){var e=this;return l.a.createElement("main",{className:"section-schedule  main"},l.a.createElement("div",{className:"section-schedule__background"}),l.a.createElement("h1",{className:"section-schedule__title"},"NodeConf Colombia"),l.a.createElement("h2",{className:"section-schedule__subtitle"},"Medellín 2019"),l.a.createElement("section",{className:"section-schedule__content"},l.a.createElement("h3",{className:"section-schedule__tag"},"SCHEDULE"),l.a.createElement("div",{className:"day-picker"},l.a.createElement("button",{className:"pick-day",onClick:function(t){return e.pickDay(t,1)}},"Day 1"),l.a.createElement("button",{className:"pick-day",onClick:function(t){return e.pickDay(t,2)}},"Day 2")),1===this.state.day?l.a.createElement(d,null):l.a.createElement(h,null)))},t}(l.a.Component),f=function(e){function t(){return e.apply(this,arguments)||this}c()(t,e);var a=t.prototype;return a.componentDidMount=function(){document.querySelectorAll(".header-component .menu-item.schedule")[0].classList.add("active"),console.log(document.querySelectorAll(".header-component .menu-item.schedule")[0]),window.addEventListener("scroll",this.handleScroll)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.handleScroll)},a.handleScroll=function(){var e=window.pageYOffset;window.innerWidth>678&&(e>160?document.getElementsByClassName("header-component")[0].classList.add("header-small"):document.getElementsByClassName("header-component").length>0&&document.getElementsByClassName("header-component")[0].classList.remove("header-small"))},a.render=function(){return l.a.createElement(s.a,null,l.a.createElement(p,null))},t}(l.a.Component);t.default=f}}]);
//# sourceMappingURL=component---src-pages-schedule-js-94ae30336aa596a11d13.js.map