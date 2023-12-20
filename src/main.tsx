import { ThemeProvider } from '@emotion/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';

import { GlobalStyles } from 'styles/globalStyles.tsx';
import theme from 'styles/theme.ts';

import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RecoilRoot>
    <ThemeProvider theme={theme}>
      <GlobalStyles>
        <GoogleOAuthProvider clientId={import.meta.env.VITE_API_GOOGLE_CLIENT_ID}>
          {/* <ScrollToTop> */}
          <App />
          {/* </ScrollToTop> */}
        </GoogleOAuthProvider>
      </GlobalStyles>
    </ThemeProvider>
  </RecoilRoot>,
);
