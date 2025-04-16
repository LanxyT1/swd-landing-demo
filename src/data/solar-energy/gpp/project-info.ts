import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "GPP - Global Proposal System",
    description: "GPP is a tool designed for generating comprehensive proposals for solar energy " +
        "installations. It automates the creation of preliminary designs, performs cost and " +
        "efficiency calculations, and provides long-term performance forecasts. The system " +
        "integrates seamlessly with CRM and ERP platforms, streamlining the proposal process for " +
        "solar projects.",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Preliminary Design Creation",
                    description: "Automatically generates initial layouts and configurations for " +
                        "solar installations based on project parameters."
                },
                {
                    title: "Cost and Efficiency Calculations",
                    description: "Provides detailed cost estimates and efficiency analyses, " +
                        "ensuring accurate and transparent proposals."
                },
                {
                    title: "Performance Forecasts",
                    description: "Predicts system performance over a 25-year timeframe, accounting " +
                        "for factors such as location, weather patterns, and maintenance schedules."
                },
                {
                    title: "System Integration",
                    description: "Connects with CRM and ERP systems, enabling efficient data " +
                        "exchange and alignment with broader business workflows."
                }
            ]
        },
        {
            title: "Application",
            list: [
                {
                    title: "Proposal Generation",
                    description: "Automates the creation of professional, data-driven proposals " +
                        "for clients."
                },
                {
                    title: "Feasibility Analysis",
                    description: "Supports decision-making by providing detailed insights into " +
                        "system costs, efficiency, and long-term performance."
                },
                {
                    title: "Sales Support",
                    description: "Enhances the sales process by delivering fast and accurate " +
                        "project assessments."
                }
            ]
        },
        {
            title: "Impact",
            description: "GPP has streamlined the proposal creation process, reducing the time " +
                "and effort required to prepare detailed and accurate project proposals. By " +
                "integrating with CRM and ERP systems, it ensures alignment with business " +
                "operations and improves overall workflow efficiency.",
        }
    ]
}
