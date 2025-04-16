import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "TOKS - Coach Terminal Management and Ticketing System",
    description: "TOKS is an internet-based system designed for Lithuanian company TOKS UAB, a " +
        "leading coach operator and owner of the Vilnius coach terminal. The system manages terminal " +
        "operations and ticket sales, providing a comprehensive solution for both passengers and " +
        "terminal staff.",
    footer: "TOKS is a comprehensive platform that supports the needs of passengers, terminal staff, " +
        "and coach operators, ensuring smooth and effective management of transportation services.",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Ticketing Options",
                    description: "Supports the sale of various ticket types, including transit, " +
                        "round-trip, one-way, and complex tickets with connections."
                },
                {
                    title: "Online and Terminal Sales",
                    description: "Enables ticket purchases via the internet or special ticket terminals."
                },
                {
                    title: "Operational Control",
                    description: "Tracks actual bus arrival and departure times, ensuring schedule " +
                        "accuracy."
                },
                {
                    title: "Data Management",
                    description: "Maintains information on routes, schedules, bus stops, tariffs, " +
                        "and bus models."
                },
                {
                    title: "Flexible Discounts",
                    description: "Allows management of discounts for passengers and promotional campaigns."
                },
                {
                    title: "Reporting Tools",
                    description: "Offers a wide range of reports for operational and financial analysis."
                },
                {
                    title: "Multi-Currency Support",
                    description: "Handles transactions in various currencies."
                },
                {
                    title: "Ticket Flexibility",
                    description: "Allows ticket exchanges to alternative dates."
                },
                {
                    title: "Integration",
                    description: "Works with other systems, including the BalticLines System, for " +
                        "seamless operations."
                }
            ]
        },
        {
            title: "Application",
            list: [
                {
                    description: "Ticket sales and management for coach terminals and operators."
                },
                {
                    description: "Operational oversight of bus schedules, routes, and terminals."
                },
                {
                    description: "Enhanced customer service through flexible sales channels and ticketing " +
                        "ourServiceList."
                }
            ]
        },
        {
            title: "Impact",
            description: "TOKS has improved the efficiency of terminal operations and ticket sales by " +
                "reducing costs and increasing service quality. The system provides passengers with " +
                "convenient ourServiceList for purchasing tickets, while operators benefit from better control " +
                "over terminal activities and financial management.",
        }
    ]
}
