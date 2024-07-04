import React from 'react';
import { createPortal } from 'react-dom';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import * as S from './MobileStackPortal.styles';

import { REGISTERED_MOBILE_STACKS, useMobileStackStore } from '@/stores';

// NOTE: Mobile에서 Stack형태의 페이지 처리를 위한 포탈의 타겟 Element ID.
const MOBILE_STACK_ROOT_ID = 'mobile-stack-root';

const DEFAULT_Z_INDEX = 1000;

export const MobileStackPortal: React.FC = () => {
  const mobileStackRoot = document.getElementById(MOBILE_STACK_ROOT_ID);
  const { mobileStackHistories } = useMobileStackStore();

  if (!mobileStackRoot) throw new Error('Mobile stack root element not defined!');

  return createPortal(
    <S.MobileStackPortalContainer hasMobileStackHistory={mobileStackHistories.length !== 0}>
      <S.MobileStackWrapper>
        {Object.values(REGISTERED_MOBILE_STACKS).map(
          (registeredMobileStack, registeredMobileStackIndex) => {
            const targetRegisteredMobileStack = mobileStackHistories.find(
              mobileStackHistory => mobileStackHistory.name === registeredMobileStack.component.name
            );

            const open = !!targetRegisteredMobileStack;
            const zIndex = open
              ? mobileStackHistories.findIndex(
                  mobileStackHistory =>
                    mobileStackHistory.name === registeredMobileStack.component.name
                ) + 1
              : DEFAULT_Z_INDEX;

            return (
              <MemorizedMobileStack
                key={`memorized-mobile-stack-${registeredMobileStackIndex}`}
                open={open}
                zIndex={zIndex}>
                {registeredMobileStack.component({
                  ...(targetRegisteredMobileStack ? targetRegisteredMobileStack.propTypes : {}),
                })}
              </MemorizedMobileStack>
            );
          }
        )}
      </S.MobileStackWrapper>
    </S.MobileStackPortalContainer>,
    mobileStackRoot
  );
};

type MobileStackProps = {
  open: boolean;
  zIndex: number;
  children: React.ReactNode;
};

const MobileStack: React.FC<MobileStackProps> = ({ open, zIndex, children }) => {
  const { pop } = useMobileStackStore();

  const onArrowBackIconClick = () => {
    pop();
  };

  return (
    <S.MobileStackContainer open={open} zIndex={zIndex}>
      <S.ArrowBackIconWrapper onClick={onArrowBackIconClick}>
        <ArrowBackIcon />
      </S.ArrowBackIconWrapper>
      {children}
    </S.MobileStackContainer>
  );
};

const MemorizedMobileStack = React.memo(MobileStack);
