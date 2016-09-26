'use strict';

module.exports = function() {

    var Given = this.Given,
        When = this.When,
        Then = this.Then;

    Given(/^the user the user is on page HMS$/, function(cb) {
        user.goToPage().then(cb);
    });

    When(/^the user clicks on add "([^"]*)"$/, function(type, cb) {
        var _class = (type !== 'Appointment') ? ('add' + type) : 'appointmentScheduling';

        user.findsByHref(_class).click().then(cb);
    });

    When(/^the user fills all fields of "([^"]*)"$/, function(type, cb) {
        switch (type) {
            case 'Doctor':
                user.addDoctor().then(cb);
                break;
            case 'Patient':
                user.addPatient().then(cb);
                break;
            case 'Room':
                user.addRoom().then(cb);
                break;
            case 'Hospital':
                user.addHospital().then(cb);
                break;
            case 'Appointment':
                user.addAppointment().then(cb);
                break;
            default:
                throw "Error, the " + type + " option is undefined";
                break;
        }
    });

    Then(/^the user clicks on save button$/, function(cb) {
        user.clickOn('.btn.btn-primary.pull-right').then(cb);
    });

    Then(/^the "([^"]*)" message should be displayed$/, function(message, cb) {
        user.finds('.panel-success .panel-body p').getText().then(function(_text) {
            expect(_text).to.be.equal(message);
        }).then(cb);
    });
};
