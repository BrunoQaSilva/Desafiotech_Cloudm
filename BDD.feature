Funcionalidade: Formulário simples de mensagens

Cenário: Exibir mensagem digitada pelo usuário
  Dado que o usuário acessa a página "Simple Form Demo"
  Quando ele digita "Olá, mundo!" no campo de mensagem
  E clica no botão "Show Message"
  Então a mensagem "Olá, mundo!" deve ser exibida na tela

Cenário: Somar corretamente dois números
  Dado que o usuário acessa a página "Simple Form Demo"
  Quando ele preenche os campos de número com "5" e "3"
  E clica no botão "Get Total"
  Então o resultado exibido deve ser "8"

Cenário: Campo vazio ao não digitar nenhuma mensagem
  Dado que o usuário acessa a página "Simple Form Demo"
  Quando ele clica no botão "Show Message" sem digitar nada
  Então nenhum texto deve ser exibido

Cenário: Somar valores não numéricos
  Dado que o usuário acessa a página "Simple Form Demo"
  Quando ele digita "abc" e "xyz" nos campos de soma
  E clica em "Get Total"
  Então a mensagem "Entered value is not a number" deve ser exibida

Funcionalidade: Teste de checkboxes

Cenário: Marcar checkbox simples e exibir mensagem
  Dado que o usuário acessa a página "Checkbox Demo"
  Quando ele clica em "Click on check box"
  Então a mensagem "Checked!" deve ser exibida

Cenário: Marcar todos os checkboxes ao clicar em "Check All"
  Dado que o usuário acessa a página "Checkbox Demo"
  E a seção "Multiple Checkbox Demo" é visível
  Quando ele clica no botão "Check All"
  Então todos os checkboxes devem estar marcados

Cenário: Desmarcar todos os checkboxes ao clicar em "Uncheck All"
  Dado que o usuário acessa a página "Checkbox Demo"
  E clicou anteriormente no botão "Check All"
  Quando ele clica no botão "Uncheck All"
  Então todos os checkboxes devem estar desmarcados
  
Funcionalidade: Seleção de dias da semana

Cenário: Selecionar uma opção e validar mensagem
  Dado que o usuário acessa a página "Select Dropdown Demo"
  Quando ele seleciona "Wednesday" na lista
  Então a mensagem "Day selected :- Wednesday" deve ser exibida

Cenário: Não selecionar nenhuma opção
  Dado que o usuário acessa a página "Select Dropdown Demo"
  Então nenhuma mensagem deve ser exibida inicialmente

Cenário: Validar todas as opções da lista
  Dado que o usuário acessa a página "Select Dropdown Demo"
  Quando ele seleciona cada dia da semana
  Então a mensagem correspondente deve ser exibida para cada um

Funcionalidade: Seleção múltipla de estados

Cenário: Selecionar uma opção e validar "First Selected"
  Dado que o usuário acessa a página "Select Dropdown Demo"
  Quando ele seleciona "Florida"
  E clica no botão "First Selected"
  Então a mensagem "First selected option is : Florida" deve ser exibida

Cenário: Selecionar uma nova opção e validar "Last Selected"
  Dado que o usuário selecionou "Ohio" após "Florida"
  Quando ele clica no botão "Get Last Selected"
  Então a mensagem "Last selected option is : Ohio" deve ser exibida
