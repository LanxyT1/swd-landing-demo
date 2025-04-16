import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "RDC - Research Data Commons Platform",
    description: "The Research Data Commons (RDC) platform was developed for Bristol" +
        "Myers Squibb (BMS) in collaboration with Seattle BioSoftware. It serves as a " +
        "centralized hub for aggregating research data from multiple sources, enabling " +
        "researchers to access and utilize diverse datasets efficiently. The RDC " +
        "simplifies the integration of data across systems, fostering collaboration " +
        "and accelerating research efforts.",
    footer: "RDC empowers research teams by simplifying data management and integration, " +
        "enabling them to focus on generating insights and advancing scientific discovery",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Data Aggregation",
                    description: "Collects data from various sources, creating a unified " +
                        "repository for research teams"
                },
                {
                    title: "Seamless Integration",
                    description: "Ensures compatibility with multiple systems, streamlining " +
                        "data transfer and accessibility."
                },
                {
                    title: "Efficient Data Access",
                    description: "Provides fast and convenient tools for querying and " +
                        "retrieving datasets, reducing time spent on data preparation."
                }
            ]
        },
        {
            title: "Application",
            list: [
                {
                    description: "Centralized access to research data from diverse " +
                        "experiments and systems."
                },
                {
                    description: "Enhanced data integration for multidisciplinary research."
                },
                {
                    description: "Improved collaboration through shared, organized datasets."
                }
            ]
        },
        {
            title: "Contribution",
            description: "Our team’s work on RDC included:",
            list: [
                {
                    description: "Designing and implementing data aggregation pipelines to " +
                        "collect and standardize datasets from various systems."
                },
                {
                    description: "Developing tools for seamless integration and efficient data transfer."
                },
                {
                    description: "Creating user-friendly features for data access and retrieval, " +
                        "improving the usability of the platform for researchers."
                }
            ]
        }
    ]
}
