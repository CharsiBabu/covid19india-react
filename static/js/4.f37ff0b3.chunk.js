/*! For license information please see 4.f37ff0b3.chunk.js.LICENSE.txt */
(this.webpackJsonpcovid19india=this.webpackJsonpcovid19india||[]).push([[4],{128:function(e,t,n){"use strict";var r=n(2),i=Object.prototype.hasOwnProperty;var o=new WeakMap,u=0;var a=function(){function e(e){void 0===e&&(e={}),this.cache=new Map(Object.entries(e)),this.subs=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.cache.has(t)},e.prototype.clear=function(){this.cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):o.has(e[n])?r=o.get(e[n]):(r=u,o.set(e[n],u++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.subs.push(e),function(){if(n){n=!1;var r=t.subs.indexOf(e);r>-1&&(t.subs[r]=t.subs[t.subs.length-1],t.subs.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.subs;e<t.length;e++){(0,t[e])()}},e}(),c=!0,f={isOnline:function(){return c},isDocumentVisible:function(){return"undefined"===typeof document||void 0===document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))},registerOnFocus:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&"undefined"!==typeof document&&void 0!==document.addEventListener&&(document.addEventListener("visibilitychange",(function(){return e()}),!1),window.addEventListener("focus",(function(){return e()}),!1))},registerOnReconnect:function(e){"undefined"!==typeof window&&void 0!==window.addEventListener&&(window.addEventListener("online",(function(){c=!0,e()}),!1),window.addEventListener("offline",(function(){return c=!1}),!1))}},s=function(){return(s=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},l=new a;var d="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),v=s({onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,i){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&i.retryCount>n.errorRetryCount)){var o=Math.min(i.retryCount,8),u=~~((Math.random()+.5)*(1<<o))*n.errorRetryInterval;setTimeout(r,u,i)}},errorRetryInterval:1e3*(d?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(d?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,o;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((o=t.length)===n.length)for(;o--&&e(t[o],n[o]););return-1===o}if(!r||"object"===typeof t){for(r in o=0,t){if(i.call(t,r)&&++o&&!i.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===o}}return t!==t&&n!==n},isPaused:function(){return!1}},f),p="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),h=p?null:window.requestAnimationFrame?function(e){return window.requestAnimationFrame(e)}:function(e){return setTimeout(e,1)},y=p?r.useEffect:r.useLayoutEffect,g=Object(r.createContext)({});g.displayName="SWRConfigContext";var b=g,O=function(e,t,n,r){return new(n||(n=Promise))((function(i,o){function u(e){try{c(r.next(e))}catch(t){o(t)}}function a(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(u,a)}c((r=r.apply(e,t||[])).next())}))},w=function(e,t){var n,r,i,o,u={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;u;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return u.label++,{value:o[1],done:!1};case 5:u.label++,r=o[1],o=[0];continue;case 7:o=u.ops.pop(),u.trys.pop();continue;default:if(!(i=(i=u.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){u=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){u.label=o[1];break}if(6===o[0]&&u.label<i[1]){u.label=i[1],i=o;break}if(i&&u.label<i[2]){u.label=i[2],u.ops.push(o);break}i[2]&&u.ops.pop(),u.trys.pop();continue}o=t.call(e,u)}catch(a){o=[6,a],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},m={},j={},S={},R={},E={},T={},V={},x=function(){var e=0;return function(){return++e}}();if(!p){var I=function(e){if(v.isDocumentVisible()&&v.isOnline())for(var t in e)e[t][0]&&e[t][0]()};"function"===typeof v.registerOnFocus&&v.registerOnFocus((function(){return I(S)})),"function"===typeof v.registerOnReconnect&&v.registerOnReconnect((function(){return I(R)}))}var P=function(e,t){void 0===t&&(t=!0);var n=l.serializeKey(e),r=n[0],i=n[2],o=n[3];if(!r)return Promise.resolve();var u=E[r];if(r&&u){for(var a=l.get(r),c=l.get(i),f=l.get(o),s=[],d=0;d<u.length;++d)s.push(u[d](t,a,c,f,d>0));return Promise.all(s).then((function(){return l.get(r)}))}return Promise.resolve(l.get(r))},k=function(e,t,n,r){var i=E[e];if(e&&i)for(var o=0;o<i.length;++o)i[o](!1,t,n,r)},C=function(e,t,n){return void 0===n&&(n=!0),O(void 0,void 0,void 0,(function(){var r,i,o,u,a,c,f,s,d,v,p,h,y;return w(this,(function(g){switch(g.label){case 0:if(r=l.serializeKey(e),i=r[0],o=r[2],!i)return[2];if("undefined"===typeof t)return[2,P(e,n)];if(T[i]=x()-1,V[i]=0,u=T[i],a=j[i],s=!1,t&&"function"===typeof t)try{t=t(l.get(i))}catch(b){t=void 0,f=b}if(!t||"function"!==typeof t.then)return[3,5];s=!0,g.label=1;case 1:return g.trys.push([1,3,,4]),[4,t];case 2:return c=g.sent(),[3,4];case 3:return d=g.sent(),f=d,[3,4];case 4:return[3,6];case 5:c=t,g.label=6;case 6:if((v=function(){if(u!==T[i]||a!==j[i]){if(f)throw f;return!0}})())return[2,c];if("undefined"!==typeof c&&l.set(i,c),l.set(o,f),V[i]=x()-1,!s&&v())return[2,c];if(p=E[i]){for(h=[],y=0;y<p.length;++y)h.push(p[y](!!n,c,f,void 0,y>0));return[2,Promise.all(h).then((function(){if(f)throw f;return l.get(i)}))]}if(f)throw f;return[2,c]}}))}))};Object.defineProperty(b.Provider,"default",{value:v});b.Provider;var D=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var i=t[0],o=Object.assign({},v,Object(r.useContext)(b),t.length>2?t[2]:2===t.length&&"object"===typeof t[1]?t[1]:{}),u=t.length>2||2===t.length&&"function"===typeof t[1]||null===t[1]?t[1]:o.fetcher,a=l.serializeKey(i),c=a[0],f=a[1],s=a[2],d=a[3],g=Object(r.useRef)(o);y((function(){g.current=o}));var I=function(){return o.revalidateOnMount||!o.initialData&&void 0===o.revalidateOnMount},P=function(){var e=l.get(c);return"undefined"===typeof e?o.initialData:e},D=function(){return!!l.get(d)||c&&I()},L=P(),z=l.get(s),A=D(),K=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),W=Object(r.useRef)({data:L,error:z,isValidating:A});Object(r.useDebugValue)(W.current.data);var F,M,J=Object(r.useState)({})[1],N=Object(r.useCallback)((function(e){var t=!1;for(var n in e)W.current[n]!==e[n]&&(W.current[n]=e[n],K.current[n]&&(t=!0));if(t){if(H.current||!G.current)return;J({})}}),[]),H=Object(r.useRef)(!1),q=Object(r.useRef)(c),G=Object(r.useRef)(!1),B=Object(r.useCallback)((function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];H.current||G.current&&c===q.current&&(t=g.current)[e].apply(t,n)}),[c]),Q=Object(r.useCallback)((function(e,t){return C(q.current,e,t)}),[]),U=function(e,t){return e[c]?e[c].push(t):e[c]=[t],function(){var n=e[c],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},X=Object(r.useCallback)((function(t){return void 0===t&&(t={}),O(e,void 0,void 0,(function(){var e,n,r,i,a,v,p,h,y,b;return w(this,(function(O){switch(O.label){case 0:if(!c||!u)return[2,!1];if(H.current)return[2,!1];if(g.current.isPaused())return[2,!1];e=t.retryCount,n=void 0===e?0:e,r=t.dedupe,i=void 0!==r&&r,a=!0,v="undefined"!==typeof m[c]&&i,O.label=1;case 1:return O.trys.push([1,6,,7]),N({isValidating:!0}),l.set(d,!0),v||k(c,W.current.data,W.current.error,!0),p=void 0,h=void 0,v?(h=j[c],[4,m[c]]):[3,3];case 2:return p=O.sent(),[3,5];case 3:return o.loadingTimeout&&!l.get(c)&&setTimeout((function(){a&&B("onLoadingSlow",c,o)}),o.loadingTimeout),m[c]=null!==f?u.apply(void 0,f):u(c),j[c]=h=x(),[4,m[c]];case 4:p=O.sent(),setTimeout((function(){delete m[c],delete j[c]}),o.dedupingInterval),B("onSuccess",p,c,o),O.label=5;case 5:return j[c]>h?[2,!1]:T[c]&&(h<=T[c]||h<=V[c]||0===V[c])?(N({isValidating:!1}),[2,!1]):(l.set(s,void 0),l.set(d,!1),y={isValidating:!1},"undefined"!==typeof W.current.error&&(y.error=void 0),o.compare(W.current.data,p)||(y.data=p,l.set(c,p)),N(y),v||k(c,p,y.error,!1),[3,7]);case 6:return b=O.sent(),delete m[c],delete j[c],g.current.isPaused()?(N({isValidating:!1}),[2,!1]):(l.set(s,b),W.current.error!==b&&(N({isValidating:!1,error:b}),v||k(c,void 0,b,!1)),B("onError",b,c,o),o.shouldRetryOnError&&B("onErrorRetry",b,c,o,X,{retryCount:n+1,dedupe:!0}),[3,7]);case 7:return a=!1,[2,!0]}}))}))}),[c]);if(y((function(){if(c){H.current=!1;var e=G.current;G.current=!0;var t=W.current.data,n=P();q.current=c,o.compare(t,n)||N({data:n});var r=function(){return X({dedupe:!0})};(e||I())&&("undefined"===typeof n||p?r():h(r));var i=!1,u=U(S,(function(){!i&&g.current.revalidateOnFocus&&(i=!0,r(),setTimeout((function(){return i=!1}),g.current.focusThrottleInterval))})),a=U(R,(function(){g.current.revalidateOnReconnect&&r()})),f=U(E,(function(e,t,n,i,u){void 0===e&&(e=!0),void 0===u&&(u=!0);var a={},c=!1;return"undefined"===typeof t||o.compare(W.current.data,t)||(a.data=t,c=!0),W.current.error!==n&&(a.error=n,c=!0),"undefined"!==typeof i&&W.current.isValidating!==i&&(a.isValidating=i,c=!0),c&&N(a),!!e&&(u?r():X())}));return function(){N=function(){return null},H.current=!0,u(),a(),f()}}}),[c,X]),y((function(){var t=null;return g.current.refreshInterval&&(t=setTimeout((function n(){return O(e,void 0,void 0,(function(){return w(this,(function(e){switch(e.label){case 0:return W.current.error||!g.current.refreshWhenHidden&&!g.current.isDocumentVisible()||!g.current.refreshWhenOffline&&!g.current.isOnline()?[3,2]:[4,X({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return g.current.refreshInterval&&t&&(t=setTimeout(n,g.current.refreshInterval)),[2]}}))}))}),g.current.refreshInterval)),function(){t&&(clearTimeout(t),t=null)}}),[o.refreshInterval,o.refreshWhenHidden,o.refreshWhenOffline,X]),o.suspense){if(F=l.get(c),M=l.get(s),"undefined"===typeof F&&(F=L),"undefined"===typeof M&&(M=z),"undefined"===typeof F&&"undefined"===typeof M){if(m[c]||X(),m[c]&&"function"===typeof m[c].then)throw m[c];F=m[c]}if("undefined"===typeof F&&M)throw M}var Y=Object(r.useMemo)((function(){var e={revalidate:X,mutate:Q};return Object.defineProperties(e,{error:{get:function(){return K.current.error=!0,o.suspense?M:q.current===c?W.current.error:z},enumerable:!0},data:{get:function(){return K.current.data=!0,o.suspense?F:q.current===c?W.current.data:L},enumerable:!0},isValidating:{get:function(){return K.current.isValidating=!0,!!c&&W.current.isValidating},enumerable:!0}}),e}),[X,L,z,Q,c,o.suspense,M,F]);return Y};t.a=D},679:function(e,t,n){"use strict";var r=n(2),i=n(84);t.a=function(e,t,n){if(!i.a)return[t,function(){}];var o=Object(r.useState)((function(){try{var r=sessionStorage.getItem(e);return"string"!==typeof r?(sessionStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?r:JSON.parse(r||"null")}catch(o){return t}})),u=o[0],a=o[1];return Object(r.useEffect)((function(){try{var t=n?String(u):JSON.stringify(u);sessionStorage.setItem(e,t)}catch(o){}})),[u,a]}},86:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var u=i.apply(null,r);u&&e.push(u)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var a in r)n.call(r,a)&&r[a]&&e.push(a);else e.push(r.toString())}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(r=function(){return i}.apply(t,[]))||(e.exports=r)}()}}]);
//# sourceMappingURL=4.f37ff0b3.chunk.js.map