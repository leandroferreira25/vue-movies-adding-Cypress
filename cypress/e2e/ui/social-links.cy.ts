describe("Check links in the footer", ()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env("localhost")}`);
        cy.log(`${Cypress.env('token')}`)
    });
    it("Twiter link in footer",()=>{
        cy.get('a[aria-label="Link to Twitter account"]')
        .should('have.attr','href','https://twitter.com/jasonujmaalvis')
        //.invoke('removeAttr','target').click()
        //cy.wait(4000);
    });
    it("GitHub link in footer",()=>{
        cy.get('a[aria-label="Link to GitHub account"]')
        .should('have.attr','href','https://github.com/jasonujmaalvis')
        //.invoke('removeAttr','target').click();
    });
    it("LinkedIn link in footer",()=>{
        cy.get('a[aria-label="Link to LinkedIn account"]')
        .should('have.attr','href','https://www.linkedin.com/in/jason-ujma-alvis')
    });
    it("Mail link in footer", ()=>{
        cy.get('a[aria-label="Link to Email"]')
        .should('have.attr','href','mailto:hello@jason.codes')
    });
})