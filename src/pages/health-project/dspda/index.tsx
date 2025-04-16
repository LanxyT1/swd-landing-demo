// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/health-project/dspda/project-info";

export default function Dspda () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
