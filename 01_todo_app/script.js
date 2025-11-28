const todoInput = document.querySelector("#todo-input")
const addtaskBtn = document.querySelector("#add-task-btn")
const todoLists = document.querySelector("#todo-list")

let tasks = []

function addTask(e) {
    const taskText = todoInput.value.trim()
    if (taskText == "") alert("Please enter something");

    const newTask = {
        id: Date.now(),
        text: taskText,
        completed: false
    }

    tasks.push(newTask);
    todoInput.value = "";
    console.log(tasks)
}

addtaskBtn.addEventListener('click', addTask)