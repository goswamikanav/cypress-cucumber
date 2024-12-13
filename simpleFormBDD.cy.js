import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps";

Given('I open the simple form page', () => {
    cy.visit('https://v1.training-support.net/selenium/simple-form');
});

And("I fill all the data in form", () => {
    cy.get("#firstName").type("Kanav");
    cy.get("#lastName").type("Goswami");
    cy.get("#email").type("goswamik1221@gmail.com");
    cy.get("#number").type("9682513658");
    cy.get('[rows="2"]').type("This message is for Kanav");
});

When("I click the submit button", () => {
    cy.get("input[type='submit']").click();
});

Then("I should see a confirmation message", () => {
    cy.on("window:alert", (alertText) => {
        expect(alertText).to.equal('Thank you for submitting the form');
    });
});
