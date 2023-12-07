describe("",()=>{
    beforeEach(()=>{
        cy.viewport(1280, 720);
        cy.visit(`${Cypress.env("localhost")}`);
    });
    it("Watch Trailer iFrame",()=>{
        cy.get('div[class="modal modal--iframe"]')
        .should('not.exist')
        cy.get('button[class="button button--icon trailer_TYfa+"]')
        .click();

        cy.get('iframe').should('be.visible') // Assert the iframe is visible on the page
        .and('have.attr','src')
        .and('match',/https:\/\/www\.youtube\.com\/.*\/.*/);
        cy.get('button[class="modal__close"]').click();
    })
})