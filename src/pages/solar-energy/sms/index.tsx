// Components
import ProjectInfoSection from "@/components/project-info-template/project-info-template";
// Data
import {projectInfo} from "@/data/solar-energy/sms/project-info";

export default function Sms () {
    return <ProjectInfoSection projectInfo={projectInfo}/>;
};
