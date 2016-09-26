@complete @validate

Feature: The user forgot put some info in appointment's form

    Scenario: The user forgot put the day of the appointment
        Given the user the user is on page HMS
        When the user clicks on add "Appointment"
            And the user fills the ID of patient
            And the user fills the ID of doctor
        Then the user clicks on save button
            And the "Error:" error should be displayed

    Scenario: The user forgot put the ID of patient
        Given the user the user is on page HMS
        When the user clicks on add "Appointment"
            And the user fills the day of appointment
            And the user fills the ID of doctor
        Then the user clicks on save button
            And the "Error:" error should be displayed

    Scenario: The user forgot put the ID of doctor
        Given the user the user is on page HMS
        When the user clicks on add "Appointment"
            And the user fills the day of appointment
            And the user fills the ID of patient
        Then the user clicks on save button
            And the "Error:" error should be displayed