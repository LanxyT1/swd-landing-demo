import {ProjectInfo} from "@/types/project-info-list";

export const projectInfo: ProjectInfo = {
    title: "AWO - Distribution Channel Management System",
    description: "Internet solution for suppliers, developed for simplifying, increasing speed and" +
        " optimization of business processes with multiple partners.",
    projectSections: [
        {
            title: "Main functionalities",
            list: [
                {
                    description: "Forming and conducting product catalog with unlimited number of price " +
                        "range for different kinds of business partners."
                },
                {
                    description: "Creating and managing discounts and special offers, oriented to a defined " +
                        "business partner, or defined category of business partners."
                },
                {
                    description: "Managing orders and shippings."
                },
                {
                    description: "Publishing special news for business partners."
                },
                {
                    description: "Number of simple and effective ways to form an order for business partners."
                },
                {
                    description: "'Smart' product search."
                },
                {
                    description: "List of frequently bought items."
                },
                {
                    description: "'Quick order' form."
                },
                {
                    description: "Creating new orders on the basis of the old one."
                },
                {
                    description: "Reoccurring order."
                },
                {
                    description: "Ability to edit or cancel order via Internet."
                },
                {
                    description: "Automatic notice on orders’ status change via email or sms."
                },
                {
                    description: "Ability to follow order via Internet."
                },
                {
                    description: "Availability of users’ order history through Internet for every business partner."
                },
                {
                    description: "Integrated with SAP BO, Microsoft Dynamics NAV, 1C."
                }
            ]
        },
        {
            title: "Benefits for supplier",
            list: [
                {
                    description: "Decrease of order processing cost."
                },
                {
                    description: "Acceleration of new product launch to the market."
                },
                {
                    description: "Acceleration of business processes."
                },
                {
                    description: "Flexible discount and prices system."
                },
                {
                    description: "Liberation of the personnel and decrease in an overhead charge for maintenance " +
                        "of process of deliveries."
                }
            ]
        },
        {
            title: "Benefits for partner",
            list: [
                {
                    description: "Ability to follow whole purchasing process."
                },
                {
                    description: "Order forming in real time."
                },
                {
                    description: "Tracing order status."
                },
                {
                    description: "Access to order archive for analysis and/or forming new orders."
                }
            ]
        },
        {
            title: "Specifics",
            description: "The system is realized as multi-level Java application, developed in accordance with " +
                "industrial Java architecture (Java 2 Enterprise Edition – J2EE), for relational Data Base " +
                "Management System ORACLE under management of ОS Linux.",
        }
    ]
}
