// Config
import config from "../../../next.config";

const pathUrl = `${config.basePath}`
export const partnerList = [
    {
        name: "Seattle BioSoftware",
        logo: `${pathUrl}/partners/seattle-biosoftware-logo.png`,
        link: "https://www.seattlebiosoftware.com/",
        description: "Develops software tools for analyzing and interpreting biological and "
            + "genomic data. Their solutions aim to streamline research workflows, making "
            + "complex data more accessible and actionable for scientists in fields like "
            + "molecular biology, genomics, and bioinformatics."
    },
    {
        name: "SunPower Renewables",
        logo: `${pathUrl}/partners/sunpower-logo.png`,
        link: "https://www.sunpowerglobal.com/int/",
        description: "Company focused on developing sustainable energy solutions, "
            + "specializing in solar-powered off-grid systems. Their innovative products "
            + "provide reliable and clean energy access, particularly in remote areas, "
            + "supporting energy independence and reducing environmental impact."
    },
    {
        name: "Rīgas starptautiskā autoosta",
        logo: `${pathUrl}/partners/autoosta-logo.png`,
        link: "https://www.autoosta.lv/",
        description: "(Riga International Coach Terminal) serves as the central hub for "
            + "regional and international bus transportation in Latvia. It provides a "
            + "convenient and well-connected network of routes, facilitating passenger travel "
            + "within the country and to neighboring regions. The terminal also offers various "
            + "amenities to enhance the travel experience."
    },
    {
        name: "“Baltijas Transporta Informācija” (BTI) Ltd",
        logo: `${pathUrl}/partners/btg.jpg`,
        description: "Our subsidiary company, dedicated to the maintenance and support of the "
            + "nationwide Latvian bus ticketing system “Baltic Lines”, originally developed by "
            + "our team. BTI successfully implemented “Baltic Lines” across all coach terminals "
            + "in Latvia. BTI also holds the intellectual property rights (Certificate No. 159) "
            + "for the innovative electronic cash system “BTI FCS01”. This system enables "
            + "real-time collection and use of financial data from cash systems. Notably, "
            + "“BTI FCS01” is the only solution of its kind currently in Latvia."
    }
];

export const customerList = [
    {
        name: "NanoString Technologies",
        logo: `${pathUrl}/partners/nanostring-logo.png`,
        link: "https://www.nanostring.com/",
        description: "Biotechnology company specializing in the development of innovative tools "
            + "for analyzing gene expression and spatial biology. Their technologies are widely "
            + "used in research to study diseases such as cancer and immune disorders, providing "
            + "precise insights into molecular and cellular processes. NanoString’s platforms support "
            + "both basic research and clinical applications, enabling breakthroughs in genomics "
            + "and proteomics."
    },
    {
        name: "Bristol Myers Squibb (BMS)",
        logo: `${pathUrl}/partners/bms-logo.png`,
        link: "https://www.bms.com/",
        description: "Global biopharmaceutical company dedicated to discovering, developing, and "
            + "delivering innovative medicines that help patients prevail over serious diseases. "
            + "The company focuses on areas such as oncology, immunology, cardiovascular, and "
            + "hematology, contributing significantly to advancements in medical research and "
            + "treatment options."
    },
    {
        name: "The Social Security Administration (SSA)",
        logo: `${pathUrl}/partners/ssa.png`,
        link: "https://www.ssa.gov/",
        smallIcon: true,
        description: "U.S. government agency responsible for administering social insurance "
            + "programs, including retirement, disability, and survivor benefits. The SSA also "
            + "issues Social Security numbers, which are essential for identification and "
            + "accessing various services in the United States."
    },
    {
        name: "The United States Department of Agriculture (USDA)",
        logo: `${pathUrl}/partners/usda.png`,
        link: "https://www.usda.gov/",
        smallIcon: true,
        description: "Federal agency tasked with overseeing and supporting agriculture, "
            + "food safety, and rural development. It provides resources and programs to "
            + "farmers, ensures the quality of the nation’s food supply, and promotes "
            + "sustainable agricultural practices. The USDA also addresses issues like food "
            + "security and nutrition through various initiatives."
    },
    {
        name: "Balloon One",
        logo: `${pathUrl}/partners/balloonone.png`,
        link: "https://balloonone.com/",
        description: "Supply chain technology company that provides software solutions for "
            + "warehouse management, enterprise resource planning (ERP), and transportation "
            + "management. They help businesses optimize logistics, improve operational "
            + "efficiency, and streamline their supply chain processes through tailored "
            + "technology platforms."
    },
    {
        name: "AS Pasažieru vilciens",
        logo: `${pathUrl}/partners/vivi.png`,
        link: "https://www.vivi.lv/lv/",
        smallIcon: true,
        description: "Latvia's primary provider of passenger rail services, offering"
            + "convenient and reliable transportation across the country. The company"
            + "focuses on ensuring accessibility, efficiency, and comfort for daily"
            + "commuters and travelers, contributing to sustainable mobility and regional"
            + "connectivity."
    },
    {
        name: "Kazakhstan Temir Zholy (KTZ)",
        logo: `${pathUrl}/partners/ktz.png`,
        link: "https://railways.kz/en/",
        description: "National railway company of Kazakhstan, managing freight and "
            + "passenger rail transportation across the country and beyond. KTZ plays a "
            + "critical role in connecting Central Asia with international trade routes, "
            + "offering efficient logistics and transit services while supporting "
            + "regional economic development."
    },
    {
        name: "Autotransporta direkcija",
        logo: `${pathUrl}/partners/atd.png`,
        link: "https://www.atd.lv/",
        description: "Latvia's Road Transport Administration, responsible for overseeing "
            + "and regulating public transportation and commercial road transport in the "
            + "country. The agency ensures the development of sustainable, accessible, "
            + "and efficient transport systems while maintaining safety and service "
            + "quality standards."
    },
    {
        name: "Nodarbinātības valsts aģentūra (NVA)",
        logo: `${pathUrl}/partners/nva.png`,
        link: "https://www.nva.iem.gov.lv/lv",
        smallIcon: true,
        description: "State Employment Agency of Latvia, provides support for job seekers "
            + "and employers through various employment services and programs. The agency "
            + "focuses on reducing unemployment, facilitating professional development, "
            + "and ensuring a well-functioning labor market in Latvia."
    },
    {
        name: "Digital Health Lab (DHLAB)",
        logo: `${pathUrl}/partners/dhlab.png`,
        link: "https://www.dhlab.com/",
        description: "Specializes in developing innovative software and technology "
            + "solutions for the healthcare industry. Their focus is on creating tools "
            + "that improve patient care, streamline clinical workflows, and enhance "
            + "data-driven decision-making in medical environments."
    },
    {
        name: "Credo Autoprieks",
        logo: `${pathUrl}/partners/credo.png`,
        link: "https://credoautoprieks.lv/",
        description: "Latvian driving school offering comprehensive training "
            + "programs for obtaining various types of driver’s licenses. They "
            + "provide theoretical and practical lessons tailored to individual "
            + "needs, ensuring high-quality education and preparation for safe driving."
    }
];
