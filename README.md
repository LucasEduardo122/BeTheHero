# Be The Hero

Um projeto criado para ajudar ONGS com os seus casos de recuperação de animais machucados, doentes e etc...

## Começando

Essas instruções fornecerão uma cópia do projeto em execução na sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

O que você precisa para instalar o software e como instalá-lo

`` ``
Backend

Express, Axios, Cors, Knex, Sqlite3 e Nodemon
`` ``
`` ``
Frontend

Express, Axios, Cors, Knex, Sqlite3 e Nodemon
`` ``
### Instalando
Usando npm
`` ``
$ npm install axios
`` ``
`` ``
$ npm install express
`` ``
`` ``
$ npm install cors
`` ``
`` ``
$ npm install knex
`` ``
`` ``
$ npm install sqlite3
`` ``
`` ``
$ npm install nodemon
`` ``

Usando yarn
`` ``
$ yarn add axios
`` ``
`` ``
$ yarn add express
`` ``
`` ``
$ yarn add cors
`` ``
`` ``
$ yarn add knex
`` ``
`` ``
$ yarn add sqlite3
`` ``
`` ``
$ yarn add nodemon
`` ``
## Exemplo
`` ``
const axios = require('axios')
//adicionar a biblioteca do axios
`` ``
`` ``
const express = require('express')
//adicionar a biblioteca do express
`` ``
`` ``
const cors = require('cors')
//adicionar a biblioteca do cors
`` ``

Usando API (React)
`` ``
import axios from 'axios';

const App = axios.create({ baseURL: 'http://localhost:3333'});
`` ``
Usando Express(Node)

`` ``
//chama a biblioteca express
const express = require('express');

//instancia a biblioteca do express
const app = express();

//ativa o servidor na porta 3333
app.listen(3333);
`` ``

## Construído com

* [JavaScript] (https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/First_steps/O_que_e_JavaScript) - A estrutura da web usada
* [NodeJS] (https://nodejs.org/en/docs/) - Base de Dados
* [ReactJS] (https://pt-br.reactjs.org/docs/getting-started.html) - Biblioteca JavaScript

## Contribuindo

Leia [CONTRIBUTING.md] (https://github.com/LucasEduardo122) para obter detalhes sobre nosso código de conduta e o processo para enviar solicitações pull para nós.


## Autores

* ** Billie Thompson ** - * Trabalho inicial * - [PurpleBooth] (https://github.com/LucasEduardo122)
