// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/solar-energy/energy-assurance/project-info";

export default function EnergyAssurance () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
