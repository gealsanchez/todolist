import Storage from './classStorage.js';
import imgtrash from '../images/trash.svg';

const myTrash = new Image();
myTrash.src = imgtrash;

class Schedule {
  static displayTasks() {
    const tasks = Storage.getTasks();
    tasks.forEach((task) => Schedule.addTaskToList(task));
  }

  static addTaskToList(task) {
    const list = document.querySelector('.task-list');

    const row = document.createElement('div');
    row.appendChild(myTrash);
    row.draggable = true;
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';

    row.innerHTML = `
        <input type="checkbox" class="check">
        <p class='description' title='Click to edit'>${task.description}</p>
        <span>${task.code}</span>
        <img class="delete" src="${imgtrash}" alt="remove">
        `;
    list.appendChild(row);
  }

  static deleteTask(taskRow) {
    if (taskRow.classList.contains('delete')) {
      taskRow.parentElement.remove();
    }
  }

  static clearInput() {
    document.querySelector('#task-value').value = '';
  }
}

export default Schedule;