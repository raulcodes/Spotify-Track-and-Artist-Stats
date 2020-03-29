import * as React from 'react';

import '../public/global.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/utils/theme';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
