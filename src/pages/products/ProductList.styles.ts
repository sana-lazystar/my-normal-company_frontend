import { keyframes } from '@emotion/react';
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
  width: 100%;
  margin-bottom: 2rem;
`;

const titleShowEffect = keyframes`
  from {
    opacity: 0;
    transform: translateY(1rem);
  }

  to {
    opacity: 1;
    transform: translateY(0rem);
  }
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-align: left;
  animation: ${titleShowEffect} 0.5s ease-in-out forwards;
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
