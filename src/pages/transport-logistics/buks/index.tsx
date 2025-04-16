// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/transport-logistics/buks/project-info";

export default function Buks () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
