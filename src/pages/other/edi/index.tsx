// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/other/edi/project-info";

export default function Edi () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
