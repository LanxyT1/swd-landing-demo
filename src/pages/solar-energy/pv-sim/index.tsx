// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/solar-energy/pv-sim/project-info";

export default function PvSim () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
