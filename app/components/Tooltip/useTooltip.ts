"use client";
import { useEffect, useMemo, useState } from "react";
import useMouse from "@react-hook/mouse-position";

export const useTooltip = () => {
    const [cursorVariant, setCursorVariant] = useState("default");
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0 });

    const mouse = useMouse(typeof window !== "undefined" ? document.body : null, {
        enterDelay: 100,
        leaveDelay: 100,
    });

    useEffect(() => {
        if (mouse.clientX !== null) {
          setMousePos({ x: mouse.clientX });
        } else {
        }
      }, [mouse.clientX]);

    const variants = useMemo(
        () => ({
            default: {
            x: mousePos.x / 50,
            rotate: mousePos.x / 150,
            transition: {
                type: "spring",
                mass: 0.6,
            },
            },
        }),
        [mousePos.x]
    );
      
    const spring = {
    type: "spring",
    stiffness: 500,
    damping: 28,
      };

    return {
        cursorVariant,
        setCursorVariant,
        isHovered,
        setIsHovered,
        variants,
        spring,
    }
}