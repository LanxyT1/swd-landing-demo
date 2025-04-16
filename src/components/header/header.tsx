// Next Imports
import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
// Components
import {SwdFactoryIcon} from "@/assets/icons";
// Styles
import styles from "@/styles/Header.module.scss"

const Header = () => {
    const [isProjectSelected, setIsProjectSelected] = React.useState(false);
    const router = useRouter();

    const handleProjectsClick = () => {
        setIsProjectSelected((isProjectSelected) => !isProjectSelected);
    };

    React.useEffect(() => {
        const handleRouteChange = () => {
            setIsProjectSelected(false);
        };

        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, [router]);

    return (
        <div className={styles.headerWrapper}>
            <header className={styles.header}>
                <div className={`${styles.headerContainer} ${isProjectSelected && styles.expandedHeader}`}>
                    <div className={styles.topSection}>
                        <Link href="/" shallow>
                            <SwdFactoryIcon className={`${styles.logoButton} dark`} />
                        </Link>

                        <div className={styles.headerActions}>
                            <div className={`${styles.option} ${isProjectSelected && styles.selectedOption}`}
                                 onClick={handleProjectsClick}>Projects</div>
                            <div className={styles.option}>Partners</div>
                            <div className={styles.option}>How we work</div>
                        </div>
                    </div>
                </div>
            </header>

            <div className={styles.headerFader}></div>

            <div className={`${styles.headerBackdrop} ${isProjectSelected && styles.opened}`}
                 onClick={handleProjectsClick}></div>
        </div>
    );
};

export default Header;
