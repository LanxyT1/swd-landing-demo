export interface ProjectInfo {
    title: string;
    description: string;
    projectSections: ProjectSection[];
    footer?: string;
}

export interface ProjectSection {
    title: string;
    list?: ListStructure[];
    description?: string;
}

export interface ListStructure {
    description?: string;
    title?: string;
    secondaryList?: string[];
}
