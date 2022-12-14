import completeStatus from './complete.js';

export default class StoreLists {
  static getList() {
    let todoList;
    if (localStorage.getItem('todoList') === null) {
      todoList = [];
    } else {
      todoList = JSON.parse(localStorage.getItem('todoList'));
    }
    return todoList;
  }

  static addList(list) {
    const todoList = StoreLists.getList();
    todoList.push(list);
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  static removeLists(id) {
    let todoList = StoreLists.getList();
    todoList = todoList.filter((list) => list.id !== id);
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }

  static editList(id, name) {
    const todoList = StoreLists.getList();
    const update = todoList.map((list) => {
      if (list.id === id) {
        return { ...list, name };
      }
      return list;
    });
    localStorage.setItem('todoList', JSON.stringify(update));
  }

  static completeLists(todoList, isChecked, taskId) {
    completeStatus(todoList, isChecked, taskId);
  }

  static clearChecked() {
    const todoList = StoreLists.getList();
    this.todoList = todoList.filter((list) => !list.complete);
    localStorage.setItem('todoList', JSON.stringify(this.todoList));
  }
}