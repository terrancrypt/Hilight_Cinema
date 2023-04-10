import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

export const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 855 , maxWidth: 1023});
  return isTablet ? children : null;
};

export const SmallTablet = ({ children }) => {
  const isSmallTablet = useMediaQuery({minWidth: 650, maxWidth: 854 });
  return isSmallTablet ? children : null;
};

export const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ minWidth: 540, maxWidth: 649 });
  return isMobile ? children : null;
};

export const SmallMobile = ({ children }) => {
  const isSmallMobile = useMediaQuery({ maxWidth: 539 });
  return isSmallMobile ? children : null;
};
