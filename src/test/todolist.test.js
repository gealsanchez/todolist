import 'jest-localstorage-mock';
import Storage from '../module/classStorage.js';
import Task from '../module/classTask.js';

describe('Test methods', () => {
  test('add task to the list', () => {
    const task = new Task(1, 'tasking', false);
    Storage.addTask(task);
    const tasks = Storage.getTasks();
    expect(tasks.length).toBe(1);
  });
  test('edit task from the list', () => {
    document.body.innerHTML = '<div class="task-list"<>' +
      '</div>';
    Storage.editTask(1, 'driving');
    const tasks = Storage.getTasks();
    expect(tasks[0].description).toBe('driving');
  });

  test('edit completion from a task', () => {
    Storage.editCompletion(1, true);
    const tasks = Storage.getTasks();
    expect(tasks[0].completed).toBe(true);
  });

  test('clear all checked tasks', () => {
    Storage.clearAllCompleted(1, true);
    const tasks = Storage.getTasks();
    expect(tasks.length).toBe(0);
  });

  test('delete task from the list', () => {
    Storage.removeTask(1);
    const tasks = Storage.getTasks();
    expect(tasks.length).toBe(0);
  });
});