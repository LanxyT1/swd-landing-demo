// Next Imports
import React, {useEffect} from "react";
// Components
import RedirectLink from "@/components/redirect-link/redirect-link";
// Styles
import styles from "@/components/industry-template/IndustryTemplate.module.scss";

interface IndustrySectionProps {
    projectList: { [key: string]: string }[]; // List of projects with title, description, and optional link.
    overviewList: { [key: string]: string }[]; // List of industry overviews with title and description.
    heroTitle: string; // Title displayed in the hero section.
    heroIcon: React.ReactNode; // Small icon displayed in the hero section.
    heroLargeIcon: React.ReactNode; // Large background icon displayed in the hero section.
    heroBlob: React.ReactNode; // Blob element for decorative purposes in the hero section.
}

const IndustryTemplate: React.FC<IndustrySectionProps> = (
    {projectList, overviewList, heroTitle, heroIcon, heroLargeIcon, heroBlob}: IndustrySectionProps) => {

    useEffect(() => {
        const firstCard: HTMLElement | null = document.getElementById(`expandCard-0`);
        if (firstCard) {
            expandCard(firstCard);
        }
    }, []);

    const handleExpandCardClick: (index: number) => void = (index: number): void => {
        const currentExpandedCard: HTMLElement | null = document.querySelector(`.${styles.expanded}`);
        const targetCard: HTMLElement | null = document.getElementById(`expandCard-${index}`);

        if (currentExpandedCard) {
            collapseCard(currentExpandedCard);
        }

        if (targetCard) {
            expandCard(targetCard);
        }
    };

    const collapseCard: (card: HTMLElement) => void = (card: HTMLElement): void => {
        const cardContent: HTMLElement | null = card.querySelector(`.${styles.cardContent}`);

        if (!cardContent) {
            return;
        }

        cardContent.style.maxHeight = "0px";
        card.classList.remove(styles.expanded);
    };

    const expandCard: (card: HTMLElement) => void = (card: HTMLElement): void => {
        const cardContent: HTMLElement | null = card.querySelector(`.${styles.cardContent}`);

        if (!cardContent) {
            return;
        }

        cardContent.style.maxHeight = `${cardContent.scrollHeight}px`;
        card.classList.add(styles.expanded);
    };

    const overviewSectionRowsHtml: React.JSX.Element[] = (
        overviewList.map((overview: {[key: string]: string}, index: number) => {
            return (
                <div key={index} className={styles.row}>
                    <div className={styles.title}>
                        {overview.title}
                    </div>

                    <div className={styles.description}>
                        {overview.description}
                    </div>
                </div>
            );
        })
    );

    const projectSectionRowsHtml: React.JSX.Element[] = (
        projectList.map((project: {[key: string]: string}, index: number) => {
            return (
                <div key={index}
                     id={`expandCard-${index}`}
                     className={styles.expandCard}
                     onClick={(): void => handleExpandCardClick(index)}>
                    <div className={styles.title}>
                        {project.title}
                    </div>

                    <div className={styles.cardContent}>
                        <div className={styles.description}>
                            {project.description}
                        </div>

                        {project.link &&<RedirectLink link={project.link} title="Visit project"/>}
                    </div>
                </div>
            );
        })
    );

    return (
        <div className={styles.wrapper}>
            <div className={styles.section}>
                <div className={styles.heroSection}>
                    {heroIcon}

                    <b>Industries we serve</b>
                    <div className={styles.heroTitleSection}>
                        {heroTitle}
                    </div>

                    {heroLargeIcon}
                    {heroBlob}
                </div>
            </div>

            <div className={`${styles.section} ${styles.rowSection}`}>
                <div id={"overviewSection"}
                     className={styles.overviewSection}>
                    {overviewSectionRowsHtml}
                </div>

                <div className={styles.projectsSection}>
                    {projectSectionRowsHtml}
                </div>
            </div>
        </div>
    );
}

export default IndustryTemplate;
