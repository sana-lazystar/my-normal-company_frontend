import { useInfiniteQuery, useMutation } from '@tanstack/react-query';

import { getQueryClient } from './client';
import { Pageable } from './types';

import {
  Product,
  ProductList,
  addSellerFavoriteAPI,
  deleteSellerFavoriteAPI,
  getSellerProductListAPI,
} from '@/apis';

export const sellerQueryKeys = {
  list: (seller?: string) => ['products', 'sellers', seller] as const,
};

export const useSellerProductListInfiniteQuery = (seller?: string, start?: number) =>
  useInfiniteQuery({
    queryKey: sellerQueryKeys.list(seller),
    queryFn: ({ pageParam }) =>
      getSellerProductListAPI({
        seller: seller ?? '',
        start: pageParam.start,
      }),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length !== 3) return;

      return { start: allPages.length * lastPage.length };
    },
    initialPageParam: { start },
    enabled: !!seller,
  });

export const useSellerFavoritePostMutation = (seller: string) => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: () => addSellerFavoriteAPI({ seller }),
    onSuccess: () => {
      queryClient.setQueriesData({ queryKey: ['products'], type: 'active' }, prev => {
        if (isPageableProductList(prev)) {
          return {
            ...prev,
            pages: prev.pages.map(productList =>
              productList.map(product =>
                product.seller === seller ? { ...product, favorite: true } : product
              )
            ),
          };
        }

        if (isProduct(prev)) {
          return { ...prev, favorite: true };
        }

        return prev;
      });
    },
  });
};

export const useSellerFavoriteDeleteMutation = (seller: string) => {
  const queryClient = getQueryClient();

  return useMutation({
    mutationFn: () => deleteSellerFavoriteAPI({ seller }),
    onSuccess: () => {
      queryClient.setQueriesData({ queryKey: ['products'], type: 'active' }, prev => {
        if (isPageableProductList(prev)) {
          return {
            ...prev,
            pages: prev.pages.map(productList =>
              productList.map(product =>
                product.seller === seller ? { ...product, favorite: false } : product
              )
            ),
          };
        }

        if (isProduct(prev)) {
          return { ...prev, favorite: false };
        }

        return prev;
      });
    },
  });
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isProduct = (data: any): data is Product => {
  return (
    Object.keys(data).length === 4 &&
    'seller' in data &&
    'name' in data &&
    'price' in data &&
    'favorite' in data
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isPageableProductList = (data: any): data is Pageable<ProductList> => {
  return (
    isPageableData(data) &&
    (data as Pageable<ProductList>).pages.every(page => page.every(isProduct))
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isPageableData = <Data>(data: any): data is Pageable<Data> => {
  return (
    Object.keys(data).length === 2 &&
    (data as Pageable<Data>).pageParams !== undefined &&
    (data as Pageable<Data>).pages !== undefined
  );
};
