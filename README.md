# Number Guessing

*Number Guessing* é uma proposta de mini-game sugerida como prova para o processo de seleção da *Scale System*. Uma versão de testes pode ser acessada clicando [aqui](https://nextjs-guessing-number.herokuapp.com/).

## Introdução

Bem vindo ao jogo de adivinhação de números! Gosta de desafios? Então aqui vai um: Eu vou pensar em um número de *um a mil*, e você vai tentar adivinhar qual é o número. A regra é bem simples: Você pode tentar adivinhar quantas vezes quiser, porém a cada nova tentativa eu vou te dizer se o número que você pensou é *maior ou menor* do que o número que eu pensei. Está pronto? Se sim, insira uma nova ficha e vamos jogar!

Atenciosamente,
*A Máquina*

## Imagens
[![Number Guessing](https://imgur.com/6XIKMd6.png)](https://imgur.com/a/KNTa5Rq)
[![Number Guessing](https://i.imgur.com/FJ1pRTD.png)](https://imgur.com/a/KNTa5Rq)

## Stack

O projeto usa vários projetos de código aberto para funcionar corretamente:

* [React.JS](https://reactjs.org/) Uma biblioteca JavaScript para criar interfaces de usuário
* [Next.JS](https://nextjs.org/) Uma biblioteca JavaScript para criar aplicativos SSR e Web usando o React
* [Node.JS](https://nodejs.org/) Um ambiente JavaScript focado no desenvolvimento server-side

## Contribuição

Deseja contribuir com o projeto? Siga as instruções abaixo para inicializar o projeto e começar a produção!

### 1. Dependências

Incialmente é necessário baixar todas as dependências do projeto. Para isto, abra o terminal na pasta do projeto e digite o seguinte código:

```sh
npm install
```

> Observação: Para que o comando acima funcione, e todos os outros comandos iniciados com `npm` é necessário ter instalado em seu computador a última versão estável do *Node.JS*. [Clique aqui para acessar o site oficial do Node.JS](https://nodejs.org/). O `npm` (Node Package Manager) é o serviço que gerencia os pacotes *Node.JS* no projeto.

### 2. Variáveis de ambiente

Após finalizar a instalação dos pacotes, é necessário configurar o arquivo de *variáveis do ambiente*. Este arquivo é responsável por permitir que a aplicação tenha as configurações encapsuladas e de fácil manutenção. Dentro do projeto você irá encontrar um arquivo chamado `.env.example`. Este arquivo contém todas as variáveis de ambiente sensíveis deste sistema.

É necessário fazer uma cópia do arquivo `.env.example` e renomear para `.env`. Dentro do arquivo existirá apenas uma variável chamada `NEXT_PUBLIC_API_URL`. Você deve preencher esta variável com o endereço onde a API está funcionando.

Exemplo:

```sh
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### 3. Comandos

Se tudo ocorrer bem até aqui, resta apenas rodar o comando de inicializar o projeto. De acordo com as instruções que você pode encontrar no arquivo `package.json`, para iniciar o projeto é necessário apenas digitar no terminal:

```sh
npm run dev
```

Este comando é responsável por iniciar o projeto em modo de desenvolvimento.

## Considerações

O projeto não foi projetado para ser utilizado em aparelhos mobile (*ainda*), portanto é recomendado utilizar a aplicação em um computador.
