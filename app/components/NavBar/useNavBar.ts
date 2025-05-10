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
    let currentScrollY = Math.max(0, window.scrollY); // clamp to 0
    const deltaY = currentScrollY - lastScrollY;

    // ignore small movements (likely bounce effect)
    if (Math.abs(deltaY) < 5) return;

    if (deltaY > 0) {
      // scrolling down
      setIsOpen(false);
    } else if (deltaY < 0) {
      // scrolling up
      setIsOpen(true);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

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