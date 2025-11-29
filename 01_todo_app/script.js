document.addEventListener('DOMContentLoaded', () => {
    const todoInput = document.querySelector("#todo-input")
    const addtaskBtn = document.querySelector("#add-task-btn")
    const todoLists = document.querySelector("#todo-list")

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach(task => renderTask(task));

    function addTask() {
        const taskText = todoInput.value.trim()
        if (taskText == "") return;

        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        }

        tasks.push(newTask);
        saveTasks();
        todoInput.value = "";
        console.log(tasks)
    }

    function renderTask(task) {
        const li = document.createElement('li')
        li.setAttribute('data-id', task.id)

        if (task.complited) li.classList.add('complited')
        li.innerHTML = `
            <span>${task.text}</span>
            <button>delete</button>
        `;

        li.addEventListener('click', (e) => {
            if(e.target.tagName == 'BUTTON') return;
            task.complited = !task.completed;
            li.classList.toggle('complited')
            saveTasks()
        });

        li.querySelector('button').addEventListener('click', (e) => {
            e.stopPropagation() // prevent toggle from firing
            tasks = tasks.filter(t => t.id !== task.id)
            li.remove();
            saveTasks()
        })

        todoLists.appendChild(li);
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }


    addtaskBtn.addEventListener('click', addTask)
})