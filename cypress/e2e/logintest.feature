Feature: Login Page

    Feature Page where the user can Login
    Scenario: Success Login
    Given A user enters to the login Page
    When A user enters the user "el_luna_ren2430@hotmail.com"
    And A user enters the password "123456"
    And A user clicks on the login button
    Then A user will be logged in
    

    Scenario: Login with invalid user
    Given A user enters to the login Page
    When A user enters the user "123@hotmail.com"
    And A user enters the password "1234567"
    And A user clicks on the login button
    Then A user will receive a invalid user