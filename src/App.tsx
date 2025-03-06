import React, { useEffect, useState } from 'react';
import CompoundPresentation from './components/CompoundPresentation';
import FeatherLoader from './components/FeatherLoader';

const App: React.FC = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    // Oculta o FeatherLoader após 3 segundos
    const timer = setTimeout(() => setShowLoader(false), 3000);

    // Garantia de limpeza do timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader && <FeatherLoader />}
      <div className="min-h-screen flex flex-col bg-GRID text-white">
        <CompoundPresentation />
      </div>
    </>
  );
};

export default App;
