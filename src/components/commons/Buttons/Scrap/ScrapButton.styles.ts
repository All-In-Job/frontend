import styled from '@emotion/styled';

import { ReactComponent as ScrapPrimaryIcon } from './res/bookmark_black100.svg';
import { ReactComponent as ScrapSecondaryIcon } from './res/bookmark_secondary.svg';

export const ScrapButton = styled.button`
  display: inherit;
  background-color: transparent;
`;

export const ScrapPrimary = styled(ScrapPrimaryIcon)<{ 'data-isscrap': boolean | undefined }>`
  cursor: pointer;
  path {
    fill: ${props =>
      props['data-isscrap'] ? props.theme.palette.orange500 : props.theme.palette.black200};
  }
`;

export const ScrapSecondary = styled(ScrapSecondaryIcon)<{ 'data-isscrap': boolean | undefined }>`
  cursor: pointer;
  path {
    fill: ${props =>
      props['data-isscrap'] ? props.theme.palette.orange500 : props.theme.palette.black200};
  }
`;
