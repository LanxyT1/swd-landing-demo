import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "Energy Assurance Toolkit - Solar System Maintenance and Cost Assessment Tool",
    description: "The Energy Assurance Toolkit is a system designed to support the ongoing operation " +
        "and maintenance of solar energy systems. It provides detailed calculations of maintenance " +
        "costs, monitors the technical condition of components, and helps ensure the long-term " +
        "efficiency and reliability of existing installations.",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Cost Assessment",
                    description: "Calculates the financial requirements for maintaining solar systems, " +
                        "including parts replacement and operational expenses."
                },
                {
                    title: "Technical Condition Monitoring",
                    description: "Tracks the performance and health of system components, " +
                        "identifying potential issues before they escalate."
                },
                {
                    title: "Maintenance Scheduling",
                    description: "Provides tools to plan and schedule regular maintenance tasks, " +
                        "ensuring system longevity."
                },
                {
                    title: "Data Analysis and Reporting",
                    description: "Offers insights into system performance trends and generates " +
                        "reports to guide maintenance strategies."
                }
            ]
        },
        {
            title: "Application",
            list: [
                {
                    title: "Operational Maintenance",
                    description: "Helps operators manage the upkeep of solar systems by providing " +
                        "clear maintenance schedules and cost projections."
                },
                {
                    title: "Performance Optimization",
                    description: "Identifies underperformed components, aiding in timely repairs " +
                        "or replacements."
                },
                {
                    title: "Budget Planning",
                    description: "Supports financial forecasting for long-term system operations."
                }
            ]
        },
        {
            title: "Impact",
            description: "The Energy Assurance Toolkit enhances the management of existing solar " +
                "energy systems by reducing downtime and maintenance costs while ensuring optimal " +
                "performance. Its monitoring and analysis features allow operators to address issues " +
                "proactively, extending the lifespan of installations and improving overall " +
                "system reliability.",
        }
    ]
}
