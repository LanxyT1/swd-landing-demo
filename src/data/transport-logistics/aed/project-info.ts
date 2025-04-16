import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "AED Portal - Transportation and Document Registration System",
    description: "The AED Portal is a comprehensive solution designed to facilitate the " +
        "registration of transportation and commercial documents with real-time automated " +
        "control of data. Developed in collaboration with AED Rail Service, it ensures compliance " +
        "with railroad regulations, customs authorities, and other control entities. The system " +
        "integrates with railroad information networks, preliminary declaration systems, and customs " +
        "registration platforms, providing a seamless and efficient workflow.",
    footer: "The system enhances operational efficiency for transportation and customs-related " +
        "processes, making it a valuable tool for rail logistics management.",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Document Management",
                    secondaryList: [
                        "Create, edit, review, and validate transportation and commercial documents, " +
                        "including SMGS waybills, road sheets, invoices, and specifications.",
                        "Automatically update and maintain a database of rules and regulations to " +
                        "ensure compliance.",
                        "Print transportation documents using Adobe Acrobat Reader."
                    ]
                },
                {
                    title: "Data Integration and Transmission",
                    secondaryList: [
                        "Facilitate data transmission for customs registration and integration with " +
                        "other information networks.",
                        "Provide automatic control over the transmission and update process.",
                        "Enable data sharing and editing between users within the same organization."
                    ]
                },
                {
                    title: "Search and Reporting",
                    secondaryList: [
                        "Perform contextual searches within rules and regulations databases and personal " +
                        "archives.",
                        "Search across multiple languages, allowing queries in Latin or Cyrillic alphabets.",
                        "Generate statistical reports on completed transportations."
                    ]
                },
                {
                    title: "User Support",
                    secondaryList: [
                        "Manage personal archives for users and provide tailored access to data.",
                        "Offer 24/7 online consultations for assistance."
                    ]
                }
            ]
        },
        {
            title: "Application",
            list: [
                {
                    description: "Registration and compliance for transportation and commercial documents " +
                        "in railroad logistics."
                },
                {
                    description: "Integration with customs systems for cargo registration and preliminary " +
                        "declarations."
                },
                {
                    description: "Data management and reporting for transport operators and regulatory bodies."
                }
            ]
        },
        {
            title: "Impact",
            description: "The AED Portal simplifies the process of document preparation and ensures compliance " +
                "with regulatory requirements. It reduces errors through automated checks, streamlines " +
                "communication between entities, and supports users with round-the-clock assistance.",
        }
    ]
}
