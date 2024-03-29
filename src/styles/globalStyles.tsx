import { FC, PropsWithChildren } from 'react';

import { css, Global } from '@emotion/react';

import { fontCSS } from './fonts';
import { resetCSS } from './reset';

export const GlobalStyles: FC<PropsWithChildren> = ({ children }) => {
  const globalStyles = css`
    ${resetCSS}
    ${fontCSS}

    body {
      font-family: Regular;
    }

    strong {
      font-weight: bold;
    }

    em {
      font-style: italic;
    }
  `;

  return (
    <>
      <Global styles={globalStyles} />
      {children}
    </>
  );
};
