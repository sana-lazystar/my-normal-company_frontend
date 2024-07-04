import { useNavigate } from 'react-router-dom';

import * as S from './Home.styles';

import InoutLogo from '@/assets/images/inout.webp';
import { CustomImage } from '@/components';
import { ROUTE_URL } from '@/constants';

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const onGoToProductListButtonClick = () => {
    navigate(ROUTE_URL.productList);
  };

  return (
    <S.HomeContainer>
      <S.Title>
        My Normal Company
        <br />
        Brand Shop
      </S.Title>
      <S.InoutLogoWrapper>
        <CustomImage alt='inout-home-logo' src={InoutLogo} />
      </S.InoutLogoWrapper>
      <S.GoToProductListButton onClick={onGoToProductListButtonClick}>
        <S.GoToProductListButtonText>상품 보러가기</S.GoToProductListButtonText>
      </S.GoToProductListButton>
    </S.HomeContainer>
  );
};
