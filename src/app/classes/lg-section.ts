import { LgTask } from './lg-task';

export class LgSection {
    id: string;
    title: string;
    position: number;
    tasks: LgTask[];

    constructor(section: any = {}) {
        if(section.id) this.id = section.id;
        this.title = section.title || '';
        this.position = section.position || 0;
    }

    serialized() {
        return {
            "title": this.title,
            "position": this.position
        };
    }
}
