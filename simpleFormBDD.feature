Feature: Simple Form Submission BDD

Scenario: Submit form with valid details
    Given I open the simple form page
    And I fill all the data in form
    When I click the submit button
    Then I should see a confirmation message