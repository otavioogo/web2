Descrição do projeto
O Projeto de recuperação de nota da disciplina IF67I (Programação Web 2) trata-se do desenvolvimento de uma API web, utilizando os conhecimentos práticos abordados na disciplina.
Os objetivos do projeto são:
• aplicar na prática as teorias e conceitos adquiridos durante as aulas.
• simular um ambiente de desenvolvimento complexo, para entender como os diferentes
conceitos se relacionam entre si.
• recupera a nota para ser aprovado na disciplina.
Proposta
A API deverá ser desenvolvido necesariamente de modo individual e deve atender aos requisitos funcionais listados a seguir. Não é necessário desenvolver o front-end da aplicação. Além
da entrega, o aluno deverá apresentar o que foi desenvolvido ao professor (mediante agendamento prévio) e fazer as modificações solicitadas durante a própria apresentação. Todo o
código deve estar armazenado em um repositório Git público (ex: Github) e os commits devem
ter os comentários adequados referente as alterações no código.
Requisitos funcionais
Devem ser implementadas todas as rotinas de consulta e login no lado servidor, como APIs
Web.
No lado servidor, devem ser utilizadas as seguintes tecnologias: JavaScript, com a plataforma Node.js, utilizando o framework Express e a biblioteca Mongoose/Sequelize (essa última
sendo opcional). No lado cliente, podem ser utilizadas as seguintes bibliotecas: Mustache, Bootstrap, jQuery, React.js/Vue/Angular, Axios. Para armazenar os dados, podem ser utilizados
os seguintes sistemas: MySQL ou MongoDB. A utilização de pacotes ou bibliotecas que não
foram especificadas ou apresentadas em aula, só será permitida mediante consulta prévia ao
professor.
Devem ser desenvolvidas as seguinte funcionalidades de uma aplicação web:
Login: realização do login da aplicação utilizando o conceito de JSON Web Token.
Cadastro de usuários: Rota para inserir novos usuários, realizando a validação dos atributos,
verificação de unicidade de email e validação da senha contendo letras e números. Os
dados devem ser persistidos no banco de dados.
Desativação de usuário: Usuários com permissão de acesso (token) podem desativar sua
conta de tal modo que os mesmos não poderão mais realizar o login no sistema.
Gerenciamento de anotações: Mediante identificação (token) um usuário poderá criar, alterar,
listar e excluir anotações. Uma anotação possui um identificador numérico e automático,
título, uma descrição e pode conter uma prioridade (baixa, média e alta).
Buscar por uma anotação Utilizando um ID de uma anotação será possível consultar o título e
a sua prioridade por qualquer usuário, mesmo que a anotação não seja sua. Além disso,
cada vez que uma anotação for consultada, o seu contador de visualizações deverá ser
incrementado.
Critérios de avaliação
1. Atendimento às diretrizes de desenvolvimento web apresentadas durante as aulas.
2. Verificação de preenchimento de campos obrigatórios, no servidor, com apresentação de
mensagens de erro específicas.
3. Validação de unicidade e autenticidade de campos como email.
4. Controle de permissão dos usuários, verificada com o uso de JSON Web token nas rotas
protegidas.
5. Segurança da aplicação, tal que os usuários não podem alterar ou acessar os dados de
outros usuários.
6. Implementação da rota de Login.
7. Implementação da rota de cadastramento de usuários.
8. Implementação da rota de desativação do usuário.
9. Implementação da rota de cadastro de anotação.
10. Implementação da rota de alteração de anotação.
11. Implementação da rota de exclusão de anotação.
12. Implementação da rota de listagem de anotações.
13. Implementação da rota de consulta de uma anotação por ID.
14. Implementação da contador de visualização para uma anotação.
15. Atualização incremental das mudanças de código-fonte no Git, deve ser realizado pelo
menos um Commit para cada funcionalidade.
Itens complementares (para nota extra)
• Instalação da página web em algum serviço de hospedagem de aplicações web baseado
no modelo de PaaS de Cloud Computing (SUGESTÃO de serviço: HEROKU).
• Implementação de rotina de gerenciamento de cache utilizando o REDIS para requisições
HTTP.
• Testes unitários cobrindo as principais funcionalidades do sistema.
