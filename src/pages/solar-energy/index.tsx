// Next Imports
import React from "react";
// Components
import IndustryTemplate from "@/components/industry-template/industry-template";
// Icons
import SolarIcon from "@/assets/svgs/solar-icon";
import SolarBlur from "@/assets/svgs/solar-blur";
import BlobBlur from "@/assets/svgs/blob-blur";
// Data
import {overviewList} from "@/data/solar-energy/overview-list";
import {projectList} from "@/data/solar-energy/project-list";
// Styles
import styles from "@/components/industry-template/IndustryTemplate.module.scss";

export default function SolarEnergy() {
    return (
        <IndustryTemplate heroTitle="Health Science & Bio Informatics"
                          heroIcon={<SolarIcon className={styles.icon} />}
                          heroLargeIcon={<SolarBlur className={styles.backgroundIcon} />}
                          heroBlob={<BlobBlur className={`${styles.blobBlur} solar-blob`} />}
                          projectList={projectList}
                          overviewList={overviewList} />
    );
}
