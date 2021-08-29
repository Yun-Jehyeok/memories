import React from 'react';

const useScript = (url) => {
  const script = document.createElement('script');

  script.src = url;

  const element = () => {
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  };
  setInterval(element, 500);
};

export default useScript;
