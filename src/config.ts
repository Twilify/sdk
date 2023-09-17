const CONFIG = {
  API_URL: process.env.API_URL || 'https://api.twilify.app',
  CDN_URL: 'https://cdn.twilify.app',
  DEBUG: process.env.NODE_ENV === 'development',
};

export default CONFIG;
