import { LgTask } from './Task';

export class LgSection {
    id: string;
    name: string;
    position: number;
    tasks: LgTask[];

    constructor(section: any = {}) {
        if(section.id) this.id = section.id;
        this.name = section.content.name || '';
        this.position = section.content.position || 0;
    }

    serialized() {
        return {
            "name": this.name,
            "position": this.position
        };
    }
}
