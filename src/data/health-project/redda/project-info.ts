import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "REDDA - Research Data Ingestion and Organization Tool",
    description: "REDDA is a tool developed for Celgene Corporation in " +
        "collaboration with Seattle BioSoftware. It is designed to facilitate " +
        "the ingestion, annotation, and organization of research data, " +
        "streamlining workflows and improving the efficiency of " +
        "scientific research processes.",
    footer: "REDDA provides a reliable framework for managing and organizing research data, " +
        "helping researchers focus on discovery and innovation by reducing time " +
        "spent on data handling",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Data Ingestion",
                    description: "Supports the seamless import of research " +
                        "data from various sources, ensuring compatibility with existing systems"
                },
                {
                    title: "Annotation and Metadata Management",
                    description: "Enables detailed annotation of datasets, providing " +
                        "context and enhancing data usability for downstream analysis."
                },
                {
                    title: "Organized Data Storage",
                    description: "Structures and organizes data for easy retrieval " +
                        "and efficient management."
                }
            ]
        },
        {
            title: "Application",
            list: [
                {
                    description: "Profiling RNA and protein expression in tissue samples."
                },
                {
                    description: "Exploring spatial relationships between " +
                        "biomolecules and cellular structures."
                },
                {
                    description: "Supporting biomarker discovery and translational research."
                }
            ]
        },
        {
            title: "Contribution",
            description: "Our team contributed to REDDA by:",
            list: [
                {
                    description: "Building tools for data ingestion and ensuring compatibility " +
                        "with diverse data formats and sources."
                },
                {
                    description: "Developing annotation features to support detailed metadata " +
                        "entry and management."
                },
                {
                    description: "Implementing organizational structures to facilitate efficient " +
                        "data storage and retrieval."
                }
            ]
        }
    ]
}
