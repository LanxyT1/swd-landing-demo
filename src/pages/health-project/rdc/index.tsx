// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/health-project/rdc/project-info";

export default function Rdc () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
