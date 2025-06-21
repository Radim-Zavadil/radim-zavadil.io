// components/UnicornStudioEmbed.js
import React, { useState } from 'react';
import Script from 'next/script';

const UnicornStudioEmbed = ({ 
  projectId = "EQRQ8kJ3EjuTgJEviPWn",
  width = "1920px",
  height = "1080px" 
}) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  const handleScriptLoad = () => {
    if (!window.UnicornStudio) {
      window.UnicornStudio = { isInitialized: false };
    }
    
    if (!window.UnicornStudio.isInitialized) {
      window.UnicornStudio.init();
      window.UnicornStudio.isInitialized = true;
    }
    
    setIsScriptLoaded(true);
  };

  return (
    <>
      <Script
        src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.25/dist/unicornStudio.umd.js"
        onLoad={handleScriptLoad}
        strategy="lazyOnload"
      />
      <div 
        data-us-project={projectId}
        style={{ width, height }}
      />
    </>
  );
};

export default UnicornStudioEmbed;