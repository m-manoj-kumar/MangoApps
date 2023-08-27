import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { MangoAppsActions } from "../../POM/MangoAppsActions"
const MangoAppsTestData = require("../../fixtures/MangoAppsTestData.json")

const MangoAppsMethods = new MangoAppsActions()

Given("The MangoApps site URL", () => {
    cy.visit("/")
})

And("Validated the page TITLE and URL", () => {
    cy.title().should('contain', 'siddasia Employee Intranet & Portal Login')
    cy.url().should('include', MangoAppsTestData.siteUrl)
})

Then("Entered valid username and password", () => {
    MangoAppsMethods.enterUserName(MangoAppsTestData.userName)
    MangoAppsMethods.enterPassWord(MangoAppsTestData.password)
})

And("Clicked on login button", () => {
    MangoAppsMethods.clickLogin()
})

And("Validated the TITLE and URL after login", () => {
    cy.title().should('contain', 'News Feed - siddasia')
    cy.url().should('include', MangoAppsTestData.homePage)
    // MangoAppsMethods.verifyHomepageNotification()
})

When("hovering over the edit button", () => {
    MangoAppsMethods.mouseOverOnUniversalCompose()
})

Then("Click on UPDATE button in the popup", () => {
    MangoAppsMethods.clickUpdateButton()
})

And("Select {string} in To filed", (assignmentName) => {
    MangoAppsMethods.clickTo()
    MangoAppsMethods.selectAssignment(assignmentName)
})

And("Provided the necessary text in YOUR UPDATE field", () => {
    MangoAppsMethods.enterUpdateText(MangoAppsTestData.updateText)
})

And("Attched a PDF file", () => {
    MangoAppsMethods.clickAttachButton()
    MangoAppsMethods.uploadFile(MangoAppsTestData.filePath)
    MangoAppsMethods.clickUploadDoneButton()
})

And("Clicked on SHARE button", () => {
    MangoAppsMethods.clickShare()
    MangoAppsMethods.verifyToester(MangoAppsTestData.toasterMessage)
})

Then("Verfied the uploaded PDF file thumbnail", () => {
    cy.wait(3000)
    // MangoAppsMethods.clickUnreadTab()
    // cy.wait(5000)
    // MangoAppsMethods.clickPrimaryTab()
    cy.reload()
    MangoAppsMethods.verifyThumbnail(MangoAppsTestData.updateText)
})