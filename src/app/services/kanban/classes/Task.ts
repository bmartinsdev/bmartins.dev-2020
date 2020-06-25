export enum Impact {
    Fix,
    Improvement,
    Major
};

export class LgTask {
    id: string;
    name: string;
    date: Date;
    description: string;
    impact: Impact;
    position: number;
    completion: number;
    section: string;

    constructor(task: any = {}) {
        this.id = task.id;
        this.name = task.name;
        this.impact = task.impact || Impact.Fix;
        this.position = task.position || this.generatePosition("new");
        this.completion = task.completion || 0;

    }

    generatePosition(action?:string, between?:number) {
        switch(action){
            case "new": return 99999;
            case "between": return Math.round(between - ((between - this.position) / 2));
            case "first": return Math.round(this.position - this.position / 17);
            case "last": return Math.round(this.position + this.position / 17);
        }
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