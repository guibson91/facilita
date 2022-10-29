(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~panel-pages-evaluation-evaluation-list-evaluation-list-module~panel-pages-order-order-list-o~5a45d9c2"],{

/***/ "./node_modules/print-js/dist/print.js":
/*!*********************************************!*\
  !*** ./node_modules/print-js/dist/print.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(/*! ./sass/index.scss */ "./src/sass/index.scss");

var _init = __webpack_require__(/*! ./js/init */ "./src/js/init.js");

var _init2 = _interopRequireDefault(_init);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var printJS = _init2.default.init;

if (typeof window !== 'undefined') {
  window.printJS = printJS;
}

exports.default = printJS;

/***/ }),

/***/ "./src/js/browser.js":
/*!***************************!*\
  !*** ./src/js/browser.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Browser = {
  // Firefox 1.0+
  isFirefox: function isFirefox() {
    return typeof InstallTrigger !== 'undefined';
  },
  // Internet Explorer 6-11
  isIE: function isIE() {
    return navigator.userAgent.indexOf('MSIE') !== -1 || !!document.documentMode;
  },
  // Edge 20+
  isEdge: function isEdge() {
    return !Browser.isIE() && !!window.StyleMedia;
  },
  // Chrome 1+
  isChrome: function isChrome() {
    var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : window;

    return !!context.chrome;
  },
  // At least Safari 3+: "[object HTMLElementConstructor]"
  isSafari: function isSafari() {
    return Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0 || navigator.userAgent.toLowerCase().indexOf('safari') !== -1;
  }
};

exports.default = Browser;

/***/ }),

/***/ "./src/js/functions.js":
/*!*****************************!*\
  !*** ./src/js/functions.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.addWrapper = addWrapper;
exports.capitalizePrint = capitalizePrint;
exports.collectStyles = collectStyles;
exports.loopNodesCollectStyles = loopNodesCollectStyles;
exports.addHeader = addHeader;
function addWrapper(htmlData, params) {
  var bodyStyle = 'font-family:' + params.font + ' !important; font-size: ' + params.font_size + ' !important; width:100%;';
  return '<div style="' + bodyStyle + '">' + htmlData + '</div>';
}

function capitalizePrint(obj) {
  return obj.charAt(0).toUpperCase() + obj.slice(1);
}

function collectStyles(element, params) {
  var win = document.defaultView || window;

  // String variable to hold styling for each element
  var elementStyle = '';

  // Loop over computed styles
  var styles = win.getComputedStyle(element, '');

  Object.keys(styles).map(function (key) {
    // Check if style should be processed
    if (params.targetStyles.indexOf('*') !== -1 || params.targetStyle.indexOf(styles[key]) !== -1 || targetStylesMatch(params.targetStyles, styles[key])) {
      if (styles.getPropertyValue(styles[key])) elementStyle += styles[key] + ':' + styles.getPropertyValue(styles[key]) + ';';
    }
  });

  // Print friendly defaults
  elementStyle += 'max-width: ' + params.maxWidth + 'px !important;' + params.font_size + ' !important;';

  return elementStyle;
}

function targetStylesMatch(styles, value) {
  for (var i = 0; i < styles.length; i++) {
    if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value.indexOf(styles[i]) !== -1) return true;
  }
  return false;
}

function loopNodesCollectStyles(elements, params) {
  for (var n = 0; n < elements.length; n++) {
    var currentElement = elements[n];

    // Check if we are skiping this element
    if (params.ignoreElements.indexOf(currentElement.getAttribute('id')) !== -1) {
      currentElement.parentNode.removeChild(currentElement);
      continue;
    }

    // Form Printing - check if is element Input
    var tag = currentElement.tagName;
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') {
      // Save style to variable
      var textStyle = collectStyles(currentElement, params);

      // Remove INPUT element and insert a text node
      var parent = currentElement.parentNode;

      // Get text value
      var textNode = tag === 'SELECT' ? document.createTextNode(currentElement.options[currentElement.selectedIndex].text) : document.createTextNode(currentElement.value);

      // Create text element
      var textElement = document.createElement('div');
      textElement.appendChild(textNode);

      // Add style to text
      textElement.setAttribute('style', textStyle);

      // Add text
      parent.appendChild(textElement);

      // Remove input
      parent.removeChild(currentElement);
    } else {
      // Get all styling for print element
      currentElement.setAttribute('style', collectStyles(currentElement, params));
    }

    // Check if more elements in tree
    var children = currentElement.children;

    if (children && children.length) {
      loopNodesCollectStyles(children, params);
    }
  }
}

function addHeader(printElement, header, headerStyle) {
  // Create header element
  var headerElement = document.createElement('h1');

  // Create header text node
  var headerNode = document.createTextNode(header);

  // Build and style
  headerElement.appendChild(headerNode);
  headerElement.setAttribute('style', headerStyle);

  printElement.insertBefore(headerElement, printElement.childNodes[0]);
}

/***/ }),

/***/ "./src/js/html.js":
/*!************************!*\
  !*** ./src/js/html.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _functions = __webpack_require__(/*! ./functions */ "./src/js/functions.js");

var _print = __webpack_require__(/*! ./print */ "./src/js/print.js");

var _print2 = _interopRequireDefault(_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  print: function print(params, printFrame) {
    // Get HTML printable element
    var printElement = document.getElementById(params.printable);

    // Check if element exists
    if (!printElement) {
      window.console.error('Invalid HTML element id: ' + params.printable);

      return false;
    }

    // Make a copy of the printElement to prevent DOM changes
    var printableElement = document.createElement('div');
    printableElement.appendChild(printElement.cloneNode(true));

    // Add cloned element to DOM, to have DOM element methods available. It will also be easier to colect styles
    printableElement.setAttribute('style', 'height:0; overflow:hidden;');
    printableElement.setAttribute('id', 'printJS-html');
    printElement.parentNode.appendChild(printableElement);

    // Update printableElement variable with newly created DOM element
    printableElement = document.getElementById('printJS-html');

    // Process html styles
    if (params.scanStyles === true) {
      // Optional - include margin and padding
      if (params.honorMarginPadding) params.targetStyles.push('margin', 'padding');

      // Optional - include color
      if (params.honorColor) params.targetStyles.push('color');

      // Get main element styling
      printableElement.setAttribute('style', (0, _functions.collectStyles)(printableElement, params) + 'margin:0 !important;');

      // Get all children elements
      var elements = printableElement.children;

      // Get styles for all children elements
      (0, _functions.loopNodesCollectStyles)(elements, params);
    }

    // Add header
    if (params.header) {
      (0, _functions.addHeader)(printableElement, params.header, params.headerStyle);
    }

    // Remove DOM printableElement
    printableElement.parentNode.removeChild(printableElement);

    // Store html data
    params.htmlData = (0, _functions.addWrapper)(printableElement.innerHTML, params);

    // Print html element contents
    _print2.default.send(params, printFrame);
  }
};

