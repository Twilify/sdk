import { $fetch } from 'ofetch';
import { makePageEndpointUrl } from '../utils/url';
import { getInstance } from '../instance';

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

export const fetchPage = <T extends PageContent = {}>(
  slug: string,
  options: Options = {}
) => {
  const url = makePageEndpointUrl(slug);

  return $fetch<PageDocument<T>>(url, {
    method: 'GET',
    query: options,
    headers: {
      Authorization: getInstance().options.apiKey,
    },
  });
};
