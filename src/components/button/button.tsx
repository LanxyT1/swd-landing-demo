// Next Imports
import React from "react";
// Components
import ArrowRightIcon from "@/assets/svgs/arrow-right-icon";
// Styles
import styles from "@/components/button/Button.module.scss";

interface SwdButtonProps {
    text?: string; // Button's text.
    isActive?: boolean; // Determines if the button is active (true) or not (false).
    isPrimary?: boolean; // Determines if the button uses primary (true) or secondary (false) styles.
    isFocused?: boolean; // Determines if the button will use focused styles (true) or not (false).
    showForwardIcon?: boolean; // Determines if the button will show (true) right icon or not (false).
    children?: React.ReactNode; // Additional elements to show inside the button.
    smallButton?: boolean; // Determines if the button is small (true) or large (false).
}

const Button: React.FC<SwdButtonProps> = (
    {
        text,
        isActive = false,
        isFocused = false,
        isPrimary = true,
        showForwardIcon = false,
        children,
        smallButton = false
    }: SwdButtonProps) => {
    const primaryClass = isPrimary ? styles.primary : styles.secondary;
    const activeClass = isActive ? styles.active : null;
    const focusClass = isFocused ? styles.focus : null;
    const smallButtonClass = smallButton ? styles.smallButton : null;

    const classList = [primaryClass, activeClass, focusClass, smallButtonClass];

    const showArrow = showForwardIcon
        ? <ArrowRightIcon className={styles.buttonRightIcon}/>
        : null;

    return (
        <button className={`${styles.swdButton} ${styles.primary} ${classList.join(' ')}`}>
            {text}
            {children}
            {showArrow}
        </button>
    );
};

export default Button;