/***/ }),

/***/ "./src/js/image.js":
/*!*************************!*\
  !*** ./src/js/image.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _functions = __webpack_require__(/*! ./functions */ "./src/js/functions.js");

var _print = __webpack_require__(/*! ./print */ "./src/js/print.js");

var _print2 = _interopRequireDefault(_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  print: function print(params, printFrame) {
    // Check if we are printing one image or multiple images
    if (params.printable.constructor !== Array) {
      // Create array with one image
      params.printable = [params.printable];
    }

    // Create printable element (container)
    var printableElement = document.createElement('div');
    printableElement.setAttribute('style', 'width:100%');

    // Load images and append
    loadImagesAndAppendToPrintableElement(printableElement, params).then(function () {
      // Check if we are adding a header
      if (params.header) (0, _functions.addHeader)(printableElement, params.header, params.headerStyle);

      // Store html data
      params.htmlData = printableElement.outerHTML;

      // Print image
      _print2.default.send(params, printFrame);
    });
  }
};


function loadImagesAndAppendToPrintableElement(printableElement, params) {
  var promises = [];

  params.printable.forEach(function (image, index) {
    // Create the image element
    var img = document.createElement('img');

    // Set image src with image file url
    img.src = image;

    // Load image
    promises.push(loadImageAndAppendToPrintableElement(printableElement, params, img, index));
  });

  return Promise.all(promises);
}

function loadImageAndAppendToPrintableElement(printableElement, params, img, index) {
  return new Promise(function (resolve) {
    img.onload = function () {
      // Create image wrapper
      var imageWrapper = document.createElement('div');
      imageWrapper.setAttribute('style', params.imageStyle);

      img.setAttribute('style', 'width:100%;');
      img.setAttribute('id', 'printableImage' + index);

      // Append image to wrapper element
      imageWrapper.appendChild(img);

      // Append wrapper element to printable element
      printableElement.appendChild(imageWrapper);

      resolve();
    };
  });
}

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _browser = __webpack_require__(/*! ./browser */ "./src/js/browser.js");

var _browser2 = _interopRequireDefault(_browser);

var _modal = __webpack_require__(/*! ./modal */ "./src/js/modal.js");

var _modal2 = _interopRequireDefault(_modal);

var _pdf = __webpack_require__(/*! ./pdf */ "./src/js/pdf.js");

var _pdf2 = _interopRequireDefault(_pdf);

var _html = __webpack_require__(/*! ./html */ "./src/js/html.js");

var _html2 = _interopRequireDefault(_html);

var _image = __webpack_require__(/*! ./image */ "./src/js/image.js");

var _image2 = _interopRequireDefault(_image);

var _json = __webpack_require__(/*! ./json */ "./src/js/json.js");

var _json2 = _interopRequireDefault(_json);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var printTypes = ['pdf', 'html', 'image', 'json'];

