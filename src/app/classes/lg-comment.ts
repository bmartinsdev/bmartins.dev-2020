export class LgComment {
    id: string;
    message: string;
    date: Date;

    constructor(comment: any = {}) {
        this.id = comment.id;
        this.message = comment.message || '';
        this.date = comment.date || Date.now;
    }

    serialized() {
        return {
            "message": this.message,
            "date": this.date
        };
    }
}
