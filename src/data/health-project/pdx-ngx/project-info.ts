import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "PDX and NGX Portals – Laboratory Information Management Systems (LIMS)",
    description: "Developed in collaboration with Seattle BioSoftware, the PDX and NGX portals " +
        "are specialized LIMS designed to manage, search, and analyze extensive experimental " +
        "datasets, including RNA and protein expressions, pathways, and mutations. These systems " +
        "support tens of thousands of samples, enhancing research efficiency for Patient-Derived " +
        "Xenograft (PDX) and other experimental models.",
    footer: "These contributions have been instrumental in accelerating knowledge " +
        "discovery by providing the ability to access and share experimental " +
        "data and analyses, thereby enhancing research efficiency in PDX and " +
        "other experimental models",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Comprehensive Data Management",
                    description: "Facilitates the storage, retrieval, and organization of " +
                        "large-scale experimental data, ensuring efficient handling of complex datasets."
                },
                {
                    title: "Advanced Search and Analysis",
                    description: "Enables detailed exploration of molecular data, allowing researchers " +
                        "to identify patterns and correlations within extensive sample collections."
                },
                {
                    title: "Scalability",
                    description: "Designed to accommodate tens of thousands of samples, providing " +
                        "a robust platform for large-scale studies."
                }
            ]
        },
        {
            title: "Application",
            list: [
                {
                    title: "RNA and Protein Expression Profiling",
                    description: "Assists in the analysis of gene and protein expression " +
                        "levels across diverse samples."
                },
                {
                    title: "Pathway and Mutation Analysis",
                    description: "Supports the investigation of molecular pathways and genetic mutations, " +
                        "aiding in the understanding of disease mechanisms."
                },
                {
                    title: "PDX Model Research",
                    description: "Enhances the study of patient-derived xenograft models by providing " +
                        "tools for efficient data management and analysis."
                }
            ]
        },
        {
            title: "Contribution",
            description: "Our team played a pivotal role in the development of the PDX and NGX portals by:",
            list: [
                {
                    title: "Designing the Data Architecture",
                    description: "Developed the underlying data structures to support efficient " +
                        "storage and retrieval of large datasets."
                },
                {
                    title: "Implementing Analytical Tools",
                    description: "Created features for data analysis, including visualization of RNA and " +
                        "protein expression, pathway mapping, and mutation tracking."
                },
                {
                    title: "Enhancing User Interface",
                    description: "Improved the user interface to facilitate intuitive navigation " +
                        "and efficient data handling for researchers."
                }
            ]
        }
    ]
}
