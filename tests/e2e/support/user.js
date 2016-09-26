'use strict';

var User = function() {

    this.goToPage = function() {
        return browser.manage().deleteAllCookies().then(function() {
            browser.get(browser.baseUrl);
        });
    };

    this.goTo = function(_slug) {
        return browser.manage().deleteAllCookies().then(function() {
            browser.get(browser.baseUrl + '/' + _slug);
        });
    };

    this.goToBack = function() {
        return brw.navigate().back();
    };

    this.clickOn = function(_el) {
        return element(by.css(_el)).click();
    };

    this.finds = function(_el) {
        return element(by.css(_el));
    };

    this.findsByName = function(_el) {
        return element(by.name(_el));
    };

    this.findsByHref = function(_el) {
        return element(by.css('a[href*="' + _el + '"]'));
    };

    this.findsByPlaceholder = function(_text) {
        return element(By.xpath("//input[@placeholder='" + _text + "']"));
    };

    this.writeOn = function(_el, _text) {
        return element(by.css(_el)).clear().sendKeys(_text);
    };

    this.writeOnByName = function(_el, _text) {
        return element(by.name(_el)).clear().sendKeys(_text);
    };

    this.writeByPlaceholder = function(_el, _text) {
        return this.findsByPlaceholder(_el).clear().sendKeys(_text);
    };

    this.createsRandonNumber = function(_size) {
        var abc = '1234567890',
            title = '';

        for (var i = 0; i < _size; i++) {
            title += abc[Math.floor((Math.random() * 10) + 1)];
        }

        return title;
    };

    this.waits = function(_time) {
        return browser.sleep((typeof _time != 'undefined') ? _time : 500);
    };

    this.textExists = function(_text) {
        return element.all(by.xpath("//*[contains(text(),'" + _text + "')]")).then(function(arr) {
            return true;
        }, function(err) {
            return false;
        });
    };

    this.addDoctor = function() {
        var _id = this.createsRandonNumber(10),
            _phone = this.createsRandonNumber(7);

        this.writeOn('#name', 'Alberto');
        this.writeOn('#last_name', 'Caceres');
        this.writeOn('#telephone', _phone);
        doctorID = _id;
        return this.writeOn('#identification', _id);
    };

    this.addPatient = function() {
        var _id = this.createsRandonNumber(10),
            _phone = this.createsRandonNumber(7);

        this.writeOnByName('name', 'Andres');
        this.writeOnByName('last_name', 'Borrero');
        this.writeOnByName('telephone', _phone);
        patientID = _id;
        this.writeOnByName('identification', _id);
        return this.findsByName('prepaid').click();
    };

    this.addRoom = function() {
        var _any = Math.round(Math.random() * (9000 - 1));

        return this.findsByName('name').clear().sendKeys(_any);
    };

    this.addHospital = function() {
        var _any = Math.round(Math.random() * (9000 - 1)),
            _phone = this.createsRandonNumber(7);

        this.findsByPlaceholder('Ingrese el código').clear().sendKeys(_any);
        this.findsByPlaceholder('Ingrese el nombre').clear().sendKeys('El carmen');
        this.findsByPlaceholder('Ingrese los apellidos').clear().sendKeys('Cra 89 #90 - 13');
        return this.findsByPlaceholder('Ingrese el teléfono').clear().sendKeys(_phone);
    };

    this.addAppointment = function() {
        var date = new Date(),
            today = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

        this.writeOn('#datepicker', today);
        this.findsByPlaceholder('Ingrese el documento de identidad del paciente').clear().sendKeys(patientID);
        return this.findsByPlaceholder('Ingrese el documento de identidad del doctor').clear().sendKeys('234324234234');
    };
};

module.exports = new User();
