// Next Imports
import React from "react";
// Components
import Container from "@/components/container/container";
import RedirectLink from "@/components/redirect-link/redirect-link";
// Icons
import HealthIcon from "@/assets/svgs/health-icon";
import SolarIcon from "@/assets/svgs/solar-icon";
import TransportIcon from "@/assets/svgs/transport-icon";
// Styles
import styles from "./MainIndustries.module.scss";

const MainIndustries = () => {
    const title = "Main Industries We Serve";
    const secondaryText = "While we have a strong focus in these areas, our expertise extends" +
        "beyond them, allowing us to adapt to a variety of sectors and challenges.";

    return (
        <Container title={title}
                   secondaryText={secondaryText}>
            <div className={styles.section}>
                <div className={styles.mainIndustriesWrapper}>
                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <HealthIcon className={styles.icon} />

                            <div className={styles.cardTitle}>
                                Health Science <br /> & Bio Informatics
                            </div>

                            <div className={styles.cardInfo}>
                                More than 9 years experience developing scientific software for Big Pharma companies.
                                This includes research data management and processing systems, clinical data analytical
                                and visualization applications, LIMS (Lab Information Management Systems).
                            </div>
                        </div>

                        <RedirectLink link="/health-project" title="Learn more" />
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <SolarIcon className={styles.icon} />

                            <div className={styles.cardTitle}>
                                Solar energy
                            </div>

                            <div className={styles.cardInfo}>
                                More than 17 years experience designing and developing various types of software for
                                Solar Energy Industry, including technical design and analysis systems, simulation software,
                                monitoring systems.
                            </div>
                        </div>

                        <RedirectLink link="/solar-energy" title="Learn more" />
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardHeader}>
                            <TransportIcon className={styles.icon} />

                            <div className={styles.cardTitle}>
                                Transportation <br /> & Logistics
                            </div>

                            <div className={styles.cardInfo}>
                                Over 22 years of experience in providing comprehensive software solutions for the passenger and
                                cargo transportation sectors, including ticketing systems for both railroad and coach transportation,
                                as well as cargo management systems and real-time document registration capabilities.
                            </div>
                        </div>

                        <RedirectLink link="/transport-logistics" title="Learn more" />
                    </div>
                </div>

                <div className={styles.redirectText}>
                    <RedirectLink link="/parnters"
                                  filled={false}
                                  title="Learn more about our partners" />
                </div>
            </div>
        </Container>
    );
};

export default MainIndustries;
