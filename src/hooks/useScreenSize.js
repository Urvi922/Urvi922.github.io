import {useState, useEffect} from 'react';

const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState({
      isMobile: window.innerWidth <= 480,
      isIPhone: window.innerWidth <= 390,
    });
  
    useEffect(() => {
      const handleResize = () => {
        setScreenSize({
          isMobile: window.innerWidth <= 480,
          isIPhone: window.innerWidth <= 390,
        });
    };
  
    window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }, []);
  
    return screenSize;
};

export default useScreenSize;