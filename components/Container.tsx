// Container.tsx
"use client";
import React from 'react';
import CocinasPage from './CocinasPage';
import FreidorasPage from './FreidorasPage';
import HornosPage from './HornosPage';
import SecadorasPage from './SecadorasPage';
import OtrosPage from './OtrosPage';

type ContainerProps = {
  name: string;
  visibleContainer: string;
};

const Container: React.FC<ContainerProps> = ({ name, visibleContainer }) => {
  if (visibleContainer === name) {
    if (name === "Cocinas") {
      return <CocinasPage />;
    } else if (name === "Freidoras") {
      return <FreidorasPage />;
    } else if (name === "Hornos") {
      return <HornosPage />;
    } else if (name === "Secadoras") {
      return <SecadorasPage />;
    } else if (name === "Otros") {
      return <OtrosPage />;
    }
  }
  return null;
};

export default Container;