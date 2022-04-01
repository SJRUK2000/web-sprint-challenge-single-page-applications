/// tbh i actually think testing is my favorite part
describe('pizza-form', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza')
    });

    describe('add text to the box', function () {
        it('Makes sure the user can add text to the box', function () {
            cy.get('input[type=text]').type('Sean-John Reed Ubele-Knuckles');
        });
    });

    describe('selects multiple boxes', function () {
        it('Makes sure the user can select multiple boxes', function () {
            cy.get('[type="checkbox"]').check();
        });
    });

    describe('clicks the submit button', function () {
        it('Clicks the submit button and submits the form data', function () {
            cy.get('form').submit();
        });
    });
    describe('full form test', function () {
        it('Passes through Form Data, Clicks the submit button and submits the form data', function () {
            cy.get('input[type=text]').type('Sean-John Reed Ubele-Knuckles');
            cy.get('[type="checkbox"]').check();
            cy.get('form').submit();
        });
    });

});
