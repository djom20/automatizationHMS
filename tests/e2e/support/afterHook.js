'use strict';

module.exports = function TakeScreenshot() {
    var fs = require('fs'),
        path = require('path');

    this.After(function(scenario, callback) {
        if (scenario.isFailed()) browser.executeScript("document.body.style.zoom='50%';");

        browser.takeScreenshot().then(function(png) {
            if (scenario.isFailed()) browser.executeScript("document.body.style.zoom='100%';");

            var decodedImage = new Buffer(png, 'base64');
            scenario.attach(decodedImage, 'image/png');

            callback();
        });
    });
};
