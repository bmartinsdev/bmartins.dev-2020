import { LgComment } from './lg-comment';

export class LgTask {
    id: string;
    title: string;
    section: string;
    separator: boolean;
    description: string;
    position: number;
    completion: number;
    date: Date;
    comments: LgComment[];

    constructor(task: any = {}) {
        this.id = task.id;
        this.title = task.title || '';
        this.section = task.section;
        this.separator = task.separator || false;
        this.description = task.description || '';
        this.position = task.position || 0;
        this.completion = task.completion || 0;
    }

    serialized() {
        if(this.separator){
            return {
                "title": this.title,
                "position": this.position,
                "section": this.section,
                "separator": this.separator
            };
        }
        return {
            "title": this.title,
            "description": this.description,
            "position": this.position,
            "section": this.section,
            "completion": this.completion,
            "separator": this.separator
        };
    }
}