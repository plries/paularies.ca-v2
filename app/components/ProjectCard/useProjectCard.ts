"use client";
import { useState } from "react";

export const useProjectCard = () => {
    const [isLoading, setIsLoading] = useState(false);

    const handleOnClick = () => setIsLoading(true);

    return { 
        isLoading, 
        setIsLoading,
        handleOnClick
    };
};