exports.default = {
  init: function init() {
    var params = {
      printable: null,
      fallbackPrintable: null,
      type: 'pdf',
      header: null,
      headerStyle: 'font-weight: 300;',
      maxWidth: 800,
      font: 'TimesNewRoman',
      font_size: '12pt',
      honorMarginPadding: true,
      honorColor: false,
      properties: null,
      gridHeaderStyle: 'font-weight: bold; padding: 5px; border: 1px solid #dddddd;',
      gridStyle: 'border: 1px solid lightgray; margin-bottom: -1px;',
      showModal: false,
      onError: function onError(error) {
        throw error;
      },
      onLoadingStart: null,
      onLoadingEnd: null,
      onPrintDialogClose: null,
      onPdfOpen: null,
      modalMessage: 'Retrieving Document...',
      frameId: 'printJS',
      htmlData: '',
      documentTitle: 'Document',
      targetStyle: ['clear', 'display', 'width', 'min-width', 'height', 'min-height', 'max-height'],
      targetStyles: ['border', 'box', 'break', 'text-decoration'],
      ignoreElements: [],
      imageStyle: 'width:100%;',
      repeatTableHeader: true,
      css: null,
      style: null,
      scanStyles: true

      // Check if a printable document or object was supplied
    };var args = arguments[0];
    if (args === undefined) throw new Error('printJS expects at least 1 attribute.');

    // Process parameters
    switch (typeof args === 'undefined' ? 'undefined' : _typeof(args)) {
      case 'string':
        params.printable = encodeURI(args);
        params.fallbackPrintable = params.printable;
        params.type = arguments[1] || params.type;
        break;
      case 'object':
        params.printable = args.printable;
        params.fallbackPrintable = typeof args.fallbackPrintable !== 'undefined' ? args.fallbackPrintable : params.printable;
        params.type = typeof args.type !== 'undefined' ? args.type : params.type;
        params.frameId = typeof args.frameId !== 'undefined' ? args.frameId : params.frameId;
        params.header = typeof args.header !== 'undefined' ? args.header : params.header;
        params.headerStyle = typeof args.headerStyle !== 'undefined' ? args.headerStyle : params.headerStyle;
        params.maxWidth = typeof args.maxWidth !== 'undefined' ? args.maxWidth : params.maxWidth;
        params.font = typeof args.font !== 'undefined' ? args.font : params.font;
        params.font_size = typeof args.font_size !== 'undefined' ? args.font_size : params.font_size;
        params.honorMarginPadding = typeof args.honorMarginPadding !== 'undefined' ? args.honorMarginPadding : params.honorMarginPadding;
        params.properties = typeof args.properties !== 'undefined' ? args.properties : params.properties;
        params.gridHeaderStyle = typeof args.gridHeaderStyle !== 'undefined' ? args.gridHeaderStyle : params.gridHeaderStyle;
        params.gridStyle = typeof args.gridStyle !== 'undefined' ? args.gridStyle : params.gridStyle;
        params.showModal = typeof args.showModal !== 'undefined' ? args.showModal : params.showModal;
        params.onError = typeof args.onError !== 'undefined' ? args.onError : params.onError;
        params.onLoadingStart = typeof args.onLoadingStart !== 'undefined' ? args.onLoadingStart : params.onLoadingStart;
        params.onLoadingEnd = typeof args.onLoadingEnd !== 'undefined' ? args.onLoadingEnd : params.onLoadingEnd;
        params.onPrintDialogClose = typeof args.onPrintDialogClose !== 'undefined' ? args.onPrintDialogClose : params.onPrintDialogClose;
        params.onPdfOpen = typeof args.onPdfOpen !== 'undefined' ? args.onPdfOpen : params.onPdfOpen;
        params.modalMessage = typeof args.modalMessage !== 'undefined' ? args.modalMessage : params.modalMessage;
        params.documentTitle = typeof args.documentTitle !== 'undefined' ? args.documentTitle : params.documentTitle;
        params.targetStyle = typeof args.targetStyle !== 'undefined' ? args.targetStyle : params.targetStyle;
        params.targetStyles = typeof args.targetStyles !== 'undefined' ? args.targetStyles : params.targetStyles;
        params.ignoreElements = typeof args.ignoreElements !== 'undefined' ? args.ignoreElements : params.ignoreElements;
        params.imageStyle = typeof args.imageStyle !== 'undefined' ? args.imageStyle : params.imageStyle;
        params.repeatTableHeader = typeof args.repeatTableHeader !== 'undefined' ? args.repeatTableHeader : params.repeatTableHeader;
        params.css = typeof args.css !== 'undefined' ? args.css : params.css;
        params.style = typeof args.style !== 'undefined' ? args.style : params.style;
        params.scanStyles = typeof args.scanStyles !== 'undefined' ? args.scanStyles : params.scanStyles;
        break;
      default:
        throw new Error('Unexpected argument type! Expected "string" or "object", got ' + (typeof args === 'undefined' ? 'undefined' : _typeof(args)));
    }

    // Validate printable
    if (!params.printable) throw new Error('Missing printable information.');

    // Validate type
    if (!params.type || typeof params.type !== 'string' || printTypes.indexOf(params.type.toLowerCase()) === -1) {
      throw new Error('Invalid print type. Available types are: pdf, html, image and json.');
    }

    // Check if we are showing a feedback message to the user (useful for large files)
    if (params.showModal) _modal2.default.show(params);

    // Check for a print start hook function
    if (params.onLoadingStart) params.onLoadingStart();

    // To prevent duplication and issues, remove any used printFrame from the DOM
    var usedFrame = document.getElementById(params.frameId);

    if (usedFrame) usedFrame.parentNode.removeChild(usedFrame);

    // Create a new iframe or embed element (IE prints blank pdf's if we use iframe)
    var printFrame = void 0;

    // Create iframe element
    printFrame = document.createElement('iframe');

    // Hide iframe
    printFrame.setAttribute('style', 'visibility: hidden; height: 0; width: 0; position: absolute;');

    // Set iframe element id
    printFrame.setAttribute('id', params.frameId);

    // For non pdf printing, pass an html document string to srcdoc (force onload callback)
    if (params.type !== 'pdf') {
      printFrame.srcdoc = '<html><head><title>' + params.documentTitle + '</title>';

      // Attach css files
      if (params.css !== null) {
        // Add support for single file
        if (!Array.isArray(params.css)) params.css = [params.css];

        // Create link tags for each css file
        params.css.forEach(function (file) {
          printFrame.srcdoc += '<link rel="stylesheet" href="' + file + '">';
        });
      }

      printFrame.srcdoc += '</head><body></body></html>';
    }

    // Check printable type
    switch (params.type) {
      case 'pdf':
        // Check browser support for pdf and if not supported we will just open the pdf file instead
        if (_browser2.default.isFirefox() || _browser2.default.isEdge() || _browser2.default.isIE()) {
          try {
            console.info('PrintJS currently doesn\'t support PDF printing in Firefox, Internet Explorer and Edge.');
            var win = window.open(params.fallbackPrintable, '_blank');
            win.focus();
            if (params.onPdfOpen) params.onPdfOpen();
          } catch (e) {
            params.onError(e);
          } finally {
            // Make sure there is no loading modal opened
            if (params.showModal) _modal2.default.close();
            if (params.onLoadingEnd) params.onLoadingEnd();
          }
        } else {
          _pdf2.default.print(params, printFrame);
        }
        break;
      case 'image':
        _image2.default.print(params, printFrame);
        break;
      case 'html':
        _html2.default.print(params, printFrame);
        break;
      case 'json':
        _json2.default.print(params, printFrame);
        break;
    }
  }
};

/***/ }),

/***/ "./src/js/json.js":
/*!************************!*\
  !*** ./src/js/json.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _functions = __webpack_require__(/*! ./functions */ "./src/js/functions.js");

var _print = __webpack_require__(/*! ./print */ "./src/js/print.js");

var _print2 = _interopRequireDefault(_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  print: function print(params, printFrame) {
    // Check if we received proper data
    if (_typeof(params.printable) !== 'object') {
      throw new Error('Invalid javascript data object (JSON).');
    }

    // Validate repeatTableHeader
    if (typeof params.repeatTableHeader !== 'boolean') {
      throw new Error('Invalid value for repeatTableHeader attribute (JSON).');
    }

    // Validate properties
    if (!params.properties || !Array.isArray(params.properties)) {
      throw new Error('Invalid properties array for your JSON data.');
    }

    // We will format the property objects to keep the JSON api compatible with older releases
    params.properties = params.properties.map(function (property) {
      return {
        field: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' ? property.field : property,
        displayName: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' ? property.displayName : property,
        columnSize: (typeof property === 'undefined' ? 'undefined' : _typeof(property)) === 'object' && property.columnSize ? property.columnSize + ';' : 100 / params.properties.length + '%;'
      };
    });

    // Variable to hold the html string
    var htmlData = '';

    // Check if there is a header on top of the table
    if (params.header) htmlData += '<h1 style="' + params.headerStyle + '">' + params.header + '</h1>';

    // Build the printable html data
    htmlData += jsonToHTML(params);

    // Store the data
    params.htmlData = (0, _functions.addWrapper)(htmlData, params);

    // Print the json data
    _print2.default.send(params, printFrame);
  }
};


