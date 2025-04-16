// Next Imports
import React from "react";
// Types
import {ProjectSection} from "@/types/project-info-list";
// Styles
import styles from "@/components/project-info-template/project-list-template/ProjectListTemplate.module.scss";

interface ProjectListSectionProps {
    projectSection: ProjectSection; // Project section for list.
}

const ProjectListTemplate: React.FC<ProjectListSectionProps> = ({projectSection}) => {
    return (
        <div className={styles.list}>
            {projectSection.list?.map((keyFeature, index) => (
                <div key={index}
                     className={styles.card}>
                    <span>{keyFeature.description}</span>
                </div>
            ))}
        </div>
    );
}

export default ProjectListTemplate;
