(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[35],{117:function(e,t,c){"use strict";var a=c(37),n=c(111),o=c(2),i=c(89),r=c(18),s=void 0;t.a=function(e){var t=e.data,c=e.children,l=Object(o.useState)(!1),d=Object(a.a)(l,2),j=d[0],b=d[1],u=Object(i.useTransition)(j,{from:n.j,enter:n.i,leave:n.j,config:{mass:1,tension:210,friction:20}}),h=Object(o.useCallback)((function(e){return e.stopPropagation()}),[]);return Object(r.jsxs)("span",{className:"Tooltip",style:{position:"relative"},onMouseEnter:b.bind(s,!0),onMouseLeave:b.bind(s,!1),onClick:h.bind(s),children:[c,u((function(e,c){return c&&Object(r.jsx)(i.animated.div,{style:e,children:Object(r.jsx)("div",{className:"message",children:Object(r.jsx)("p",{dangerouslySetInnerHTML:{__html:t.replace(/\n/g,"<br/>")}})})})}))]})}},718:function(e,t,c){"use strict";c.r(t);var a=c(117),n=c(90),o=c(724),i=c(18);var r=function(e){var t=e.title,c=e.statistic,r=e.total,s=e.formula,l=e.date,d=e.description,j=e.className,b=Object(o.a)().t;return Object(i.jsxs)("div",{className:"meta-item ".concat(j),children:[Object(i.jsxs)("div",{className:"meta-item-top",children:[Object(i.jsx)("h3",{children:t}),Object(i.jsx)(a.a,{data:s,children:Object(i.jsx)(n.m,{size:16})})]}),Object(i.jsx)("h1",{children:c}),Object(i.jsx)("h5",{children:l}),r&&Object(i.jsx)("h5",{children:"".concat(b("India has")," ").concat(r," ").concat(b("CPM"))}),Object(i.jsx)("p",{children:d})]})},s=c(5),l=c(20),d=c(59),j=c(70),b=c(2),u=c.n(b),h=c(19),v=c.n(h);function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var c=arguments[t];for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a])}return e}).apply(this,arguments)}function p(e,t){if(null==e)return{};var c,a,n=function(e,t){if(null==e)return{};var c,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)c=o[a],t.indexOf(c)>=0||(n[c]=e[c]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)c=o[a],t.indexOf(c)>=0||Object.prototype.propertyIsEnumerable.call(e,c)&&(n[c]=e[c])}return n}var m=Object(b.forwardRef)((function(e,t){var c=e.color,a=void 0===c?"currentColor":c,n=e.size,o=void 0===n?24:n,i=p(e,["color","size"]);return u.a.createElement("svg",O({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:a,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},i),u.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),u.a.createElement("polygon",{points:"16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"}))}));m.propTypes={color:v.a.string,size:v.a.oneOfType([v.a.string,v.a.number])},m.displayName="Compass";var f=m;function y(e){var t,c,a,n,b,u=e.stateCode,h=e.data,v=e.timeseries,O=Object(o.a)().t,p=Object.keys(v||{}).filter((function(e){return e<=Object(l.g)()})),m=p[p.length-1],y=Object(l.h)(null===v||void 0===v?void 0:v[m],"total","confirmed"),x=y-Object(l.h)(null===v||void 0===v?void 0:v[m],"delta7","confirmed"),g=Object(d.a)(Object(j.a)(Object(l.k)(m),7)),M=Object(l.h)(h[u],"total","confirmed",{perMillion:!0}),w=Object(l.h)(h[u],"total","tested",{perMillion:!0}),N=Object(l.h)(h.TT,"total","confirmed",{perMillion:!0}),k=Object(l.h)(h[u],"total","activeRatio"),C=Object(l.h)(h[u],"total","recoveryRatio"),P=Object(l.h)(h[u],"total","cfr"),R=100*(Math.pow(y/x,1/7)-1);return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"StateMeta population",children:[Object(i.jsxs)("div",{className:"meta-item population",children:[Object(i.jsx)("h3",{children:O("Population")}),Object(i.jsx)("h1",{children:Object(l.e)(null===(t=h[u])||void 0===t||null===(c=t.meta)||void 0===c?void 0:c.population)})]}),Object(i.jsxs)("div",{className:"alert",children:[Object(i.jsx)(f,{}),Object(i.jsxs)("div",{className:"alert-right",children:[O("Based on 2019 population projection by NCP"),Object(i.jsx)("a",{href:"https://nhm.gov.in/New_Updates_2018/Report_Population_Projection_2019.pdf",target:"_noblank",children:"report"})]})]})]}),Object(i.jsxs)("div",{className:"StateMeta",children:[Object(i.jsx)(r,{className:"confirmed",title:"Confirmed Per Million",statistic:Object(l.e)(M),total:Object(l.e)(N),formula:"(confirmed / state population) * 1 Million",description:"\n            ~".concat(Object(l.e)(Math.round(M))," ").concat(O("out of every 10 lakh people in")," ").concat(s.v[u]," ").concat(O("have tested positive for the virus."),"\n            ")}),Object(i.jsx)(r,{className:"active",title:"Active Ratio",statistic:"".concat(Object(l.e)(k,"%")),formula:"(active / confirmed) * 100",description:k>0?"".concat(O("For every 100 confirmed cases"),", ~").concat(Object(l.e)(Math.round(k))," ").concat(O("are currently infected.")):O("Currently, there are no active cases in this state.")}),Object(i.jsx)(r,{className:"recovery",title:"Recovery Ratio",statistic:"".concat(Object(l.e)(C,"%")),formula:"(recovered / confirmed) * 100",description:C>0?"".concat(O("For every 100 confirmed cases"),", ~").concat(Object(l.e)(Math.round(C))," ").concat(O("have recovered from the virus.")):O("Unfortunately, there are no recoveries in this state yet.")}),Object(i.jsx)(r,{className:"mortality",title:"Case Fatality Ratio",statistic:"".concat(Object(l.e)(P,"%")),formula:"(deceased / confirmed) * 100",description:P>0?"".concat(O("For every 100 confirmed cases"),", ~").concat(Object(l.e)(Math.round(P))," ").concat(O("have unfortunately passed away from the virus.")):O("Fortunately, no one has passed away from the virus in this state.")}),Object(i.jsx)(r,{className:"gr",title:"Avg. Growth Rate",statistic:R>0?"".concat(Object(l.e)(R,"%")):"-",formula:"(((previousDayData - sevenDayBeforeData) / sevenDayBeforeData) * 100)/7",date:"".concat(Object(l.c)(g,"dd MMM")," - ").concat(Object(l.c)(m,"dd MMM")),description:R>0?"".concat(O("In the last one week, the number of new infections has grown by an average of")," ").concat(Object(l.e)(R,"%"),"\n              ").concat(O("every day.")):O("There has been no growth in the number of infections in last one week.")}),Object(i.jsx)(r,{className:"tpm",title:"Tests Per Million",statistic:"".concat(Object(l.e)(w)),formula:"(total tests in state / total population of state) * 1 Million",date:w?"".concat(O("As of")," ").concat(Object(l.d)(null===(a=h[u])||void 0===a||null===(n=a.meta)||void 0===n||null===(b=n.tested)||void 0===b?void 0:b.last_updated)," ").concat(O("ago")):"",description:w>0?"".concat(O("For every 10 lakh people in")," ").concat(s.v[u],",\n                ~").concat(Object(l.e)(Math.round(w))," ").concat(O("samples were tested.")):O("No tests have been conducted in this state yet.")})]})]})}var x=function(e,t){return!(t.timeseries&&!e.timeseries)&&e.stateCode===t.stateCode};t.default=Object(b.memo)(y,x)}}]);
//# sourceMappingURL=35.999cdea4.chunk.js.map