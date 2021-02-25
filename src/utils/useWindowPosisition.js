import React, { useLayoutEffect, useState } from 'react';

export default function useWindowPosition(id) {
  const [animation, setAnimation] = useState(false);
  
  useLayoutEffect(() => {
    function updatePosition() {
      const offsetSetHeight = window.document.getElementById(id).offsetHeight;
      
      if (window.pageYOffset > offsetSetHeight) {
        setAnimation(true)
      }
    }
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, [id]);
  return animation;
}