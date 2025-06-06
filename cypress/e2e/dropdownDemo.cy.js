describe('Dropdown List Demo', () => {

  // Cenário 1: Selecionar "Wednesday" e validar mensagem
  it('Deve selecionar "Wednesday" e exibir a mensagem correta', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');

    cy.get('#select-demo').select('Wednesday');
    cy.get('#select-demo').select('Wednesday'); // Garantia de mudança
    cy.get('.selected-value', { timeout: 3000 })
      .should('contain.text', 'Day selected :- Wednesday');
  });

  // Cenário 2: Validar que nenhuma mensagem aparece sem seleção
  it('Não deve exibir mensagem se nenhuma opção for selecionada', () => {
    cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');

    cy.get('.selected-value').should('have.text', '');
  });

  // Cenário 3: Validar todos os dias da semana
  it('Deve validar todos os dias da semana no dropdown', () => {
    const dias = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

    cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');

    dias.forEach(dia => {
      cy.get('#select-demo').select(dia);
      cy.get('#select-demo').select(dia);
      cy.get('.selected-value').should('contain.text', `Day selected :- ${dia}`);
    });
  });

  // Testes com Multi Select Option
  describe('Testes com Multi Select Option', () => {
    beforeEach(() => {
      cy.visit('https://www.lambdatest.com/selenium-playground/select-dropdown-demo');
    });

    it('Deve selecionar duas opções e validar First e Last Selected', () => {

      // Scroll para o elemento de múltipla seleção
      cy.get('#multi-select')
        .scrollIntoView({ offset: { top: -100, left: 0 }, easing: 'linear', duration: 500 });

      // Clica em "Florida" (primeira seleção)
      cy.get('#multi-select')
        .contains('Florida')
        .click();

      // Clica no botão "First Selected" simulando evento de mouse
      cy.contains('First Selected').then($btn => {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true
        });
        $btn[0].dispatchEvent(clickEvent);
      });

      // Valida o texto de "First Selected"
      cy.contains('First selected option is : Florida').should('be.visible');

      // Clica em "Ohio" (última seleção)
      cy.get('#multi-select')
        .contains('Ohio')
        .click();

      // Clica no botão "Get Last Selected" simulando evento de mouse
      cy.contains('Get Last Selected').then($btn => {
        const clickEvent = new MouseEvent('click', {
          view: window,
          bubbles: true,
          cancelable: true
        });
        $btn[0].dispatchEvent(clickEvent);
      });

      // Valida o texto de "Last Selected"
      cy.contains('Last selected option is : Ohio').should('be.visible');
    });
  });

});
