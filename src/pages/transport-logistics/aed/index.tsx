// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/transport-logistics/aed/project-info";

export default function Aed () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
