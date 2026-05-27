describe('Cypress sample spec', () => {
    it('opens the example Cypress app', () => {
        cy.visit('/');
        cy.contains('Kitchen Sink').should('be.visible');
    });
});
