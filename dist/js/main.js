!function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";var i=n(1),r=new i(".root");r.getKeyboard().turnOn()},function(t,e,n){!function(e,n){t.exports=n()}(this,function(){return function(t){function e(i){if(n[i])return n[i].exports;var r=n[i]={exports:{},id:i,loaded:!1};return t[i].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var o=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),u=n(1),a=i(u),c=n(2),l=(n(4),n(3)),f=n(5),h=i(f),v={initIndex:0,initClass:"ds-init",activeClass:"active",transitionInClass:"transition-in",transitionOutClass:"transition-out",silent:!1,horizontal:!1,infinite:!1,listenUserMouseWheel:!0,listenUserSwipe:!0,eventElemSelector:null},d={duration:1e3,timingFunction:"ease",minInterval:50,translate3d:!0,parent:null,respondToUserEvent:!0,stopPropagation:!1},g=function(){function t(){var e=arguments.length<=0||void 0===arguments[0]?document.createElement("div"):arguments[0],n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];r(this,t),this.$=a["default"],this.callbacks={onChanged:[],onBeforeChange:[],onOverRange:[],onUserMouseWheel:[],onUserSwipe:[]},this.userEvent=null,this.isChanging=!1,this.el=e.nodeType?e:document.querySelector(e),this.eventEl=null,this.sections=this.el.children,this.currentIndex=n.initIndex||0,this.currentSection=this.sections[this.currentIndex],this.config=o({},d,v),this.set(n),(0,c.init)(this)}return s(t,[{key:"set",value:function(t,e){var n=this.config;return"string"==typeof t?n[t]=e:o(n,t),this}},{key:"get",value:function(t){return this.config[t]}},{key:"next",value:function(){var t=this.config.infinite?(this.currentIndex+1)%this.el.children.length:this.currentIndex+1;return this.go(t),this}},{key:"prev",value:function(){var t=this.config.infinite?(this.currentIndex||this.el.children.length)-1:this.currentIndex-1;return this.go(t),this}},{key:"go",value:function(t){return(0,l.change)(this,t),this}},{key:"do",value:function(t){return t.call(this,this.currentIndex,this.currentSection),this}},{key:"onChanged",value:function(t){return this.callbacks.onChanged.push(t),this}},{key:"onBeforeChange",value:function(t){return this.callbacks.onBeforeChange.push(t),this}},{key:"onOverRange",value:function(t){return this.callbacks.onOverRange.push(t),this}},{key:"onUserMouseWheel",value:function(t){return this.callbacks.onUserMouseWheel.push(t),this}},{key:"onUserSwipe",value:function(t){return this.callbacks.onUserSwipe.push(t),this}}]),t}();g.from=function(t,e,n){return new g(e,o({},t.config,n))},g.use=function(t,e){t&&t.install&&t.install(g,e)},g.use(h["default"]),g.$=a["default"],g.supportedTransition=a["default"].getSupportedCSS("transition"),g.supportedTransform=a["default"].getSupportedCSS("transform"),t.exports=g},function(t,e){"use strict";function n(t){return"object"===("undefined"==typeof t?"undefined":u(t))&&r(t.length)}function i(t,e,n,i){return r(i)||"object"===("undefined"==typeof n?"undefined":u(n))?(f.each(t,function(t){return e(t,n,i)}),t):t.length?e(t[0],n):void 0}function r(t){return"undefined"!=typeof t}function o(t,e,n,i){if(t&&e)for(var r,o=0,s=t.length;s>o;o++)if(r=n?e.call(n,t[o],o,t):e(t[o],o,t),r===!1)return i}function s(t,e){var n=[];for(var i in t)n.push(e?e(i):i);return n}var u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol?"symbol":typeof t},a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};Object.defineProperty(e,"__esModule",{value:!0});var c=800,l=50,f=function h(t){return new h.prototype.Init(t)};f.prototype={constructor:f,length:0,Init:function(t){var e=this;return t?t instanceof f?t:(t.nodeType?(this[0]=t,this.length=1):("string"==typeof t&&(t=document.querySelectorAll(t)||[]),f.each(t,function(t,n){return e[n]=t}),this.length=t.length),this):this}},f.prototype.Init.prototype=f.prototype,a(f.prototype,{each:function(t,e,n,i){return f.each(this,t,e,n,i)},eq:function(t){return isNaN(t)?f():f(this[0>t?this.length+t:t])},on:function(t,e){var n=arguments.length<=2||void 0===arguments[2]?!1:arguments[2];return this.each(function(i){return f.on(i,t,e,n)})},off:function(t,e){var n=arguments.length<=2||void 0===arguments[2]?!1:arguments[2];return this.each(function(i){return f.off(i,t,e,n)})},attr:function(t,e){return i(this,f.attr,t)},css:function(t,e){return i(this,f.css,t,e)},removeAttr:function(t){return this.each(function(e){return f.removeAttr(e,t)})},addClass:function(t){return this.each(function(e){return f.addClass(e,t)})},removeClass:function(t){return this.each(function(e){return f.removeClass(e,t)})},hasClass:function(t){return!this.each(function(e){return!f.hasClass(e,t)},!1,!0,!1)},onMouseWheel:function(t,e){return this.each(function(n){return f.onMouseWheel(n,t,e)})},onSwipe:function(t,e){return this.each(function(n){return f.onSwipe(n,t,e)})}}),a(f,{each:function(t,e,i,r,o){if(n(t))for(var s,u=0,a=t.length;a>u;u++)if(s=i?e.call(t[u],t[u],u,t):e(t[u],u,t),s===!1&&r)return o;return t},on:function(t,e,n){var i=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];t&&t.addEventListener(e,n,i)},off:function(t,e,n){var i=arguments.length<=3||void 0===arguments[3]?!1:arguments[3];t&&t.removeEventListener(e,n,i)},attr:function(t,e,n){if(t)if("string"==typeof e){if(!r(n))return t.getAttribute(e)||"";t.setAttribute(e,n)}else for(var i in e)t.setAttribute(i,e[i])},css:function(t,e,n){if(t&&e)if("string"==typeof e){if(!r(n))return t.style[e];t.style[e]=n}else for(var i in e)t.style[i]=e[i]},removeAttr:function(t,e){t&&t.removeAttribute(e)},addClass:function(t,e){if(t&&e&&!this.hasClass(t,e)){var n=this.attr(t,"class").trim(),i=(n+" "+e).trim();this.attr(t,"class",i)}},removeClass:function(t,e){if(t&&e){var n=new RegExp("\\s*\\b"+e+"\\b\\s*","g"),i=this.attr(t,"class").replace(n," ").trim();this.attr(t,"class",i)}},hasClass:function(t,e){return!(!t||!e)&&new RegExp("\\b"+e+"\\b").test(this.attr(t,"class"))}}),a(f,{getSupportedCSS:function(){var t=["","-webkit-","-moz-","-o-","-ms-"],e=document.createElement("div"),n=e.style;return function(e){var i=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],r=i?t.map(function(t){return t+e}):[e],s=void 0;return o(r,function(t){return s=void 0!==n[t]?t:s,void 0===s}),s}}(),onMouseWheel:function(t,e){var n=arguments.length<=2||void 0===arguments[2]?function(){return!1}:arguments[2];t&&e&&["DOMMouseScroll","mousewheel"].map(function(i){t.addEventListener(i,function(i){i.preventDefault(),n()&&i.stopPropagation();var r=i.detail?-120*i.detail:i.wheelDelta,o=0>r?"down":"up";e.call(t,o)},!1)})},onSwipe:function(t,e){var n=arguments.length<=2||void 0===arguments[2]?function(){return!1}:arguments[2];if(t&&e){var i=void 0,r=void 0,o=void 0,s=void 0,u=void 0;t.addEventListener("touchstart",function(t){n()&&t.stopPropagation();var e=t.changedTouches[0];i=e.clientX,r=e.clientY,s=e.clientX,u=e.clientY,o=Date.now()},!1),t.addEventListener("touchmove",function(t){if(n()&&t.stopPropagation(),t.preventDefault(),(!t.scale||1===t.scale)&&1===t.changedTouches.length){var e=t.changedTouches[0];s=e.clientX,u=e.clientY}},!1),t.addEventListener("touchend",function(a){if(n()&&a.stopPropagation(),Date.now()-o<c){var f=s-i,h=u-r,v=Math.abs(f),d=Math.abs(h),g={};Math.max(v,d)>l&&(g=v>d?f>0?"right":"left":h>0?"down":"up",e.call(t,g))}},!1)}},forEach:o,keys:s}),e["default"]=f},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t){t.config.silent||(0,u.initSections)(t,t.config.initIndex||0),t.config.eventElemSelector!==!1&&(0,a.startListen)(t),s["default"].removeClass(t.el,t.config.initClass)}Object.defineProperty(e,"__esModule",{value:!0}),e.init=void 0;var o=n(1),s=i(o),u=n(3),a=n(4);e.init=r},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t,e){var n=(0,d["default"])(t.el),i=(0,d["default"])(t.sections);t.config.horizontal?(n.css("width",i.length+"00%"),i.css({width:100/i.length+"%","float":"left"})):(n.css("height",i.length+"00%"),i.css("height",100/i.length+"%")),o(t,e,!0)}function o(t,e,n){var i=t.currentSection,r=t.sections[e],o=t.config,a=o.minInterval+(p?o.duration:0);return a=n?0:a,t.isChanging=!0,t.config.silent||(u(t,e),n||s(o,i,r,!0),h(t,e,n)),setTimeout(function(){o.silent||n||s(o,i,r,!1),t.isChanging=!1},a),a}function s(t,e,n,i){i?(d["default"].addClass(e,t.transitionOutClass),d["default"].addClass(n,t.transitionInClass)):(d["default"].removeClass(e,t.transitionOutClass),d["default"].removeClass(n,t.transitionInClass))}function u(t,e){(0,d["default"])(t.sections).each(function(n,i){i===e?d["default"].addClass(n,t.config.activeClass):d["default"].removeClass(n,t.config.activeClass)})}function a(t,e){c(t,e)&&(l(t,e)?f(t,e):(0,g.executeUserEventCallbacks)(t)&&!function(){var n=t.currentIndex,i=(0,g.executeEventCallbacks)(t,{name:"onBeforeChange",args:[n,e,t.currentSection,t.sections[e]]});if(i){var r=o(t,e);t.currentIndex=e,t.currentSection=t.sections[e],setTimeout(function(){(0,g.executeEventCallbacks)(t,{name:"onChanged",args:[e,n,t.currentSection,t.sections[n]]})},r)}}())}function c(t,e){return!t.isChanging&&e!=t.currentIndex}function l(t,e){return 0>e||e>=t.sections.length}function f(t,e){var n=t.config.parent,i=(0,g.executeEventCallbacks)(t,{name:"onOverRange",args:[t.currentIndex,e,t.currentSection]});i&&n&&(0>e?n.prev():n.next())}function h(t,e,n){var i=t.config;if(m){if(p){var r=m+" "+(i.timingFunction||"")+" "+i.duration+"ms",o=m+" 0ms";d["default"].css(t.el,p,n?o:r)}var s=100*-e/t.sections.length+"%",u=i.horizontal?s+",0":"0,"+s;u=y&&i.translate3d?"translate3d("+u+",0)":"translate("+u+")",d["default"].css(t.el,m,u)}else d["default"].css(t.el,i.horizontal?"left":"top",-e+"00%")}Object.defineProperty(e,"__esModule",{value:!0}),e.change=e.initSections=void 0;var v=n(1),d=i(v),g=n(4),p=d["default"].getSupportedCSS("transition"),m=d["default"].getSupportedCSS("transform"),y=function(){var t=!1;if(m&&window.getComputedStyle){var e=document.createElement("div");document.body.insertBefore(e,null),e.style[m]="translate3d(1%, 1%, 0)",t=window.getComputedStyle(e).getPropertyValue(m),document.body.removeChild(e)}return t&&"none"!==t}();e.initSections=r,e.change=a},function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{"default":t}}function r(t){var e=t.userEvent;if(e){t.userEvent=null;var n=t.callbacks[e.name],i=s(n,e.args,t,!1);return i!==!1}return!0}function o(t,e){var n=t.callbacks[e.name],i=s(n,e.args,t,!1);return i!==!1}function s(t,e,n,i){return h["default"].forEach(t,function(t){return t.apply(n,e)},null,i)}function u(t){a(t),t.config.listenUserMouseWheel&&c(t,t.eventEl),t.config.listenUserSwipe&&l(t,t.eventEl)}function a(t){var e=t.config.eventElemSelector;null===e?t.eventEl=t.el:t.eventEl=e.nodeType?e:document.querySelector(e)}function c(t,e){h["default"].onMouseWheel(e,function(e){t.config.respondToUserEvent&&!t.isChanging&&(t.userEvent={name:"onUserMouseWheel",args:[e]},"down"===e?t.next():t.prev())},function(){return t.config.stopPropagation})}function l(t,e){h["default"].onSwipe(e,function(e){t.config.respondToUserEvent&&!t.isChanging&&(t.userEvent={name:"onUserSwipe",args:[e]},t.config.horizontal?("left"===e&&t.next(),"right"===e&&t.prev()):("up"===e&&t.next(),"down"===e&&t.prev()))},function(){return t.config.stopPropagation})}Object.defineProperty(e,"__esModule",{value:!0}),e.executeUserEventCallbacks=e.executeEventCallbacks=e.startListen=void 0;var f=n(1),h=i(f);e.startListen=u,e.executeEventCallbacks=o,e.executeUserEventCallbacks=r},function(t,e){"use strict";function n(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){return function(e){return e.keyCode===t}}function r(t){var e=this.mappings||[],n=this["for"];e.forEach(function(e){e.filter.call(n,t)===!0&&e.action.call(n,t)})}function o(t){t.prototype.getKeyboard=function(){return this[u]||Object.defineProperty(this,u,{enumerable:!1,configurable:!1,writable:!1,value:new a(this)}),this[u]}}var s=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}();Object.defineProperty(e,"__esModule",{value:!0});var u="plugin.keyboard"+Date.now(),a=function(){function t(e){n(this,t),this.eventType="keydown",this.eventElement=window,this["for"]=e,this.$=e.$,this.isOn=!1,this.listener=r.bind(this),this.mappings=[{filter:i(40),action:function(){this.config.horizontal||this.next()}},{filter:i(38),action:function(){this.config.horizontal||this.prev()}},{filter:i(39),action:function(){this.config.horizontal&&this.next()}},{filter:i(37),action:function(){this.config.horizontal&&this.prev()}}]}return s(t,[{key:"setEventType",value:function(t){if(t!==this.eventType){var e=this.isOn;e&&this.turnOff(),this.eventType=t,e&&this.turnOn()}return this}},{key:"setEventElement",value:function(t){if(t!==this.eventElement){var e=this.isOn;e&&this.turnOff(),this.eventElement=t,e&&this.turnOn()}return this}},{key:"getMappings",value:function(){return this.mappings}},{key:"setMappings",value:function(t){return this.mappings=t,this}},{key:"turnOn",value:function(){return this.isOn||(this.$.on(this.eventElement,this.eventType,this.listener,!1),this.isOn=!0),this}},{key:"turnOff",value:function(){return this.isOn&&(this.$.off(this.eventElement,this.eventType,this.listener,!1),this.isOn=!1),this}}]),t}();e["default"]={install:o}}])})}]);
//# sourceMappingURL=main.js.map