class Storage {
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return tasks;
  }

  static fixIndexArray() {
    const tasks = Storage.getTasks();
    const list = document.querySelector('.task-list');
    list.innerHTML = '';
    tasks.forEach((task, index) => {
      task.code = index + 1;
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static addTask(task) {
    const tasks = Storage.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static removeTask(code) {
    const tasks = Storage.getTasks();

    tasks.forEach((task, index) => {
      if (task.code === parseInt(code, 10)) {
        tasks.splice(index, 1);
      }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static editTask(code, text) {
    const tasks = Storage.getTasks();
    const list = document.querySelector('.task-list');
    list.innerHTML = '';
    tasks.forEach((task) => {
      if (task.code === parseInt(code, 10)) {
        task.description = text;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static editCompletion(code, completed) {
    const tasks = Storage.getTasks();
    tasks.forEach((task) => {
      if (task.code === parseInt(code, 10) && (completed)) {
        task.completed = true;
      } else if (task.code === parseInt(code, 10) && (!completed)) {
        task.completed = false;
      }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  static clearAllCompleted() {
    const tasks = Storage.getTasks();
    const completedDeleted = tasks.filter((item) => item.completed === false);
    localStorage.setItem('tasks', JSON.stringify(completedDeleted));
  }
}

export default Storage;