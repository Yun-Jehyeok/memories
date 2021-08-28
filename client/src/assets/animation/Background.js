import React, { useState } from 'react';
import Lottie from 'react-lottie';
import BackgroundAni from './background.json';

const lottieOptions = {
  animationData: BackgroundAni,
  loop: true,
  autoplay: true,
  rendererSettings: {
    className: 'add-class',
  },
};

const Background = () => {
  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        width: '100%',
        height: '100vh',
        position: 'fixed',
        zIndex: '-10',
        overflow: 'hidden',
      }}
    >
      <Lottie
        id="Exhibit_background"
        options={lottieOptions}
        style={{
          height: '450vh',
          objectFit: 'none',
        }}
      />
    </div>
  );
};

export default Background;
