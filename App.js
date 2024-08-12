import React from 'react';

import AppNavigation from './src/appNavigation/AppNavigation';
import { ContextProvider } from './src/provider/ContextApi';

export default function App() {
  return (
    <ContextProvider>
      <AppNavigation />
    </ContextProvider>

  );
}
