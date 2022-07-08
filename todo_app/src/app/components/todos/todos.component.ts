import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  constructor() {}

  ngOnInit(): void {
    this.todos = [
      {
        content: 'First todo',
        completed: false
      },

      {
        content: 'Second todo',
        completed: false
      }
    ]
  }

  toggleDone(id:number) {
    this.todos.map((item, idx) => {
      if( idx === id) item.completed = !item.completed;
      return item;
    })
  }

  deleteTodo(id: number) {

  }

}
