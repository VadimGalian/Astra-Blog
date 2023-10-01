describe("User open Article list page", () => {
    beforeEach(() => {
        cy.login().then(data => {
            cy.visit("articles")
        })
    })
    it("articles is exist", () => {
        cy.getByTestId("ArticleList").should("exist")
        cy.getByTestId("ArticleListItem").should("have.length.greaterThan", 3)
    })
})
