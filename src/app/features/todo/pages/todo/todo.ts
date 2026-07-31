import { Component } from '@angular/core';

type TodoFilter = 'all' | 'pending' | 'completed';

interface TodoItem {
  title: string;
  subject: string;
  due: string;
  priority: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {

  activeFilter: TodoFilter = 'all';

  tasks: TodoItem[] = [
    {
      title: 'Finish Angular Dashboard',
      subject: 'Web Development',
      due: 'Due Today',
      priority: 'High Priority',
      completed: false
    },
    {
      title: 'Read Chapter 4',
      subject: 'Database Systems',
      due: 'Due Aug 2',
      priority: 'Medium Priority',
      completed: false
    },
    {
      title: 'Submit UI/UX Wireframe',
      subject: 'UI/UX Design',
      due: 'Due Aug 3',
      priority: 'Medium Priority',
      completed: true
    }
  ];

  setFilter(filter: TodoFilter) {
    this.activeFilter = filter;
  }

  get filteredTasks(): TodoItem[] {

    if (this.activeFilter === 'pending') {
      return this.tasks.filter(task => !task.completed);
    }

    if (this.activeFilter === 'completed') {
      return this.tasks.filter(task => task.completed);
    }

    return this.tasks;
  }

  toggleTask(task: TodoItem) {
    task.completed = !task.completed;
  }

}