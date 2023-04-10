import { useEffect, useState } from 'react';

function useScreenSize() {
  const [screenSize, setScreenSize] = useState(() => {
    if (window.matchMedia('(max-width: 576px)').matches) {
      return 'sm';
    } else if (window.matchMedia('(max-width: 1280px)').matches) {
      return 'lg';
    } else {
      return 'xl';
    }
  });

  useEffect(() => {
    function handleResize() {
      if (window.matchMedia('(max-width: 576px)').matches) {
        setScreenSize('sm');
      } else if (window.matchMedia('(max-width: 1280px)').matches) {
        setScreenSize('lg');
      } else {
        setScreenSize('xl');
      }
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return screenSize;
}

export default useScreenSize;
