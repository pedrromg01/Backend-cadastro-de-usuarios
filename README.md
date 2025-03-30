# Cadastro de Usuários - API

![Cadastro de Usuários GIF](https://github.com/pedrromg01/Backend-cadastro-de-usuarios/blob/main/back.gif)

## Descrição

Este projeto é uma API desenvolvida com **Express.js** e **Prisma** para gerenciar um sistema de cadastro de usuários. A API permite criar, listar, atualizar e excluir usuários de um banco de dados, oferecendo endpoints para todas as operações CRUD (Create, Read, Update, Delete).

A API utiliza o Prisma ORM para interagir com o banco de dados e Express.js para a criação das rotas e o gerenciamento do servidor.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript do lado do servidor.
- **Express.js** - Framework para construção da API.
- **Prisma ORM** - ORM para manipulação do banco de dados.
- **CORS** - Middleware para permitir requisições de diferentes origens.

## Como Rodar o Projeto

### Pré-requisitos

- **Node.js** instalado. Caso não tenha, você pode instalá-lo [aqui](https://nodejs.org/).
- **Banco de dados configurado com Prisma**. O Prisma se conecta a um banco de dados relacional (PostgreSQL, MySQL, SQLite, etc.), mas para rodar localmente, você precisará configurar o arquivo de banco de dados no `prisma/schema.prisma`.

### Passos para execução

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/cadastro-de-usuarios.git
