import { CustomImage } from './CustomImage';
import * as S from './SellerProductCard.styles';
import { TextSkeleton } from './TextSkeleton';

import { useMobileStackStore } from '@/stores';
import { getPriceText } from '@/utils';

type SellerProductCardProsp = {
  name?: string;
  price?: number;
};

export const SellerProductCard: React.FC<SellerProductCardProsp> = ({ name, price }) => {
  const { open } = useMobileStackStore();

  const onProductNameClick = () => {
    open('ProductDetail', { name });
  };

  return (
    <S.SellerProductCardContainer>
      <S.SellerProductImageWrapper>
        <CustomImage alt={`${name}-item`} />
      </S.SellerProductImageWrapper>
      <S.SellerProductName onClick={onProductNameClick}>
        {name ? name : <TextSkeleton />}
      </S.SellerProductName>
      <S.SellerProductPrice>{price ? getPriceText(price) : <TextSkeleton />}</S.SellerProductPrice>
    </S.SellerProductCardContainer>
  );
};
