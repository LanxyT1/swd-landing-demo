// Next Imports
import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";
// Components
import Button from "@/components/button/button";
import HeaderProjectsSection from "@/components/header/header-projects-section/header-projects";
// Icons
import SwdFactoryLogo from "@/assets/svgs/swd-factory-logo";
import MenuIcon from "@/assets/svgs/menu-icon";
// Styles
import styles from "@/components/header/Header.module.scss";

const Header = () => {
    const [isProjectSelected, setIsProjectSelected] = React.useState(false);
    const [isMenuSelected, setIsMenuSelected] = React.useState(false);
    const router = useRouter();

    const handleProjectsClick = () => {
        setIsProjectSelected((isProjectSelected) => {
            if (!isProjectSelected) {
                document.body.style.overflow = "hidden";
            } else {
                document.body.style.overflow = "unset";
            }
            return !isProjectSelected;
        });
    };

    const handleMenuClick = () => {
        setIsMenuSelected((isMenuSelected) => !isMenuSelected);

        if (isMenuSelected) {
            setIsProjectSelected(false);
            document.body.style.overflow = "unset";
        }
    };

    React.useEffect(() => {
        const handleRouteChange = () => {
            setIsProjectSelected(false);
            setIsMenuSelected(false);
            document.body.style.overflow = "unset";
        };

        router.events.on("routeChangeStart", handleRouteChange);

        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
            document.body.style.overflow = "unset";
        };
    }, [router]);

    return (<div className={styles.headerWrapper}>
            <header className={styles.header}>
                <div className={`${styles.headerContainer} ${isProjectSelected && styles.expandedHeader}`}>
                    <div className={styles.topSection}>
                        <Link href="/" shallow>
                            <SwdFactoryLogo className={`${styles.logoButton} dark`}/>
                        </Link>

                        <div className={styles.headerMobileActions}>
                            <div className={styles.option}>
                                <div onClick={handleMenuClick}>
                                    <MenuIcon/>
                                </div>
                            </div>
                        </div>

                        <div className={styles.headerActions}>
                            <div className={`${styles.option} ${isProjectSelected && styles.selectedOption}`}
                                 onClick={handleProjectsClick}>Projects
                            </div>
                            <div className={styles.option}
                                 onClick={() => router.push("/partners")}>Partners
                            </div>
                            <div className={styles.option}
                                 onClick={() => router.push("/how-we-work")}>How we work
                            </div>

                            <div className={styles.contactButton}
                                 onClick={() => window.location.href = "mailto:info@swdfactory.com"}>
                                <Button text="Contact us"
                                        showForwardIcon={true}/>
                            </div>
                        </div>
                    </div>

                    <div className={`${styles.menuOptions} ${isMenuSelected && styles.opened}`}>
                        <div className={`${styles.option} ${isProjectSelected && styles.selectedOption}`}
                             onClick={handleProjectsClick}>Projects
                        </div>
                        <div className={styles.option}
                             onClick={() => router.push("/partners")}>Partners
                        </div>
                        <div className={styles.option}
                             onClick={() => router.push("/how-we-work")}>How we work
                        </div>
                    </div>

                    <div className={`${styles.projectSectionWrapper} ${isProjectSelected && styles.opened}`}>
                        <HeaderProjectsSection/>
                    </div>
                </div>
            </header>

            <div className={styles.headerFader}></div>

            <div className={`${styles.headerBackdrop} ${isProjectSelected && styles.opened}`}
                 onClick={handleProjectsClick}></div>
        </div>);
};

export default Header;
