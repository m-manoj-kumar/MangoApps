/// <reference types = "cypress"/>

const mangoAppsElements = require("../POM/MangoAppsElements.json")

export class MangoAppsActions {

    enterUserName(enterUserName) {
        cy.get(mangoAppsElements.loginPage.userName).siblings().should('contain', 'Username').siblings().should('have.id', 'user_id')
            .clear().type(enterUserName).should('have.value', enterUserName)
    }

    enterPassWord(enterPassWord) {
        cy.get(mangoAppsElements.loginPage.passWord).siblings().should('contain', 'Password').siblings(mangoAppsElements.loginPage.passWord)
            .should('have.id', 'password').clear().type(enterPassWord).should('have.value', enterPassWord)
    }

    clickLogin() {
        cy.get(mangoAppsElements.loginPage.loginButton).should('contain', 'Login').click()
    }

    verifyHomepageNotification() {
        cy.get(mangoAppsElements.homePage.loginNotification).should('have.text', 'Get notified of news feeds, @mention and chats!')
    }

    mouseOverOnUniversalCompose() {
        cy.get(mangoAppsElements.homePage.universalCompose).realHover()
    }

    clickUpdateButton() {
        cy.get(mangoAppsElements.homePage.updateButton).should('contain', 'Update').click()
    }

    clickTo() {
        cy.get(mangoAppsElements.homePage.toElement)//.siblings().should('have.text', 'Start typing project, group name').siblings()
            .click().wait(2000)
    }

    selectAssignment(assignmentName) {
        cy.contains(assignmentName).click()
    }

    enterUpdateText(updateText) {
        cy.get(mangoAppsElements.homePage.updateText).should('have.attr', 'placeholder', 'Write your update here').click()
            .type(updateText).siblings('[name="message"]').should('have.value', updateText)
    }

    clickAttachButton() {
        cy.get(mangoAppsElements.homePage.attachButton).should('contain', 'Attach').click()
    }

    uploadFile(filePath) {
        // cy.get(mangoAppsElements.homePage.uploadFile).selectFile(filePath)
        cy.get(mangoAppsElements.homePage.uploadFile).attachFile(filePath).wait(3000)
    }

    clickUploadDoneButton() {
        cy.get(mangoAppsElements.homePage.uploadDone).should('have.text', 'Done').wait(200).trigger('click')
    }

    clickShare() {
        cy.get(mangoAppsElements.homePage.share).should('have.text', 'Share').wait(200).realClick().wait(3000)
    }

    verifyToester(toasterMessage) {
        cy.get(mangoAppsElements.homePage.toaster).should('contain', toasterMessage)
    }

    clickUnreadTab() {
        cy.get(mangoAppsElements.homePage.unreadyTab).click()
    }

    clickPrimaryTab() {
        cy.get(mangoAppsElements.homePage.unreadyTab).click()
    }

    verifyThumbnail(updateText) {
        cy.get(mangoAppsElements.homePage.editableMessage).each(ele => {
            if (ele.text() === updateText) {
                cy.wrap(ele).should('have.text', updateText).parents('.message-body').siblings('.blog-post-attachments')
                    .find('.thumb-container img').then(data => {
                        expect(data).to.have.class('thumbnail')
                    })
            }
        })
    }
}