function jsonToHTML(params) {
  // Get the row and column data
  var data = params.printable;
  var properties = params.properties;

  // Create a html table
  var htmlData = '<table style="border-collapse: collapse; width: 100%;">';

  // Check if the header should be repeated
  if (params.repeatTableHeader) {
    htmlData += '<thead>';
  }

  // Add the table header row
  htmlData += '<tr>';

  // Add the table header columns
  for (var a = 0; a < properties.length; a++) {
    htmlData += '<th style="width:' + properties[a].columnSize + ';' + params.gridHeaderStyle + '">' + (0, _functions.capitalizePrint)(properties[a].displayName) + '</th>';
  }

  // Add the closing tag for the table header row
  htmlData += '</tr>';

  // If the table header is marked as repeated, add the closing tag
  if (params.repeatTableHeader) {
    htmlData += '</thead>';
  }

  // Create the table body
  htmlData += '<tbody>';

  // Add the table data rows
  for (var i = 0; i < data.length; i++) {
    // Add the row starting tag
    htmlData += '<tr>';

    // Print selected properties only
    for (var n = 0; n < properties.length; n++) {
      var stringData = data[i];

      // Support nested objects
      var property = properties[n].field.split('.');
      if (property.length > 1) {
        for (var p = 0; p < property.length; p++) {
          stringData = stringData[property[p]];
        }
      } else {
        stringData = stringData[properties[n].field];
      }

      // Add the row contents and styles
      htmlData += '<td style="width:' + properties[n].columnSize + params.gridStyle + '">' + stringData + '</td>';
    }

    // Add the row closing tag
    htmlData += '</tr>';
  }

  // Add the table and body closing tags
  htmlData += '</tbody></table>';

  return htmlData;
}

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Modal = {
  show: function show(params) {
    // Build modal
    var modalStyle = 'font-family:sans-serif; ' + 'display:table; ' + 'text-align:center; ' + 'font-weight:300; ' + 'font-size:30px; ' + 'left:0; top:0;' + 'position:fixed; ' + 'z-index: 9990;' + 'color: #0460B5; ' + 'width: 100%; ' + 'height: 100%; ' + 'background-color:rgba(255,255,255,.9);' + 'transition: opacity .3s ease;';

    // Create wrapper
    var printModal = document.createElement('div');
    printModal.setAttribute('style', modalStyle);
    printModal.setAttribute('id', 'printJS-Modal');

    // Create content div
    var contentDiv = document.createElement('div');
    contentDiv.setAttribute('style', 'display:table-cell; vertical-align:middle; padding-bottom:100px;');

    // Add close button (requires print.css)
    var closeButton = document.createElement('div');
    closeButton.setAttribute('class', 'printClose');
    closeButton.setAttribute('id', 'printClose');
    contentDiv.appendChild(closeButton);

    // Add spinner (requires print.css)
    var spinner = document.createElement('span');
    spinner.setAttribute('class', 'printSpinner');
    contentDiv.appendChild(spinner);

    // Add message
    var messageNode = document.createTextNode(params.modalMessage);
    contentDiv.appendChild(messageNode);

    // Add contentDiv to printModal
    printModal.appendChild(contentDiv);

    // Append print modal element to document body
    document.getElementsByTagName('body')[0].appendChild(printModal);

    // Add event listener to close button
    document.getElementById('printClose').addEventListener('click', function () {
      Modal.close();
    });
  },
  close: function close() {
    var printFrame = document.getElementById('printJS-Modal');

    printFrame.parentNode.removeChild(printFrame);
  }
};

exports.default = Modal;

/***/ }),

/***/ "./src/js/pdf.js":
/*!***********************!*\
  !*** ./src/js/pdf.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _print = __webpack_require__(/*! ./print */ "./src/js/print.js");

var _print2 = _interopRequireDefault(_print);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  print: function print(params, printFrame) {
    // Format pdf url
    params.printable = /^(blob|http)/i.test(params.printable) ? params.printable : window.location.origin + (params.printable.charAt(0) !== '/' ? '/' + params.printable : params.printable);

    // If showing a loading modal or using a hook function, we will preload the pdf file
    if (params.showModal || params.onLoadingStart) {
      // Get the file through a http request
      var req = new window.XMLHttpRequest();
      req.responseType = 'arraybuffer';

      req.addEventListener('load', function () {
        // Pass response data to a blob and create a local object url
        var localPdf = new window.Blob([req.response], { type: 'application/pdf' });
        localPdf = window.URL.createObjectURL(localPdf);

        // Pass the url to the printable parameter (replacing the original pdf file url)
        // This will prevent a second request to the file (server) once the iframe loads
        params.printable = localPdf;

        send(params, printFrame);
      });

      req.open('GET', params.printable, true);
      req.send();
    } else {
      send(params, printFrame);
    }
  }
};


function send(params, printFrame) {
  // Set iframe src with pdf document url
  printFrame.setAttribute('src', params.printable);
  _print2.default.send(params, printFrame);
}

/***/ }),

/***/ "./src/js/print.js":
/*!*************************!*\
  !*** ./src/js/print.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _browser = __webpack_require__(/*! ./browser */ "./src/js/browser.js");

var _browser2 = _interopRequireDefault(_browser);

var _modal = __webpack_require__(/*! ./modal */ "./src/js/modal.js");

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Print = {
  send: function send(params, printFrame) {
    // Append iframe element to document body
    document.getElementsByTagName('body')[0].appendChild(printFrame);

    // Get iframe element
    var iframeElement = document.getElementById(params.frameId);

    // Wait for iframe to load all content
    if (params.type === 'pdf' && (_browser2.default.isIE() || _browser2.default.isEdge())) {
      iframeElement.setAttribute('onload', finishPrint(iframeElement, params));
    } else {
      printFrame.onload = function () {
        if (params.type === 'pdf') {
          finishPrint(iframeElement, params);
        } else {
          // Get iframe element document
          var printDocument = iframeElement.contentWindow || iframeElement.contentDocument;
          if (printDocument.document) printDocument = printDocument.document;

          // Inject printable html into iframe body
          printDocument.body.innerHTML = params.htmlData;

          // Add custom style
          if (params.type !== 'pdf' && params.style !== null) {
            // Create style element
            var style = document.createElement('style');
            style.innerHTML = params.style;

            // Append style element to iframe's head
            printDocument.head.appendChild(style);
          }

          // If printing image, wait for it to load inside the iframe
          if (params.type === 'image') {
            loadIframeImages(printDocument, params).then(function () {
              finishPrint(iframeElement, params);
            });
          } else {
            finishPrint(iframeElement, params);
          }
        }
      };
    }
  }
};

