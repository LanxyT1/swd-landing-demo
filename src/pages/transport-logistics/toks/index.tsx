// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/transport-logistics/toks/project-info";

export default function Toks () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
