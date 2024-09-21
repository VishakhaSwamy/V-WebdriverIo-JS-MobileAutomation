Feature: Login Functionality

 Scenario Outline: Login with "<ScenarioName>"
    Given I am on app login Page
    When I login with "<Username>" and "<Password>"
    Then I see "<ExpectedText>" on the page after clicking Login button

  Examples:
  | ScenarioName    | Username          | Password | ExpectedText                                                |
  | LOCKED          | alice@example.com | 10203040 | Sorry, this user has been locked out.                       |
  | NO_MATCH        | 1@2.com           | f-o-o    | Provided credentials do not match any user in this service. |
  | NO_USER_DETAILS |                   |          | Username is required                                        |
  | NO_PASSWORD     | bob@example.com   |          | Password is required                                        |
  | STANDARD        | bob@example.com   | 10203040 | Products                                                    |
