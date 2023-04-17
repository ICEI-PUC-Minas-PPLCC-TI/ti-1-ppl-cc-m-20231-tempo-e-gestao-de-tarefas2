# Informações do Projeto 

### Tempo e Gestao de Tarefas Grupo 9 


### Ciencias da computacao 


#### Participantes
  - Pedro Gaioso
  - Thomas Neuenschwander
  - Vinicius Goddard
  - Rodrigo Drummond
  - Matheus Rodrigues
  - Vitoriav

# Estrutura do Documento

- [Informações do Projeto](#informações-do-projeto)
  - [Participantes](#participantes)
- [Estrutura do Documento](#estrutura-do-documento)
- [Introdução](#introdução)
  - [Problema](#problema)
  - [Objetivos](#objetivos)
  - [Justificativa](#justificativa)
  - [Público-Alvo](#público-alvo)
- [Especificações do Projeto](#especificações-do-projeto)
  - [Personas, Empatia e Proposta de Valor](#personas-empatia-e-proposta-de-valor)
  - [Histórias de Usuários](#histórias-de-usuários)
  - [Requisitos](#requisitos)
    - [Requisitos Funcionais](#requisitos-funcionais)
    - [Requisitos não Funcionais](#requisitos-não-funcionais)
  - [Restrições](#restrições)
- [Projeto de Interface](#projeto-de-interface)
  - [User Flow](#user-flow)
  - [Wireframes](#wireframes)
- [Metodologia](#metodologia)
  - [Divisão de Papéis](#divisão-de-papéis)
  - [Ferramentas](#ferramentas)
  - [Controle de Versão](#controle-de-versão)
- [**############## SPRINT 1 ACABA AQUI #############**](#-sprint-1-acaba-aqui-)
- [Projeto da Solução](#projeto-da-solução)
  - [Tecnologias Utilizadas](#tecnologias-utilizadas)
  - [Arquitetura da solução](#arquitetura-da-solução)
- [Avaliação da Aplicação](#avaliação-da-aplicação)
  - [Plano de Testes](#plano-de-testes)
  - [Ferramentas de Testes (Opcional)](#ferramentas-de-testes-opcional)
  - [Registros de Testes](#registros-de-testes)
- [Referências](#referências)


# Introdução
Diariamente, somos inundados de compromissos e responsabilidades tornando a gestão de todas essas tarefas e do tempo um grande problema, tanto para estudantes ou para professores, estagiários , empresários e muitas outras áreas.
Dessa forma, a tecnologia pode se provar uma grande aliada na gestão de tarefas, fornecendo instrumentos para a  distribuição dos afazeres, que são fundamentais na organização do dia-a-dia , já que muitas vezes devido ao excesso de informações e tarefas pode se acabar esquecendo de algo, o que no caso do estudante pode prejudica-lo ao por exemplo perder o prazo de entrega de  uma tarefa ou sofrer com notas ruins, pois a gestão ruim do tempo pode ocasionar na diminuição do ritmo dos estudos.
Assim, é fundamental que existam mecanismos de apoio e de organização, que permitam ao usuário uma otimização do seu tempo, lhe permitindo mais conforto e disposição, além de fornecer maior controle sobre sua própria vida.

## Problema

O problema de gestão de tempo e tarefas é um banal desafio enfrentado por quase todas as pessoas em suas vidas pessoais e profissionais. No entanto, nossa aplicação web propõe focar em auxiliar o jovem público universitário (e pré-vestibular).  A temática gira em torno da a dificuldade em equilibrar o tempo disponível com as tarefas que precisam ser realizadas, de modo a alcançar os objetivos desejados. Dessa forma, para encarar esse desafio, é de suma importância um planejamento adequado, estabelecendo metas e prioridades claras.


## Objetivos

O objetivo principal do projeto é a criação de um aplicativo que forneça ao usuário ferramentas para a melhor organização do seu tempo e de suas tarefas, tendo maior enfoque nos universitários, mas ofertando funções que auxiliam qualquer tipo de usuário.

⦁	Fornecer funcionalidades que permitam organizar as tarefas em um estilo de calendário ou checklist.

⦁	Fornecer informações sobre métodos de estudo como o pomodoro, que podem aumentar a produtividade.

⦁	Mostrar ao usuário o crescimento de sua produtividade, por meio de gráficos e um sistema de recompensas, lhe motivando a manter o ritmo.

## Justificativa

Com a crescente das pessoas em gerir seu tempo e suas atividades, tem se tornado essencial a criação de uma ferramenta que possibilite ao usuário a priorizar sua metas, seus compromissos e seus objetivos, lhe permitindo criar tarefas e lembretes de seus afazeres, que lhe permitirão maior controle sobre sua vida e sua rotina, visto que devido ao mundo cada vez mais acelerado em que vivemos, esse tipo de mecanismo se torna cada vez mais requisitado e necessário.

## Público-Alvo

Embora possa ser utilizado por todos os tipos de usuários, o projeto terá enfoque no público dos estudantes universitários e vestibulandos, os quais são jogados de uma hora para a outra na vida adulta e devem aprender a gerir por si próprios seus estudos, trabalhos e compromissos .
Assim, estabeleceu-se que o público-alvo terá uma faixa etária mínima de 17 anos, não tendo seu máximo delimitado, já que tem crescido exponencialmente o número de profissionais de diferentes áreas que realizam doutorados, mestrados e pós-graduações, lhes sendo necessário um auxílio para otimizar seu tempo e realizar todas as suas tarefas, em conciliação com os estudos.

# Especificações do Projeto

A especificação do projeto foi definida principalmente baseando se nas entrevistas realizadas com o público-alvo, as quais levantaram informações relevantes acerca das personas que devem receber maior enfoque e as dificuldades e problemas mais frequentes entre os entrevistados.

## Personas, Empatia e Proposta de Valor

Alo.

## Histórias de Usuários


A partir da compreensão do dia a dia das personas identificadas para o projeto, foram registradas as seguintes histórias de usuários.

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`    |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------   |----------------------------------------|
|Usuário do sistema: | Definir metas de produtividade;       |Para se manter motivado pelo progresso; |
|Felipe Raganolli    |Acesso a calendário com minhas tarefas;|Melhor organização dos afazeres;        |       
|--------------------|Visualizar tudo em uma única interface;|Para ter maior praticidade;             |
|                    |Poder priorizar as tarefas;            | Para fazer o mais importante primeiro; |
|                    |Receber relatórios;                    |Para avaliar o progresso;               | 
 
|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE`                         | PARA ... `MOTIVO/VALOR`                  |          
|--------------------|------------------------------------------------------------|------------------------------------------|
|Usuário do sistema: | Definir lembretes;                                         |Para não perder nenhum prazo;             |
|Lucas Jairo da Silva|Criar uma lista com itens que podem ser marcados com feitos;|Para saber o que ainda deve ser feito;    |       
|--------------------|Acessar o aplicativo de qualquer lugar e dispositivo;       |Maior praticidade para acessar as tarefas;|


## Requisitos

O escopo funcional do projeto é definido por meio dos requisitos funcionais que descrevem as possibilidades interação dos usuários, bem como os requisitos não funcionais que descrevem os aspectos que o sistema deverá apresentar de maneira geral. Estes requisitos são apresentados a seguir.

### Requisitos Funcionais

A tabela a seguir apresenta os requisitos do projeto, identificando a prioridade em que os mesmos devem ser entregues.

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| O site deve apresentar uma interface modular, inspirada no miro | ALTA | 
|RF-002| O site deve apresentar uma grade de encaixe relativo e um menu flutuante  | ALTA |
|RF-003| O site deve possuir um sistema de recompensas que dará noção de progresso ao usuário | MÉDIA | 
|RF-004| O site deve possuir um sistema de atribuição de tarefas ligado a um sistema de tasks  | ALTA |
|RF-005| O site deve se conectar dados do usuário a uma database própria  | MÉDIA |
|RF-006| O site deve possuir um sistema de gráficos e display de informações | MÉDIA | 
|RF-007| O site deve possuir uma interface chamativa com cores atribuídas com estudos sobre neurociência  | MÉDIA |
|RF-008| O site deve possuir um cronômetro para usuário medir tempo decorrido na realização de cada tarefa, além de contar o tempo de cada sprint do método pomodoro. | MÉDIA |
|RF-009| O site deve possuir templates pré-prontos e post its | BAIXA | 
|RF-010| O site deve disponibilizar exercícios para trabalhar o foco  | BAIXA |
|RF-011| O site deve dar referências ao usuário de artigos e vídeos sobre métodos de estudo, motivação, disciplina e exercícios físicos | BAIXA | 



### Requisitos não Funcionais

A tabela a seguir apresenta os requisitos não funcionais que o projeto deverá atender.

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O site deve ser publicado em um ambiente acessível publicamente na Internet (Repl.it, GitHub Pages, Heroku); | ALTA | 
|RNF-002| O site deverá ser responsivo permitindo a visualização em um celular de forma adequada |  ALTA |
|RNF-003| O site deve ter bom nível de contraste entre os elementos da tela em conformidade | MÉDIA | 
|RNF-004| O site deve ser compatível com os principais navegadores do mercado (Google Chrome, Firefox, Microsoft Edge) |  ALTA |

## Restrições

As questões que limitam a execução desse projeto e que se configuram como obrigações claras para o desenvolvimento do projeto em questão são apresentadas na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue no final do semestre letivo, não podendo extrapolar a data de 07/07/2020. |
|02| O aplicativo deve se restringir às tecnologias básicas da Web no Frontend        |
|03| A equipe não pode subcontratar o desenvolvimento do trabalho |


# Projeto de Interface

......  COLOQUE AQUI O SEU TEXTO DE INTRODUÇÃO ......

Partindo da premissa de que muitos dos problemas de gestão de tempo e tarefas são comportamentais, a interface em questão foi pensada com conceitos do âmbito neurocientífico para que o usuário possa se sentir imerso na proposta de "Second Brain" (ou, em português, cérecro secundário), a qual tem o objetivo de evitar a sobrecarga e o burnout do usuário por meio de um sistema digitalizado de tasks. Após uma simples tela de login, o usuáro se depara com uma interface modular em estilo "whiteboard", em que ele pode organizar as subjanelas da forma que preferir. Cada janela recebe o nome de "módulo". Um agrupamento de módulos recebe o nome de "rede modular" e permite com que cada módulo interaja entre si. A aplicação dispõe de um sistema de cores que muda as cores de destaque ao longo do dia, aplicando cores mais quentes na manhã e mais frias na noite (nota: Esse sistema não interfere com as configurações de tema escuro/claro do usuário, também pode ser desativado para customização manual). 

Os módulos básicos são:
- Calendário integrado com sistema de Tasks (janelas com cheklists que agregam pontos pela compleção de cada item + bônus por compleção da janela)
- Gráfico que atualiza em tempo real os pontos de produtividade adiquiridos. (eixo y = Pontos de produtividade, eixo x = tempo-customizável - horas, dias, semana, mês -)
- Janela de informante digital. A partir de um banco de dados selecionado, anexa links para artigos sobre neurociência e saúde, notícias e uma "dica rápida" flutuante, que possui grau de complexidade baseado no perfil do usuário.
- Post-its expandíveis que podem ser anexados em qualquer lugar do quadro branco, mas não possuem conexão com a rede modular
- Módulo da técnica de concentração Pomodoro, que contém um contador de 25 minutos e uma imagem customizável de fundo
- Módulos adicionais e extensões para módulos atuais(Exercícios respiratórios, aba de notícias)

A aplicação possue um menu flutuante com as opções cursor, adicionar, zoom e post-it. Existe também um menu de navegação ao lado da logo flutuante, contendo a aba de loja de customizações ( que usa pontos de produtividade para permitir customizações para além do já disponibilizado, funcionando como um motivador a aumentar sua taxa de produtividade) e a aba de configurações do site.

## User Flow

......  INCLUA AQUI O DIAGRAMA COM O FLUXO DO USUÁRIO NA APLICAÇÃO ......

![UserFlow](images/userflowchronos.png)

## Wireframes

......  INCLUA AQUI OS WIREFRAMES DAS TELAS DA APLICAÇÃO COM UM BREVE DESCRITIVO ......

![Wireframe Claro](images/WireframeClaro.png)
![Wireframe Escuro](images/WireframeEscuro.png)


# Metodologia

Para gerir e desenhar o projeto, a equipe utilizou do processo de design thinking, para pensar e priorizar as ideias e etapas do site, além do método scrum para separar as tarefas entre os integrantes e melhorar a comunicação e o trabalho em equipe. Além disso, foi criado um repositório no GitHub , uma ferramenta que permite armazenar as alterações realizadas no código-fonte, sem perder as versões anteriores, permitindo maior controle sobre o desenvolvimento do projeto. Para priorizar as tarefas a serem concluídas e sua ordem de prioridade, a equipe usou o miro e o próprio processo de design thinking, definindo as bases do projeto e como o aplicativo devera ser feito e entendido, além de definir conhecimentos sobre a área que devem ser adquiridos para a realização do projeto, como a neurociência, fundamental para entender questões como a disciplina, a motivação e o foco.

## Divisão de Papéis

Scrum master: Rodrigo Drummond.
Product Owner: Vinicius Goddard
Scrum Team: Rodrigo Drummond, Thomas Baron, Vinicius Goddard, Vitoria Avany, Matheus Rodrigues, Pedro Oliveira.

## Ferramentas

......  COLOQUE AQUI O SEU TEXTO - SIGA O EXEMPLO DA TABELA ABAIXO  ......

| Ambiente  | Plataforma              |Link de Acesso |
|-----------|-------------------------|---------------|
|Processo de Design Thinkgin  | Miro |  https://miro.com/XXXXXXX | 
|Repositório de código | GitHub | https://github.com/ICEI-PUC-Minas-PPLCC-TI/ti-1-ppl-cc-m-20231-tempo-e-gestao-de-tarefas2 | 
|Hospedagem do site | Heroku |  https://XXXXXXX.herokuapp.com | 
|Protótipo Interativo | MavelApp ou Figma | https://figma.com/XXXXXXX | 

>
> Liste as ferramentas empregadas no desenvolvimento do
> projeto, justificando a escolha delas, sempre que possível.
> 
> As ferramentas empregadas no projeto são:
> 
> - Editor de código.
> - Ferramentas de comunicação
> - Ferramentas de diagramação
> - Plataforma de hospedagem
> 
> O editor de código foi escolhido porque ele possui uma integração com o
> sistema de versão. As ferramentas de comunicação utilizadas possuem
> integração semelhante e por isso foram selecionadas. Por fim, para criar
> diagramas utilizamos essa ferramenta por melhor captar as
> necessidades da nossa solução.
> 
> **Links Úteis - Hospedagem**:
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Crie seu Site com o HostGator](https://www.hostgator.com.br/como-publicar-seu-site)
> - [GoDady](https://br.godaddy.com/how-to)
> - [GitHub Pages](https://pages.github.com/)

## Controle de Versão

......  COLOQUE AQUI O SEU TEXTO ......

> Discuta como a configuração do projeto foi feita na ferramenta de
> versionamento escolhida. Exponha como a gerência de tags, merges,
> commits e branchs é realizada. Discuta como a gerência de issues foi
> realizada.
> A ferramenta de controle de versão adotada no projeto foi o
> [Git](https://git-scm.com/), sendo que o [Github](https://github.com)
> foi utilizado para hospedagem do repositório `upstream`.
> 
> O projeto segue a seguinte convenção para o nome de branchs:
> 
> - `master`: versão estável já testada do software
> - `unstable`: versão já testada do software, porém instável
> - `testing`: versão em testes do software
> - `dev`: versão de desenvolvimento do software
> 
> Quanto à gerência de issues, o projeto adota a seguinte convenção para
> etiquetas:
> 
> - `bugfix`: uma funcionalidade encontra-se com problemas
> - `enhancement`: uma funcionalidade precisa ser melhorada
> - `feature`: uma nova funcionalidade precisa ser introduzida
>
> **Links Úteis**:
> - [Tutorial GitHub](https://guides.github.com/activities/hello-world/)
> - [Git e Github](https://www.youtube.com/playlist?list=PLHz_AreHm4dm7ZULPAmadvNhH6vk9oNZA)
> - [5 Git Workflows & Branching Strategy to deliver better code](https://zepel.io/blog/5-git-workflows-to-improve-development/)
>
> **Exemplo - GitHub Feature Branch Workflow**:
>
> ![Exemplo de Wireframe](images/Github-Workflow.png)

# **############## SPRINT 1 ACABA AQUI #############**


# Projeto da Solução

......  COLOQUE AQUI O SEU TEXTO ......

## Tecnologias Utilizadas

......  COLOQUE AQUI O SEU TEXTO ......

> Descreva aqui qual(is) tecnologias você vai usar para resolver o seu
> problema, ou seja, implementar a sua solução. Liste todas as
> tecnologias envolvidas, linguagens a serem utilizadas, serviços web,
> frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas.
> Apresente também uma figura explicando como as tecnologias estão
> relacionadas ou como uma interação do usuário com o sistema vai ser
> conduzida, por onde ela passa até retornar uma resposta ao usuário.
> 
> Inclua os diagramas de User Flow, esboços criados pelo grupo
> (stoyboards), além dos protótipos de telas (wireframes). Descreva cada
> item textualmente comentando e complementando o que está apresentado
> nas imagens.

## Arquitetura da solução

......  COLOQUE AQUI O SEU TEXTO E O DIAGRAMA DE ARQUITETURA .......

> Inclua um diagrama da solução e descreva os módulos e as tecnologias
> que fazem parte da solução. Discorra sobre o diagrama.
> 
> **Exemplo do diagrama de Arquitetura**:
> 
> ![Exemplo de Arquitetura](images/arquitetura-exemplo.png)


# Avaliação da Aplicação

......  COLOQUE AQUI O SEU TEXTO ......

> Apresente os cenários de testes utilizados na realização dos testes da
> sua aplicação. Escolha cenários de testes que demonstrem os requisitos
> sendo satisfeitos.

## Plano de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Enumere quais cenários de testes foram selecionados para teste. Neste
> tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo
> de usuários que foi escolhido para participar do teste e as
> ferramentas utilizadas.
> 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)

## Ferramentas de Testes (Opcional)

......  COLOQUE AQUI O SEU TEXTO ......

> Comente sobre as ferramentas de testes utilizadas.
> 
> **Links Úteis**:
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)

## Registros de Testes

......  COLOQUE AQUI O SEU TEXTO ......

> Discorra sobre os resultados do teste. Ressaltando pontos fortes e
> fracos identificados na solução. Comente como o grupo pretende atacar
> esses pontos nas próximas iterações. Apresente as falhas detectadas e
> as melhorias geradas a partir dos resultados obtidos nos testes.


# Referências

......  COLOQUE AQUI O SEU TEXTO ......

> Inclua todas as referências (livros, artigos, sites, etc) utilizados
> no desenvolvimento do trabalho.
> 
> **Links Úteis**:
> - [Formato ABNT](https://www.normastecnicas.com/abnt/trabalhos-academicos/referencias/)
> - [Referências Bibliográficas da ABNT](https://comunidade.rockcontent.com/referencia-bibliografica-abnt/)