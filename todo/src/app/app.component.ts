import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model'; // importa a classe Todo

@Component({ // Cria metadados para a nossa classe, nesse caso um seletor, um html e um estilo.
  selector: 'app-root', // aqui é transformado em uma tag html
  templateUrl: './app.component.html', // tambem poderia ser um template html como exemplo <p> meu template </p>
  styleUrls: ['./app.component.css']
})
export class AppComponent { // Quando utilizamos export no TS, estamos criando uma class publica
  // title = 'todo';
  public todos: Todo[] = [];
  public title: String = 'Lista de Tarefas'
  /**
   *
   */
  constructor() {
    this.todos.push(new Todo(1, 'Comprar ovo', false));
    this.todos.push(new Todo(2, 'Terminar curso', true));
    this.todos.push(new Todo(3, 'Terminar curso webcompleto', false));
  }

  remove(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo: Todo) {
    todo.done = true;
  }

  markAsUndone(todo: Todo) {
    todo.done = false;
  }
}
