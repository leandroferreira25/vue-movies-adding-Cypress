describe("Nav links to correct pages",()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env("localhost")}`);
    });
    it("nav to link movie",()=>{
        cy.get('a[href="/movie"]').click();
        cy.url().should('contain', 'movie');  
        cy.title().should('include','movie')      
    });
    it("nav to link tv",()=>{
        cy.get('a[href="/tv"]').click();
        cy.url().should('contain', 'tv');
        cy.title().should('include','TV Shows')
    });
    it("nav to link home",()=>{
        cy.get('a[href="/"]').click();
        cy.url().should('contain', '/')
        cy.title().should('include','Browse Movies')
    });
})