Feature: PDF/PPTx document update and sharing with assignment

    This feature allows the user to update the PDF/PPTx file and share the file with available assignments

    Scenario: Update the assignment with document
        Given The MangoApps site URL
        And Validated the page TITLE and URL
        Then Entered valid username and password
        And Clicked on login button
        And Validated the TITLE and URL after login
        When hovering over the edit button
        Then Click on UPDATE button in the popup
        And Select "Assignment 1" in To filed
        And Provided the necessary text in YOUR UPDATE field
        And Attched a PDF file
        And Clicked on SHARE button
        Then Verfied the uploaded PDF file thumbnail