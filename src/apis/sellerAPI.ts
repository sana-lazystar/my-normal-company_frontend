import { baseAPI } from './baseAPI';
import { BasePageableRequest, BaseResponse, ProductList, productList } from './responses';

import { API_URL } from '@/constants';

type GetSellerProductListRequest = BasePageableRequest & { seller: string };

type GetSellerProductListResponse = BaseResponse<ProductList>;

export const getSellerProductListAPI = async ({ seller, start }: GetSellerProductListRequest) => {
  const response = await baseAPI<GetSellerProductListResponse>({
    url: `${API_URL.seller.list}/${seller}?start=${start}`,
    method: 'get',
  });

  if (response.status !== 200) throw new Error('Failed to get seller product list');

  return productList.parse(response.data);
};

type AddSellerFavoriteRequest = {
  seller: string;
};

type AddSellerFavoriteResponse = BaseResponse<void>;

export const addSellerFavoriteAPI = async ({ seller }: AddSellerFavoriteRequest) => {
  const response = await baseAPI<AddSellerFavoriteResponse>({
    url: API_URL.seller.favorite(encodeURIComponent(seller)),
    method: 'post',
  });

  if (response.status !== 200) throw new Error('Failed to post seller favorite');

  return;
};

type DeleteSellerFavoriteRequest = {
  seller: string;
};

type DeleteSellerFavoriteResponse = BaseResponse<void>;

export const deleteSellerFavoriteAPI = async ({ seller }: DeleteSellerFavoriteRequest) => {
  const response = await baseAPI<DeleteSellerFavoriteResponse>({
    url: API_URL.seller.favorite(seller),
    method: 'delete',
  });

  if (response.status !== 200) throw new Error('Failed to delete seller favorite');

  return;
};
