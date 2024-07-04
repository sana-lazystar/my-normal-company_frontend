import styled from '@emotion/styled';

export const HomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const InoutLogoWrapper = styled.div`
  position: relative;
  width: 15rem;
  padding-top: 15rem;
  margin: 0 auto 2rem;
`;

export const GoToProductListButton = styled.button`
  width: 100%;
  padding: 0.5rem 0;
  background-color: white;
  border-radius: 0.25rem;
  border: none;
`;

export const GoToProductListButtonText = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: black;
`;
