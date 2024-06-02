// cypress/integration/coworkers_spec.js

describe('Coworkers Page', () => {
    const apiUrl = 'https://reqres.in/api/users';
    const firstPageResponse = {
      page: 1,
      per_page: 6,
      total: 12,
      total_pages: 2,
      data: [
        { id: 1, email: "email1@example.com", first_name: "John", last_name: "Doe", avatar: "https://reqres.in/img/faces/1-image.jpg" },
        { id: 2, email: "email2@example.com", first_name: "Jane", last_name: "Doe", avatar: "https://reqres.in/img/faces/2-image.jpg" },
        // Add more coworker data as needed for the first page
      ]
    };
  
    const secondPageResponse = {
      page: 2,
      per_page: 6,
      total: 12,
      total_pages: 2,
      data: [
        { id: 7, email: "email7@example.com", first_name: "Alice", last_name: "Smith", avatar: "https://reqres.in/img/faces/7-image.jpg" },
        { id: 8, email: "email8@example.com", first_name: "Bob", last_name: "Smith", avatar: "https://reqres.in/img/faces/8-image.jpg" },
        // Add more coworker data as needed for the second page
      ]
    };
  
    it('fetches and displays coworkers for both pages', () => {
      // Intercept the API calls and mock the responses
      cy.intercept(`${apiUrl}?page=1`, firstPageResponse).as('getFirstPage');
      cy.intercept(`${apiUrl}?page=2`, secondPageResponse).as('getSecondPage');
  
      // Visit the page
      cy.visit('/');
  
      // Wait for the first API call and check the response
      cy.wait('@getFirstPage').then((interception) => {
        expect(interception.response.body.page).to.eq(1);
        expect(interception.response.body.data.length).to.be.greaterThan(0);
      });
  
      // Check that the first page coworkers are displayed
      cy.get('.coworker').should('have.length', firstPageResponse.data.length);
  
      // Click the "Next" button to go to the second page
      cy.contains('button', 'Next').click();
  
      // Wait for the second API call and check the response
      cy.wait('@getSecondPage').then((interception) => {
        expect(interception.response.body.page).to.eq(2);
        expect(interception.response.body.data.length).to.be.greaterThan(0);
      });
  
      // Check that the second page coworkers are displayed
      cy.get('.coworker').should('have.length', secondPageResponse.data.length);
    });
  });
  