// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/transport-logistics/baltic-lines/project-info";

export default function BalticLines () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
