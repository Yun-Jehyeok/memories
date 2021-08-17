import React, { useState } from 'react';
import Lottie from 'react-lottie';
import Menuicon from './menu-icon.json';

const lottieOptions = {
  animationData: Menuicon,
  loop: false,
  autoplay: false,
  rendererSettings: {
    className: 'add-class',
  },
};

const MenuIcon = (props) => {
  const [isStopped, SetIsStopped] = useState(true);
  const [isPaused, SetIsPaused] = useState(true);
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    if (isOpened) {
      SetIsPaused(false);
      setTimeout(() => {
        SetIsPaused(true);
        SetIsStopped(true);
      }, 1200);
      setIsOpened(false);
    } else {
      SetIsStopped(false);
      SetIsPaused(false);
      setTimeout(() => {
        SetIsPaused(true);
      }, 1200);
      setIsOpened(true);
    }
    props.onClickMenuBar();
  };

  return (
    <span style={{ float: 'right', margin: '20px 30px 0 0', color: '#FF0000' }}>
      <Lottie
        id="Menu_bar"
        options={lottieOptions}
        isPaused={isPaused}
        isStopped={isStopped}
        isClickToPauseDisabled={false}
        speed={1.5}
        style={{
          width: '65px',
          height: '65px',
          position: 'absolute',
          color: '#ffffff',
        }}
      />
      <button
        onClick={handleClick}
        style={{
          width: '65px',
          height: '65px',
          position: 'relative',
          background: 'transparent',
        }}
      ></button>
    </span>
  );
};

export default MenuIcon;
