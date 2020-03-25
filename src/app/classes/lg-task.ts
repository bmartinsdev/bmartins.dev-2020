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
        this.position = task.position || 0;
        this.completion = task.completion || 0;
    }

    generatePosition(action?:string) {
        switch(action){
            case "new": return this.randomNumberBetween(9999,99999);
            case "before": return this.randomNumberBetween(this.position-99, this.position-1);
            case "last": return this.randomNumberBetween(this.position + 1, this.position + 99);
        }
    }

    randomNumberBetween(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
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