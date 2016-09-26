'use strict';

var $config = {
    baseUrl: 'http://automatizacion.herokuapp.com/jolier/',
    multiCapabilities: [{
            'browserName': 'chrome',
            'name': 'chrome_desktop',
            'chromeOptions': {
                'args': ['--start-maximized'],
                'prefs': {
                    'profile.managed_default_content_settings.notifications': 1
                }
            }
        }
        // , {
        //     'browserName': 'firefox',
        //     'name': 'firefox_desktop'
        // }, {
        //     'browserName': 'safari',
        //     'name': 'safari_desktop'
        // }
    ],
    maxSessions: 1,
    specs: [
        'features/*.feature'
    ],
    allScriptsTimeout: 50000,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    cucumberOpts: {
        require: ['steps/*.js', 'support/*.js'],
        format: 'pretty',
        tags: ['@complete'],
        keepAlive: false
    },
    onPrepare: function() {
        global.user = require('./support/user');
        global.chai = require('chai');
        global.expect = chai.expect;

        //Vars
        global.doctorID = null;
        global.patientID = null;
        global.nameOfReport = null;

        browser.ignoreSynchronization = true;

        // Config promise to Chai
        chai.use(require("sinon-chai"));
        chai.use(require("chai-as-promised"));

        // Rezise the navigator
        browser.driver.manage().window().setSize(1440, 900);
        browser.driver.manage().window().maximize();
    },
    afterLaunch: function() {
        var open = require('open'),
            path = require('path'),
            dir = path.join(__dirname, '/reports/html/' + nameOfReport);

        console.log('FILE:', nameOfReport);
        console.log('OPEN:', dir);

        open("file:/" + dir);
    }
};

exports.config = $config;
