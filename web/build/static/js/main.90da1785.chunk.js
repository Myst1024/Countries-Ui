(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(9),l=t.n(c),o=t(44),m=(t(76),t(63)),u=t.n(m),i=t(108),s=function(){return r.a.createElement("div",{className:"pageHeader"},r.a.createElement(i.a,{variant:"h2",component:"h2",gutterBottom:!0},"Country Search"))},p=t(148),E=t(149),y=t(142),d=t(143),v=t(141),g=function(e){var a=e.searchType,t=e.setSearchType;return r.a.createElement("div",{className:"search-type"},r.a.createElement(v.a,{component:"fieldset"},r.a.createElement(y.a,{component:"legend"},"Search By:"),r.a.createElement(E.a,{"aria-label":"Search By",name:"searchBy",value:a,onChange:function(e){t(e.target.value)}},r.a.createElement(d.a,{value:"name",control:r.a.createElement(p.a,null),label:"Name"}),r.a.createElement(d.a,{value:"fullName",control:r.a.createElement(p.a,null),label:"Full Name"}),r.a.createElement(d.a,{value:"code",control:r.a.createElement(p.a,null),label:"Code (2 or 3 digit)"}))))},h=t(147),f=function(e){var a=e.query,t=e.setQuery,n=e.searchType;var c="fullName"===n?"full name":n;return r.a.createElement(h.a,{id:"search-bar",label:c,className:"searchInput",value:a,onChange:function(e){t(e.target.value)},margin:"normal"})},b=t(144),N=function(e){var a=e.submitSearch;return r.a.createElement(b.a,{type:"button",variant:"contained",color:"primary",className:"submit-button",onClick:a},"Search")},S=t(145),C=t(146),j=function(e){var a=e.country;return r.a.createElement(S.a,{className:"country-card"},r.a.createElement(C.a,null,r.a.createElement(i.a,{className:"country-name",variant:"h5",component:"h2"},a.name),r.a.createElement("div",{className:"country-details"},r.a.createElement("div",{className:"country-flag"},r.a.createElement("img",{alt:"flag",src:a.flag})),r.a.createElement("div",{className:"country-data"},r.a.createElement(i.a,{variant:"body2",component:"p"},"Alpha 2: ",a.alpha2Code),r.a.createElement(i.a,{variant:"body2",component:"p"},"Alpha 3: ",a.alpha3Code),r.a.createElement(i.a,{variant:"body2",component:"p"},"Region: ",a.region),r.a.createElement(i.a,{variant:"body2",component:"p"},"Subregion: ",a.subregion),r.a.createElement(i.a,{variant:"body2",component:"p"},"Population: ",a.population.toLocaleString()),r.a.createElement(i.a,{variant:"body2",component:"p"},"Languages:"),r.a.createElement("ul",{className:"language-list"},a.languages.map(function(e){return r.a.createElement(i.a,{variant:"body2",component:"li",key:e.name},e.name)}))))))},w=function(e){var a=e.countries;return r.a.createElement("div",{className:"country-list"},a.error&&r.a.createElement(i.a,{variant:"body1",component:"h3"},a.error),Array.isArray(a)&&a.map(function(e){return r.a.createElement(j,{key:e.name,country:e})}))},A=t(42),O=function(e){var a=e.regions,t=Object(A.a)(new Set(a));return r.a.createElement("ul",null,t.map(function(e){return r.a.createElement("li",{key:e},e,": ",function(e){return a.filter(function(a){return a===e}).length}(e))}))},T=function(e){var a=e.countries,t=a.map(function(e){return e.region}),n=a.map(function(e){return e.subregion});return r.a.createElement(S.a,{className:"totals-card"},r.a.createElement(C.a,null,r.a.createElement(i.a,{className:"country-name",variant:"h5",component:"h2"},"Total Countries: ",a.length),r.a.createElement("div",{className:"totals-content"},r.a.createElement("div",{className:"regions"},r.a.createElement("div",{className:"region"},r.a.createElement(i.a,{variant:"body2",component:"p"},"Regions:"),r.a.createElement(O,{regions:t})),r.a.createElement("div",{className:"region"},r.a.createElement(i.a,{variant:"body2",component:"p"},"Sub-regions:"),r.a.createElement(O,{regions:n}))))))},k=t(109);function B(e,a,t,n){e.preventDefault(),u.a.get("http://localhost:3001/?type=".concat(a,"&query=").concat(t)).then(function(e){if(e.data.error)n({error:e.data.error}),console.log(e.data.error);else{var a=e.data;a=Array.isArray(a)?a:[a],n(a)}})}var q=function(){var e=Object(n.useState)("name"),a=Object(o.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),m=Object(o.a)(l,2),u=m[0],i=m[1],p=Object(n.useState)([]),E=Object(o.a)(p,2),y=E[0],d=E[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s,null),r.a.createElement(k.a,{className:"search-paper"},r.a.createElement(g,{searchType:t,setSearchType:c}),r.a.createElement("form",{className:"search",onSubmit:function(e){return B(e,t,u,d)},noValidate:!0},r.a.createElement(f,{searchType:t,query:u,setQuery:i}),r.a.createElement(N,{submitSearch:function(e){return B(e,t,u,d)}}))),r.a.createElement(w,{countries:y}),y.length>0&&r.a.createElement(T,{countries:y}))};l.a.render(r.a.createElement(q,null),document.getElementById("root"))},71:function(e,a,t){e.exports=t(107)},76:function(e,a,t){}},[[71,1,2]]]);
//# sourceMappingURL=main.90da1785.chunk.js.map