import { useEffect, useState } from "react";

const useDetect = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod|android/.test(userAgent)) {
      setIsMobile(true);
    }
  }, []);

  return isMobile;
}

export default useDetect