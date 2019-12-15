import { Component } from '@angular/core';

@Component({ // Cria metadados para a nossa classe, nesse caso um seletor, um html e um estilo.
  selector: 'app-root', // aqui é transformado em uma tag html
  templateUrl: './app.component.html', // tambem poderia ser um template html como exemplo <p> meu template </p>
  styleUrls: ['./app.component.css']
})
export class AppComponent { // Quando utilizamos export no TS, estamos criando uma class publica
  // title = 'todo';
}
