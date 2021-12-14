class Print {
    constructor() {
        //task section
        this.tasks = new Tasks();
        this.input = document.querySelector("input.task");
        this.spanTaskNumber = document.querySelector("h1.task span");
        this.form = document.querySelector("form");
        this.ul = document.querySelector("ul");
        //search section
        this.liWords = document.querySelectorAll("ul.words li");
        this.searchInput = document.querySelector("input.search");
        this.ulWords = document.querySelector("ul.words");
        this.form.addEventListener("submit", this.start.bind(this));
        this.searchInput.addEventListener("input", this.startSearch.bind(this));
        this.renderTasks();

    }

    remove(e, index) {
        this.tasks.removeTask(index);
        this.tasks.taskCounter--;
        this.spanTaskNumber.textContent = this.tasks.taskCounter;

        e.target.parentNode.remove();
    }

    renderTasks(tasks = []) {
        this.ul.textContent = "";
        this.spanTaskNumber.textContent = this.tasks.taskCounter;
        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            const li = document.createElement("li");
            li.textContent = task;
            const btn = document.createElement("button");
            btn.classList.add("delete");
            btn.textContent = "Remove";
            li.appendChild(btn);
            this.ul.appendChild(li);
        }
        this.btns = document.querySelectorAll(".delete");
        [...this.btns].forEach((btn, index) => {
            btn.addEventListener("click", this.remove.bind(this));
        })
    }

    start(e) {
        e.preventDefault();
        this.tasks.taskCounter++;
        this.spanTaskNumber.textContent = this.tasks.taskCounter;
        const inputValue = new Input(this.input.value);
        this.input.value = "";
        this.tasks.addTask(inputValue.getInputValue());

        this.renderTasks(this.tasks.getTasks())
    }
    startSearch() {
        const search = new Search(this.searchInput.value, this.liWords, this.ulWords);
        search.filterWords();
    }

};




