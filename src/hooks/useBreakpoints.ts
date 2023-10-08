import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 850;

export const useBreakpoints = (): { isMobile: boolean } => {
  const [isMobile, setIsMobile] = useState<boolean>(true);

  useEffect(() => {
    const setView = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth > MOBILE_BREAKPOINT) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    };

    setView();

    window.addEventListener("resize", setView);

    return () => {
      window.removeEventListener("resize", setView);
    };
  }, []);

  return {
    isMobile,
  };
};
