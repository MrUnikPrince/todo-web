let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');


// render Function
function renderList() { }

// Task Complete Task Function
function markTaskAsComplete(taskId) {
    const task = tasks.filter(function (task) {
        return taskID === taskId
    })

    if (task.length > 0) {
        const currentTask = task[0];
        currentTask.done = !currentTask.done;
        renderList();
        showNotification("Task toggled successfully");
        return;
    }

    showNotification("Could not toggle the task");

}

// Delete Task function
function deleteTask(taskId) {
    const newTasks = tasks.filter(function (task) {
        return task.id !== taskID;
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
addTaskInput.addEventListener('keyup', handleInputKeyPress);
