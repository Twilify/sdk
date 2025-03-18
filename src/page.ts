import { client } from './client';

class TwilifyPage<T> {
  constructor(public readonly slug: string) {
    if (!client) throw new Error('Client not initialized');
  }

  async fetch(): Promise<T> {
    const resp = await client.makeAPICall<T>(`/page/${this.slug}`, {
      method: 'GET',
    });

    return resp.json() as Promise<T>;
  }

  async devModeEnsure() {}
}

export { TwilifyPage };