function performPrint(iframeElement, params) {
  iframeElement.focus();

  // If Edge or IE, try catch with execCommand
  if (_browser2.default.isEdge() || _browser2.default.isIE()) {
    try {
      iframeElement.contentWindow.document.execCommand('print', false, null);
    } catch (e) {
      iframeElement.contentWindow.print();
    }
  } else {
    // Other browsers
    iframeElement.contentWindow.print();
  }
}

function cleanUp(params) {
  // If we are showing a feedback message to user, remove it
  if (params.showModal) _modal2.default.close();

  // Check for a finished loading hook function
  if (params.onLoadingEnd) params.onLoadingEnd();

  // If preloading pdf files, clean blob url
  if (params.showModal || params.onLoadingStart) window.URL.revokeObjectURL(params.printable);

  // If a onPrintDialogClose callback is given, execute it
  if (params.onPrintDialogClose) {
    var event = 'mouseover';

    if (_browser2.default.isChrome() || _browser2.default.isFirefox()) {
      // Firefox will require an extra click in the document
      // to fire the focus event. Should we console.warn that?
      event = 'focus';
    }
    var handler = function handler() {
      // Make sure the event only happens once.
      window.removeEventListener(event, handler);

      params.onPrintDialogClose();
    };

    window.addEventListener(event, handler);
  }
}

function finishPrint(iframeElement, params) {
  try {
    performPrint(iframeElement, params);
  } catch (error) {
    params.onError(error);
  } finally {
    cleanUp(params);
  }
}

function loadIframeImages(printDocument, params) {
  var promises = [];

  params.printable.forEach(function (image, index) {
    return promises.push(loadIframeImage(printDocument, index));
  });

  return Promise.all(promises);
}

function loadIframeImage(printDocument, index) {
  return new Promise(function (resolve) {
    var pollImage = function pollImage() {
      var image = printDocument ? printDocument.getElementById('printableImage' + index) : null;

      if (!image || typeof image.naturalWidth === 'undefined' || image.naturalWidth === 0) {
        setTimeout(pollImage, 500);
      } else {
        resolve();
      }
    };
    pollImage();
  });
}

exports.default = Print;

/***/ }),

/***/ "./src/sass/index.scss":
/*!*****************************!*\
  !*** ./src/sass/index.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.js */"./src/index.js");


/***/ })

/******/ })["default"];
});
//# sourceMappingURL=print.map

/***/ }),

/***/ "./src/app/panel/pages/order/order-detail/order-detail.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/panel/pages/order/order-detail/order-detail.module.ts ***!
  \***********************************************************************/
/*! exports provided: OrderDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPageModule", function() { return OrderDetailPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-moment */ "./node_modules/ngx-moment/fesm5/ngx-moment.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _components_panel_components_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/panel-components.module */ "./src/app/panel/components/panel-components.module.ts");
/* harmony import */ var _components_global_components_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/global-components.module */ "./src/app/components/global-components.module.ts");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pipes */ "./node_modules/ngx-pipes/fesm5/ngx-pipes.js");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");
/* harmony import */ var _order_detail_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./order-detail.page */ "./src/app/panel/pages/order/order-detail/order-detail.page.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var OrderDetailPageModule = /** @class */ (function () {
    function OrderDetailPageModule() {
    }
    OrderDetailPageModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _components_panel_components_module__WEBPACK_IMPORTED_MODULE_5__["PanelComponentsModule"],
                _components_global_components_module__WEBPACK_IMPORTED_MODULE_6__["GlobalComponentsModule"],
                ngx_pipes__WEBPACK_IMPORTED_MODULE_7__["NgPipesModule"],
                _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_8__["PipesModule"],
                ngx_moment__WEBPACK_IMPORTED_MODULE_3__["MomentModule"]
            ],
            entryComponents: [
                _order_detail_page__WEBPACK_IMPORTED_MODULE_9__["OrderDetailPage"]
            ],
            declarations: [
                _order_detail_page__WEBPACK_IMPORTED_MODULE_9__["OrderDetailPage"]
            ]
        })
    ], OrderDetailPageModule);
    return OrderDetailPageModule;
}());



/***/ }),

