let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');


// Add to dom function 
function addTaskToDom(task){
    const li = document.createElement('li');
    li.innerHTML = `
    <input type="checkbox" id="${task.id}" ${task.done ? "checked" : ''} class="custom-checkbox">
    <label for="${task.id}">${task.text}</label>
    <img src="/img/trash-fill.svg" class="delete" data-id="${task.id}" />
    `;
    taskList.append(li);
}

// render Function
function renderList() {
    taskList.innerHTML = "";
    for(let i = 0; i < tasks.length; i++){
        addTaskToDom(tasks[i]);
    }
    tasksCounter.innerHTML = tasks.length;
}

// Task Complete Task Function
function markTaskAsComplete(taskId) {
    const task = tasks.filter(function (task) {
        return task.id === taskId
    })

    if (task.length > 0) {
        const currentTask = task[0];
        currentTask.done = !currentTask.done;
        renderList();
        showNotification("Task toggled successfully");
        return;
    }
    showNotification("Could not toggle the task");


    // showNotification("Could not toggle the task");

}

// Delete Task function
function deleteTask(taskId) {
    const newTasks = tasks.filter(function (task) {
        return task.id !== taskId;
    });
    tasks = newTasks;
    renderList();
    showNotification("task deleted successfully");
}

// Add task Funtion
function addTask(task) {
    if (task) {
        tasks.push(task);
        renderList();
        showNotification("Task added Successfully");
        return;
    }
    showNotification("Task can not be added");
}

// Show Notification Function
function showNotification(text) {
    alert(text);
}


// addTaskInput.addEventListener('keyup', handleInputKeyPress);
function handleInputKeyPress(e) {
    if (e.key == 'Enter') {
        const text = e.target.value;

        if (!text) {
            showNotification("Task can not be empty");
            return;
        }

        const task = {
            text,
            id: Date.now().toString(),
            done: false
        }

        e.target.value = "";
        addTask(task);
    }
}
function handleClickListener(e){
    const target = e.target;

    if(target.className == 'delete'){
        const taskId = target.dataset.id;
        deleteTask(taskId);
        return;
    }else if(target.className == 'custom-checkbox'){
        const taskId = target.id;
        markTaskAsComplete(taskId);
        return;

    }
}

function initializeApp(){
addTaskInput.addEventListener('keyup', handleInputKeyPress);
document.addEventListener('click', handleClickListener);
}
initializeApp();
