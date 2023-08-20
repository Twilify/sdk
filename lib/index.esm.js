import { $fetch as s } from 'ofetch';
var n = {
    API_URL: process.env.API_URL || 'https://api.twilify.app',
    CDN_URL: process.env.CDN_URL || 'https://cdn.twilify.app',
    DEBUG: process.env.DEBUG || !1,
  },
  e = n;
var r = (t) => `${e.API_URL}/pages/${t}`,
  i = (t, o = {}) => {
    let p = r(t);
    return s(p, { method: 'GET', query: o });
  };
export { i as fetchPage, r as makePageEndpointUrl };
//# sourceMappingURL=index.esm.js.map
