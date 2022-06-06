# CRUD básico de usuários em NextJS e SQLite

Desenvolvida neste último final de semana, esta aplicação consiste em efetuar as quatro operações básicas sobre uma base que persiste dados de usuários.
Isso signfica que por mais que funcione numa opção _self hosted_ não há suporte à persistência em ambientes com memória "efêmera" como na _Vercel_.

Fiz um vídeo explicando como funciona o fluxo principal neste vídeo disponível no botão abaixo, deixa um like!:
***
<a href="https://youtu.be/9wendQ2O5T4" target="_blank">![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?style=for-the-badge&logo=YouTube&logoColor=white)</a>
***
## Implementação

Para organização das pastas, foi aplicada a metodologia de [_Atomic Design_](https://atomicdesign.bradfrost.com/) e para a estilização dos componentes foi usada a biblioteca [_Styled Components_](https://styled-components.com/). As rotas de API são geradas e consumidas na própria aplicação.

O layout foi baseado nos exemplos de componentes disponíveis na biblioteca [_Tailwind UI _](https://tailwindui.com/preview), e os protótipos criados estão disponíveis para visualização por meio [_deste link_](https://www.figma.com/file/8a7ns0unL7Y7GSnCEaNMwk/CRUD-Educa%C3%A7%C3%A3o?node-id=0%3A1).

## Autenticação

O fluxo de autenticação foi feito a partir de uma adaptação do apresentado pela Rocketseat [_aqui_](https://www.youtube.com/watch?v=pvrKHpXGO8E) e persiste o usuário logado por meio de um contexto de autenticação criado na própria autenticação. A implementação foi feita apenas no controle das rotas via SSR, mas o projeto está pronto para efetuar as validações nas chamadas da API. Pode ser um passo futuro.

## Para rodar o projeto

Após clonar o repositório, é só rodar o comando ```npm start```, que executa a migração de um usuário fictício para ser usado com as seguintes credenciais:
- E-mail: ```user@example.com```
- Senha: ```password```

## Testagem

Com o tempo mais curto, foi implementado apenas um fluxo de testes e2e relacionados à autenticação do sistema, que podem ser executados através do comando ```npm run test```.

## Algumas explicações...

Inicialmente, o objetivo era fazer o controle de três tabelas, usuários, cursos e matrículas para fazer a inscrição de usuários em cursos, porém conforme o prazo foi diminuído tive que optar por gerenciar as expectativas e deixar de implementar coisas a mais pra cuidar com o fluxo principal. Não removi estes conteúdos não usados pois ficam para uma possível implementação futura.
