@complete @adds

Feature: The user adds some info

    Scenario Outline: The user add a <text>
        Given the user the user is on page HMS
        When the user clicks on add <type>
            And the user fills all fields of <type>
        Then the user clicks on save button
            And the "Datos guardados correctamente." message should be displayed

    Examples:
        | text        | type          |
        | Doctor      | "Doctor"      |
        | Patient     | "Patient"     |
        | Room        | "Room"        |
        | Hospital    | "Hospital"    |
        | Appointment | "Appointment" |