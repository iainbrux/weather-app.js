/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _buttonsConfig__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttonsConfig */ \"./src/buttonsConfig.js\");\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeather */ \"./src/getWeather.js\");\n\n\n\n(0,_buttonsConfig__WEBPACK_IMPORTED_MODULE_0__.renderButtons)();\n(0,_getWeather__WEBPACK_IMPORTED_MODULE_1__.getWeather)('chorley');\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/buttonsConfig.js":
/*!******************************!*\
  !*** ./src/buttonsConfig.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"renderButtons\": () => (/* binding */ renderButtons)\n/* harmony export */ });\n/* harmony import */ var _getWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getWeather */ \"./src/getWeather.js\");\n\n\nfunction renderButtons() {\n  const submit = document.querySelector(\"#submit\");\n  const location = document.querySelector(\"#location\");\n\n  submit.addEventListener(\"click\", () => (0,_getWeather__WEBPACK_IMPORTED_MODULE_0__.getWeather)(location.value));\n}\n\n\n\n\n//# sourceURL=webpack:///./src/buttonsConfig.js?");

/***/ }),

/***/ "./src/getWeather.js":
/*!***************************!*\
  !*** ./src/getWeather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getWeather\": () => (/* binding */ getWeather)\n/* harmony export */ });\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style */ \"./src/style.js\");\n\n\nasync function getWeather(input) {\n  const kelvin = -273.15;\n  const day = document.querySelector(\".day\");\n  const weather = document.querySelector(\".weather\");\n  const temperature = document.querySelector(\".temperature\");\n  const header = document.querySelector('header');\n  const weekDays = [\n    \"Sunday\",\n    \"Monday\",\n    \"Tuesday\",\n    \"Wednesday\",\n    \"Thursday\",\n    \"Friday\",\n    \"Saturday\",\n  ];\n  const today = new Date();\n\n  let response = await fetch(\n    `https://api.openweathermap.org/data/2.5/weather?q=${input},uk&APPID=62d9f7279fdb0e1b7b37a6dfead3cd52`,\n    { mode: \"cors\" }\n  );\n\n  let currentWeather = await response.json();\n\n  input = (0,_style__WEBPACK_IMPORTED_MODULE_0__.capitaliseFirstLetter)(input);\n\n  header.innerText = `${input}`;\n  day.innerText = `It's ${weekDays[today.getDay()]} today`;\n  weather.innerText = `The current forecast is ${currentWeather.weather[0].main.toLowerCase()}`;\n  temperature.innerText = `${(currentWeather.main.temp + kelvin).toFixed(1)}°C`;\n\n  (0,_style__WEBPACK_IMPORTED_MODULE_0__.style)(currentWeather.weather[0].main.toLowerCase());\n\n}\n\n\n\n\n//# sourceURL=webpack:///./src/getWeather.js?");

/***/ }),

/***/ "./src/style.js":
/*!**********************!*\
  !*** ./src/style.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"style\": () => (/* binding */ style),\n/* harmony export */   \"capitaliseFirstLetter\": () => (/* binding */ capitaliseFirstLetter)\n/* harmony export */ });\nfunction style(weather) {\n  const container = document.querySelector(\".display-weather\");\n  container.className = \"display-weather\";\n  container.classList.add(weather);\n}\n\nfunction capitaliseFirstLetter(string) {\n  return string.charAt(0).toUpperCase() + string.slice(1);\n}\n\n\n\n\n//# sourceURL=webpack:///./src/style.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;