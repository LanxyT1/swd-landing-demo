import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "PVSim - Solar Energy System Simulation Tool",
    description: "PVSim is a software tool developed for SunPower Corporation to simulate the " +
        "performance of various components within solar energy systems. It predicts power " +
        "output and assesses the operational capacity of individual elements and the entire " +
        "system, aiding engineers and designers in optimizing configurations before implementation.",
    footer: "PVSim serves as a valuable resource in the development and optimization of solar energy " +
        "solutions, promoting effective design and implementation strategies.",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Performance Simulation",
                    description: "Models the behavior of solar energy system components under " +
                        "different conditions to forecast energy production."
                },
                {
                    title: "Component Analysis",
                    description: "Evaluates the functionality and efficiency of individual system " +
                        "elements, such as panels and inverters."
                },
                {
                    title: "System Assessment",
                    description: "Provides insights into overall system performance, helping " +
                        "identify potential issues and areas for improvement."
                }
            ]
        },
        {
            title: "Application",
            list: [
                {
                    title: "Design Optimization",
                    description: "Assists in refining system designs to achieve desired " +
                        "performance outcomes."
                },
                {
                    title: "Feasibility Studies",
                    description: "Supports the evaluation of proposed solar installations by " +
                        "predicting energy yield and system behavior."
                },
                {
                    title: "Troubleshooting",
                    description: "Helps diagnose performance issues by simulating various scenarios " +
                        "and component interactions."
                }
            ]
        },
        {
            title: "Impact",
            description: "By utilizing PVSim, designers and engineers can make informed decisions, " +
                "leading to more efficient and reliable solar energy systems. The tool enhances the " +
                "planning process, reduces the likelihood of costly errors, and contributes to the " +
                "advancement of solar technology.",
        }
    ]
}
