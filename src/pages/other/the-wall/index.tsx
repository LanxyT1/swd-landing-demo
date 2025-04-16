// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/other/the-wall/project-info";

export default function TheWall () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
