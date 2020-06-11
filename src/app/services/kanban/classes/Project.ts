export class Project {
    id: string;
    name: string;
    date: Date;
    description: string;
    impact: Impact;
    position: number;
    completion: number;
    project: Project;
    section: string;

    constructor(task: any = {}) {
        this.id = task.id;
        this.name = task.name;
        this.impact = task.impact || Impact.Fix;
        this.position = task.position || this.generatePosition("new");
        this.completion = task.completion || 0;
        this.project = task.project;

    }

    serialized() {
        return {
            "name": this.name,
            "description": this.description,
            "position": this.position,
            "section": this.section,
            "completion": this.completion
        };
    }
}