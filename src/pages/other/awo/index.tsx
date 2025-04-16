// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/other/awo/project-info";

export default function Awo () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
