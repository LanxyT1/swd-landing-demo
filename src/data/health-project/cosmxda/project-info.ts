import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "Cloud-Based Solution for Single-Cell Spatial Data Analysis",
    description: "The CosMx™ Spatial Molecular Imager (SMI) is a cloud-based platform developed " +
        "in collaboration with NanoString Corp. and Seattle BioSoftware. This " +
        "tool supports spatial data analysis and profiling for single-cell research, " +
        "providing researchers with a robust infrastructure for processing " +
        "and visualizing large-scale datasets.",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "High-Resolution Analysis",
                    description: "Enables visualization and quantification of thousands of RNA " +
                        "molecules and proteins at cellular and subcellular resolution."
                },
                {
                    title: "Cloud-Based Infrastructure",
                    description: "Provides scalable and secure data processing and storage, " +
                        "ensuring efficient handling of large datasets."
                },
                {
                    title: "Integrated Tools",
                    description: "Includes visualization and analytical features to support " +
                        "workflows in single-cell research."
                }
            ]
        },
        {
            title: "Application",
            list: [
                {
                    description: "Spatial profiling of RNA and protein expression in tissue samples."
                },
                {
                    description: "Identification of biomarkers within the spatial context of cells."
                },
                {
                    description: "Data management for collaborative research projects."
                }
            ]
        },
        {
            title: "Contribution",
            description: "Our team was involved in the development of core features, including",
            list: [
                {
                    description: "Implementing scalable cloud architecture " +
                        "for secure data storage and processing."
                },
                {
                    description: "Developing tools for data visualization " +
                        "and reporting to enhance usability."
                },
                {
                    description: "Integrating algorithms for spatial profiling " +
                        "and analysis."
                }
            ]
        }
    ]
}
