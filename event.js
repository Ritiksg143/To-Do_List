function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() === '') {
        alert('Please enter a task.');
        return;
    }

    var li = document.createElement('li');
    li.textContent = taskInput.value;
    taskList.appendChild(li);

    var deleteButton = document.createElement('span');
    deleteButton.textContent = ' ❌';
    deleteButton.classList.add('delete');
    deleteButton.onclick = function() {
        li.remove();
    };
    li.appendChild(deleteButton);

    taskInput.value = '';
}
