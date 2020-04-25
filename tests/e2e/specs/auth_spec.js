describe('auth', () => {
    // it('successfully loads', () => {
    //     cy.visit('http://localhost:8080') // change URL to match your dev URL
    // });

    it('redirects to login page', () => {
        cy.visit('/');
        cy.url().should('include', 'login');

        cy.get('[data-cy=email]').type('admin@gmail.com');
        cy.get('[data-cy=password]').type('somePassword');
        cy.wait(2000);

        cy.contains('Submit').click();
        cy.url().should('include', 'home');
    });

    it('logging out', () => {
        // cy.login();

        cy.wait(2000);

        cy.contains('Logout').click();
        cy.url().should('include', 'login');
    })
});
