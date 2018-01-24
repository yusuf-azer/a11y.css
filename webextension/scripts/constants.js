// CONSTANTS

// browser compatibility
const BROWSER = (function () {
	return window.msBrowser ||
		window.browser ||
		window.chrome;
})();
const BROWSER_STRING = window.chrome ? 'chrome' : 'browser';
// const STORAGE = BROWSER.storage.sync || BROWSER.storage.local;

// a11y.css web extension-specific constants
const EXTENSION_PREFIX = 'a11ycss_';
