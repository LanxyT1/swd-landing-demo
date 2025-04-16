import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "The Wall - Full-Function Banking System",
    description: "The Wall is a comprehensive banking system designed to provide core functionalities for " +
        "financial institutions. It supports customer management, transaction processing, and financial " +
        "reporting, offering a reliable platform to handle day-to-day banking operations efficiently.",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Customer Management",
                    description: "Maintains customer profiles, account details, and service histories in " +
                        "an organized manner."
                },
                {
                    title: "Transaction Processing",
                    description: "Handles a wide range of transactions, including deposits, withdrawals, " +
                        "transfers, and payments, with precision and speed."
                },
                {
                    title: "Financial Reporting",
                    description: "Generates detailed reports for compliance, operational oversight, and " +
                        "strategic planning."
                },
                {
                    title: "Security and Compliance",
                    description: "Ensures secure data handling and adherence to financial regulations."
                },
                {
                    title: "Scalability",
                    description: "Adapts to the growing needs of financial institutions, supporting " +
                        "expansion and additional services."
                }
            ]
        },
        {
            title: "Applications",
            list: [
                {
                    description: "Daily banking operations for financial institutions."
                },
                {
                    description: "Customer relationship management and service enhancement."
                },
                {
                    description: "Financial performance tracking and regulatory compliance."
                }
            ]
        },
        {
            title: "Impact",
            description: "The Wall simplifies banking processes by integrating essential functions into a " +
                "single system, improving operational efficiency and customer service. Its adaptability " +
                "and secure design make it a reliable choice for banks aiming to streamline their services " +
                "and meet evolving financial demands.",
        }
    ]
}
