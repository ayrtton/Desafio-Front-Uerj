import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';

import AppRoutes from './router';

import './styles/index.scss';
import { PokemonProvider } from './context/team';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <PokemonProvider>
        <AppRoutes />
      </PokemonProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
