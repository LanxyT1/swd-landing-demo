import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "BUKS - Latvian National Railroad Ticketing System",
    description: "BUKS is a ticketing system implemented across all railroad stations in Latvia. " +
        "It allows passengers to purchase tickets for any route from any station, ensuring " +
        "efficient and accessible ticket sales.",
    footer: "BUKS improves ticketing processes while supporting passengers and operational teams with " +
        "streamlined and reliable tools",
    projectSections: [
        {
            title: "Key Features",
            list: [
                {
                    title: "Ticketing Options",
                    description: "Supports various ticket types, including one-time, round-trip, " +
                        "subscription, discount, and complex tickets (e.g., combining train and " +
                        "local public transport routes)."
                },
                {
                    title: "Online Ticketing",
                    description: "Enables ticket purchases via the internet at any time."
                },
                {
                    title: "Information Access",
                    description: "Provides real-time schedules, tariffs, discounts, and ticket " +
                        "availability."
                },
                {
                    title: "Station Operations",
                    description: "Manages platform information displays and integrates with operational " +
                        "systems."
                },
                {
                    title: "System Integration",
                    description: "Connects with other systems like EXPRESS and municipal platforms such " +
                        "as e-Talons."
                },
                {
                    title: "Security",
                    description: "Includes mechanisms to prevent ticket forgery and ensure reliability."
                },
                {
                    title: "Data Management",
                    description: "Offers tools for maintaining schedules, tariffs, and discounts, as well as " +
                        "generating reports and real-time data."
                }
            ]
        },
        {
            title: "Application",
            list: [
                {
                    description: "Facilitates ticket sales across Latvian railroad stations."
                },
                {
                    description: "Provides integrated functionality with other transportation systems."
                },
                {
                    description: "Offers real-time data for operational decision-making."
                }
            ]
        }
    ]
}
