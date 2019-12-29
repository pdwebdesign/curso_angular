import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // importa o Grupo de formulario, ja temos alguns validators padrao ou custom validators que podemos criar
import { Todo } from 'src/models/todo.model'; // importa a classe Todo


@Component({ // Cria metadados para a nossa classe, nesse caso um seletor, um html e um estilo.
  selector: 'app-root', // aqui é transformado em uma tag html
  templateUrl: './app.component.html', // tambem poderia ser um template html como exemplo <p> meu template </p>
  styleUrls: ['./app.component.css']
})
export class AppComponent { // Quando utilizamos export no TS, estamos criando uma class publica
  // title = 'todo';
  public todos: Todo[] = [];
  public title: String = 'Lista de Tarefas';
  public form: FormGroup; // Como a tela pode ter varios formularios é necessario criar um Grupo de formulario

  /**
   *
   */
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.compose([ // Colocarmos o Validators.compose([]) caso tenha mais de uma validação no meu formulário
        Validators.minLength(3),// O titulo da tarefa tem que ter no minimo 3 caracteres e no maximo 60
        Validators.maxLength(60),
        Validators.required
      ])]
    });
  }

  add() {
    const title = this.form.controls['title'].value;
    const id = this.todos.length + 1;
    this.todos.push(new Todo(id,title,false));
    this.save();
    this.clear();
  }

  clear() {
    this.form.reset();
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

  save() {
    const data = JSON.stringify(this.todos);
    localStorage.setItem('todos', data); // adiciona no localStorage com chave todos e valor data
  }
}
