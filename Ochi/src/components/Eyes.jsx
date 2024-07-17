import React, { useEffect, useRef } from 'react';

function Eyes() {
  const eye1Ref = useRef(null);
  const eye2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;

      const moveEye = (eye, cursorX, cursorY) => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeX = eyeRect.left + eyeRect.width / 2;
        const eyeY = eyeRect.top + eyeRect.height / 2;

        const deltaX = cursorX - eyeX;
        const deltaY = cursorY - eyeY;
        const angle = Math.atan2(deltaY, deltaX);

        const innerWhiteBall = eye.querySelector('.innerwhiteball1');
        const blackBall = eye.querySelector('.blackball-1');
        const maxMove = blackBall.offsetWidth / 2 - innerWhiteBall.offsetWidth / 2; // Constrain within blackball

        const moveX = maxMove * Math.cos(angle);
        const moveY = maxMove * Math.sin(angle);

        innerWhiteBall.style.transform = `translate(${moveX}px, ${moveY}px)`;
      };

      if (eye1Ref.current) {
        moveEye(eye1Ref.current, clientX, clientY);
      }

      if (eye2Ref.current) {
        moveEye(eye2Ref.current, clientX, clientY);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className='eyes w-full h-screen overflow-hidden '>
      <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
        <div className='items-center flex gap-20 absolute top-1/2 left-1/2 h-96 w-1/2 -translate-x-[50%] -translate-y-[50%]'>
          <div ref={eye1Ref} className='whiteball-1 h-[15vw] bg-white rounded-full w-[15vw] translate-x-[50%] translate-y-[30%]'>
            <div className='blackball-1 h-[8.5vw] w-[8.5vw] bg-black rounded-full translate-x-[37%] translate-y-[40%] relative flex justify-center items-center'>
              <div className='innerwhiteball1 h-10 w-10 bg-white rounded-full absolute'></div>
            </div>
          </div>
          <div ref={eye2Ref} className='whiteball-1 h-[15vw] bg-white rounded-full w-[15vw] translate-x-[50%] translate-y-[30%]'>
            <div className='blackball-1 h-[8.5vw] w-[8.5vw] bg-black rounded-full translate-x-[37%] translate-y-[40%] relative flex justify-center items-center'>
              <div className='innerwhiteball1 h-10 w-10 bg-white rounded-full absolute'></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
