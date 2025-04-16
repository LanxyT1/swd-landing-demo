// Next Imports
import React from "react";
// Components
import Container from "@/components/container/container";
import ProjectGridSection from "@/components/project-info-template/project-grid-template/project-grid-template";
import ProjectListSection from "@/components/project-info-template/project-list-template/project-list-template";
// Types
import {ProjectInfo} from "@/types/project-info-list";
// Styles
import styles from "@/components/project-info-template/ProjectInfoTemplate.module.scss";

interface ProjectInfoProps {
    projectInfo: ProjectInfo;
}

const ProjectInfoTemplate: React.FC<ProjectInfoProps> = ({projectInfo}) => {
    const {title, description, footer, projectSections} = projectInfo;

    const renderProjectSections = () =>
        projectSections.map((projectSection, index) => (
            <Container
                key={index}
                title={projectSection.title}
                secondaryText={projectSection.description}>
                <div className={styles.containerWrapper}>
                    {projectSection.list &&
                        (projectSection.list.every(item => item.title) ? (
                            <ProjectGridSection projectSection={projectSection}/>
                        ) : (
                            <ProjectListSection projectSection={projectSection}/>
                        ))}
                </div>
            </Container>
        ));

    return (
        <div className={styles.wrapper}>
            <div className={styles.section}>
                <div className={styles.heroSection}>
                    <div className={styles.heroTitleSection}>{title}</div>
                    <p className={styles.heroDescription}>{description}</p>
                </div>
            </div>

            <div className={styles.section}>{renderProjectSections()}</div>

            {footer && (
                <div className={`${styles.section} ${styles.footerSection}`}>
                    <p className={styles.footer}>{footer}</p>
                </div>
            )}
        </div>
    );
};

export default ProjectInfoTemplate;
