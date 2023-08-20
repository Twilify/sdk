import { $fetch } from 'ofetch';
import CONFIG from '../config';

interface Options {}

export const makePageEndpointUrl = (slug: string) => {
  return `${CONFIG.API_URL}/pages/${slug}`;
};

export const fetchPage = (slug: string, options: Options = {}) => {
  const url = makePageEndpointUrl(slug);

  return $fetch(url, {
    method: 'GET',
    query: options,
  });
};
