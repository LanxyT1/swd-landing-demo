// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/transport-logistics/transcontainer-portal/project-info";

export default function TransContainerPortal () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