/***/ "./src/app/panel/pages/order/order-detail/order-detail.page.html":
/*!***********************************************************************!*\
  !*** ./src/app/panel/pages/order/order-detail/order-detail.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"primary\">\r\n    <ion-title>\r\n      Detalhes do pedido\r\n    </ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"dismiss()\" color=\"extralight\" fill=\"clear\">\r\n        <span ion-text>Cancel</span>\r\n        <ion-icon name=\"md-close\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content padding>\r\n  <div *ngFor=\"let entry of order.entries;\">\r\n    <ion-badge class=\"notifications-badge\" color=\"danger\">x{{ entry.quantity }}</ion-badge>\r\n    <card-product [product]=\"entry.product\" [entry]=\"entry\"> </card-product>\r\n    <div class=\"shadow shadow-light-2 text-complements\" *ngIf=\"entry.complement_resume && entry.complement_resume.length > 0\">\r\n      <h4 ion-text>Complementos escolhidos: </h4>\r\n      <p ion-text class=\"list-complement\" color=\"discret\">\r\n        <span ion-text *ngFor=\"let resume of entry.complement_resume; let i = index\">\r\n          {{resume}}</span>\r\n      </p>\r\n    </div>\r\n    <div class=\"shadow shadow-light-2 text-complements\" *ngIf=\"entry.observation\">\r\n      <h3>Observações do pedido</h3>\r\n      <p ion-text color=\"discret\">\r\n        {{entry.observation}}\r\n      </p>\r\n    </div>\r\n\r\n    <div class=\"print\">\r\n      <span>\r\n        {{entry.quantity}}x {{entry.product.name}}\r\n      </span>\r\n      <div *ngIf=\"entry.complement_resume && entry.complement_resume.length > 0\">\r\n        <span ion-text>Complementos escolhidos: </span>\r\n        <br />\r\n        <span ion-text class=\"list-complement\">\r\n          <span ion-text *ngFor=\"let resume of entry.complement_resume; let i = index\">\r\n            {{resume}}\r\n            <br />\r\n          </span>\r\n        </span>\r\n      </div>\r\n      <span *ngIf=\"entry.observation\">\r\n        Obs: {{entry.observation}}</span>\r\n    </div>\r\n  </div>\r\n\r\n  <div text-right class=\"total-value\">\r\n    <h6 ion-text no-margin margin-top><strong>Subtotal:</strong> {{order.price.subtotal | currency:'BRL':'symbol':'1.2' |\r\n      formatCurrency}}</h6>\r\n    <h6 ion-text no-margin><strong>Taxa de entrega:</strong> {{order.price.delivery | currency:'BRL':'symbol':'1.2' |\r\n      formatCurrency}}</h6>\r\n    <h6 ion-text no-margin *ngIf=\"order.price.discounts\" color=\"primary\">Cupom: &ndash; {{order.price.discounts |\r\n      currency:'BRL':'symbol':'1.2' | formatCurrency}}</h6>\r\n    <h6 ion-text no-margin>\r\n      <strong>Total: {{order.price.subtotal + order.price.delivery - ( order.price.discounts ||\r\n        0 ) | noNegative | currency:'BRL':'symbol':'1.2' | formatCurrency}}</strong>\r\n    </h6>\r\n    <div class=\"payment-method\" text-wrap no-margin>\r\n      <b>Forma de pagamento: </b>\r\n      <span [ngSwitch]=\"order.payment_method\" style=\"margin-top: 5px\">\r\n        <span *ngSwitchCase=\"'debit_card'\">Débito\r\n          <span> | {{order.payment_cardType | uppercase}} </span>\r\n        </span>\r\n        <span *ngSwitchCase=\"'credit_card'\">Crédito\r\n          <span> | {{order.payment_cardType | uppercase}} </span>\r\n        </span>\r\n        <span *ngSwitchCase=\"'money'\">Dinheiro\r\n          <span *ngIf=\"order.change\">, troco para: {{order.change | number: '1.2-2'}} </span>\r\n        </span>\r\n        <span *ngSwitchCase=\"'food_stamps'\">\r\n          Vale-Alimentação\r\n          <span> | {{order.payment_cardType | uppercase}} </span>\r\n        </span>\r\n        <span *ngSwitchDefault>Outro</span>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"shipping-address\">\r\n    <p text-wrap no-margin><strong>Endereço de entrega:</strong></p>\r\n    <p text-wrap no-margin>\r\n      {{order.location?.district || \"sem bairro\"}}, {{order.location?.city || \"sem cidade\"}} -\r\n      {{order.location?.state_short || \"sem estado\"}}\r\n    </p>\r\n    <p *ngIf=\"order?.location?.street && order?.location?.number\" text-wrap no-margin>\r\n      {{order.location.street}}, {{order.location.number}}.\r\n    </p>\r\n    <p *ngIf=\"order?.location?.complement\" text-wrap no-margin>\r\n      <strong>Complemento: </strong>{{order.location.complement}}\r\n    </p>\r\n    <p *ngIf=\"order?.location?.landmark\" text-wrap no-margin>\r\n      <strong>Ponto de referência: </strong>{{order.location.landmark}}\r\n    </p>\r\n  </div>\r\n\r\n  <ion-item *ngIf=\"order.observation\" text-wrap>\r\n    Observação:\r\n    <p style=\"margin-top: 5px\">{{order.observation}}</p>\r\n  </ion-item>\r\n\r\n  <ion-button *ngIf=\"canChangeStatusToIncomplete\" color=\"danger\" fill=\"clear\" (click)=\"changeStautsIncomplete()\">\r\n    Cancelar pedido\r\n  </ion-button>\r\n\r\n  <ion-button expand=\"block\" (click)=\"print()\">IMPRIMIR</ion-button>\r\n\r\n</ion-content>\r\n\r\n<!-- Conteúdo para impressão -->\r\n<div id=\"section-to-print\" style=\"max-width: 6cm !important; margin-bottom: 30px;font-family: 'Sunflower', sans-serif !important;\">\r\n  <style>\r\n    @page {\r\n      size: 21cm 29.7cm !important;\r\n      margin: 30mm 45mm 30mm 45mm !important;\r\n      /* change the margins as you want them to be. */\r\n      font-family: 'Sunflower', sans-serif !important;\r\n    }\r\n  </style>\r\n  <p style=\"border-top: 2px solid gray\">\r\n    <strong>Facilita</strong>\r\n  </p>\r\n  <p>\r\n    <p>\r\n      <strong>Código: </strong>{{order.code}}\r\n      <br />\r\n      <strong>Cliente: </strong>{{order.user_full?.name}}\r\n      <br />\r\n      <strong>Telefone: </strong>{{order.user_full?.phone}}\r\n      <br />\r\n      <strong>Criado: </strong>{{order.created_at | timestampToDate | date:'shortDate' | uppercase}} às\r\n      {{order.created_at | timestampToDate | date:'HH:mm'\r\n      | uppercase}}\r\n    </p>\r\n    <p>\r\n      <strong>Endereço de entrega</strong>\r\n      <br />\r\n      {{order.location.district || \"sem bairro\"}}, {{order.location.city || \"sem cidade\"}} -\r\n      {{order.location.state_short || \"sem estado\"}}\r\n      <br />\r\n      <span *ngIf=\"order?.location?.street && order?.location?.number\" style=\"margin-top: 5px\">\r\n        {{order.location.street}}, {{order.location.number}}\r\n      </span><br />\r\n      <span *ngIf=\"order?.location?.complement\">\r\n        <strong>Complemento: </strong>{{order.location.complement}} <br />\r\n      </span>\r\n      <span *ngIf=\"order.location.landmark\">\r\n        <strong>Ponto de referência: </strong> {{order.location.landmark}} <br />\r\n      </span>\r\n    </p>\r\n    <div>\r\n      <strong> Pedidos</strong>\r\n    </div>\r\n    <div *ngFor=\"let entry of order.entries;\">\r\n      <ion-row no-padding>\r\n        <ion-col no-padding>{{entry.quantity}}x {{entry.product.name}}</ion-col>\r\n        <ion-col col-4 no-padding padding-bottom>\r\n          {{entry.price * entry.quantity | currency:'BRL':'symbol':'1.2' | formatCurrency}}\r\n        </ion-col>\r\n      </ion-row>\r\n      <div no-padding *ngIf=\"entry.complement_resume && entry.complement_resume.length > 0\">\r\n        <div>Complementos escolhidos: </div>\r\n        <div *ngFor=\"let resume of entry.complement_resume\">\r\n          {{resume}}\r\n        </div>\r\n      </div>\r\n      <div no-padding *ngIf=\"entry.observation\">\r\n        <strong>Obs: {{entry.observation}}</strong>\r\n      </div>\r\n      <div no-padding style=\"border-top: 2px dotted gray; padding-bottom: 5px; margin-top: 5px;\">\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <strong>Subtotal:</strong> {{order.price.subtotal | currency:'BRL':'symbol':'1.2' | formatCurrency}}\r\n      <br />\r\n      <strong>Taxa de entrega:</strong> {{order.price.delivery | currency:'BRL':'symbol':'1.2' | formatCurrency}}\r\n      <span *ngIf=\"order.price.discounts\">\r\n        <strong>Cupom:</strong> &ndash; {{order.price.discounts | currency:'BRL':'symbol':'1.2' | formatCurrency}}\r\n        <br />\r\n      </span>\r\n\r\n    </div>\r\n    <div style=\"border-top: 2px dotted gray; margin-top: 3px; padding-top: 10px; padding-bottom: 4px\">\r\n      <strong>Total:</strong> {{order.price.subtotal + order.price.delivery - ( order.price.discounts\r\n      || 0 ) | noNegative | currency:'BRL':'symbol':'1.2' | formatCurrency}}\r\n    </div>\r\n    <div>\r\n      <strong>Método: </strong>\r\n      <span [ngSwitch]=\"order.payment_method\" style=\"margin-top: 5px\">\r\n        <span *ngSwitchCase=\"'debit_card'\">Débito\r\n          <span> | {{order.payment_cardType | uppercase}} </span>\r\n        </span>\r\n        <span *ngSwitchCase=\"'credit_card'\">Crédito\r\n          <span> | {{order.payment_cardType | uppercase}} </span>\r\n        </span>\r\n        <span *ngSwitchCase=\"'money'\">Dinheiro\r\n          <br />\r\n          <span *ngIf=\"order.change\">\r\n            <strong>Pagamento: </strong> {{order.change | currency:'BRL':'symbol':'1.2' | formatCurrency}}</span>\r\n          <br />\r\n          <span *ngIf=\"order.change\">\r\n            <strong>Troco: </strong> {{(order.change | change: order.price.subtotal + order.price.delivery\r\n            - order.price.discounts | currency:'BRL':'symbol':'1.2' | formatCurrency)}} </span>\r\n        </span>\r\n        <span *ngSwitchCase=\"'food_stamps'\">\r\n          Vale-Alimentação\r\n          <span> | {{order.payment_cardType | uppercase}} </span>\r\n        </span>\r\n        <span *ngSwitchDefault>Outro</span>\r\n      </span>\r\n    </div>\r\n\r\n    <div *ngIf=\"order.observation\">\r\n      Observação:\r\n      <p style=\"margin-top: 5px\">{{order.observation}}</p>\r\n    </div>\r\n\r\n    <br />\r\n</div>"

