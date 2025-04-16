// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/solar-energy/gpp/project-info";

export default function Gpp () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
