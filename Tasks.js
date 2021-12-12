class Tasks{
    constructor(){
        this.taskCounter = 0;
        this.tasksList = [];
    }

    addTask(input){
        this.tasksList.push(input);
    }
    clearTasks(){
        this.tasksList.length = 0;
    }
    removeTask(index){
        this.tasksList.remove(index);

    }
    getTask(index){
        return this.tasksList[index];
    }
    getTasks(){
        return this.tasksList;
    }


}