/***/ }),

/***/ "./src/app/panel/pages/order/order-detail/order-detail.page.scss":
/*!***********************************************************************!*\
  !*** ./src/app/panel/pages/order/order-detail/order-detail.page.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-content.content .scroll-content {\n  background: white !important; }\n\n#section-to-print {\n  position: absolute;\n  z-index: -102010210;\n  font-family: 'Sunflower', sans-serif !important; }\n\n#section-to-print p {\n    font-family: 'Sunflower', sans-serif !important; }\n\n#section-to-print span {\n    font-family: 'Sunflower', sans-serif !important; }\n\n.notifications-badge {\n  position: absolute;\n  width: 23px;\n  height: 23px;\n  border-radius: 0%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-top: 0px;\n  padding: 0px;\n  z-index: 10; }\n\n.header .label {\n  display: flex;\n  justify-content: space-between; }\n\n.header .label .values {\n    display: flex;\n    justify-content: space-between; }\n\n.header .label .values span {\n      width: 50px;\n      text-align: center; }\n\n.header .label .values .val {\n      width: 75px; }\n\n.total-value {\n  margin-top: 10px; }\n\n.text-complements {\n  background: white;\n  padding: 16px; }\n\n.text-complements p {\n    margin-bottom: 0px;\n    display: flex;\n    flex-direction: column; }\n\n.text-incomplete {\n  margin-top: 0px !important;\n  text-align: center; }\n\ncard-product ion-label h5 {\n  font-size: 1.2em !important; }\n\ncard-product nano-thumb .thumb {\n  height: 48px;\n  width: 48px;\n  max-width: 48px;\n  max-height: 48px; }\n\n.print {\n  display: none; }\n\n@media print {\n  ion-header {\n    display: none !important; }\n  ion-content {\n    margin: 0;\n    color: black !important;\n    padding: 0; }\n    ion-content ::-webkit-scrollbar {\n      width: 0px;\n      background: transparent; }\n  .total-value {\n    margin: 0;\n    padding: 0; }\n    .total-value h2 {\n      margin: 0;\n      padding: 0;\n      text-align: left;\n      font-size: 14px;\n      color: black; }\n      .total-value h2 strong {\n        font-weight: normal; }\n  .shipping-address,\n  .payment-method {\n    font-size: 14px;\n    padding: 0 !important;\n    margin: 0 !important; }\n    .shipping-address .item-inner,\n    .payment-method .item-inner {\n      padding: 0 !important;\n      margin: 0 !important; }\n    .shipping-address p,\n    .payment-method p {\n      margin: 0;\n      padding: 0;\n      font-size: 14px;\n      color: black !important; }\n  .print {\n    display: block;\n    color: black !important; }\n  .text-complements {\n    display: none !important; }\n  card-product {\n    display: none !important; }\n  .notifications-badge {\n    display: none !important; } }\n"

/***/ }),

