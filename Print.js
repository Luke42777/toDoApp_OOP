class Print {
    constructor() {
        
        this.tasks = new Tasks();
        this.input = document.querySelector("input.task");
        this.spanTaskNumber = document.querySelector("h1.task span");
        this.form = document.querySelector("form");
        this.ul = document.querySelector("ul");
        this.form.addEventListener("submit",this.start.bind(this));
        // this.buttonsLi = [];
        // this.taskCounter = 0;
        this.render();
    }

    render(tasks = []){
  
        this.spanTaskNumber.textContent = this.tasks.taskCounter;
        for(let i = 0; i < tasks.length;i++){
            const task = tasks[i];
            const li = document.createElement("li");
            li.textContent = task;
            this.ul.appendChild(li);
        }

    }
    start(e){
        e.preventDefault();// don't need to refresh site after form submisssion
        this.tasks.taskCounter++;
        const inputValue = new Input(this.input.value);
        this.input.value = ""; 
        
        
        this.tasks.clearTasks();
        
        this.tasks.addTask(inputValue.getInputValue());
        
        
        this.render(this.tasks.getTasks())

    }

};

const print = new Print();


