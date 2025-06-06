describe('Simple Form Demo', () => {

  // Cenário 1: Exibir a mensagem digitada
  it('Deve exibir a mensagem digitada', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo');

    cy.get('#user-message').type('Olá, mundo!');
    cy.get('#showInput').click();
    cy.get('#message').should('have.text', 'Olá, mundo!');
  });

  // Cenário 2: Somar dois números corretamente
  it('Deve somar corretamente dois números', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo');

    cy.get('#sum1').type('5');
    cy.get('#sum2').type('3');
    cy.get('#gettotal > button').should('be.visible').click();
    cy.get('#addmessage').should('have.text', '8');
  });

  // Cenário 3: Campo de mensagem deve permanecer vazio se nada for digitado
  it('Deve manter campo vazio se nenhuma mensagem for digitada', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo');

    cy.get('#showInput').click();
    cy.get('#message').should('have.text', '');
  });

  // Cenário 4: Deve exibir mensagem de erro ao tentar somar textos
  it('Deve exibir mensagem de erro ao tentar somar valores não numéricos', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/simple-form-demo');

    cy.get('#sum1').type('abc');
    cy.get('#sum2').type('xyz');
    cy.get('#gettotal > button').click();
    cy.get('#addmessage').should('have.text', 'Entered value is not a number');
  });

});
