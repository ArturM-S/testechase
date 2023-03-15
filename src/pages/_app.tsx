import { AppProps } from 'next/app';
import React from 'react';
import { globalStyles } from '../../shared/styles';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {globalStyles}
      <Component {...pageProps} />
    </>
  );
}

export default App;
