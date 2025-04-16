const URL_PREFIX = "/solar-energy";

export const projectList: { [key: string]: string }[] = [
    {
        title: "Energy Assurance Toolkit - Solar System Maintenance and Cost Assessment Tool",
        link: `${URL_PREFIX}/energy-assurance`,
        description: "A system for calculating the costs and required maintenance for existing solar " +
            "systems, with features for monitoring their technical condition."
    },
    {
        title: "GPP - Global Proposal System",
        link: `${URL_PREFIX}/gpp`,
        description: "A tool for creating proposals for solar installations, including preliminary " +
            "designs, cost and efficiency calculations, and performance forecasts over 25 years. " +
            "Integrates with CRM and ERP systemsy."
    },
    {
        title: "PVFast - Automated Solar Energy System Design Tool",
        link: `${URL_PREFIX}/pv-fast`,
        description: "A tool that automates the process of designing solar energy systems, reducing " +
            "design time and increasing accuracy. This system is mostly used by engineers and Solar " +
            "System designers."
    },
    {
        title: "PVSim - Solar Energy System Simulation Tool",
        link: `${URL_PREFIX}/pv-sim`,
        description: "The system allowing simulation of the work of various elements of solar energy " +
            "systems with prediction of produced power and assessment of work capacity of individual " +
            "elements and the entire solar energy system."
    },
    {
        title: "SMS - Solar Monitoring System",
        link: `${URL_PREFIX}/sms`,
        description: "A monitoring system that tracks the performance of existing solar systems down to " +
            "the component level, ensuring optimal functionality."
    },
    {
        title: "Scientific Collaboration on Solar Models",
        description: "Developed scientific models in close collaboration with researchers to improve " +
            "energy yield forecasting and system optimization."
    },
    {
        title: "Solutions for Solar Startups",
        description: "Provided flexible, cost-effective IT solutions to support the growth of solar " +
            "energy startups, ensuring scalability as their businesses expand."
    }
];