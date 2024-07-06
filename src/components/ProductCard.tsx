import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import { CustomImage } from './CustomImage';
import * as S from './ProductCard.styles';
import { TextSkeleton } from './TextSkeleton';

import { useSellerFavoritePostMutation, useSellerFavoriteDeleteMutation } from '@/services';
import { useMobileStackStore } from '@/stores';
import { getPriceText } from '@/utils';

type ProductCardProps = {
  seller?: string;
  name?: string;
  price?: number;
  favorite?: boolean;
};

export const ProductCard: React.FC<ProductCardProps> = ({ seller, name, price, favorite }) => {
  const { open } = useMobileStackStore();
  const { mutateAsync: addFavorite, isPending: isAddFavoritePending } =
    useSellerFavoritePostMutation();
  const { mutateAsync: deleteFavorite, isPending: isDeleteFavoritePending } =
    useSellerFavoriteDeleteMutation();

  const onProductSellerClick = () => {
    open('SellerProductList', { seller });
  };

  const onFavoriteSellerClick = () => {
    if (!seller || isAddFavoritePending || isDeleteFavoritePending) return;

    favorite ? deleteFavorite(seller) : addFavorite(seller);
  };

  const onProductNameClick = () => {
    open('ProductDetail', { name });
  };

  return (
    <S.ProductCardContainer>
      <S.ProductImageWrapper>
        <CustomImage alt={`${seller}-${name}-item`} />
      </S.ProductImageWrapper>
      <S.ProductSellerContainer>
        <S.ProductSeller onClick={onProductSellerClick}>
          {seller ? seller : <TextSkeleton />}
        </S.ProductSeller>
        <S.ProductSellerFavoriteContainer onClick={onFavoriteSellerClick}>
          <S.ProductSellerFavoriteWrapper>
            {favorite ? (
              <FavoriteIcon style={{ color: '#FF0000' }} />
            ) : (
              <FavoriteBorderIcon style={{ color: '#999999' }} />
            )}
          </S.ProductSellerFavoriteWrapper>
          <S.ProductSellerFavoriteText isFavorite={!!favorite}>
            관심 셀러
          </S.ProductSellerFavoriteText>
        </S.ProductSellerFavoriteContainer>
      </S.ProductSellerContainer>
      <S.ProductName onClick={onProductNameClick}>{name ? name : <TextSkeleton />}</S.ProductName>
      <S.ProductPrice>{price ? getPriceText(price) : <TextSkeleton />}</S.ProductPrice>
    </S.ProductCardContainer>
  );
};
