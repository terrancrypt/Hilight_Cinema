import { useMediaQuery } from "react-responsive";

export const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 });
  return isDesktop ? children : null;
};

export const Default = ({ children }) => {
  const isDefault = useMediaQuery({ maxWidth: 1023 });
  return isDefault ? children : null;
};
