import { enableProdMode } from '@angular/core';// importa o angular/core para trabalhar em produção
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';// Ele pode rodar em varias plataformas ate mesmo nativo mobile

import { AppModule } from './app/app.module';// Modulo raiz
import { environment } from './environments/environment'; // Variaves de ambiente

/* 
  Uma variável de ambiente é um valor nomeado dinamicamente que pode afetar o modo como os processos em execução irão se comportar em um computador. 
  */

if (environment.production) { // verifica se esta em producao se sim habilita o modo producao
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule) // Inicia a aplicacao chamando o AppModulo - arquivo que esta dentro de app
  .catch(err => console.error(err));
