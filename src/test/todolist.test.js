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

  test('delete task from the list', () => {
    Storage.removeTask(1);
    const tasks = Storage.getTasks();
    expect(tasks.length).toBe(0);
  });
});