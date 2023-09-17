import CONFIG from '../config';
import { getInstance } from '../instance';

import { fetchEventSource } from '@microsoft/fetch-event-source';
import { isEditorMode } from '../utils/isEditorMode';

const watchForPageChanges = (slug: string, onUpdate: (data: any) => void) => {
  if (!isEditorMode()) return;

  fetchEventSource(
    `${CONFIG.API_URL}/content-editor/pages/changes?slug=${slug}`,
    {
      credentials: 'include',
      headers: {
        Authorization: getInstance().options.apiKey,
      },
      onmessage(ev) {
        onUpdate(JSON.parse(ev.data));
      },
    }
  );
};

export { watchForPageChanges };
