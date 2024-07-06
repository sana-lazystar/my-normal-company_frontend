import styled from '@emotion/styled';

export const SellerProductCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
`;

export const SellerProductImageWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  border-radius: 0.25rem;
  overflow: hidden;
  margin-bottom: 0.5rem;
`;

export const SellerProductName = styled.h3`
  font-size: 1.125rem;
  width: 80%;
  overflow-x: hidden;
  text-align: left;
`;

export const SellerProductPrice = styled.p`
  font-size: 1rem;
  font-weight: 700;
  width: 50%;
  overflow-x: hidden;
  text-align: left;
`;
