// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/transport-logistics/bus-ticket-pro/project-info";

export default function BusTicketPro () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
