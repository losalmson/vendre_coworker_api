describe("testing people app functionality", () => {
    beforeEach(() => {
        cy.intercept("GET", "https://reqres.in/api/users*", {
            statusCode: 200,
            body: {
                page: 1,
                per_page: 6,
                total: 12,
                total_pages: 2,
                data: [
                    {
                        id: 1,
                        email: "exampel@reqres.in",
                        first_name: "Jane",
                        last_name: "Doe",
                        avatar: "https://reqres.in/img/1.jpg"
                    }
                ]
            }
        }).as('getCoworkers');
        
        cy.visit("http://localhost:5174/");
    });

    it("should get mocked coworkers", () => {
        cy.wait('@getCoworkers');
    
        cy.contains('.coworker-name', 'Jane Doe').should('exist');
    });

    it("should display mocked coworkers and show email on button click", () => {
        cy.wait('@getCoworkers');
    
        cy.contains('.coworker-name', 'Jane Doe')
            .parents('.coworker')
            .within(() => {
                cy.get('.coworker-btn').click();
                cy.get('.coworker-email').should('contain', 'exampel@reqres.in');
            });
    });
});
