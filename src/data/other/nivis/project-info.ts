import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "Nivis - Real Estate Management System",
    description: "Nivis is a comprehensive solution designed to simplify real estate management by " +
        "integrating tools for property administration, tenant oversight, and contract handling. It " +
        "streamlines day-to-day operations, enabling efficient and transparent management of real " +
        "estate assets.",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Property Management",
                    description: "Centralized management of property details, " +
                        "including units, maintenance schedules, and occupancy status."
                },
                {
                    title: "Tenant Oversight",
                    description: "Tracks tenant information, payment histories, " +
                        "and communication records to ensure smooth relationships and accountability."
                },
                {
                    title: "Contract Management",
                    description: "Facilitates the creation, storage, and tracking " +
                        "of rental agreements, lease renewals, and related documentation."
                },
                {
                    title: "Financial Management",
                    description: "Manages payments, invoices, and expense tracking, " +
                        "providing clear financial oversight."
                },
                {
                    title: "Reporting Tools",
                    description: "Generates reports on occupancy rates, payment trends, " +
                        "and property performance for better decision-making."
                },
                {
                    title: "Integration Capabilities",
                    description: "Connects with accounting and payment systems " +
                        "for seamless operations."
                }
            ]
        },
        {
            title: "Applications",
            list: [
                {
                    description: "Property management for residential, commercial, or mixed-use properties."
                },
                {
                    description: "Oversight of tenant interactions and financial transactions."
                },
                {
                    description: "Simplification of contract handling and compliance tracking."
                }
            ]
        },
        {
            title: "Impact",
            description: "Nivis enhances efficiency in real estate management by consolidating essential " +
                "functions into one system. It reduces administrative burdens, improves communication with " +
                "tenants, and provides actionable insights through reporting. With Nivis, property managers " +
                "can focus on growth and maintaining high-quality service.",
        }
    ]
}
