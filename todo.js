let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');


// render Function
function renderList() { }

// Task Complete Task Function
function markTaskAsComplete(taskId) {
    
}

// Delete Task function
function deleteTask(taskId) {
    const newTasks = tasks.filter(function(task){
        return task.is !== taskID;
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

function handleInputKeyPress(e) {
    if (e.key === 'Enter') {
        const text = e.target.value;
    }
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
addTaskInput.addEventListener('keyup', handleInputKeyPress);
