const todoList = document.getElementById('todo-list');
const addTaskButton = document.getElementById('add-task-btn');
const newTaskInput = document.getElementById('new-task');

addTaskButton.addEventListener('click', () => {
  const newTask = newTaskInput.value.trim();
  if (newTask) {
    const listItem = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.addEventListener('change', () => {
      listItem.classList.toggle('completed');
    });
    listItem.appendChild(checkbox);
    const taskLabel = document.createElement('label');
    taskLabel.innerText = newTask;
    listItem.appendChild(taskLabel);
    todoList.appendChild(listItem);
    newTaskInput.value = '';
  }
});
