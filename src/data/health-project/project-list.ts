const URL_PREFIX = "/health-project";

export const projectList: {[key: string]: string}[] = [
    {
        title: "Cloud-Based Solution for Single-Cell Spatial Data Analysis",
        link: `${URL_PREFIX}/cosmxda`,
        description: "Developed for Nanostring Corp. in collaboration with Seattle BioSoftware, " +
            "this first-in-class cloud solution enables spatial data analysis and profiling for " +
            "single-cell research."
    },
    {
        title: "DSPDA - Digital Spatial Profiling Data Analysis Software",
        link: `${URL_PREFIX}/dspda`,
        description: "A specialized software solution for a first-in-class spatial profiling microscope, " +
            "developed together with Seattle BioSoftware for Nanostring Corp., enabling advanced data " +
            "analysis in microscopy."
    },
    {
        title: "PDX and NGX Portals – Laboratory Information Management Systems (LIMS)",
        link: `${URL_PREFIX}/pdx-ngx`,
        description: "A system for managing, searching, and analyzing large experimental datasets, " +
            "including RNA and Protein expressions, pathways, mutations, etc., developed with Seattle " +
            "BioSoftware. It supports tens of thousands of samples and enhances research efficiency for " +
            "PDX and other experimental models."
    },
    {
        title: "REDDA - Research Data Ingestion and Organization Tool",
        link: `${URL_PREFIX}/redda`,
        description: "A tool developed for Celgene Corporation in collaboration with Seattle BioSoftware, " +
            "allowing ingestion, annotation, and organization of research data, streamlining scientific " +
            "workflows."
    },
    {
        title: "RDC - Research Data Commons Platform",
        link: `${URL_PREFIX}/rdc`,
        description: "Developed for Bristol Myers Squibb (BMS) with Seattle BioSoftware, this platform " +
            "aggregates data from various sources, making it accessible and useful for researchers. The RDC " +
            "provides a fast, convenient way to integrate data from multiple systems."
    },
    {
        title: "Europa DX - Research Data Management and Analytical SaaS Platform",
        link: `${URL_PREFIX}/europa-dx`,
        description: "A highly customizable, multi-tenant platform for research data management and " +
            "analysis, with SWD Factory responsible for Large Language Model (LLM) training, project " +
            "management, and quality assurance. Developed in collaboration with Seattle BioSoftware."
    },
];