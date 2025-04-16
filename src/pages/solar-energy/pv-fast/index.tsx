// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/solar-energy/pv-fast/project-info";

export default function PvFast () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};

