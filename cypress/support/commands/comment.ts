export function addComment(text: string) {
    cy.getByTestId("AddCommentForm.input").type(text)
    cy.getByTestId("AddCommentForm.sendBtn").click()
}

declare global {
    namespace Cypress {
        interface Chainable {
            addComment(text: string): Chainable<void>
        }
    }
}
