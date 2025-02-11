// import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

export const useDeviceType = () => {
  const [deviceType, setDeviceType] = useState({ isDesktop: false, isMobile: false });

  useEffect(() => {
    const isDesktop = window.innerWidth > 1024;
    const isMobile = window.innerWidth <= 1024;
    setDeviceType({ isDesktop, isMobile });
  }, []);

  return deviceType;
};