import styled from '@emotion/styled';

import { MEDIA_QUERY } from '@/constants';

export const LayoutContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  ${MEDIA_QUERY[1]} {
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    padding: 2rem;
  }
`;
