const CONFIG = {
  API_URL: 'https://api.twilify.app',
  CDN_URL: 'https://cdn.twilify.app',
  DEBUG: false,
  WS_URL: '',
};

CONFIG.WS_URL = CONFIG.API_URL.replace(/^http/, 'ws');

export default CONFIG;
