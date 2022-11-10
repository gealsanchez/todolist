import './style.css';
import imgplus from './images/plus.svg';
import imgreload from './images/reload.svg';
import imgtrash from './images/trash.svg';

const reloadDiv = document.querySelector('.reload');
const myReload = new Image();
myReload.src = imgreload;
reloadDiv.appendChild(myReload);

const plusDiv = document.querySelector('.plus');
const myPlus = new Image();
myPlus.src = imgplus;
plusDiv.appendChild(myPlus);

const myTrash = new Image();
myTrash.src = imgtrash;

class Schedule {
  static displayTasks() {
    const taskSchedule = [
      {
        index: 1,
        description: 'Write Lecture',
        completed: false,
      },
      {
        index: 2,
        description: 'Write Letter',
        completed: false,
      },
    ];

    const tasks = taskSchedule;

    tasks.forEach((task) => Schedule.addTaskToList(task));
  }

  static addTaskToList(task) {
    const list = document.querySelector('.task-list');
    const row = document.createElement('div');
    row.appendChild(myTrash);
    row.draggable = true;
    row.style.display = 'flex';
    row.style.justifyContent = 'space-between';
    row.style.borderBottom = '2px';

    row.innerHTML = `
      <input type="checkbox" id="check">
      <p>${task.description}</p>
      <img class="remove" src="${imgtrash}" alt="reload">
      `;
    list.appendChild(row);
  }
}

document.addEventListener('DOMContentLoaded', Schedule.displayTasks);
