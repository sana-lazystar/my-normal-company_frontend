import { useMemo } from 'react';

import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import * as S from './SellerProductList.styles';

import { SellerProductCard } from '@/components';
import {
  useSellerFavoriteDeleteMutation,
  useSellerFavoritePostMutation,
  useSellerProductListInfiniteQuery,
} from '@/services';

const SKELETON_PRODUCT_LIST = new Array(3).fill({});

export type SellerProductListProps = {
  seller?: string;
};

export const SellerProductList: React.FC<SellerProductListProps> = ({ seller }) => {
  const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
    useSellerProductListInfiniteQuery(seller);
  const { mutateAsync: addFavorite, isPending: isAddFavoritePending } =
    useSellerFavoritePostMutation();
  const { mutateAsync: deleteFavorite, isPending: isDeleteFavoritePending } =
    useSellerFavoriteDeleteMutation();

  const productList = useMemo(() => data?.pages.flatMap(page => page), [data]);

  const favorite = useMemo(() => data?.pages[0][0].favorite, [data]);

  const onFavoriteClick = () => {
    console.info('HI');
    console.info({ seller, favorite });
    if (!seller || favorite === undefined || isAddFavoritePending || isDeleteFavoritePending)
      return;

    favorite ? deleteFavorite(seller) : addFavorite(seller);
  };

  const onShowMoreProductButtonClick = () => {
    fetchNextPage();
  };

  return (
    <S.ScrollableContainer>
      <S.TitleSection>
        <S.Title>{seller}</S.Title>
        <S.FavoriteContainer onClick={onFavoriteClick}>
          <S.FavoriteWrapper>
            {favorite ? (
              <FavoriteIcon style={{ color: '#FF0000' }} />
            ) : (
              <FavoriteBorderIcon style={{ color: '#999999' }} />
            )}
          </S.FavoriteWrapper>
          <S.FavoriteText isFavorite={!!favorite}>
            {favorite ? '관심등록된 셀러입니다 :)' : '관심 셀러로 등록하실래요?'}
          </S.FavoriteText>
        </S.FavoriteContainer>
      </S.TitleSection>
      <S.ProductSection>
        {isLoading ? (
          SKELETON_PRODUCT_LIST.map((_, skeletonIndex) => <SellerProductCard key={skeletonIndex} />)
        ) : productList ? (
          productList.map((product, productIndex) => (
            <SellerProductCard key={productIndex} {...product} />
          ))
        ) : (
          <S.HasNoProductText>등록된 상품이 없어요 :(</S.HasNoProductText>
        )}
        {hasNextPage ? (
          <S.ShowMoreProductButton
            disabled={isFetchingNextPage}
            onClick={onShowMoreProductButtonClick}>
            <S.ShowMoreProductButtonText>상품 더보기</S.ShowMoreProductButtonText>
          </S.ShowMoreProductButton>
        ) : (
          <S.HasNoProductText>모든 상품을 둘러보았어요 :)</S.HasNoProductText>
        )}
      </S.ProductSection>
    </S.ScrollableContainer>
  );
};
