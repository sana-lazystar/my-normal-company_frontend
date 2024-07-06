import { baseAPI } from './baseAPI';
import {
  BasePageableRequest,
  BaseResponse,
  Product,
  ProductList,
  product,
  productList,
} from './responses';

import { API_URL } from '@/constants';

type GetProductListRequest = BasePageableRequest;

type GetProductListResponse = BaseResponse<ProductList>;

export const getProductListAPI = async ({ start }: GetProductListRequest) => {
  const response = await baseAPI<GetProductListResponse>({
    url: `${API_URL.product.list}?start=${start}`,
    method: 'get',
  });

  if (response.status !== 200) throw new Error('Failed to get product list');

  return productList.parse(response.data);
};

type GetProductDetailRequest = { name: string };

type GetProductDetailResponse = BaseResponse<Product>;

export const getProductDetailAPI = async ({ name }: GetProductDetailRequest) => {
  const response = await baseAPI<GetProductDetailResponse>({
    url: `${API_URL.product.detail}/${encodeURIComponent(name)}`,
    method: 'get',
  });

  if (response.status !== 200) throw new Error('Failed to get product detail');

  return product.parse(response.data);
};
