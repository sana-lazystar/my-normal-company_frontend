import axios, { AxiosRequestConfig } from 'axios';

import { SETTINGS } from '@/settings';

const CONTENT_TYPE_KEY = 'Content-Type' as const;
const CONTENT_TYPE = ['json', 'form', 'multipart'] as const;
const DEFAULT_CONTENT_TYPE = CONTENT_TYPE[0];

type ContentType = (typeof CONTENT_TYPE)[number];

type Method = 'get' | 'post' | 'put' | 'delete' | 'patch';

type BaseAPIProps = Pick<
  AxiosRequestConfig,
  | 'baseURL'
  | 'headers'
  | 'url'
  | 'params'
  | 'data'
  | 'responseType'
  | 'onDownloadProgress'
  | 'onUploadProgress'
> & { method: Method; contentType?: ContentType };

export async function baseAPI<TData>({
  baseURL,
  url,
  headers,
  contentType,
  ...restProps
}: BaseAPIProps) {
  const formattedURL = getFormattedURL(baseURL, url);
  const formattedContentType = getFormattedContentType(contentType);

  try {
    return await axios<TData>({
      ...restProps,
      ...formattedURL,
      headers: {
        ...formattedContentType,
        ...headers,
      },
    });
  } catch (error) {
    console.error(`[API Error] URL: ${formattedURL} Content-Type: ${formattedContentType}`);

    throw error;
  }
}

const getFormattedURL = (baseURL?: string, url?: string) => {
  return url?.startsWith('http')
    ? { url }
    : { baseURL: baseURL ?? `${SETTINGS.API_BASE_URL}`, url };
};

const getFormattedContentType = (contentType: ContentType = DEFAULT_CONTENT_TYPE) => {
  switch (contentType) {
    case 'json':
      return {
        [CONTENT_TYPE_KEY]: 'application/json',
      };
    case 'form':
      return {
        [CONTENT_TYPE_KEY]: 'application/x-www-form-urlencoded',
      };
    case 'multipart':
      return {
        [CONTENT_TYPE_KEY]: 'multipart/form-data',
      };
    default:
      return {
        [CONTENT_TYPE_KEY]: 'application/json',
      };
  }
};
