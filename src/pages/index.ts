import { $fetch } from 'ofetch';
import CONFIG from '../config';

interface Options {
  version?: 'production' | 'draft';
}

type PageContent = Record<string, number | string | object>;

interface PageDocument<T extends PageContent = {}> {
  id: string;
  slug: string;
  contentType: string;
  content: T;
}

export const makePageEndpointUrl = (slug: string) => {
  return `${CONFIG.API_URL}/pages/${slug}`;
};

export const fetchPage = <T extends PageContent = {}>(
  slug: string,
  options: Options = {}
) => {
  const url = makePageEndpointUrl(slug);

  return $fetch<PageDocument<T>>(url, {
    method: 'GET',
    query: options,
  });
};
