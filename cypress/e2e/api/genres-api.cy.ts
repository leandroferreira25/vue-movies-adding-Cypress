

describe("Check API for genres",()=>{

    it("GET movie genres from the API",function(){
        cy.request({
            method:'GET',
            url:'https://api.themoviedb.org/3/genre/movie/list',
            headers: {
                accept: 'application/json',
                Authorization: `Bearer ${Cypress.env('token')}`
            }
        }).then((response)=>{
            cy.log('',response.body);
            const arra:any = []
            response.body.genres.forEach(element => {
                cy.log(element.name);
                arra.push(element.name)
            });
            cy.log('the new array',arra)
            expect(arra).to.contain('Mystery')
        })
    })
})