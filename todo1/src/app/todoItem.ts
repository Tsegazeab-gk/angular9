export class TodoItem {
   

    constructor(taskValue: string, completeVal:boolean=false){
        this.task=taskValue;
        this.complete=completeVal;
    }
    task: string;
    complete: boolean;
}
