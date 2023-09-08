import CONFIG from '../config';
import { getInstance } from '../instance';

// import { NativeEventSource, EventSourcePolyfill } from 'event-source-polyfill';
import { fetchEventSource } from '@microsoft/fetch-event-source';

const watchForPageChanges = (slug: string, onUpdate: (data: any) => void) => {
  fetchEventSource(`${CONFIG.API_URL}/content-editor/pages/changes`, {
    headers: {
      Authorization: getInstance().options.apiKey,
    },
    onmessage(ev) {
      console.log(ev);
      onUpdate(JSON.parse(ev.data));
      // onUpdate(JSON.parse(ev.data));
    },
  });

  // const source = new EventSourcePolyfill(
  //   `${CONFIG.API_URL}/content-editor/pages/changes`,
  //   {
  //     headers: {
  //       Authorization: getInstance().options.apiKey,
  //     },
  //   }
  // );

  // console.log(source);

  // source.addEventListener('message', (message) => {
  //   console.log(message);
  // });

  // source.addEventListener('error', (err) => {
  //   console.log(err);
  // });

  // source.addEventListener('open', (data) => {
  //   console.log(data);
  // });
};

export { watchForPageChanges };
