import styled from '@emotion/styled';

export const ProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const ProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 0.25rem;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

export const ProductSellerContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const ProductSeller = styled.h2`
  font-size: 0.75rem;
  color: #808080;
  width: 70%;
  overflow-x: hidden;
  text-align: left;
`;

export const ProductSellerFavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const ProductSellerFavoriteWrapper = styled.div`
  position: relative;
  width: 0.75rem;
  padding-top: 0.75rem;
  & > svg {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }
`;

export const ProductSellerFavoriteText = styled.p<{ isFavorite: boolean }>`
  font-size: 0.625rem;
  color: ${({ isFavorite }) => (isFavorite ? '#ff0000' : '#808080')};
`;

export const ProductName = styled.h3`
  font-size: 1.125rem;
  width: 80%;
  overflow-x: hidden;
  text-align: left;
`;

export const ProductPrice = styled.p`
  font-size: 1rem;
  font-weight: 700;
  width: 50%;
  overflow-x: hidden;
  text-align: left;
`;
