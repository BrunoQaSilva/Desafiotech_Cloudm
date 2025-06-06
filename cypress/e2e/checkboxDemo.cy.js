describe('Testes de Checkbox', () => {

  // Cenário 1: Checkbox Simples
  it('Deve exibir mensagem ao marcar checkbox simples', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/checkbox-demo');

    cy.contains('Click on check box').click();
    cy.contains('Checked!').should('be.visible');
  });

  // Cenário 2: Marcar todos os checkboxes com "Check All"
  it('Deve marcar todos os checkboxes ao clicar em "Check All"', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/checkbox-demo');

    // Scroll até a seção de múltiplos checkboxes
    cy.xpath('//h2[contains(text(), "Multiple Checkbox Demo")]')
      .scrollIntoView({ offset: { top: -100, left: 0 }, easing: 'linear', duration: 500 });

    // Clica no botão "Check All"
    cy.xpath('//button[contains(text(), "Check All")]')
      .should('exist')
      .then(($btn) => {
        cy.wrap($btn).invoke('click');
      });

    // Valida se todos os checkboxes foram marcados
    for (let i = 1; i <= 4; i++) {
      cy.get(`input[name="option${i}"]`).should('be.checked');
    }
  });

  // Cenário 3: Desmarcar todos os checkboxes com "Uncheck All"
  it('Deve desmarcar todos os checkboxes ao clicar duas vezes no botão', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/checkbox-demo');

    // Scroll até a seção de múltiplos checkboxes
    cy.xpath('//h2[contains(text(), "Multiple Checkbox Demo")]')
      .scrollIntoView({ offset: { top: -100, left: 0 }, easing: 'linear', duration: 500 });

    // Clica no botão "Check All"
    cy.xpath('//button[contains(text(), "Check All")]')
      .should('exist')
      .then(($btn) => {
        cy.wrap($btn).invoke('click');
      });

    // Clica no botão "Uncheck All"
    cy.xpath('//button[contains(text(), "Uncheck All")]')
      .should('exist')
      .then(($btn) => {
        cy.wrap($btn).invoke('click');
      });

    // Valida se todos os checkboxes foram desmarcados
    for (let i = 1; i <= 4; i++) {
      cy.get(`input[name="option${i}"]`).should('not.be.checked');
    }
  });

});
