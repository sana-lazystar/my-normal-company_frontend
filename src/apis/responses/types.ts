import { AxiosHeaders } from 'axios';
import { z } from 'zod';

import { product, productList } from './objects';

export type BasePageableRequest = { start?: number };

export type BaseResponse<Data> = {
  config: unknown;
  data: Data;
  headers: AxiosHeaders;
  request: XMLHttpRequest;
  status: 200 | 404 | 500;
  statusText?: string;
};

export type Product = z.infer<typeof product>;

export type ProductList = z.infer<typeof productList>;
