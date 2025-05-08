import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export const useMobileMenu = () => {
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

  return {
    isOpen,
    toggleMenu,
    closeMenu,
  };
};
