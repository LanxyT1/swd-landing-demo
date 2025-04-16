// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/health-project/cosmxda/project-info";

export default function Cosmxda () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
