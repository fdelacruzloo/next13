// page.tsx
import React from 'react';

function Home({ children }) {
  return (
    <AppProviders>
      {children}
    </AppProviders>
  );
}

export default Home;