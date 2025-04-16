// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/other/nivis/project-info";

export default function Nivis () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
