import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "PVFast - Automated Solar Energy System Design Tool",
    description: "PVFast is an engineering tool developed for SunPower Corporation " +
        "to streamline the design of solar energy systems. Built as an AutoCAD add-on, " +
        "it automates key aspects of the design process, significantly reducing time spent " +
        "on layouts and calculations while improving accuracy. The tool is primarily used " +
        "by engineers and solar system designers to transition efficiently from initial design " +
        "to implementation.",
    footer: "Developed for SunPower, PVFast has become a valuable tool in the renewable energy " +
        "sector, helping professionals design solar systems more effectively.",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Automated Panel Layout",
                    description: "Ensures precise placement of solar panels, adhering to technical " +
                        "and electrical connection rules."
                },
                {
                    title: "Environmental Load Calculations",
                    description: "Assesses wind loads and calculates structural reinforcements required " +
                        "for system stability."
                },
                {
                    title: "System Productivity Analysis",
                    description: "Provides performance estimates for both individual panels and the " +
                        "entire system, accounting for geographic location, weather, and shading effects."
                },
                {
                    title: "Cost Estimation",
                    description: "Offers detailed calculations of construction costs based " +
                        "on the proposed design."
                }
            ]
        },
        {
            title: "Application",
            list: [
                {
                    description: "Engineering and design of solar energy systems and power plants."
                },
                {
                    description: "Quick feasibility assessments for project planning."
                },
                {
                    description: "Enhancing design workflows by reducing errors and optimizing layouts."
                }
            ]
        },
        {
            title: "Impact",
            description: "PVFast has reduced project completion times by approximately 30%, providing " +
                "a reliable framework for solar energy system design. Automated quality checks have " +
                "minimized errors, contributing to more efficient and precise installations.",
        }
    ]
}
