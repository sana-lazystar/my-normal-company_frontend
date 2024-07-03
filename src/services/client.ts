import { QueryClient } from '@tanstack/react-query';

import { MILLISECOND_TIME_FORMAT } from '@/constants';

let browserQueryClient: QueryClient | undefined;

const createQueryClient = () =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: 0,
        retryDelay: MILLISECOND_TIME_FORMAT.seconds(2),
        staleTime: MILLISECOND_TIME_FORMAT.seconds(5),
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        refetchOnReconnect: true,
      },
      mutations: {
        retry: 0,
        retryDelay: MILLISECOND_TIME_FORMAT.seconds(2),
      },
    },
  });

export const getQueryClient = () => {
  if (!browserQueryClient) browserQueryClient = createQueryClient();

  return browserQueryClient;
};
