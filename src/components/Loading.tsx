import * as S from './Loading.styles';

import InoutLogo from '@/assets/images/inout.webp';
import { CustomImage } from '@/components';

export const Loading: React.FC = () => {
  return (
    <S.LoadingContainer>
      <S.Title>
        My Normal Company
        <br />
        Brand Shop
      </S.Title>
      <S.InoutLogoWrapper>
        <CustomImage alt='inout-home-logo' src={InoutLogo} />
      </S.InoutLogoWrapper>
    </S.LoadingContainer>
  );
};
