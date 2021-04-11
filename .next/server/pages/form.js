module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/form.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/FormField.js":
/*!*********************************!*\
  !*** ./Components/FormField.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Form.module.css */ "./styles/Form.module.css");
/* harmony import */ var _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Form_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\Users\\Admin\\finel\\foot-it-forword\\Components\\FormField.js";



const FormField = (_ref) => {
  let args = Object.assign({}, _ref);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("il", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
        children: args.qus
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        children: args.label
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        className: _styles_Form_module_css__WEBPACK_IMPORTED_MODULE_1___default.a,
        type: args.type,
        id: args.id,
        placeholder: args.name,
        name: args.name,
        value: args.value,
        required: args.required
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 13
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("label", {
        for: args.id,
        children: [" ", args.id]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 13
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FormField);

/***/ }),

/***/ "./pages/form.js":
/*!***********************!*\
  !*** ./pages/form.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_FormField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/FormField */ "./Components/FormField.js");

var _jsxFileName = "C:\\Users\\Admin\\finel\\foot-it-forword\\pages\\form.js";


const Form = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
        children: "Form Required"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
        children: ["please tell us more  ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("b", {
          style: {
            color: 'blue'
          },
          children: " about yourself"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 10,
          columnNumber: 37
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 16
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            name: "Enter your name",
            type: "text",
            required: "required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            name: "Enter your id",
            type: "text",
            required: "required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 15,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            name: "Entar your Email",
            type: "text",
            required: "required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            name: "Enter your birthday",
            type: "date",
            required: "required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            name: "your age",
            type: "number",
            required: "required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 18,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            name: "your corrunt adress",
            type: "text",
            required: "required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 19,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            label: "number of people par House  ",
            type: "number",
            required: "required"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            type: "radio",
            id: "yas",
            value: "yes",
            qus: "do you like noa?"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            type: "radio",
            id: "no",
            value: "no"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            type: "radio",
            id: "mybe",
            value: "mybe"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 23,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            type: "radio",
            id: "not ok",
            value: "not ok"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Components_FormField__WEBPACK_IMPORTED_MODULE_1__["default"], {
            type: "radio",
            id: "ok",
            value: "ok"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 21
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
            children: "Submit"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 27,
            columnNumber: 21
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 17
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 16
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 14
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Form);

/***/ }),

