const completeStatus = (todoList, isChecked, taskId) => {
  todoList.find((el) => parseInt(el.id, 10) === parseInt(taskId, 10)).complete = isChecked;
  localStorage.setItem('todoList', JSON.stringify(todoList));
};

export default completeStatus;
