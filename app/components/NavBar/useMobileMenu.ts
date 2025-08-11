import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useWindowSize } from "@/app/hooks";

export const useMobileMenu = () => {
  const windowSize = useWindowSize();

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!windowSize.isMobile) {
      closeMenu();
    }
  }, [windowSize.isMobile]);

  return {
    isOpen,
    toggleMenu,
    closeMenu,
  };
};
