import CONFIG from '../config';

export const trimInitialTrailingSlashes = (input: string): string => {
  return input.replace(/^\/+/, '');
};

export const makePageEndpointUrl = (slug: string) => {
  return `${CONFIG.API_URL}/pages/${trimInitialTrailingSlashes(slug)}`;
};
