// Next Imports
import React from "react";
// Types
import {ProjectSection} from "@/types/project-info-list";
// Styles
import styles from "@/components/project-info-template/project-grid-template/ProjectGridTemplate.module.scss";

interface ProjectGridSectionProps {
    projectSection: ProjectSection; // Project section for grid.
}

const ProjectGridTemplate: React.FC<ProjectGridSectionProps> = ({projectSection}) => {
    const getSecondaryListHtml = (secondaryList: string[]) => {
        return (
            <ul>
                {secondaryList.map((secondaryItem: string, index: number) => (
                    <li key={index}>{secondaryItem}</li>
                ))}
            </ul>
        );
    };

    return (
        <div className={styles.grid}>
            {projectSection.list?.map((keyFeature, index) => (
                <div key={index}
                     className={styles.card}>
                    {keyFeature.title && (
                        <div className={styles.cardTitle}>{keyFeature.title}</div>
                    )}
                    {keyFeature.description && keyFeature.description}
                    {keyFeature.secondaryList
                        ? getSecondaryListHtml(keyFeature.secondaryList)
                        : null}
                </div>
            ))}
        </div>
    );
}

export default ProjectGridTemplate;
