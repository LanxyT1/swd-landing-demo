export const OPTION_DEFAULT: string = "FULL_CYCLE";

export const optionList: Array<string> = [
    "FULL_CYCLE",
    "QA",
    "BIG_DATA",
    "ML_AI",
    "WEB_APP",
    "CONSULTING"
];

export const ourServiceList: {[key: string]: { title: string, description: string }} = {
    FULL_CYCLE: {
        title: "Full-Cycle Software Development",
        description: "End-to-end software development services, including business analysis," +
            "UI/UX design, software architecture, coding, quality assurance, deployment, and support"
    },
    QA: {
        title: "Quality Assurance (QA) Services",
        description: "Comprehensive QA services to ensure software reliability," +
            "performance, and compliance with industry standards"
    },
    BIG_DATA: {
        title: "Big Data and Data Analytics",
        description: "Solutions for managing, processing, and analyzing large" +
            "datasets, ensuring data accuracy, performance, and actionable insight"
    },
    ML_AI: {
        title: "Machine Learning & AI Integration",
        description: "Development and integration of AI and machine learning" +
            "models to enhance business processes and decision-making capabilities"
    },
    WEB_APP: {
        title: "Web Application Development",
        description: "Creation of dynamic, responsive, and user-friendly" +
            "web applications, from front-end design to back-end integration"
    },
    CONSULTING: {
        title: "IT Consulting Services",
        description: "Strategic consulting to guide businesses" +
            "through technology selection, project planning, and execution"
    }
};
