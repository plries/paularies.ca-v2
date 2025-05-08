import { useState, useRef, useEffect } from "react";

export const useNavBar = () => {
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
        const handleKeyDown = (event: KeyboardEvent) => {

          // ctrl + b (windows) or cmd + b (mac)
          const isCtrlOrCmd = event.ctrlKey || event.metaKey;
          if (isCtrlOrCmd && event.key.toLowerCase() === "b") {
            event.preventDefault(); 
            setIsOpen(prev => !prev);
          }
        };
    
        window.addEventListener("keydown", handleKeyDown);
        return () => {
          window.removeEventListener("keydown", handleKeyDown);
        };
      }, []);

    return {
        isOpen,
        toggleNav,
        navRef
    };
};