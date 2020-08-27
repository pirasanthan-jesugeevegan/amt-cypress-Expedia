Feature: Stays Functionality

    As a user
    I would like to search for hotel deals
    So that I can book a hotel deal

    Background: navigate to stay page
        Given the user navigates to stays page


    Scenario Outline: TC001 - Verify that the stay screen contains <elementName> elements
        Given the field '<elements>' is visible
        Then the user navigates to 'home'
        Examples: elements
            | elementName                   | elements      |
            | email textbox                 | destination   |
            | Password textbox              | departureDate |
            | Sign in button                | arrivalDate   |
            | Keep me signed in check box   | addFlight     |
            | Forgot password link          | addCar        |
            | Create an account with google | travellers    |
            | Create an account with Apple  | search        |

    @E2E @TC002
    Scenario: TC002 - Verify if a user will be able to successfully search with a valid data
        Given the user is on stay page
        When the user enters
            | Location | CheckIn | Checkout | Adult | Children |
            | London   | 25      | 31       | 3     | 1        |
        And the user clicks on Search button
        Then "London (and vicinity), England, United Kingdom" should be shown

    @TC003 @Negitave
    Scenario:  TC003 - Verify if a user will not be able to book a flight without location
        Given the user is on stay page
        When the user enters
            | Location | CheckIn | Checkout | Adult | Children |
            |          | 25      | 31       | 3     | 1        |
        And the user clicks on Search button
        Then the field 'errorMessage' contains 'Please select a destination'

    @E2E @TC004
    Scenario: TC004 - Verify if a user is able to filter deals
        Given the user is on stay page
        When the user enters
            | Location | CheckIn | Checkout | Adult | Children |
            | London   | 25      | 31       | 3     | 1        |
        And the user clicks on Search button
        And "London (and vicinity), England, United Kingdom" should be shown
        And the user selects "4" starts
        Then the user selects the first deal