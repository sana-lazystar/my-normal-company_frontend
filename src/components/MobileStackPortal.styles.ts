import styled from '@emotion/styled';

type MobileStackPortalContainerProps = {
  hasMobileStackHistory: boolean;
};

export const MobileStackPortalContainer = styled.div<MobileStackPortalContainerProps>`
  position: fixed;
  top: 0;
  left: ${({ hasMobileStackHistory }) => (hasMobileStackHistory ? '0' : '-100%')};
  width: 100%;
  height: 100%;
  transition: left 0.5s;
`;

export const MobileStackWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

type MobileStackContainerProps = {
  open: boolean;
  zIndex: number;
};

export const MobileStackContainer = styled.div<MobileStackContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #000000;
  top: 0;
  left: ${({ open }) => (open ? '0' : '-100%')};
  z-index: ${({ zIndex }) => zIndex};
  transition: left 0.5s;
  padding: 1rem;
`;

export const ArrowBackIconWrapper = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;
