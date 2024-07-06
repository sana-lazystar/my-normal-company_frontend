import styled from '@emotion/styled';

export const ScrollableContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
`;

export const FavoriteContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

export const FavoriteWrapper = styled.div`
  position: relative;
  width: 1.25rem;
  padding-top: 1.25rem;
  & > svg {
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    width: 100% !important;
    height: 100% !important;
  }
`;

export const FavoriteText = styled.p<{ isFavorite: boolean }>`
  font-size: 1rem;
  color: ${({ isFavorite }) => (isFavorite ? '#ff0000' : '#808080')};
`;

export const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.25rem;
`;

export const ShowMoreProductButton = styled.button`
  width: 100%;
  margin: 1rem 0 4rem;
  padding: 0.625rem 0;
  background-color: white;
  border-radius: 0.25rem;
  border: none;
  &:active {
    background-color: #f0f0f0;
  }
`;

export const ShowMoreProductButtonText = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: black;
`;

export const HasNoProductText = styled.p`
  margin: 1rem 0 4rem;
  font-size: 1rem;
  font-weight: 700;
  color: #808080;
  text-align: center;
`;
