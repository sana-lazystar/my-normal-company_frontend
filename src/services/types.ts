import { BasePageableRequest } from '@/apis';

export type Pageable<Data> = {
  pageParams: BasePageableRequest;
  pages: Data[];
};
