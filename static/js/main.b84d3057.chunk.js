(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),r=t.n(c),o=(t(13),t(1));t(15);function s(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:""},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:""},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"/about"},e.aboutText))),l.a.createElement("form",{className:"d-flex"},l.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),l.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")),l.a.createElement("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable dark mode"))))))}s.defaultProps={title:"set title here",aboutText:"About text here"};var m=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,e.alert.type)," ",e.alert.msg,l.a.createElement("button",{type:"button",className:"btn-close","data-bs-dismiss":"alert","aria-label":"Close"}))};function i(e){var a=Object(n.useState)(" "),t=Object(o.a)(a,2),c=t[0],r=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:c,onChange:function(e){console.log("on change"),r(e.target.value)},id:"mybox",rows:"8"})),l.a.createElement("button",{className:"btn btn-primary mx-3",onClick:function(){var a=c.toUpperCase();r(a),e.showalert("Text converted to upper case","success")}},"Convert to upper case"),l.a.createElement("button",{className:"btn btn-primary mx-3",onClick:function(){var a=c.toLowerCase();r(a),e.showalert("Text converted to lower case","success")}},"Convert to lower case"),l.a.createElement("button",{className:"btn btn-primary mx-3",onClick:function(){console.log("Clear text was clicked"+c);r(" ")}},"Clear text")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"This is text summaray"),l.a.createElement("p",null,c.split(" ").length," words and ",c.length," characters"),l.a.createElement("p",null,"Text read in ",.008*c.split(" ").length," minutes")))}var u=function(){var e=Object(n.useState)(null),a=Object(o.a)(e,2),t=a[0],c=a[1],r=function e(a,t){c({msg:a,type:t}),setTimeout(function(){e(null)},3e3)},u=Object(n.useState)("light"),b=Object(o.a)(u,2),d=b[0],h=b[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",mode:d,alert:t,toggleMode:function(){"light"===d?(h("dark"),document.body.style.background="#0e0e0e",r("Dark mode hai been enabled","success")):(h("light"),document.body.style.background="white",r("Light mode hai been enabled","success"))}}),l.a.createElement(m,{alert:t}),l.a.createElement("div",{className:"container my-3"},l.a.createElement(i,{showaleter:r,heading:"Enter the text to analyze",mode:d})))},b=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,19)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),b()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.b84d3057.chunk.js.map