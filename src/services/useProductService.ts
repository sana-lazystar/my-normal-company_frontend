import { useInfiniteQuery, useQuery } from '@tanstack/react-query';

import { getProductDetailAPI, getProductListAPI } from '@/apis';

export const productQueryKeys = {
  list: ['products'] as const,
  detail: (name: string) => ['products', name] as const,
};

export const useProductListInfiniteQuery = (start?: number) =>
  useInfiniteQuery({
    queryKey: productQueryKeys.list,
    queryFn: ({ pageParam }) => getProductListAPI(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.length !== 3) return;

      return { start: allPages.length * lastPage.length };
    },
    initialPageParam: { start },
  });

export const useProductDetailQuery = (name: string) =>
  useQuery({
    queryKey: productQueryKeys.detail(name),
    queryFn: () => getProductDetailAPI({ name }),
    enabled: !!name,
  });
