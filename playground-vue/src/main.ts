import { createApp } from 'vue';
import './style.css';
import App from './App.vue';

import { initializeTwilify } from '@twilify/sdk';

initializeTwilify({
  apiKey: import.meta.env.VITE_TWILIFY_KEY,
});

createApp(App).mount('#app');
