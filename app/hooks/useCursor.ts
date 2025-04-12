"use client";
import { useEffect, useMemo, useState } from "react";
import useMouse from "@react-hook/mouse-position";

export const useCursor = () => {
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isInWindow, setIsInWindow] = useState(true);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const mouse = useMouse(typeof window !== "undefined" ? document.body : null, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  // tracks valid mouse positions
  useEffect(() => {
    if (mouse.clientX !== null && mouse.clientY !== null) {
      setMousePos({ x: mouse.clientX, y: mouse.clientY });
      setIsInWindow(true);
    } else {
      setIsInWindow(false);
    }
  }, [mouse.clientX, mouse.clientY]);

  const variants = useMemo(
    () => ({
      default: {
        x: mousePos.x + 24,
        y: mousePos.y + 24,
        // if the mouse is outside the window, fade out the cursor
        opacity: isInWindow ? 1 : 0,
        transition: {
          type: "spring",
          mass: 0.6,
        },
      },
    }),
    [mousePos.x, mousePos.y, isInWindow]
  );

  const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
  };

  return {
    cursorVariant,
    setCursorVariant,
    variants,
    spring,
  };
};
