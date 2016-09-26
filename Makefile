default: qa-e2e-local

qa-e2e-local:
	clear && npm run e2e-local

install-drivers:
	clear && sudo selenium-standalone install --drivers.chrome.version=2.21 --drivers.chrome.baseURL=https://chromedriver.storage.googleapis.com

update-drivers-to-protractor:
	clear && sudo ./node_modules/protractor/bin/webdriver-manager update


PHONY: qa-e2e-local
