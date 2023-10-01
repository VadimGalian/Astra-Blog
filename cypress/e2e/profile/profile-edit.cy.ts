let profileId: string

describe("User Open profile page", () => {
    beforeEach(() => {
        cy.login().then(data => {
            profileId = data.id
            cy.visit(`profile/${data.id}`)
        })
    })
    afterEach(() => {
        cy.resetProfile(profileId)
    })
    it("Profile card loading success", () => {
        cy.getByTestId("ProfileCard.firstname").should("have.value", "Cypress test")
    })
    it("Editiing profile card", () => {
        const newName = "cypress"
        const lastName = "the best"
        cy.updateProfile(newName, lastName)
        cy.getByTestId("ProfileCard.firstname").should("have.value", newName)
        cy.getByTestId("ProfileCard.lastname").should("have.value", lastName)
    })
})
