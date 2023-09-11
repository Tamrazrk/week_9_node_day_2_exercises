// todo.js

export default class TodoList {
    constructor() {
        this.tasks = [];
    }

    addTask(task) {
        this.tasks.push({ name: task, completed: false });
    }

    markAsComplete(taskName) {
        const task = this.tasks.find(t => t.name === taskName);
        if (task) {
            task.completed = true;
        }
    }

    listAllTasks() {
        return this.tasks.map(task => `${task.name} - ${task.completed ? 'Completed' : 'Not Completed'}`).join('\n');
    }
}
