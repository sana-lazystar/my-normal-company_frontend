import styled from '@emotion/styled';

export const ScrollableContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const ProductSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.25rem;
`;

export const Description = styled.div``;

export const PurchaseButtonContainer = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
`;

export const PurchasePrice = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
`;

export const PurchaseButton = styled.button`
  width: 100%;
  margin-top: 0.5rem;
  padding: 0.625rem 0;
  background-color: white;
  border-radius: 0.25rem;
  border: none;
  &:active {
    background-color: #f0f0f0;
  }
`;

export const PurchaseButtonText = styled.p`
  font-size: 0.875rem;
  font-weight: 700;
  color: black;
`;
