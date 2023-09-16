import CONFIG from '../config';
import { getInstance } from '../instance';

import { fetchEventSource } from '@microsoft/fetch-event-source';

let allowListeners = process.env.NODE_ENV === 'development';

window.addEventListener('message', function (event) {
  if (
    event.origin === 'https://twilify.app' ||
    process.env.NODE_ENV === 'development'
  ) {
    if (event.data?.allowListeners != undefined) {
      allowListeners = event.data.allowListeners;
    }
  }
});

const watchForPageChanges = (slug: string, onUpdate: (data: any) => void) => {
  if (!allowListeners) return;

  fetchEventSource(`${CONFIG.API_URL}/content-editor/pages/changes`, {
    headers: {
      Authorization: getInstance().options.apiKey,
    },
    onmessage(ev) {
      onUpdate(JSON.parse(ev.data));
    },
  });
};

export { watchForPageChanges };
