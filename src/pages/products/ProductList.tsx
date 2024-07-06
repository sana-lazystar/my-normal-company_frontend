import { useMemo } from 'react';

import * as S from './ProductList.styles';

import { ProductCard } from '@/components';
import { useProductListInfiniteQuery } from '@/services';

const SKELETON_PRODUCT_LIST = new Array(3).fill({});

export const ProductList: React.FC = () => {
  const { data, fetchNextPage, isLoading, isFetchingNextPage, hasNextPage } =
    useProductListInfiniteQuery();

  const productList = useMemo(() => data?.pages.flatMap(page => page), [data]);

  const onShowMoreProductButtonClick = () => {
    fetchNextPage();
  };

  return (
    <S.ScrollableContainer>
      <S.TitleSection>
        <S.Title>
          인아웃 슈즈
          <br />
          이달의 추천 상품
        </S.Title>
      </S.TitleSection>
      <S.ProductSection>
        {isLoading ? (
          SKELETON_PRODUCT_LIST.map((_, skeletonIndex) => <ProductCard key={skeletonIndex} />)
        ) : productList ? (
          productList.map((product, productIndex) => (
            <ProductCard key={productIndex} {...product} />
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
