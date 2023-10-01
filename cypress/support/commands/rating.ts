export function setRate(starsCount: number = 5, feedback: string) {
    cy.getByTestId(`StarRating.${starsCount}`).click()
    cy.getByTestId("RatingCard.input").type(feedback)
    cy.getByTestId("RatingCard.sendBtn").type(feedback)
}

declare global {
    namespace Cypress {
        interface Chainable {
            setRate(starsCount: number, feedback: string): Chainable<void>
        }
    }
}
