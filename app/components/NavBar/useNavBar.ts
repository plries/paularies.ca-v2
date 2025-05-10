import { useState, useRef, useEffect } from "react";

export const useNavBar = ({
  closeMenu,
}: { closeMenu: () => void }) => {
  const navRef = useRef<HTMLElement>(null);
  const [isOpen, setIsOpen] = useState(true);

  const toggleNav = () => {
      setIsOpen(!isOpen);
  };

  useEffect(() => {
      if (isOpen) {
        // shows immediately
        if (isOpen && navRef.current) {
          navRef.current.style.visibility = "visible";
        }
      } else {
        // hides after a delay
        const timeout = setTimeout(() => {
          if (navRef.current) {
            navRef.current.style.visibility = "hidden";
          }
        }, 700);
    
        return () => clearTimeout(timeout);
      }
    }, [isOpen]);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // scrolling down
        setIsOpen(false);
        closeMenu();
      } else if (currentScrollY < lastScrollY) {
        // scrolling up
        setIsOpen(true);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return {
      isOpen,
      toggleNav,
      navRef
  };
};