import * as React from 'react';

import { ThemeProvider } from '@material-ui/core/styles'
import theme from '../src/utils/theme';

export default function MyApp({ Component, pageProps }) {
  const [dark, setDark] = React.useState(false);
  const props = {dark, setDark, ...pageProps};
  return (
    <ThemeProvider theme={theme} >
      <Component {...props} />
    </ThemeProvider>
  );
};