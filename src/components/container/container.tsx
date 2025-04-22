// Next Imports
import React from "react";
// Styles
import styles from "@/components/container/Container.module.scss";

interface ContainerProps {
    title?: string; // Container's title.
    secondaryText?: string; // Container's secondary text.
    children?: React.ReactNode; // Pass custom HTML content as children.
}

const Container: React.FC<ContainerProps> = ({title, secondaryText = false, children}) => {
    const secondaryTextHtml = secondaryText
        ? <span className={styles.secondaryText}>{secondaryText}</span>
        : null;

    return (
        <div className={styles.containerWrapper}>
            {title && <span className={styles.title}>{title}</span>}
            {secondaryTextHtml}
            {children}
        </div>
    );
}

export default Container;
