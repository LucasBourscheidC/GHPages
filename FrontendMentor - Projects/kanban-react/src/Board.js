import Task from "./Task";

export default class Board{
    constructor(name){
        this.name = name;
        this.taskList = [];
        this.columnList = [];
        this.nextTaskId = 0;
    }
    newColumn(){

    }
    createTask(title, description, category){
        this.taskList.push(new Task(this.nextTaskId, title, description, category));
        this.nextTaskId += 1;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name = name;
    }
    getTasks(){
        return this.taskList;
    }
}