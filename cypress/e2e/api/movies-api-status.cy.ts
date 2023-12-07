/// <reference types="cypress" />

describe("Status API",()=>{

    //context('GET /'), function(){
        it("GET Top Rated", function() {
            cy.request({
                method: 'GET',
                url: 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',
                headers: {
                    accept: 'application/json',
                    Authorization:  `Bearer ${Cypress.env('token')}`
                }
              }).then((response) => {
                // Handle the response as needed
                console.log(response.body);
                expect(response.body).to.be.property('page')
              });
        }
    )
        it.only("GET Popular", function () {
            cy.request({
                method:'GET',
                url:'https://api.themoviedb.org/3/movie/popular',
                headers:{
                    accept:'application/json',
                    Authorization: `Bearer ${bearer_token}`
                }
            }).then((response)=>{
                expect(response.status).to.be.eq(200);
                cy.log(response.body);
                expect(response.body).to.be.property('results')
                expect(response.body.results.length).to.be.greaterThan(1)
            })
        });
        
})