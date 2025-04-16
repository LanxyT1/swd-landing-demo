// Next Imports
// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/health-project/pdx-ngx/project-info";

export default function PdxNgx () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
