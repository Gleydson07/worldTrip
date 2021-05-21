# WorldTrip

#### Este projeto foi criado com base no modelo entregue via figma no desafio do capítulo IV do curso de React, é um site de conteúdo estático onde o usuário pode conhecer um pouco mais sobre os continentes e suas principais caracteristicas.

Para executar rodar este projeto basta
- Clonar este repositório
- Instalar as dependências
- Rodar o comando yarn | npm server, para que o fake-api seja executado
- Rodar o comando yarn | npm start, para executar

Web            |  Mobile
:-------------------------:|:-------------------------:
|![desk1](./public/readme/d1.png)   | ![mob1](./public/readme/m1.png) |
|![desk2](./public/readme/d2.png)   | ![mob2](./public/readme/m2.png) |

#### Para desenvolver usei a biblioteca Chakra UI e o framework NextJS, ao desenvolver coloquei em prática os conhecimentos adquiridos no curso Ignite React da Rocketseat,entre eles estão;

- Rotas dinâmicas: Geramos rotas dinâmicas de acordo com o paramtero passado na página anterior, muito
útil para blogs, e-commerces, entre outros.

- Responsividade e estilização: A biblioteca Chakra UI facilita o desenvolvimento de aplicações responsivas, uma vez 
que no próprio componente conseguimos definir as devidas metricas de acordo com a resolução de cada tela, além de
possuir temas pré-definidos e configuráveis.

- SSG: Deixa a página pré-renderizada em HTML no servidor antes da solicitação (no build por exemplo), 
esse HTML pode ser armazenado em um cache global e podemos definir uma validade para que esses dados 
sejam novamente buscados no lado servidor

- SSR: Deixa a página pré-renderizada em HTML no servidor a cada solicitação, é um processo menos rápido
em relação ao SSG, porém seus dados estarão sempre atualizados.
 
