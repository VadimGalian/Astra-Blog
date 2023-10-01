import { selectByTestId } from "cypress/helpers/selectByTestId"

describe("Routing", () => {
    describe("User is unauthorized", () => {
        it("Visit main page", () => {
            cy.visit("/")
            cy.get(selectByTestId("MainPage")).should("exist")
        })
        it("Open profile page", () => {
            cy.visit("/profile/1")
            cy.get(selectByTestId("MainPage")).should("exist")
        })
        it("Open non-existant page", () => {
            cy.visit("/dsadsa")
            cy.get(selectByTestId("NotFoundPage")).should("exist")
        })
    })
    describe("User is authorized", () => {
        beforeEach(() => {
            cy.login()
        })
        it("Open profile page", () => {
            cy.visit("/profile/1")
            cy.get(selectByTestId("ProfilePage")).should("exist")
        })
        it("Open articles page", () => {
            cy.visit("/articles")
            cy.get(selectByTestId("ArticlesPage")).should("exist")
        })
    })
})
