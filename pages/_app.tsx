import React from 'react';
import { AppProps } from 'next/app';
import {
  QueryClient,
  QueryClientProvider
} from 'react-query';
import {ReactQueryDevtools} from 'react-query/devtools';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Component {...pageProps} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default MyApp;
