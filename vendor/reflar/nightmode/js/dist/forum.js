module.exports=function(e){var r={};function o(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}return o.m=e,o.c=r,o.d=function(e,r,n){o.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,r){if(1&r&&(e=o(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var t in e)o.d(n,t,function(r){return e[r]}.bind(null,t));return n},o.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(r,"a",r),r},o.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},o.p="",o(o.s=6)}([function(e,r){e.exports=flarum.core.compat.extend},function(e,r){e.exports=flarum.core.compat["components/SessionDropdown"]},function(e,r){e.exports=flarum.core.compat["components/Button"]},function(e,r){e.exports=flarum.core.compat["components/Page"]},function(e,r){e.exports=flarum.core.compat["tags/components/TagsPage"]},function(e,r){e.exports=flarum.core.compat.app},function(e,r,o){"use strict";o.r(r);var n=o(0),t=o(1),s=o.n(t),a=o(2),i=o.n(a),u=o(3),c=o.n(u),f=o(4),d=o.n(f),l=o(5);o.n(l).a.initializers.add("reflar-nightmode",function(e){Object(n.extend)(c.a.prototype,"init",function(r){e.session.user&&e.session.user.preferences().reflarNightMode?$("body").addClass("dark"):$("body").removeClass("dark")}),Object(n.extend)(d.a.prototype,"config",function(r){e.session.user&&e.session.user.preferences().reflarNightMode?$("body").addClass("dark"):$("body").removeClass("dark")}),Object(n.extend)(s.a.prototype,"items",function(r){var o=1!=e.session.user.preferences().reflarNightMode;r.add(e.session.user&&e.session.user.preferences().reflarNightMode?"nightmode":"daymode",i.a.component({icon:1==o?"far fa-moon":"far fa-sun",href:"javascript:;",children:1==o?e.translator.trans("reflar-nightmode.forum.night"):e.translator.trans("reflar-nightmode.forum.day"),onclick:function(){e.session.user.savePreferences({reflarNightMode:o}),$("body").toggleClass("dark")}}),-1)})})}]);
//# sourceMappingURL=forum.js.map