import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "Europa DX - Research Data Management and Analytical SaaS Platform",
    description: "Europa DX is a flexible, multi-tenant software-as-a-service (SaaS) " +
        "platform designed for research data management and analysis. Developed in " +
        "collaboration with Seattle BioSoftware, the platform provides a customizable " +
        "solution for handling complex datasets and enabling advanced analytics. " +
        "SWD Factory actively participated in its development, with contributions " +
        "focused on training Large Language Models (LLMs), project management, " +
        "quality assurance, and platform enhancement.",
    footer: "Europa DX provides researchers with a robust and adaptable environment for " +
        "managing and analyzing research data, streamlining workflows, and supporting " +
        "data-driven discoveries.",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Customizable Platform",
                    description: "Tailored to meet diverse research needs across multiple " +
                        "tenants, supporting unique workflows and data requirements."
                },
                {
                    title: "Advanced Data Analytics",
                    description: "Integrates analytical tools for processing complex datasets, " +
                        "including capabilities for machine learning and statistical analysis."
                },
                {
                    title: "Multi-Tenant Architecture",
                    description: "Supports multiple users or organizations within a single " +
                        "platform, ensuring data separation and security."
                }
            ]
        },
        {
            title: "Application",
            list: [
                {
                    description: "Management of research data across multiple projects and teams."
                },
                {
                    description: "Deployment of advanced analytical workflows " +
                        "for diverse scientific research."
                },
                {
                    description: "Use of LLMs for data interpretation and text-based analysis."
                }
            ]
        },
        {
            title: "Contribution",
            description: "SWD Factory was actively involved in the development " +
                "of Europa DX, contributing through:",
            list: [
                {
                    description: "Training and integrating Large Language Models to enhance the " +
                        "platform’s analytical and interpretative capabilities."
                },
                {
                    description: "Designing and implementing core features for research " +
                        "data management and analytical workflows."
                },
                {
                    description: "Leading project management efforts to ensure the platform " +
                        "met its technical and functional requirements."
                },
                {
                    description: "Establishing quality assurance processes to guarantee " +
                        "platform reliability and performance."
                }
            ]
        }
    ]
}
