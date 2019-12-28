import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

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
    this.todos.push('Aprender Angular');
    this.todos.push(new Date());
  }
}
