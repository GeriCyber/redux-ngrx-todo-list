export class Todo {
    id: number;
    text: string;
    complete: boolean;

    constructor(text: string) {
        this.text = `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
        this.complete = false;
        this.id = Math.random();
    }
}
