let instance: TwilifyInstance;

class TwilifyInstance {
  constructor(readonly options: InitializeOptions) {}
}

interface InitializeOptions {
  apiKey: string;
}

const initializeTwilify = (options: InitializeOptions) => {
  instance = new TwilifyInstance(options);
};

const getInstance = () => {
  if (!instance)
    throw new Error(
      'Twilify instance is not initialized, use "initializeTwilify" first'
    );

  return instance;
};

export { initializeTwilify, getInstance };
