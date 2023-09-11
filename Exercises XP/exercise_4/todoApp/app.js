// app.js

import TodoList from './todo.js';

const myTodoList = new TodoList();

myTodoList.addTask('Buy milk');
myTodoList.addTask('Go to the gym');
myTodoList.addTask('Write code');

myTodoList.markAsComplete('Go to the gym');

console.log(myTodoList.listAllTasks());
