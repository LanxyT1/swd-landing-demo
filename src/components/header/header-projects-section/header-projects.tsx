// Next Imports
import React from "react";
// import Link from "next/link";
// Components
// import {PROJECT_HEALTH_LINKS} from "@/data/project-health-link";
// import {PROJECT_OTHER_LINKS} from "@/data/project-other-link";
// import {PROJECT_SOLAR_LINKS} from "@/data/project-solar-links";
// import {PROJECT_TRANSPORTATION_LINKS} from "@/data/project-transport-link";
// Icons
import HealthIcon from "@/assets/svgs/health-icon";
import SolarIcon from "@/assets/svgs/solar-icon";
import TransportIcon from "@/assets/svgs/transport-icon";
import CustomBuildIcon from "@/assets/svgs/custom-build-icon";
// Styles
import styles from "@/components/header/header-projects-section/HeaderProjects.module.scss";

const HeaderProjects = () => {
    // const getProjectLinks = (links: readonly {[key: string]: string}[]) => {
    //     return links.map((link, index) => {
    //         return (
    //             <Link key={index}
    //                   className={styles.link}
    //                   href={link.href}
    //                   shallow>{link.title}</Link>
    //         );
    //     });
    // };

    return (
        <div className={styles.projectSectionWrapper}>
            <div className={styles.sectionDescription}>
                We consider each our client as a potential partner and we believe that there is always
                a possibility to create a long-term win-win relationships between companies.
            </div>

            <div className={styles.cardsWrapper}>
                <div className={styles.card}>
                    <HealthIcon className={styles.icon} />

                    <div className={styles.cardTitle}>
                        Health Science <br /> & Bio Informatics
                    </div>

                    <div className={styles.linkOptions}>
                        {/*{getProjectLinks(PROJECT_HEALTH_LINKS)}*/}
                    </div>
                </div>

                <div className={styles.card}>
                    <SolarIcon className={styles.icon} />

                    <div className={styles.cardTitle}>
                        Solar energy
                    </div>

                    <div className={styles.linkOptions}>
                        {/*{getProjectLinks(PROJECT_SOLAR_LINKS)}*/}
                    </div>
                </div>

                <div className={styles.card}>
                    <TransportIcon className={styles.icon} />

                    <div className={styles.cardTitle}>
                        Transportation <br /> & Logistics
                    </div>

                    <div className={styles.linkOptions}>
                        {/*{getProjectLinks(PROJECT_TRANSPORTATION_LINKS)}*/}
                    </div>
                </div>

                <div className={styles.card}>
                    <CustomBuildIcon className={styles.icon} />

                    <div className={styles.cardTitle}>
                        Other Projects
                    </div>

                    <div className={styles.linkOptions}>
                        {/*{getProjectLinks(PROJECT_OTHER_LINKS)}*/}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderProjects;
