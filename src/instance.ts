const instance = {
  apiKey: null as string | null,
};

const login = (apiKey: string) => {
  instance.apiKey = apiKey;
};

export { login, instance };
