// //////////////////////////////////////TASKS/////////////////////////////////////////////////////////////////
// const input = document.querySelector("input.task");
// const spanTaskNumber = document.querySelector("h1.task span");
// const form = document.querySelector("form");
// const ul = document.querySelector("ul")
// const buttonsLi = [];
// let taskCounter = 0;

// const addTask = (e) => {
//     e.preventDefault();

//     taskCounter++;
//     spanTaskNumber.textContent = taskCounter;

//     const task = input.value;
//     input.value = "";
//     const li = document.createElement("li");
//     li.textContent = task;
//     const buttonLi = document.createElement("button");
//     buttonLi.textContent = "Remove";

//     li.appendChild(buttonLi);
//     ul.appendChild(li);
//     buttonsLi.push(buttonLi);
//     buttonsLi.forEach((btn) => btn.addEventListener("click", removeTask));

// }
// const removeTask = (e) => {
//     taskCounter--;
//     spanTaskNumber.textContent = taskCounter;
//     e.target.parentNode.remove();
// }
// form.addEventListener("submit", addTask);

// ////////////////////////////////////////////searcher////////////////////////////////////////////////////////

// const liWords = document.querySelectorAll("ul.words li");
// const searchInput = document.querySelector("input.search");
// const ulWords = document.querySelector("ul.words");

// const search = (e) => {

//     const searchChunk = e.target.value.toLowerCase();

//     let words = [...liWords];
//     words = words.filter(word => word.textContent.toLowerCase().includes(searchChunk));
//     ulWords.textContent = "";
//     words.forEach((word) => {
//         ulWords.appendChild(word);
//     });

// }

// searchInput.addEventListener("input", search);




