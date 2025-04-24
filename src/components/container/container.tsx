// Next Imports
import React from "react";
// Styles
import styles from "@/components/container/Container.module.scss";

interface ContainerProps {
    title?: string; // Container's title.
    secondaryText?: string; // Container's secondary text.
    emptyBackground?: boolean // Determines if the container has background (true) or will be transparent (false).
    children?: React.ReactNode; // Pass custom HTML content as children.
}

const Container: React.FC<ContainerProps> = ({
                                                 title = "",
                                                 secondaryText = false,
                                                 children,
                                                 emptyBackground = true
}) => {
    const secondaryTextHtml = secondaryText
        ? <span className={styles.secondaryText}>{secondaryText}</span>
        : null;

    return (
        <div className={`${styles.containerWrapper} ${!emptyBackground && styles.backgroundContainer}`}>
            {title && <span className={styles.title}>{title}</span>}
            {secondaryTextHtml}
            {children}
        </div>
    );
}

export default Container;
