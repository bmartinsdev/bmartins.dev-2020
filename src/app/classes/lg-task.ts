import { LgComment } from './lg-comment';
import { isUndefined } from 'util';

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