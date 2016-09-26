'use strict';

module.exports = function JsonOutputHook() {
    var Cucumber = require('cucumber'),
        fs = require('fs'),
        path = require('path'),
        JsonFormatter = Cucumber.Listener.JsonFormatter(),
        today = new Date(),
        name = '',
        outputDirJson = path.join(__dirname, '../reports/json/'),
        outputDirHtml = path.join(__dirname, '../reports/html/'),
        timeStamp = today.getMonth() + 1 + '-' + today.getDate() + '-' + today.getFullYear() + '-' + today.getHours() + 'h-' + today.getMinutes() + 'm';

    JsonFormatter.log = function(json) {
        validFolder(outputDirJson);
        validFolder(outputDirHtml);

        browser.getCapabilities().then(function(cap) {
            name = cap.get('browserName');

            var targetJson = outputDirJson + name + '-' + timeStamp + '.json';
            fs.writeFile(targetJson, json, function(err) {
                createHtmlReport(targetJson);
            });
        });
    };

    this.registerListener(JsonFormatter);

    var createHtmlReport = function(sourceJson) {
        var CucumberHtmlReport = require('cucumber-html-report'),
            report = new CucumberHtmlReport({
                source: sourceJson,
                dest: outputDirHtml,
                name: 'report-' + timeStamp + '.html'
            });

        nameOfReport = 'report-' + timeStamp + '.html';

        report.createReport();
    };

    var validFolder = function(_dir) {
        if (!fs.existsSync(_dir)) {
            fs.mkdirSync(_dir);
        }
    };
};
