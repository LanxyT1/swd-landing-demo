// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/health-project/redda/project-info";

export default function PdxNgx () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
