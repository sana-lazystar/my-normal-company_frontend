import * as S from './Layout.styles';

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return <S.LayoutContainer>{children}</S.LayoutContainer>;
};
