import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "SMS - Solar Monitoring System",
    description: "SMS is a monitoring tool developed for SunPower Corporation to track the " +
        "performance of solar energy systems at the component level. This system provides " +
        "real-time insights into the functionality of individual elements, helping to ensure " +
        "optimal operation and quickly address any issues " +
        "system, aiding engineers and designers in optimizing configurations before implementation.",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Component-Level Monitoring",
                    description: "Tracks the performance of individual solar panels, inverters, and " +
                        "other components, providing detailed insights into system behavior."
                },
                {
                    title: "Real-Time Data Analysis",
                    description: "Continuously collects and analyzes operational data, allowing for " +
                        "prompt identification of inefficiencies or malfunctions."
                },
                {
                    title: "Alerts and Notifications",
                    description: "Generates alerts for underperformed components or potential " +
                        "failures, enabling proactive maintenance."
                },
                {
                    title: "Performance Reporting",
                    description: "Offers detailed reports on system productivity, helping " +
                        "stakeholders evaluate overall efficiency and identify improvement areas."
                }
            ]
        },
        {
            title: "Application",
            list: [
                {
                    title: "System Maintenance",
                    description: "Facilitates proactive and precise maintenance by pinpointing " +
                        "issues at the component level."
                },
                {
                    title: "Performance Optimization",
                    description: "Helps improve the efficiency of solar installations by " +
                        "addressing specific areas of underperformed."
                },
                {
                    title: "Energy Management",
                    description: "Provides data to support decision-making for energy " +
                        "utilization and system upgrades."
                }
            ]
        },
        {
            title: "Impact",
            description: "The implementation of SMS has significantly improved the reliability and " +
                "performance of solar energy systems. By enabling real-time monitoring and quick " +
                "issue resolution, it reduces downtime and enhances overall efficiency.",
        }
    ]
}
