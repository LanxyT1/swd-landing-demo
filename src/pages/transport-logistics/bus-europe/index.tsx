// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/transport-logistics/bus-europe/project-info";

export default function BusEurope () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
