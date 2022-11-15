describe('ai_questionnaire', () => {
  it('passes', () => {
    const date = new Date();

    cy.intercept('/assets/questionnaire/en.json', {
      fixture: 'questionnaire_ai.json',
    }).as('getQuestionnaire');

    cy.intercept('api/donate', (req) => {
      req.reply();
      expect('Unexpected Https call').to.be.false;
    }).as('dataDonation');

    cy.visit('http://localhost:3333', {
      onBeforeLoad: (win) => {
        win.sessionStorage.clear();
      },
    });
    cy.contains('Start questionnaire').click();
    cy.contains('button_disclaimer_continue').click();
    cy.wait('@getQuestionnaire');

    cy.contains('upload_picture');

    cy.get('input[type=file]').selectFile({
      contents: cy.fixture('images/monkeypox.png'),
    });

    cy.clickNextButton();

    cy.contains(
      'No, I do not want to transfer my data and I only want to see my recommended action'
    ).click();
    // cy.contains('Yes, ').click();
    cy.clickNextButton();

    cy.wait(200);

    cy.contains('Show your answers to a doctor').click();
    cy.contains('View answers and QR code').click();

    cy.contains(date.toLocaleDateString());
  });
});
