// Next Imports
import React from "react";
// Components
import IndustryTemplate from "@/components/industry-template/industry-template";
// Icons
import TransportIcon from "@/assets/svgs/transport-icon";
import TransportBlur from "@/assets/svgs/transport-blur";
import BlobBlur from "@/assets/svgs/blob-blur";
//Data
import {overviewList} from "@/data/transport-logistics/overview-list";
import {projectList} from "@/data/transport-logistics/project-list";
// Styles
import styles from "@/components/industry-template/IndustryTemplate.module.scss";

export default function TransportLogistics() {
    return (
        <IndustryTemplate heroTitle="Transportation & Logistics"
                          heroIcon={<TransportIcon className={styles.icon} />}
                          heroLargeIcon={<TransportBlur className={styles.backgroundIcon} />}
                          heroBlob={<BlobBlur className={`${styles.blobBlur} transport-blob`} />}
                          projectList={projectList}
                          overviewList={overviewList} />
    );
}
