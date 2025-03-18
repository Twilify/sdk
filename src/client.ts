interface TwilifyClientConfig {
  apiUrl: string;
  // netAdapter: NetAdapter;
}

export let client: TwilifyClient;

class TwilifyClient {
  constructor(
    private readonly apiKey: string,
    private readonly config: TwilifyClientConfig
  ) {
    if (client) {
      throw new Error('Client already initialized');
    }

    client = this;
  }

  async makeAPICall<T>(url: string, eventInit?: Parameters<typeof fetch>[1]) {
    return fetch(`${this.config.apiUrl}/${url}`, {
      ...eventInit,
      headers: {
        TWILIFY_API: this.apiKey,
      },
    });
  }
}

export { TwilifyClient };
export type { TwilifyClientConfig };
