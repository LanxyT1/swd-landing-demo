import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "BalticLines System - Intercity and International Coach Transportation Management Tool",
    description: "Web-based system designed to manage and administer the economic and informational " +
        "relationships between all participants involved in intercity and international coach " +
        "transportation. It serves bus terminals, coach operators, ticket agencies, and passengers, " +
        "streamlining operations and improving service quality. Initially developed for the Riga " +
        "International Bus Terminal, BalticLines has grown into a nationwide system used by all Latvian " +
        "bus terminals and integrated with external carrier and ticketing systems to support seamless operations.",
    footer: "BalticLines is a comprehensive solution that supports the efficient management of " +
        "intercity and international coach transportation, ensuring improved service for operators " +
        "and passengers alike.",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Centralized Ticketing",
                    description: "Enables ticket sales for any route registered in the system, " +
                        "accessible at all connected terminals."
                },
                {
                    title: "Online Services",
                    description: "Offers real-time schedule information and online ticket purchasing " +
                        "capabilities."
                },
                {
                    title: "Operational Management",
                    description: "Includes tools for managing routes, schedules, bus stops, tariffs, and " +
                        "discounts."
                },
                {
                    title: "Data Integration",
                    description: "Facilitates integration with external systems for ticket sales and " +
                        "operational management."
                },
                {
                    title: "Comprehensive Reporting",
                    description: "Generates detailed reports for operational and financial analysis."
                }
            ]
        },
        {
            title: "Application",
            list: [
                {
                    description: "Administration of ticket sales across intercity and international routes."
                },
                {
                    description: "Management of operational and financial activities for bus terminals and " +
                        "coach operators."
                },
                {
                    description: "Real-time data access and enhanced passenger services through online " +
                        "platforms."
                }
            ]
        },
        {
            title: "Impact",
            description: "BalticLines has significantly improved the efficiency and quality of bus terminal " +
                "operations. It reduces ticket sales costs, enhances service quality, and provides reliable data " +
                "for statistical analysis. Passengers benefit from 24/7 access to schedules and the convenience " +
                "of online ticket purchases.",
        }
    ]
}
