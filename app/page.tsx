// page.tsx
import { AppProviders } from '@/components/AppProviders';
import React from 'react';

function Home({ children }: { children: React.ReactNode }) {
  return (
    <AppProviders>
      {children}
    </AppProviders>
  );
}

export default Home;