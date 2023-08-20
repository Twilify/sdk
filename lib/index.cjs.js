'use strict';
var p = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var U = Object.prototype.hasOwnProperty;
var g = (t, e) => {
    for (var r in e) p(t, r, { get: e[r], enumerable: !0 });
  },
  l = (t, e, r, s) => {
    if ((e && typeof e == 'object') || typeof e == 'function')
      for (let o of m(e))
        !U.call(t, o) &&
          o !== r &&
          p(t, o, {
            get: () => e[o],
            enumerable: !(s = f(e, o)) || s.enumerable,
          });
    return t;
  };
var P = (t) => l(p({}, '__esModule', { value: !0 }), t);
var d = {};
g(d, { fetchPage: () => c, makePageEndpointUrl: () => n });
module.exports = P(d);
var a = require('ofetch');
var h = {
    API_URL: process.env.API_URL || 'https://api.twilify.app',
    CDN_URL: process.env.CDN_URL || 'https://cdn.twilify.app',
    DEBUG: process.env.DEBUG || !1,
  },
  i = h;
var n = (t) => `${i.API_URL}/pages/${t}`,
  c = (t, e = {}) => {
    let r = n(t);
    return (0, a.$fetch)(r, { method: 'GET', query: e });
  };
//# sourceMappingURL=index.cjs.js.map
