// Next Imports
import React from "react";
// Components
import IndustryTemplate from "@/components/industry-template/industry-template";
// Icons
import HealthIcon from "@/assets/svgs/health-icon";
import HealthBlur from "@/assets/svgs/health-blur";
import BlobBlur from "@/assets/svgs/blob-blur";
// Data
import {overviewList} from "@/data/health-project/overview-list";
import {projectList} from "@/data/health-project/project-list";
// Styles
import styles from "@/components/industry-template/IndustryTemplate.module.scss";

export default function HealthProject() {
    return (
        <IndustryTemplate heroTitle="Health Science & Bio Informatics"
                          heroIcon={<HealthIcon className={styles.icon} />}
                          heroLargeIcon={<HealthBlur className={styles.backgroundIcon} />}
                          heroBlob={<BlobBlur className={`${styles.blobBlur} health-blob`} />}
                          projectList={projectList}
                          overviewList={overviewList} />
    );
}
