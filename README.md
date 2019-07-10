
## Ranking Web - A Fazenda

Esse projeto foi desenvolvido a partir do repositório de teste para novos frontends disponível no github do R7.com.

## Onboarding do projeto

Nessa seção vamos tratar sobres os scripts presentes no projeto. Após clonar o repositório rode o comando para instalar todas as depedências.

```sh
npm install
```

### Rodando o projeto

Para iniciar o servidor do projeto basta digitar o comando:

```sh
npm start
```

Basta abrir a url ``http://0.0.0.0:3001`` que o servidor estará disponível após o webpack finalizar a compilação inicial do projeto.

O Servidor é responsabilidade do webpack, sendo assim, qualquer configuração pode ser feita editando a seção devServer no arquivo ``webpack.config.js``.

Curiosidade: como webpack está apontando para ``0.0.0.0`` e não para ``localhost`` é possível acessar o front através de qualquer aparelho conectado a rede interna. Para isso é necessário trocar o ``0.0.0.0`` pelo ip atual da máquina que está executando o projeto.

### Rodando os testes

O responsável pelos testes é o cypress. Para inciar a UI de testes basta rodar:

```sh
npm test
```

Para executar uma rotina de testes basta selecionar um dos arquivos no canto esquerdo do programa.

Uma vez que a UI esteja rodando, qualquer alteração feita na pasta cypress dentro do projeto vai ser refletida na interface de testes.

### Build do projeto

A maioria do setup desse projeto é focado no desenvolvimento. Para geração do código para produção é necessário rodar o seguinte comando:

```sh
npm run build
```

O comando vai iniciar a compilação otimizada do código do projeto. Todos os artefados gerados estarão disponíveis na pasta ``/dist``.

## Estrutura do projeto

Abaixo segue um breve resumo das pastas do projeto.

```js
  /cypress // testes
  /public
  __/fazenda.json
  __/index.html // arquivo base
  src
  __/assets // imagens
  __/components
  __/__/ranking // Foco do projeto <3
  __/styles // Estilos globais e resets
  __/util // Classes e funções de apoio
  App.js // Coração da aplicação
  index.js // Ponto de partida
```

Essa estrutura foi feita para o desenvolvimento de aplicações maiores e mais complexas do que a do teste implementado. Mas a melhor maneira de crescer um projeto é crescer de maneira organizada desde de o inicio, acredito que seja o setup mínimo para iniciar com o React em uma aplicação web, conforme as necessidades desse teste.

### Observações

``Normalize.css`` está sendo usado para resetar os estilos para todos os navegadores.

``Helmet`` é usado para adicionar metatags no escopo do HTML afim de melhorar o SEO em aplicações react.