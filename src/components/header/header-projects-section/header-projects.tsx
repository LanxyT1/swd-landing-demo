// Next
import React from "react";
import Link from "next/link";
// Data
import {
    PROJECT_HEALTH_LINKS,
    PROJECT_OTHER_LINKS,
    PROJECT_SOLAR_LINKS,
    PROJECT_TRANSPORTATION_LINKS
} from "./data/project-link";
// Icons
import HealthIcon from "@/assets/svgs/health-icon";
import SolarIcon from "@/assets/svgs/solar-icon";
import TransportIcon from "@/assets/svgs/transport-icon";
import CustomBuildIcon from "@/assets/svgs/custom-build-icon";
// Styles
import styles from "@/components/header/header-projects-section/HeaderProjects.module.scss";

const HeaderProjects = () => {
    const getProjectLinks = (links: readonly {[key: string]: string}[]) => {
        return links.map((link, index) => {
            return (
                <Link key={index}
                      className={styles.link}
                      href={link.href}
                      shallow>
                    <div className={styles.linkWrapper}>
                        <div className={styles.title}>{link.title}</div>
                        <div className={styles.description}>{link.description}</div>
                    </div>
                </Link>
            );
        });
    };

    return (
        <div className={styles.projectSectionWrapper}>
            <div className={styles.cardsWrapper}>
                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <HealthIcon className={styles.icon} />

                        <div className={styles.cardTitle}>
                            Health Science <br /> & Bio Informatics
                        </div>
                    </div>

                    <div className={styles.linkOptions}>
                        {getProjectLinks(PROJECT_HEALTH_LINKS)}
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <SolarIcon className={styles.icon} />

                        <div className={styles.cardTitle}>
                            Solar energy
                        </div>
                    </div>

                    <div className={styles.linkOptions}>
                        {getProjectLinks(PROJECT_SOLAR_LINKS)}
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <TransportIcon className={styles.icon} />

                        <div className={styles.cardTitle}>
                            Transportation <br /> & Logistics
                        </div>
                    </div>

                    <div className={styles.linkOptions}>
                        {getProjectLinks(PROJECT_TRANSPORTATION_LINKS)}
                    </div>
                </div>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <CustomBuildIcon className={styles.icon} />

                        <div className={styles.cardTitle}>
                            Other Projects
                        </div>
                    </div>

                    <div className={styles.linkOptions}>
                        {getProjectLinks(PROJECT_OTHER_LINKS)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderProjects;
