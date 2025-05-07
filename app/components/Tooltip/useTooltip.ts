"use client";
import { useState } from "react";

export const useTooltip = () => {
    const [isHovered, setIsHovered] = useState(false);

    return {
        isHovered,
        setIsHovered,
    }
}