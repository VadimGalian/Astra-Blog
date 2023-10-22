import { selectByTestId } from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('The user is NOT authorized', () => {
        it('Navigate to the main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Navigation opens the profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('Navigation opens a non-existent route', () => {
            cy.visit('/fasfasfasf');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('The user is authorized', () => {
        beforeEach(() => {
            cy.login();
        });
        it('Navigation opens the profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });

        it('Navigation opens the page with a list of articles.', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});
