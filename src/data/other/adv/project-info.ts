import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "ADV Noliktava - Warehouse Management System",
    description: "ADV Noliktava is a warehouse management system designed to optimize inventory control, " +
        "stock tracking, and logistics operations. Developed to meet the specific needs of Latvian " +
        "national customs, the system ensures efficient and compliant warehouse management processes.",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Inventory Control",
                    description: "Tracks stock levels in real time, ensuring accurate and up-to-date " +
                        "inventory records."
                },
                {
                    title: "Stock Management",
                    description: "Provides tools for managing incoming, outgoing, and stored goods."
                },
                {
                    title: "Logistics Oversight",
                    description: "Monitors warehouse logistics, including goods movement, storage " +
                        "allocation, and dispatch schedules."
                },
                {
                    title: "Customs Integration",
                    description: "Aligns with customs requirements, facilitating compliance and streamlined " +
                        "documentation."
                },
                {
                    title: "Reporting and Analysis",
                    description: "Generates detailed reports on stock levels, warehouse utilization, and " +
                        "operational efficiency."
                },
                {
                    title: "User Access",
                    description: "Supports multiple user roles, ensuring secure and role-specific access to " +
                        "warehouse data."
                }
            ]
        },
        {
            title: "Applications",
            list: [
                {
                    description: "Management of inventory for warehouses under customs regulation."
                },
                {
                    description: "Optimization of goods flow and storage logistics."
                },
                {
                    description: "Real-time tracking and reporting to improve operational efficiency."
                }
            ]
        },
        {
            title: "Impact",
            description: "ADV Noliktava simplifies warehouse operations by centralizing inventory management " +
                "and aligning processes with regulatory requirements. It improves accuracy, reduces manual work, " +
                "and supports efficient logistics, making it an essential tool for customs-related warehouse " +
                "management.",
        }
    ]
}
