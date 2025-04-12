import { useState } from "react";

export const useNavBar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return {
        isOpen,
        toggleMenu,
    };
};