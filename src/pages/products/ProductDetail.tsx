import * as S from './ProductDetail.styles';

import { ProductCard, TextSkeleton } from '@/components';
import { useProductDetailQuery } from '@/services';
import { getPriceText } from '@/utils';

export type ProductDetailProps = { name?: string };

export const ProductDetail: React.FC<ProductDetailProps> = ({ name }) => {
  const { data } = useProductDetailQuery(name);

  const onPurchaseButtonClick = () => {
    alert('구현 예정 기능입니다 :)');
  };

  return (
    <S.ScrollableContainer>
      <S.ProductSection>
        <ProductCard {...data} />
        <S.Description>상품설명 좋은상품</S.Description>
        <S.PurchaseButtonContainer>
          <S.PurchasePrice>
            {data?.price ? getPriceText(data.price) : <TextSkeleton />}
          </S.PurchasePrice>
          <S.PurchaseButton onClick={onPurchaseButtonClick}>
            <S.PurchaseButtonText>구매하기</S.PurchaseButtonText>
          </S.PurchaseButton>
        </S.PurchaseButtonContainer>
      </S.ProductSection>
    </S.ScrollableContainer>
  );
};