/***/ "./styles/Form.module.css":
/*!********************************!*\
  !*** ./styles/Form.module.css ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"styleForm": "Form_styleForm__2lP0M",
	"styleInput": "Form_styleInput__1ig8Y"
};


/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9Gb3JtRmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvRm9ybS5tb2R1bGUuY3NzIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sIm5hbWVzIjpbIkZvcm1GaWVsZCIsImFyZ3MiLCJzdHlsZUZvcm0iLCJxdXMiLCJsYWJlbCIsInN0eWxlSW5wdXQiLCJ0eXBlIiwiaWQiLCJuYW1lIiwidmFsdWUiLCJyZXF1aXJlZCIsIkZvcm0iLCJjb2xvciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTs7QUFDQSxNQUFNQSxT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QUFBQTtBQUFBO0FBQUEsdUJBUkosZUFTSSxxRUFBQyw2REFBRDtBQUFXLGdCQUFJLEVBQUMsT0FBaEI7QUFBd0IsY0FBRSxFQUFDLElBQTNCO0FBQWdDLGlCQUFLLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFUSixlQVVJLHFFQUFDLDZEQUFEO0FBQVcsZ0JBQUksRUFBQyxPQUFoQjtBQUF3QixjQUFFLEVBQUMsTUFBM0I7QUFBa0MsaUJBQUssRUFBQztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZKLGVBV0kscUVBQUMsNkRBQUQ7QUFBVyxnQkFBSSxFQUFDLE9BQWhCO0FBQXdCLGNBQUUsRUFBQyxRQUEzQjtBQUFvQyxpQkFBSyxFQUFDO0FBQTFDO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEosZUFZSSxxRUFBQyw2REFBRDtBQUFXLGdCQUFJLEVBQUMsT0FBaEI7QUFBd0IsY0FBRSxFQUFDLElBQTNCO0FBQWdDLGlCQUFLLEVBQUM7QUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFaSixlQWFJO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBYkosZUFjSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFkSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURMO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQTRCSCxDQTdCRDs7QUE4QmVELG1FQUFmLEU7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBLGtEIiwiZmlsZSI6InBhZ2VzL2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2Zvcm0uanNcIik7XG4iLCJpbXBvcnQgc3R5bGVGb3JtIGZyb20gJy4uL3N0eWxlcy9Gb3JtLm1vZHVsZS5jc3MnIFxyXG5pbXBvcnQgc3R5bGVJbnB1dCBmcm9tICcuLi9zdHlsZXMvRm9ybS5tb2R1bGUuY3NzJ1xyXG5jb25zdCBGb3JtRmllbGQgPSAoey4uLmFyZ3N9KSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZUZvcm19PlxyXG4gICAgICAgICAgICA8aWw+XHJcbiAgICAgICAgICAgIDxwPnthcmdzLnF1c308L3A+XHJcbiAgICAgICAgICAgIDxsYWJlbD57YXJncy5sYWJlbH08L2xhYmVsPlxyXG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPXtzdHlsZUlucHV0fSB0eXBlPXthcmdzLnR5cGV9IGlkPXthcmdzLmlkfSBwbGFjZWhvbGRlcj17YXJncy5uYW1lfSBuYW1lPXthcmdzLm5hbWV9IHZhbHVlPXthcmdzLnZhbHVlfSByZXF1aXJlZD17YXJncy5yZXF1aXJlZH0+PC9pbnB1dD5cclxuICAgICAgICAgICAgPGxhYmVsIGZvcj17YXJncy5pZH0+IHthcmdzLmlkfTwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvaWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtRmllbGQ7IiwiaW1wb3J0IEZvcm1GaWVsZCBmcm9tICcuLi9Db21wb25lbnRzL0Zvcm1GaWVsZCdcclxuXHJcblxyXG5jb25zdCBGb3JtID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgIDxoZWFkZXI+XHJcbiAgICAgICAgICAgICAgICA8dGl0bGU+Rm9ybSBSZXF1aXJlZDwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgIDxoMT5cclxuICAgICAgICAgICAgICAgcGxlYXNlIHRlbGwgdXMgbW9yZSAgPGIgc3R5bGU9e3tjb2xvcjonYmx1ZSd9fT4gYWJvdXQgeW91cnNlbGY8L2I+XHJcbiAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgIDxmb3JtID5cclxuICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkIG5hbWU9XCJFbnRlciB5b3VyIG5hbWVcIiB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZCBuYW1lPVwiRW50ZXIgeW91ciBpZFwiICB0eXBlPVwidGV4dFwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZCBuYW1lPVwiRW50YXIgeW91ciBFbWFpbFwiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkIG5hbWU9XCJFbnRlciB5b3VyIGJpcnRoZGF5XCIgdHlwZT1cImRhdGVcIiByZXF1aXJlZD1cInJlcXVpcmVkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGQgbmFtZT1cInlvdXIgYWdlXCIgdHlwZT1cIm51bWJlclwiIHJlcXVpcmVkPVwicmVxdWlyZWRcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZCBuYW1lPVwieW91ciBjb3JydW50IGFkcmVzc1wiIHR5cGU9XCJ0ZXh0XCIgcmVxdWlyZWQ9XCJyZXF1aXJlZFwiLz5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkIGxhYmVsPVwibnVtYmVyIG9mIHBlb3BsZSBwYXIgSG91c2UgIFwiIHR5cGU9XCJudW1iZXJcIiByZXF1aXJlZD1cInJlcXVpcmVkXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGb3JtRmllbGQgdHlwZT1cInJhZGlvXCIgaWQ9XCJ5YXNcIiB2YWx1ZT1cInllc1wiIHF1cz1cImRvIHlvdSBsaWtlIG5vYT9cIj48L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkIHR5cGU9XCJyYWRpb1wiIGlkPVwibm9cIiB2YWx1ZT1cIm5vXCI+PC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1GaWVsZCB0eXBlPVwicmFkaW9cIiBpZD1cIm15YmVcIiB2YWx1ZT1cIm15YmVcIj48L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkIHR5cGU9XCJyYWRpb1wiIGlkPVwibm90IG9rXCIgdmFsdWU9XCJub3Qgb2tcIj48L0Zvcm1GaWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUZpZWxkIHR5cGU9XCJyYWRpb1wiIGlkPVwib2tcIiB2YWx1ZT1cIm9rXCI+PC9Gb3JtRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5TdWJtaXQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdWw+ICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IEZvcm07IiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic3R5bGVGb3JtXCI6IFwiRm9ybV9zdHlsZUZvcm1fXzJsUDBNXCIsXG5cdFwic3R5bGVJbnB1dFwiOiBcIkZvcm1fc3R5bGVJbnB1dF9fMWlnOFlcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9