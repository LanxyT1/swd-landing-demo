// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/health-project/europa-dx/project-info";

export default function EuropaDx () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};

