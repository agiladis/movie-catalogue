!function(n){var e={};function r(t){if(e[t])return e[t].exports;var o=e[t]={i:t,l:!1,exports:{}};return n[t].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=n,r.c=e,r.d=function(n,e,t){r.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},r.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},r.t=function(n,e){if(1&e&&(n=r(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(r.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var o in n)r.d(t,o,function(e){return n[e]}.bind(null,o));return t},r.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return r.d(e,"a",e),e},r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},r.p="",r(r.s=9)}([function(n,e,r){"use strict";var t,o=function(){return void 0===t&&(t=Boolean(window&&document&&document.all&&!window.atob)),t},i=function(){var n={};return function(e){if(void 0===n[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}n[e]=r}return n[e]}}(),a=[];function c(n){for(var e=-1,r=0;r<a.length;r++)if(a[r].identifier===n){e=r;break}return e}function u(n,e){for(var r={},t=[],o=0;o<n.length;o++){var i=n[o],u=e.base?i[0]+e.base:i[0],s=r[u]||0,l="".concat(u," ").concat(s);r[u]=s+1;var f=c(l),p={css:i[1],media:i[2],sourceMap:i[3]};-1!==f?(a[f].references++,a[f].updater(p)):a.push({identifier:l,updater:m(p,e),references:1}),t.push(l)}return t}function s(n){var e=document.createElement("style"),t=n.attributes||{};if(void 0===t.nonce){var o=r.nc;o&&(t.nonce=o)}if(Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])})),"function"==typeof n.insert)n.insert(e);else{var a=i(n.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var l,f=(l=[],function(n,e){return l[n]=e,l.filter(Boolean).join("\n")});function p(n,e,r,t){var o=r?"":t.media?"@media ".concat(t.media," {").concat(t.css,"}"):t.css;if(n.styleSheet)n.styleSheet.cssText=f(e,o);else{var i=document.createTextNode(o),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(i,a[e]):n.appendChild(i)}}function d(n,e,r){var t=r.css,o=r.media,i=r.sourceMap;if(o?n.setAttribute("media",o):n.removeAttribute("media"),i&&btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}var v=null,h=0;function m(n,e){var r,t,o;if(e.singleton){var i=h++;r=v||(v=s(e)),t=p.bind(null,r,i,!1),o=p.bind(null,r,i,!0)}else r=s(e),t=d.bind(null,r,e),o=function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)};return t(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;t(n=e)}else o()}}n.exports=function(n,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var r=u(n=n||[],e);return function(n){if(n=n||[],"[object Array]"===Object.prototype.toString.call(n)){for(var t=0;t<r.length;t++){var o=c(r[t]);a[o].references--}for(var i=u(n,e),s=0;s<r.length;s++){var l=c(r[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}r=i}}}},function(n,e,r){"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r=function(n,e){var r=n[1]||"",t=n[3];if(!t)return r;if(e&&"function"==typeof btoa){var o=(a=t,c=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),u="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(c),"/*# ".concat(u," */")),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[r].concat(i).concat([o]).join("\n")}var a,c,u;return[r].join("\n")}(e,n);return e[2]?"@media ".concat(e[2]," {").concat(r,"}"):r})).join("")},e.i=function(n,r,t){"string"==typeof n&&(n=[[null,n,""]]);var o={};if(t)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var c=0;c<n.length;c++){var u=[].concat(n[c]);t&&o[u[0]]||(r&&(u[2]?u[2]="".concat(r," and ").concat(u[2]):u[2]=r),e.push(u))}},e}},function(n,e){var r="\\sw.js";Object.defineProperty(e,"__esModule",{value:!0}),e.default={register:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!!navigator.serviceWorker&&navigator.serviceWorker.register(r,n)}},n.exports=e.default},function(n,e,r){(function(n){function e(n){return(e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}var r=function(n){"use strict";var r=Object.prototype,t=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(n,e,r){return Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),n[e]}try{u({},"")}catch(n){u=function(n,e,r){return n[e]=r}}function s(n,e,r,t){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new E(t||[]);return i._invoke=function(n,e,r){var t="suspendedStart";return function(o,i){if("executing"===t)throw new Error("Generator is already running");if("completed"===t){if("throw"===o)throw i;return R()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=_(a,r);if(c){if(c===f)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===t)throw t="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);t="executing";var u=l(n,e,r);if("normal"===u.type){if(t=r.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(t="completed",r.method="throw",r.arg=u.arg)}}}(n,r,a),i}function l(n,e,r){try{return{type:"normal",arg:n.call(e,r)}}catch(n){return{type:"throw",arg:n}}}n.wrap=s;var f={};function p(){}function d(){}function v(){}var h={};h[i]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(L([])));g&&g!==r&&t.call(g,i)&&(h=g);var y=v.prototype=p.prototype=Object.create(h);function b(n){["next","throw","return"].forEach((function(e){u(n,e,(function(n){return this._invoke(e,n)}))}))}function w(n,r){var o;this._invoke=function(i,a){function c(){return new r((function(o,c){!function o(i,a,c,u){var s=l(n[i],n,a);if("throw"!==s.type){var f=s.arg,p=f.value;return p&&"object"===e(p)&&t.call(p,"__await")?r.resolve(p.__await).then((function(n){o("next",n,c,u)}),(function(n){o("throw",n,c,u)})):r.resolve(p).then((function(n){f.value=n,c(f)}),(function(n){return o("throw",n,c,u)}))}u(s.arg)}(i,a,o,c)}))}return o=o?o.then(c,c):c()}}function _(n,e){var r=n.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(n.iterator.return&&(e.method="return",e.arg=void 0,_(n,e),"throw"===e.method))return f;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var t=l(r,n.iterator,e.arg);if("throw"===t.type)return e.method="throw",e.arg=t.arg,e.delegate=null,f;var o=t.arg;return o?o.done?(e[n.resultName]=o.value,e.next=n.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function x(n){var e={tryLoc:n[0]};1 in n&&(e.catchLoc=n[1]),2 in n&&(e.finallyLoc=n[2],e.afterLoc=n[3]),this.tryEntries.push(e)}function k(n){var e=n.completion||{};e.type="normal",delete e.arg,n.completion=e}function E(n){this.tryEntries=[{tryLoc:"root"}],n.forEach(x,this),this.reset(!0)}function L(n){if(n){var e=n[i];if(e)return e.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var r=-1,o=function e(){for(;++r<n.length;)if(t.call(n,r))return e.value=n[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:R}}function R(){return{value:void 0,done:!0}}return d.prototype=y.constructor=v,v.constructor=d,d.displayName=u(v,c,"GeneratorFunction"),n.isGeneratorFunction=function(n){var e="function"==typeof n&&n.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(n){return Object.setPrototypeOf?Object.setPrototypeOf(n,v):(n.__proto__=v,u(n,c,"GeneratorFunction")),n.prototype=Object.create(y),n},n.awrap=function(n){return{__await:n}},b(w.prototype),w.prototype[a]=function(){return this},n.AsyncIterator=w,n.async=function(e,r,t,o,i){void 0===i&&(i=Promise);var a=new w(s(e,r,t,o),i);return n.isGeneratorFunction(r)?a:a.next().then((function(n){return n.done?n.value:a.next()}))},b(y),u(y,c,"Generator"),y[i]=function(){return this},y.toString=function(){return"[object Generator]"},n.keys=function(n){var e=[];for(var r in n)e.push(r);return e.reverse(),function r(){for(;e.length;){var t=e.pop();if(t in n)return r.value=t,r.done=!1,r}return r.done=!0,r}},n.values=L,E.prototype={constructor:E,reset:function(n){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!n)for(var e in this)"t"===e.charAt(0)&&t.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var n=this.tryEntries[0].completion;if("throw"===n.type)throw n.arg;return this.rval},dispatchException:function(n){if(this.done)throw n;var e=this;function r(r,t){return a.type="throw",a.arg=n,e.next=r,t&&(e.method="next",e.arg=void 0),!!t}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=t.call(i,"catchLoc"),u=t.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(n,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&t.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===n||"continue"===n)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=n,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(n,e){if("throw"===n.type)throw n.arg;return"break"===n.type||"continue"===n.type?this.next=n.arg:"return"===n.type?(this.rval=this.arg=n.arg,this.method="return",this.next="end"):"normal"===n.type&&e&&(this.next=e),f},finish:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===n)return this.complete(r.completion,r.afterLoc),k(r),f}},catch:function(n){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===n){var t=r.completion;if("throw"===t.type){var o=t.arg;k(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(n,e,r){return this.delegate={iterator:L(n),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),f}},n}("object"===e(n)?n.exports:{});try{regeneratorRuntime=r}catch(n){Function("r","regeneratorRuntime = r")(r)}}).call(this,r(4)(n))},function(n,e){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},function(n,e,r){var t=r(0),o=r(6);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},function(n,e,r){(e=r(1)(!1)).push([n.i,"* {\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\nbody {\r\n    font-family: 'Poppins', sans-serif;\r\n    background-color: white;\r\n    min-height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n/*\r\n   Like\r\n*/\r\n.like {\r\n    font-size: 18px;\r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    background-color: #db0000;\r\n    color: white;\r\n    border: 0;\r\n    border-radius: 50%;\r\n    width: 55px;\r\n    height: 55px;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n/*\r\n    AppBar\r\n  */\r\n\r\n.app-bar {\r\n    padding: 8px 16px;\r\n    background-color: white;\r\n    display: grid;\r\n    grid-template-columns: auto 1fr auto;\r\n    gap: 10px;\r\n    position: sticky;\r\n    top: 0;\r\n    z-index: 99;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.app-bar .app-bar__menu {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__menu button {\r\n    background-color: transparent;\r\n    border: none;\r\n    font-size: 18px;\r\n    padding: 8px;\r\n    cursor: pointer;\r\n}\r\n\r\n.app-bar .app-bar__brand {\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.app-bar .app-bar__brand h1 {\r\n    color: #db0000;\r\n    text-transform: uppercase;\r\n    font-size: 22px;\r\n    user-select: none;\r\n}\r\n\r\n.app-bar .app-bar__navigation {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: -180px;\r\n    width: 150px;\r\n    transition: all 0.3s;\r\n    padding: 8px;\r\n    background-color: white;\r\n    overflow: hidden;\r\n}\r\n\r\n.app-bar .app-bar__navigation.open {\r\n    left: 0;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul li a {\r\n    display: inline-block;\r\n    text-decoration: none;\r\n    color: black;\r\n    padding: 8px;\r\n    margin-bottom: 5px;\r\n    width: 100%;\r\n}\r\n\r\n/*\r\n    Main Content\r\n  */\r\n\r\nmain {\r\n    padding: 32px;\r\n    flex: 1;\r\n}\r\n\r\n.content {\r\n    margin: 0 auto;\r\n    min-height: 100%;\r\n}\r\n\r\n.content .content__heading {\r\n    font-weight: normal;\r\n}\r\n\r\n\r\n/*\r\n    Movies\r\n  */\r\n\r\n.movies {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 16px;\r\n    margin: 32px 0;\r\n}\r\n\r\n\r\n/*\r\n    Movie Item\r\n  */\r\n\r\n.movie-item {\r\n    width: 100%;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    border-radius: 8px;\r\n    overflow: hidden;\r\n}\r\n\r\n.movie-item__header {\r\n    position: relative;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__poster {\r\n    width: 100%;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__rating {\r\n    position: absolute;\r\n    padding: 8px;\r\n    bottom: 20px;\r\n    left: 0;\r\n    display: inline-block;\r\n    background-color: black;\r\n    color: white;\r\n}\r\n\r\n.movie-item .movie-item__header .movie-item__header__rating .movie-item__header__rating__score {\r\n    margin-left: 10px;\r\n}\r\n\r\n.movie-item .movie-item__content {\r\n    padding: 16px;\r\n}\r\n\r\n.movie-item .movie-item__content h3 {\r\n    margin: 0 0 10px 0;\r\n}\r\n\r\n.movie-item .movie-item__content h3 a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n}\r\n\r\n.movie-item .movie-item__content p {\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    display: -webkit-box;\r\n    -webkit-line-clamp: 4;\r\n    /* number of lines to show */\r\n    -webkit-box-orient: vertical;\r\n}\r\n\r\n\r\n/*\r\n    Movie\r\n  */\r\n\r\n.movie {\r\n    margin: 0 auto;\r\n    width: 100%;\r\n    max-width: 800px;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    gap: 18px 16px;\r\n}\r\n\r\n.movie .movie__poster {\r\n    width: 100%;\r\n    max-width: 400px;\r\n}\r\n\r\n.movie .movie__info h4 {\r\n    margin: 8px 0;\r\n}\r\n\r\n\r\n\r\n/*\r\n    Footer\r\n  */\r\n\r\nfooter {\r\n    padding: 16px;\r\n}\r\n\r\nfooter p {\r\n    text-align: center;\r\n    color: #aaaaaa;\r\n}\r\n\r\nfooter p a {\r\n    color: #db0000;\r\n    text-decoration: none;\r\n}",""]),n.exports=e},function(n,e,r){var t=r(0),o=r(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[n.i,o,""]]);var i={insert:"head",singleton:!1};t(o,i);n.exports=o.locals||{}},function(n,e,r){(e=r(1)(!1)).push([n.i,"@media screen and (min-width: 650px) {\r\n    .app-bar {\r\n        grid-template-columns: 1fr auto;\r\n        padding: 8px 32px;\r\n    }\r\n\r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 1.5em;\r\n    }\r\n\r\n    .app-bar .app-bar__menu {\r\n        display: none;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation {\r\n        position: static;\r\n        width: 100%;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation ul li {\r\n        display: inline-block;\r\n    }\r\n\r\n    .app-bar .app-bar__navigation ul li a {\r\n        display: inline-block;\r\n        width: 120px;\r\n        text-align: center;\r\n        margin: 0;\r\n    }\r\n\r\n    .movies {\r\n        grid-template-columns: 1fr 1fr;\r\n    }\r\n\r\n    .movie {\r\n        grid-template-columns: auto 1fr;\r\n    }\r\n\r\n    .movie .movie__title {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n\r\n    .movie .movie__overview {\r\n        grid-column-start: 1;\r\n        grid-column-end: 3;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 800px) {\r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 2em;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 850px) {\r\n    .movies {\r\n        grid-template-columns: repeat(3, 1fr);\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1200px) {\r\n    .movies {\r\n        grid-template-columns: repeat(4, 1fr);\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 1600px) {\r\n    .movies {\r\n        grid-template-columns: repeat(5, 1fr);\r\n    }\r\n}",""]),n.exports=e},function(n,e,r){"use strict";r.r(e);r(3),r(5),r(7);var t={init:function(n){var e=this,r=n.button,t=n.drawer,o=n.content;r.addEventListener("click",(function(n){e._toggleDrawer(n,t)})),o.addEventListener("click",(function(n){e._closeDrawer(n,t)}))},_toggleDrawer:function(n,e){n.stopPropagation(),e.classList.toggle("open")},_closeDrawer:function(n,e){n.stopPropagation(),e.classList.remove("open")}},o={parseActiveUrlWithCombiner:function(){var n=window.location.hash.slice(1).toLowerCase(),e=this._urlSplitter(n);return this._urlCombiner(e)},parseActiveUrlWithoutCombiner:function(){var n=window.location.hash.slice(1).toLowerCase();return this._urlSplitter(n)},_urlSplitter:function(n){var e=n.split("/");return{resource:e[1]||null,id:e[2]||null,verb:e[3]||null}},_urlCombiner:function(n){return(n.resource?"/".concat(n.resource):"/")+(n.id?"/:id":"")+(n.verb?"/".concat(n.verb):"")}},i={KEY:"fe9dd1884d7f20df2a0b33df6af44f56",BASE_URL:"https://api.themoviedb.org/3/",BASE_IMAGE_URL:"https://image.tmdb.org/t/p/w500/",DEFAULT_LANGUAGE:"en-us",CACHE_NAME:"movie-calatogue-v1",DATABASE_NAME:"movie-catalogue-database",DATABASE_VERSION:1,OBJECT_STORE_NAME:"movies"},a={NOW_PLAYING:"".concat(i.BASE_URL,"movie/now_playing?api_key=").concat(i.KEY,"&language=").concat(i.DEFAULT_LANGUAGE,"&page=1"),UPCOMING:"".concat(i.BASE_URL,"movie/upcoming?api_key=").concat(i.KEY,"&language=").concat(i.DEFAULT_LANGUAGE,"&page=1"),DETAIL:function(n){return"".concat(i.BASE_URL,"movie/").concat(n,"?api_key=").concat(i.KEY)}};function c(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void r(n)}c.done?e(u):Promise.resolve(u).then(t,o)}function u(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){c(i,t,o,a,u,"next",n)}function u(n){c(i,t,o,a,u,"throw",n)}a(void 0)}))}}function s(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var l=function(){function n(){!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n)}var e,r,t,o,i,c;return e=n,r=null,t=[{key:"nowPlayingMovies",value:(c=u(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(a.NOW_PLAYING);case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)}))),function(){return c.apply(this,arguments)})},{key:"upcomingMovies",value:(i=u(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(a.UPCOMING);case 2:return e=n.sent,n.next=5,e.json();case 5:return r=n.sent,n.abrupt("return",r.results);case 7:case"end":return n.stop()}}),n)}))),function(){return i.apply(this,arguments)})},{key:"detailMovie",value:(o=u(regeneratorRuntime.mark((function n(e){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch(a.DETAIL(e));case 2:return r=n.sent,n.abrupt("return",r.json());case 4:case"end":return n.stop()}}),n)}))),function(n){return o.apply(this,arguments)})}],r&&s(e.prototype,r),t&&s(e,t),n}(),f=function(n){return'\n  <h2 class="movie__title">'.concat(n.title,'</h2>\n  <img class="movie__poster" src="').concat(i.BASE_IMAGE_URL+n.poster_path,'" alt="').concat(n.title,'" />\n  <div class="movie__info">\n  <h3>Information</h3>\n    <h4>Tagline</h4>\n    <p>').concat(n.tagline,"</p>\n    <h4>Release Date</h4>\n    <p>").concat(n.release_date,"</p>\n    <h4>Duration</h4>\n    <p>").concat(n.runtime," minutes</p>\n    <h4>Rating</h4>\n    <p>").concat(n.vote_average,'</p>\n  </div>\n  <div class="movie__overview">\n    <h3>Overview</h3>\n    <p>').concat(n.overview,"</p>\n  </div>\n")},p=function(n){return'\n  <div class="movie-item">\n    <div class="movie-item__header">\n        <img class="movie-item__header__poster" alt="'.concat(n.title,'"\n            src="').concat(n.backdrop_path?i.BASE_IMAGE_URL+n.backdrop_path:"https://picsum.photos/id/666/800/450?grayscale",'">\n        <div class="movie-item__header__rating">\n            <p>⭐️<span class="movie-item__header__rating__score">').concat(n.vote_average,'</span></p>\n        </div>\n    </div>\n    <div class="movie-item__content">\n        <h3><a href="',"/#/detail/".concat(n.id),'">').concat(n.title,"</a></h3>\n        <p>").concat(n.overview,"</p>\n    </div>\n  </div>\n  ")};function d(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void r(n)}c.done?e(u):Promise.resolve(u).then(t,o)}function v(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){d(i,t,o,a,c,"next",n)}function c(n){d(i,t,o,a,c,"throw",n)}a(void 0)}))}}var h={render:function(){return v(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Now Playing in Cinema</h2>\n        <div id="movies" class="movies">\n \n        </div>\n      </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return v(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.nowPlayingMovies();case 2:e=n.sent,r=document.querySelector("#movies"),e.forEach((function(n){r.innerHTML+=p(n)}));case 5:case"end":return n.stop()}}),n)})))()}};function m(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void r(n)}c.done?e(u):Promise.resolve(u).then(t,o)}function g(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){m(i,t,o,a,c,"next",n)}function c(n){m(i,t,o,a,c,"throw",n)}a(void 0)}))}}var y,b,w={render:function(){return g(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Upcoming in Cinema</h2>\n        <div id="movies" class="movies">\n  \n        </div>\n      </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return g(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,l.upcomingMovies();case 2:e=n.sent,r=document.querySelector("#movies"),e.forEach((function(n){r.innerHTML+=p(n)}));case 5:case"end":return n.stop()}}),n)})))()}};var _=new WeakMap,x=new WeakMap,k=new WeakMap,E=new WeakMap,L=new WeakMap;var R={get:function(n,e,r){if(n instanceof IDBTransaction){if("done"===e)return x.get(n);if("objectStoreNames"===e)return n.objectStoreNames||k.get(n);if("store"===e)return r.objectStoreNames[1]?void 0:r.objectStore(r.objectStoreNames[0])}return A(n[e])},set:function(n,e,r){return n[e]=r,!0},has:function(n,e){return n instanceof IDBTransaction&&("done"===e||"store"===e)||e in n}};function P(n){return n!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(b||(b=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(n)?function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return n.apply(M(this),r),A(_.get(this))}:function(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];return A(n.apply(M(this),r))}:function(e){for(var r=arguments.length,t=new Array(r>1?r-1:0),o=1;o<r;o++)t[o-1]=arguments[o];var i=n.call.apply(n,[M(this),e].concat(t));return k.set(i,e.sort?e.sort():[e]),A(i)}}function S(n){return"function"==typeof n?P(n):(n instanceof IDBTransaction&&function(n){if(!x.has(n)){var e=new Promise((function(e,r){var t=function(){n.removeEventListener("complete",o),n.removeEventListener("error",i),n.removeEventListener("abort",i)},o=function(){e(),t()},i=function(){r(n.error||new DOMException("AbortError","AbortError")),t()};n.addEventListener("complete",o),n.addEventListener("error",i),n.addEventListener("abort",i)}));x.set(n,e)}}(n),e=n,(y||(y=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])).some((function(n){return e instanceof n}))?new Proxy(n,R):n);var e}function A(n){if(n instanceof IDBRequest)return e=n,(r=new Promise((function(n,r){var t=function(){e.removeEventListener("success",o),e.removeEventListener("error",i)},o=function(){n(A(e.result)),t()},i=function(){r(e.error),t()};e.addEventListener("success",o),e.addEventListener("error",i)}))).then((function(n){n instanceof IDBCursor&&_.set(n,e)})).catch((function(){})),L.set(r,e),r;var e,r;if(E.has(n))return E.get(n);var t=S(n);return t!==n&&(E.set(n,t),L.set(t,n)),t}var M=function(n){return L.get(n)};function O(n,e){var r=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.push.apply(r,t)}return r}function j(n){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?O(Object(r),!0).forEach((function(e){B(n,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(r)):O(Object(r)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(r,e))}))}return n}function B(n,e,r){return e in n?Object.defineProperty(n,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[e]=r,n}function N(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void r(n)}c.done?e(u):Promise.resolve(u).then(t,o)}var D=["get","getKey","getAll","getAllKeys","count"],C=["put","add","delete","clear"],T=new Map;function I(n,e){if(n instanceof IDBDatabase&&!(e in n)&&"string"==typeof e){if(T.get(e))return T.get(e);var r=e.replace(/FromIndex$/,""),t=e!==r,o=C.includes(r);if(r in(t?IDBIndex:IDBObjectStore).prototype&&(o||D.includes(r))){var i=function(){var n,e=(n=regeneratorRuntime.mark((function n(e){var i,a,c,u,s,l,f=arguments;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:for(a=this.transaction(e,o?"readwrite":"readonly"),c=a.store,u=f.length,s=new Array(u>1?u-1:0),l=1;l<u;l++)s[l-1]=f[l];return t&&(c=c.index(s.shift())),n.next=6,Promise.all([(i=c)[r].apply(i,s),o&&a.done]);case 6:return n.abrupt("return",n.sent[0]);case 7:case"end":return n.stop()}}),n,this)})),function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){N(i,t,o,a,c,"next",n)}function c(n){N(i,t,o,a,c,"throw",n)}a(void 0)}))});return function(n){return e.apply(this,arguments)}}();return T.set(e,i),i}}}function U(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void r(n)}c.done?e(u):Promise.resolve(u).then(t,o)}function G(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){U(i,t,o,a,c,"next",n)}function c(n){U(i,t,o,a,c,"throw",n)}a(void 0)}))}}R=function(n){return j(j({},n),{},{get:function(e,r,t){return I(e,r)||n.get(e,r,t)},has:function(e,r){return!!I(e,r)||n.has(e,r)}})}(R);var W=i.OBJECT_STORE_NAME,q=function(n,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},t=r.blocked,o=r.upgrade,i=r.blocking,a=r.terminated,c=indexedDB.open(n,e),u=A(c);return o&&c.addEventListener("upgradeneeded",(function(n){o(A(c.result),n.oldVersion,n.newVersion,A(c.transaction))})),t&&c.addEventListener("blocked",(function(){return t()})),u.then((function(n){a&&n.addEventListener("close",(function(){return a()})),i&&n.addEventListener("versionchange",(function(){return i()}))})).catch((function(){})),u}(i.DATABASE_NAME,i.DATABASE_VERSION,{upgrade:function(n){n.createObjectStore(W,{keyPath:"id"})}}),F={getMovie:function(n){return G(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q;case 2:return e.abrupt("return",e.sent.get(W,n));case 3:case"end":return e.stop()}}),e)})))()},getAllMovies:function(){return G(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,q;case 2:return n.abrupt("return",n.sent.getAll(W));case 3:case"end":return n.stop()}}),n)})))()},putMovie:function(n){return G(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q;case 2:return e.abrupt("return",e.sent.put(W,n));case 3:case"end":return e.stop()}}),e)})))()},deleteMovie:function(n){return G(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q;case 2:return e.abrupt("return",e.sent.delete(W,n));case 3:case"end":return e.stop()}}),e)})))()}};function H(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void r(n)}c.done?e(u):Promise.resolve(u).then(t,o)}function Y(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){H(i,t,o,a,c,"next",n)}function c(n){H(i,t,o,a,c,"throw",n)}a(void 0)}))}}var K={init:function(n){var e=this;return Y(regeneratorRuntime.mark((function r(){var t,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=n.likeButtonContainer,o=n.movie,e._likeButtonContainer=t,e._movie=o,r.next=5,e._renderButton();case 5:case"end":return r.stop()}}),r)})))()},_renderButton:function(){var n=this;return Y(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n._movie.id,e.next=3,n._isMovieExist(r);case 3:if(!e.sent){e.next=7;break}n._renderLiked(),e.next=8;break;case 7:n._renderLike();case 8:case"end":return e.stop()}}),e)})))()},_isMovieExist:function(n){return Y(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.getMovie(n);case 2:return r=e.sent,e.abrupt("return",!!r);case 4:case"end":return e.stop()}}),e)})))()},_renderLike:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="like this movie" id="likeButton" class="like">\n     <i class="fa fa-heart-o" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",Y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.putMovie(n._movie);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))},_renderLiked:function(){var n=this;this._likeButtonContainer.innerHTML='\n  <button aria-label="unlike this movie" id="likeButton" class="like">\n    <i class="fa fa-heart" aria-hidden="true"></i>\n  </button>\n',document.querySelector("#likeButton").addEventListener("click",Y(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.deleteMovie(n._movie.id);case 2:n._renderButton();case 3:case"end":return e.stop()}}),e)}))))}};function z(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void r(n)}c.done?e(u):Promise.resolve(u).then(t,o)}function J(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){z(i,t,o,a,c,"next",n)}function c(n){z(i,t,o,a,c,"throw",n)}a(void 0)}))}}function V(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void r(n)}c.done?e(u):Promise.resolve(u).then(t,o)}function $(n){return function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){V(i,t,o,a,c,"next",n)}function c(n){V(i,t,o,a,c,"throw",n)}a(void 0)}))}}var Q={"/":h,"/now-playing":h,"/upcoming":w,"/what-movies/detail/:id":{render:function(){return J(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div id="movie" class="movie"></div>\n      <div id="likeButtonContainer"></div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return J(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.parseActiveUrlWithoutCombiner(),n.next=3,l.detailMovie(e.id);case 3:r=n.sent,document.querySelector("#movie").innerHTML=f(r),K.init({likeButtonContainer:document.querySelector("#likeButtonContainer"),movie:{id:r.id,title:r.title,overview:r.overview,backdrop_path:r.backdrop_path,vote_average:r.vote_average}});case 7:case"end":return n.stop()}}),n)})))()}},"/like":{render:function(){return $(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",'\n      <div class="content">\n        <h2 class="content__heading">Your Liked Movie</h2>\n        <div id="movies" class="movies">\n \n        </div>\n      </div>\n    ');case 1:case"end":return n.stop()}}),n)})))()},afterRender:function(){return $(regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,F.getAllMovies();case 2:e=n.sent,r=document.querySelector("#movies"),e.forEach((function(n){r.innerHTML+=p(n)}));case 5:case"end":return n.stop()}}),n)})))()}}};function X(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void r(n)}c.done?e(u):Promise.resolve(u).then(t,o)}function Z(n,e){for(var r=0;r<e.length;r++){var t=e[r];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}var nn=function(){function n(e){var r=e.button,t=e.drawer,o=e.content;!function(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),this._button=r,this._drawer=t,this._content=o,this._initialAppShell()}var e,r,i,a,c;return e=n,(r=[{key:"_initialAppShell",value:function(){t.init({button:this._button,drawer:this._drawer,content:this._content})}},{key:"renderPage",value:(a=regeneratorRuntime.mark((function n(){var e,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=o.parseActiveUrlWithCombiner(),r=Q[e],n.next=4,r.render();case 4:return this._content.innerHTML=n.sent,n.next=7,r.afterRender();case 7:case"end":return n.stop()}}),n,this)})),c=function(){var n=this,e=arguments;return new Promise((function(r,t){var o=a.apply(n,e);function i(n){X(o,r,t,i,c,"next",n)}function c(n){X(o,r,t,i,c,"throw",n)}i(void 0)}))},function(){return c.apply(this,arguments)})}])&&Z(e.prototype,r),i&&Z(e,i),n}(),en=r(2),rn=r.n(en);function tn(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void r(n)}c.done?e(u):Promise.resolve(u).then(t,o)}var on=function(){var n,e=(n=regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!("serviceWorker"in navigator)){n.next=4;break}return n.next=3,rn.a.register();case 3:return n.abrupt("return");case 4:console.log("Service worker not supported in this browser");case 5:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){tn(i,t,o,a,c,"next",n)}function c(n){tn(i,t,o,a,c,"throw",n)}a(void 0)}))});return function(){return e.apply(this,arguments)}}();function an(n,e,r,t,o,i,a){try{var c=n[i](a),u=c.value}catch(n){return void r(n)}c.done?e(u):Promise.resolve(u).then(t,o)}var cn={sendNotification:function(n){var e=n.title,r=n.options;if(this._checkAvailability())return this._checkPermission()?void this._showNotification({title:e,options:r}):(console.log("User did not yet granted permission"),void this._requestPermission());console.log("Notification not supported in this browser")},_checkAvailability:function(){return!!("Notification"in window)},_checkPermission:function(){return"granted"===Notification.permission},_requestPermission:function(){return(n=regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Notification.requestPermission();case 2:"denied"===(e=n.sent)&&console.log("Notification Denied"),"default"===e&&console.log("Permission closed");case 5:case"end":return n.stop()}}),n)})),function(){var e=this,r=arguments;return new Promise((function(t,o){var i=n.apply(e,r);function a(n){an(i,t,o,a,c,"next",n)}function c(n){an(i,t,o,a,c,"throw",n)}a(void 0)}))})();var n}},un={init:function(n){var e=new WebSocket(n);e.onmessage=this._onMessageHandler,this._closeWebSocket(e)},_onMessageHandler:function(n){var e=JSON.parse(n.data);cn.sendNotification({title:"".concat(e.title," is on cinema!"),options:{body:e.overview,image:"".concat(i.BASE_IMAGE_URL+e.poster_path)}})},_closeWebSocket:function(n){if(n.bufferedAmount)throw new Error("Pending data is still available");n.close()}},sn=new nn({button:document.querySelector("#hamburgerButton"),drawer:document.querySelector("#navigationDrawer"),content:document.querySelector("#mainContent")});window.addEventListener("hashchange",(function(){sn.renderPage()})),window.addEventListener("load",(function(){sn.renderPage(),on(),un.init(i.WEB_SOCKET_SERVER)}))}]);