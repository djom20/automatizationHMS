'use strict';

module.exports = function() {

    var Given = this.Given,
        When = this.When,
        Then = this.Then;

    When(/^the user fills the ID of doctor$/, function(cb) {
        user.writeByPlaceholder('Ingrese el documento de identidad del doctor', '1110433312').then(cb);
    });

    When(/^the user fills the ID of patient$/, function(cb) {
        user.writeByPlaceholder('Ingrese el documento de identidad del paciente', '1110433314').then(cb);
    });

    When(/^the user fills the day of appointment$/, function(cb) {
        var date = new Date(),
            today = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

        user.writeOn('#datepicker', today).then(cb);
    });

    Then(/^the "([^"]*)" error should be displayed$/, function(message, cb) {
        user.finds('h3.panel-title').getText().then(function(_text) {
            expect(_text).to.be.equal(message);
        }).then(cb);
    });
};
