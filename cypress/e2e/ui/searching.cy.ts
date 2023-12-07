
const movie_id:string = '1375';
let movie_title:string ;

describe("Check toggler search is working",()=>{
    beforeEach(()=>{
        cy.visit(`${Cypress.env("localhost")}`);
        cy.request({
            method:'GET',
            url:`https://api.themoviedb.org/3/movie/${movie_id}`,
            headers:{
                accept:'application/json',
                Authorization: `Bearer ${Cypress.env('token')}`
            }
        }).then((response)=>{
            cy.log('', response.body.original_title);
            movie_title = response.body.original_title;
        });
    });
    it("Toggle search expanded on click",()=>{
        cy.get('button[class="search-toggle"]').as('searchButton')
        .should('have.attr','aria-expanded', 'false');
        cy.get('@searchButton').click()
        .should('have.attr','aria-expanded', 'true');
    });
    it.only("Search Movie",()=>{
        cy.get('button[class="search-toggle"]').click();
        cy.get('input[id="search"]').type('Rocky 5');
        cy.get('div[class="listing__items"]').find('h2')
        .should('contain', movie_title)
    })
})
