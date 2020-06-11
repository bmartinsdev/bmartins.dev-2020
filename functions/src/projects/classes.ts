// Project interface
export interface Project {
    name: string,
    date: Date,
    description: string,
    imgLink: string,
    url: string,
    repo: string,
    hex: string
};

// Task interface
export interface Task {
    id: string,
    data: {
        name: string,
        date: Date,
        description: string,
        impact: Impact,
        position: number,
        completion: number,
        projectId: string,
        projectName: string,
        projectHex: string,
        section: string
    }
};

// Impact of current task on project for changelog calculation
export enum Impact {
    Fix,
    Improvement,
    Major
};