import Task from "./Task";

export default class Board{
    constructor(name){
        this.name = name;
        this.taskList = [];
        this.columnList = [];

        console.log(name);
    }
    newColumn(){

    }
    newTask(){
        taskList.push(new Task);
    }
}