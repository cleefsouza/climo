<h1 align="center">
   <img alt="Climo" src="src/assets/images/logo-climo.png" width=300>
</h1>

<blockquote align="center">Módulo Final: Projeto Integrador</blockquote>

<p align="center">
    <img alt="JavaScript" src="https://img.shields.io/badge/javascript-FFA500?style=flat">
    <img alt="HTML" src="https://img.shields.io/badge/html5-orange?style=flat">
    <img alt="CSS" src="https://img.shields.io/badge/css3-009ACD?style=flat">
</p>

<hr>

Projeto integrador desenvolvido durante o curso **Frontend Coding From Facebook** disponibilizado pela Digital House em parceria com a Estação Hack From Facebook.

Climo é um aplicativo web para consultar a previsão do tempo de sua cidade. Utilizando a API pública [HG Weather](https://hgbrasil.com/status/weather) exibimos as condições atuais do tempo em todo território nascional.

> **Link:** climo.com.br

## Requisitos
- Npm
- [Live server](https://www.npmjs.com/package/live-server)
- [Key na HG Weather](https://hgbrasil.com/status/weather)

## Executando
- Clone o projeto:
  ```
  git@github.com:cleefsouza/climo.git
  ```

- Execute o seguinte comando na raiz do projeto:
  ```
  npm install
  ```

- Adicione sua `Key` no `baseRules` contido no arquivo `services.js`:
  ```javascript
  const baseRules = {
  key: 'dcda415d', // SUA_KEY
  format: 'json-cors',
  uri: 'https://api.hgbrasil.com/weather?',
  fields:
    'array_limit=8&fields=only_results,city,description,date,temp,forecast,weekday,max',
  };
  ```

- Execute com o `live-server`:
  ```
  live-server
  ```


## Autores
- Cleef Souza – [@cleefsouza](https://github.com/cleefsouza) – a.cleef.souza@gmail.com
- Rômulo Melo – [@romul3melo](https://github.com/romul3melo) – romul.melo22@gmail.com
- Dandhara Bakhita – [@danowles](https://github.com/danowles) – bakhita.dann@gmail.com
- Nicholas Geralde – [@nigerade](https://github.com/nigerade) – nicholasgerade@gmail.com
- Stefany Carvalho – [@stefanybernardi](https://github.com/StefanyBernardi) – stefanycaarvalho@hotmail.com

## Contribuindo
- Faça o `fork` do projeto (https://github.com/yourname/yourproject/fork)
- Crie sua branch
  ```
  git checkout -b "exemplo_feature"
  ```
- Commit suas modificações
  ```
  git commit -am 'Exemplo de mensagem'
  ```
- Realize o push da sua branch
  ```
  git push origin exemplo_feature
  ```
- Crie um novo `Pull Request`

## Meta

Made with 💚 by **Group Six**