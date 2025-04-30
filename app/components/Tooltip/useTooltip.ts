"use client";
import { useState } from "react";

export const useTooltip = () => {
    // TO DO: autoposition tooltip

    const [isHovered, setIsHovered] = useState(false);

    return {
        isHovered,
        setIsHovered,
    }
}