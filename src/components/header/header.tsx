// Next Imports
import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
// Components
import Button from "@/components/button/button";
import HeaderProjectsSection from "@/components/header/header-projects-section/header-projects";
// Icons
import SwdFactoryLogo from "@/assets/svgs/swd-factory-logo";
// Styles
import styles from "@/components/header/Header.module.scss"

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
                            <SwdFactoryLogo className={`${styles.logoButton} dark`}/>
                        </Link>

                        <div className={styles.headerActions}>
                            <div className={`${styles.option} ${isProjectSelected && styles.selectedOption}`}
                                 onClick={handleProjectsClick}>Projects</div>
                            <div className={styles.option}>Partners</div>
                            <div className={styles.option}>How we work</div>

                            <div className={styles.contactButton}
                                 onClick={() => window.location.href = "mailto:info@swdfactory.com"}>
                                <Button text="Contact us"
                                        showForwardIcon={true}/>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.projectSectionWrapper} ${isProjectSelected && styles.opened}`}>
                        <HeaderProjectsSection />
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
