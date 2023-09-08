import CONFIG from '../config';
import { getInstance } from '../instance';

const watchForPageChanges = () => {
  const source = new EventSource(
    `${CONFIG.API_URL}/content-editor/pages/changes`,
    {
      withCredentials: true,
    }
  );

  source.onopen = () => {
    (source as any)._xhrHeaders = {
      Authorization: getInstance().options.apiKey,
    };
  };
};

export { watchForPageChanges };
