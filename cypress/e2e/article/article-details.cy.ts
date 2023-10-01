let currentArticleId: string

describe("User open article details page", () => {
    beforeEach(() => {
        cy.login()
        cy.createArticle().then(article => {
            currentArticleId = article.id
            cy.visit(`articles/${article.id}`)
        })
    })
    afterEach(() => {
        cy.removeArticle(currentArticleId)
    })
    it("details exist", () => {
        cy.getByTestId("ArticleDetails.info").should("exist")
    })
    it("recommendations list", () => {
        cy.getByTestId("ArticleRecommendationsList").should("exist")
    })
    it("send comment", () => {
        cy.getByTestId("ArticleDetails.info")
        cy.getByTestId("AddCommentForm").scrollIntoView()
        cy.addComment("text")
        cy.getByTestId("AddCommentForm").should("have.length", 1)
    })
    it("rate article (with stub data)", () => {
        cy.intercept("GET", "**/articles/*", { fixture: "article-details.json" })
        cy.getByTestId("ArticleDetails.info")
        cy.getByTestId("RatingCard").scrollIntoView()
        cy.setRate(5, "feedback")
        cy.get("[data-selected=true]").should("have.length", 5)
    })
})
