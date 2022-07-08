
export class QuillEvent {
    private delta:string;
    private html:string;

    constructor(delta:string,html:string){
        this.delta=delta;
        this.html=html;
    }
}
