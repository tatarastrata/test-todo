/* eslint-disable unicorn/filename-case */
import React from 'react';
import { MainPage, FallbackUI } from './components/pages';
import './styles/index.scss';
import ErrorBoundary from './components/ErrorBoundary';
import { ChakraProvider } from '@chakra-ui/react';

export const App: React.FC = () => {
  return (
    <ErrorBoundary fallbackUI={<FallbackUI />}>
      <ChakraProvider>
        <MainPage />
      </ChakraProvider>
    </ErrorBoundary>
  );
};

export default App;
