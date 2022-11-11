import Schedule from './module/classSchedule.js';
import Storage from './module/classStorage.js';
import Task from './module/classTask.js';
import './style.css';
import imgplus from './images/plus.svg';
import imgreload from './images/reload.svg';
import imgpencil from './images/pencil.svg';

const myPencil = new Image();
myPencil.src = imgpencil;
myPencil.className = 'stop';

const reloadDiv = document.querySelector('.reload');
const myReload = new Image();
myReload.src = imgreload;
reloadDiv.appendChild(myReload);

const plusDiv = document.querySelector('.plus');
const myPlus = new Image();
myPlus.src = imgplus;
plusDiv.appendChild(myPlus);

// event display tasks

document.addEventListener('DOMContentLoaded', Schedule.displayTasks);

// event add a task

myPlus.addEventListener('click', () => {
  const tasktext = document.querySelector('#task-value').value; // get value
  const code = Storage.getTasks().length + 1;
  const task = new Task(code, tasktext, false); // create the object
  Schedule.addTaskToList(task); // add task to the screen list
  Storage.addTask(task); // Add task to the storage
  Schedule.clearInput();
});

// event remove a task
document.querySelector('.task-list').addEventListener('click', (e) => {
  if (e.target.classList.contains('stop')) {
    return;
  }

  if (e.target.classList.contains('description')) {
    const targetcode = e.target.nextElementSibling.textContent;
    const editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    editInput.style.width = '80%';
    editInput.style.marginLeft = '5%';
    editInput.style.fontSize = 'inherit';
    editInput.value = e.target.innerHTML;
    editInput.className = 'stop';
    e.target.innerHTML = '';
    myPencil.style.marginLeft = '2%';
    e.target.appendChild(editInput);
    e.target.appendChild(myPencil);
    e.target.firstElementChild.select();

    myPencil.addEventListener('click', () => {
      Storage.editTask(targetcode, editInput.value);
      Schedule.displayTasks();
    });
    return;
  }

  Schedule.deleteTask(e.target);
  Storage.removeTask(e.target.previousElementSibling.textContent);
  Storage.fixIndexArray();
  Schedule.displayTasks();
});