/***/ "./src/app/panel/pages/order/order-detail/order-detail.page.ts":
/*!*********************************************************************!*\
  !*** ./src/app/panel/pages/order/order-detail/order-detail.page.ts ***!
  \*********************************************************************/
/*! exports provided: OrderDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailPage", function() { return OrderDetailPage; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../models/order */ "./src/models/order.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
/* harmony import */ var _services_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../services/system.service */ "./src/app/services/system.service.ts");
/* harmony import */ var _services_nano_printer_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../services/nano-printer.service */ "./src/app/services/nano-printer.service.ts");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var OrderDetailPage = /** @class */ (function () {
    function OrderDetailPage(modalCtrl, alertCtrl, loadingCtrl, system, nanoPrinterProvider) {
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.system = system;
        this.nanoPrinterProvider = nanoPrinterProvider;
    }
    Object.defineProperty(OrderDetailPage.prototype, "canChangeStatusToIncomplete", {
        get: function () {
            if (!this.order)
                return false;
            if (this.order.status === _models_order__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"].accepted ||
                this.order.status === _models_order__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"].delivery)
                return true;
            return false;
        },
        enumerable: true,
        configurable: true
    });
    OrderDetailPage.prototype.ngOnInit = function () {
        for (var _i = 0, _a = this.order.entries; _i < _a.length; _i++) {
            var entry = _a[_i];
            _models_order__WEBPACK_IMPORTED_MODULE_1__["Entry"].calculateEntryValues(entry);
        }
    };
    OrderDetailPage.prototype.dismiss = function () {
        this.modalCtrl.dismiss();
    };
    OrderDetailPage.prototype.print = function () {
        this.nanoPrinterProvider.printId("section-to-print");
    };
    OrderDetailPage.prototype.changeStautsIncomplete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            header: 'Tem certeza que deseja cancelar o pedido?',
                            message: "O cancelamento do pedido após ser aceito irá incidir cobranças referente a transação, salvo se for de responsabilidade do cliente.",
                            inputs: [{
                                    name: 'reason',
                                    placeholder: 'Por favor, informe o motivo.',
                                    type: 'text',
                                }],
                            buttons: [
                                {
                                    text: 'Não',
                                    role: 'cancel'
                                },
                                {
                                    text: 'Confirmar',
                                    handler: function (data) { return __awaiter(_this, void 0, void 0, function () {
                                        var load;
                                        var _this = this;
                                        return __generator(this, function (_a) {
                                            switch (_a.label) {
                                                case 0: return [4 /*yield*/, this.loadingCtrl.create()];
                                                case 1:
                                                    load = _a.sent();
                                                    load.present();
                                                    if (this.order) {
                                                        _models_order__WEBPACK_IMPORTED_MODULE_1__["Order"].update(this.order.id, {
                                                            cancellation_reason: data.reason,
                                                            status: _models_order__WEBPACK_IMPORTED_MODULE_1__["OrderStatus"].incomplete,
                                                            incomplete_at: firebase__WEBPACK_IMPORTED_MODULE_5__["firestore"].FieldValue.serverTimestamp()
                                                        }).subscribe(function () {
                                                            _this.dismiss();
                                                            load.dismiss();
                                                        }, function (err) {
                                                            _this.system.showErrorAlert(err);
                                                        });
                                                    }
                                                    else {
                                                        load.dismiss();
                                                        this.dismiss();
                                                        this.system.showErrorAlert(Error("Pedido inválido"));
                                                    }
                                                    return [2 /*return*/];
                                            }
                                        });
                                    }); }
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        alert.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _models_order__WEBPACK_IMPORTED_MODULE_1__["Order"])
    ], OrderDetailPage.prototype, "order", void 0);
    OrderDetailPage = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-order-detail',
            template: __webpack_require__(/*! ./order-detail.page.html */ "./src/app/panel/pages/order/order-detail/order-detail.page.html"),
            styles: [__webpack_require__(/*! ./order-detail.page.scss */ "./src/app/panel/pages/order/order-detail/order-detail.page.scss")],
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
            _services_system_service__WEBPACK_IMPORTED_MODULE_3__["SystemService"],
            _services_nano_printer_service__WEBPACK_IMPORTED_MODULE_4__["NanoPrinterService"]])
    ], OrderDetailPage);
    return OrderDetailPage;
}());



/***/ }),

/***/ "./src/app/services/nano-printer.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/nano-printer.service.ts ***!
  \**************************************************/
/*! exports provided: NanoPrinterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NanoPrinterService", function() { return NanoPrinterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! print-js */ "./node_modules/print-js/dist/print.js");
/* harmony import */ var print_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(print_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NanoPrinterService = /** @class */ (function () {
    function NanoPrinterService(platform) {
        this.platform = platform;
    }
    /*
  print(content: string) {
  
    if (this.platform.is('cordova')) {
      this.printer.isAvailable().then((res) => {
        this.printer.print(content).then((value) => {
        }).catch(err => {
        })
      }).catch((err) => {
      })
    } else {
      var mywindow = window.open('', 'PRINT', 'height=400,width=600');
  
      mywindow.document.write('<html><head>');
      mywindow.document.write('</head><body>');
      mywindow.document.write(content);
      //mywindow.document.write(document.getElementById(elem).innerHTML);
      mywindow.document.write('</body></html>');
   
      mywindow.document.close(); // necessary for IE >= 10
      mywindow.focus(); // necessary for IE >= 10*
   
      mywindow.print();
      mywindow.close();
    }
  }*/
    NanoPrinterService.prototype.printId = function (id) {
        print_js__WEBPACK_IMPORTED_MODULE_1___default()({ printable: id, type: 'html' });
    };
    NanoPrinterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"]])
    ], NanoPrinterService);
    return NanoPrinterService;
}());



/***/ })

}]);
//# sourceMappingURL=default~panel-pages-evaluation-evaluation-list-evaluation-list-module~panel-pages-order-order-list-o~5a45d9c2.js.map