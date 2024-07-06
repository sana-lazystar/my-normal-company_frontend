import { useEffect } from 'react';

import {
  useProductDetailQuery,
  useProductListInfiniteQuery,
  useSellerFavoriteDeleteMutation,
  useSellerFavoritePostMutation,
  useSellerProductListInfiniteQuery,
} from '@/services';
import { useMobileStackStore } from '@/stores';

export const ProductList: React.FC = () => {
  const { open } = useMobileStackStore();

  const { data: dataOne } = useProductDetailQuery('레드 런닝화');
  const { data, fetchNextPage } = useProductListInfiniteQuery();
  const { data: data2, fetchNextPage: fetchNextPageOnData2 } =
    useSellerProductListInfiniteQuery('신발도매상');
  const { mutateAsync: addFavorite } = useSellerFavoritePostMutation('신발도매상');
  const { mutateAsync: deleteFavorite } = useSellerFavoriteDeleteMutation('신발도매상');

  const onProductDetailButtonClick = () => {
    open('ProductDetail', { productId: 'Product123' });
  };

  const onProductListWithSellerButtonClick = () => {
    open('ProductListWithSeller', { sellerId: 'Seller123' });
  };

  const onFavoriteButtonClick = async () => {
    await addFavorite();
  };

  const onDeleteFavoriteButtonClick = async () => {
    await deleteFavorite();
  };

  useEffect(() => {
    console.info(data);
  }, [data]);

  useEffect(() => {
    console.info(data2);
  }, [data2]);

  useEffect(() => {
    console.info(dataOne);
  }, [dataOne]);

  return (
    <div>
      Product List
      <button onClick={onProductDetailButtonClick}>ProductDetail Show</button>
      <button onClick={onProductListWithSellerButtonClick}>ProductListWithSeller Show</button>
      <button onClick={() => fetchNextPage()}>Fetch Next Page</button>
      <button onClick={() => fetchNextPageOnData2()}>Fetch Next Page On Data2</button>
      <button onClick={() => onFavoriteButtonClick()}>좋아용!</button>
      <button onClick={() => onDeleteFavoriteButtonClick()}>싫어용!!</button>
    </div>
  );
};
