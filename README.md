# 🧪 Projeto de Testes Automatizados com Cypress - LambdaTest Playground

Este repositório contém testes automatizados desenvolvidos com [Cypress](https://www.cypress.io/) para validar os componentes de formulários, checkboxes, dropdowns e multi-select do site [LambdaTest Selenium Playground](https://www.lambdatest.com/selenium-playground/).

---

## 📁 Estrutura do Projeto

cypress/<br/>
└── e2e/<br/>
├── checkboxDemo.cy.js<br/>
├── dropdownDemo.cy.js<br/>
├── multiSelectDemo.cy.js<br/>
└── simpleFormDemo.cy.js<br/>

---

## ⚙️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/)
- JavaScript
- XPath (plugin: `cypress-xpath`)
- Cypress Real Events (plugin: 'cypress-real-events/support')

---

## 📦 Instalação

1. Clone este repositório:

```bash
git clone https://github.com/BrunoQaSilva/Desafiotech_Cloudm.git
cd Desafiotech_Cloudm
Instale as dependências:

bash
Copiar
Editar
npm install
Instale o suporte a XPath:

bash
Copiar
Editar
npm install -D cypress-xpath
Importe o plugin em cypress/support/e2e.js:

javascript
Copiar
Editar
require('cypress-xpath');
▶️ Como Executar os Testes
bash
Copiar
Editar
npx cypress open
Ou execute em modo headless:

bash
Copiar
Editar
npx cypress run
✅ Cenários Automatizados
✔️ Simple Form Demo
Exibir mensagem digitada pelo usuário.

Somar dois números e validar o resultado.

Verificar comportamento ao deixar campos vazios ou inserir valores inválidos.

✔️ Checkbox Demo
Validar mensagem ao marcar checkbox simples.

Marcar e desmarcar todos os checkboxes com "Check All" e "Uncheck All".

Verificar individualmente os checkboxes option1 a option4.

✔️ Dropdown List Demo
Selecionar dias da semana e validar mensagem.

Verificar comportamento quando nenhuma opção é selecionada.

✔️ Multi-Select Option
Selecionar múltiplas opções (como Florida e Ohio).

Clicar nos botões First Selected e Get Last Selected.

Validar as mensagens retornadas após as seleções com clique simulado.

🧼 Boas Práticas Seguidas
Testes independentes e reutilizáveis.

Boa organização dos testes por funcionalidade.

Uso de scroll controlado para evitar interferência de elementos como header fixo.

Simulação realista de eventos de clique com MouseEvent.

🧑‍💻 Autor
Bruno Rocha Silva
QA Engineer | Automação de Testes | Cypress | Selenium
LinkedIn • GitHub

