import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "EDI Platform - Electronic Document Exchange and Integration Solution",
    description: "The EDI Platform is a set of integrated tools designed to enable electronic " +
        "document exchange for enterprises in logistics, retail, and wholesale trade. Developed " +
        "in collaboration with Edisoft, the platform simplifies workflows and improves communication " +
        "across different business systems.",
    footer: "This platform addresses the need for consistent and efficient document exchange, supporting " +
        "enterprises in managing their workflows effectively",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Electronic Document Management",
                    description: "Facilitates the receiving, sending, creation, printing, and storage " +
                        "of e-documents using formats like XML, CSV, TXT, PDF, and XLS."
                },
                {
                    title: "Data Synchronization",
                    description: "Aligns product codes and delivery locations between suppliers and " +
                        "retail networks to ensure consistency."
                },
                {
                    title: "Process Automation",
                    description: "Automates document transmission, format conversion, and data processing " +
                        "without user intervention."
                },
                {
                    title: "Security",
                    description: "Supports PGP encryption for secure data exchange."
                },
                {
                    title: "Mobile Access",
                    description: "Includes tools for agents to manage and send orders directly from client " +
                        "locations."
                },
                {
                    title: "Order and Inventory Management",
                    description: "Supports order optimization and Vendor Managed Inventory (VMI)."
                }
            ]
        },
        {
            title: "Solutions in the EDI Platform",
            list: [
                {
                    title: "EDI WEB",
                    description: "Web-based access to the Edisoft platform."
                },
                {
                    title: "EDI CONNECTOR",
                    description: "A SOAP-based solution for exchanging data with external systems."
                },
                {
                    title: "EDI PARSER",
                    description: "Enables integration with financial and ERP systems, such as SAP and " +
                        "Microsoft Dynamics."
                },
                {
                    title: "EDI ARCHIVE",
                    description: "Organizes and stores hard copy and electronic documents for quick " +
                        "retrieval."
                },
                {
                    title: "EDI AGENT",
                    description: "Allows agents to process orders remotely and transmit them directly " +
                        "to the seller’s system."
                },
                {
                    title: "EDI ORDER",
                    description: "Simplifies wholesale trading processes through an internet-based " +
                        "interface."
                },
                {
                    title: "EDI ANALYZER",
                    description: "Provides tools for generating reports, forecasting, and sales comparisons."
                },
                {
                    title: "EDI VENDOR",
                    description: "Streamlines supply chain processes."
                }
            ]
        },
        {
            title: "Applications",
            list: [
                {
                    description: "Enables electronic document exchange for logistics, retail, and " +
                        "wholesale businesses."
                },
                {
                    description: "Simplifies data handling and communication between suppliers, retailers, " +
                        "and logistics operators."
                },
                {
                    description: "Offers tools for data analysis, order management, and process optimization."
                }
            ]
        },
        {
            title: "Impact",
            description: "The EDI Platform reduces manual work, improves data accuracy, and ensures compliance " +
                "with business requirements. Its modular design and ability to integrate with existing systems " +
                "make it practical for a wide range of operational needs.",
        }
    ]
}
