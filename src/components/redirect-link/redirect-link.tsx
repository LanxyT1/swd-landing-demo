// Next Imports
import React from "react";
import Link from "next/link";
// Components
import {ArrowRightIcon} from "@/assets/icons";
// Styles
import styles from "@/components/redirect-link/RedicrectLink.module.scss";

interface RedirectLinkProps {
    link: string; // Href src link.
    title: string; // Href link title.
    filled?: boolean; // Determines to use filled (true) styles or not (false).
}

const RedirectLink: React.FC<RedirectLinkProps> = ({link, title, filled = true}) => {
    if (filled) {
        return (
            <Link className={styles.redirectWrapper}
                  href={link}
                  shallow>
                <div className={styles.redirectFilledContainer}>
                    <span className={styles.title}>{title}</span>

                    <div className={styles.circle}>
                        <ArrowRightIcon className={styles.learnMoreIcon} />
                    </div>
                </div>
            </Link>
        );
    } else {
        return (
            <Link className={styles.redirectWrapper}
                  href={link}
                  shallow>
                <div className={styles.redirectContainer}>
                    <span className={styles.title}>{title}</span>
                    <ArrowRightIcon className={styles.learnMoreIcon} />
                </div>
            </Link>
        );
    }
}

export default RedirectLink;