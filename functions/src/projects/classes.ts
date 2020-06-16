// Project interface
export class Project {
    id: string;
    name: string;
    date?: Date;
    description?: string;
    imgLink?: string;
    url?: string;
    repo?: string;
    hex?: string;
    private?: boolean;
    deleted?: boolean;

    constructor(project: any = {}) {
        this.id = project.id;
        this.name = project.name;
        if(project.date) this.date = project.date;
        if(project.description) this.description = project.description;
        if(project.imgLink) this.imgLink = project.imgLink;
        if(project.url) this.url = project.url;
        if(project.repo) this.repo = project.repo;
        if(project.hex) this.hex = project.hex;
        if(project.private) this.private = project.private;
    }

    save() {
        const { id, ...project } = this;
        return project;
    }
};

// Task interface
export class Task {
    id: string;
    name: string;
    date?: Date;
    description?: string;
    impact?: Impact;
    position?: number;
    completion?: number;
    projectId?: string;
    projectName?: string;
    projectHex?: string;
    section?: string;

    constructor(task: any = {}) {
        this.id = task.id;
        this.name = task.name;
        if(task.date) this.date = task.date;
        if(task.description) this.description = task.description;
        if(task.impact) this.impact = task.impact;
        if(task.position) this.position = task.position;
        if(task.completion) this.completion = task.completion;
        if(task.projectId) this.projectId = task.projectId;
        if(task.projectName) this.projectName = task.projectName;
        if(task.projectHex) this.projectHex = task.projectHex;
        if(task.section) this.section = task.section;
    }

    save() {
        const { id, ...task } = this;
        return task;
    }
};

// Impact of current task on project for changelog calculation
export enum Impact {
    Fix,
    Improvement,
    Major
};