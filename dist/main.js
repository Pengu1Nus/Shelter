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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _script_Modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/Modal */ \"./src/script/Modal.js\");\n\r\n/*\r\nconst data = [\r\n    {\r\n        id: 1,\r\n        name: 'Jennifer',\r\n        title: 'Dog - Labrador',\r\n        urlToImg: 'images/img/jennifer.png',\r\n        content: `Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,\r\n        age: '2 months',\r\n        inoculations: 'none',\r\n        diseases: 'none',\r\n        parasites: 'none',\r\n    },\r\n\r\n    {\r\n        id: 2,\r\n        name: 'Katrine',\r\n        title: 'Cat - British',\r\n        urlToImg: 'images/img/katrine.png',\r\n        content: `Katrine is a sweet 2 months old British that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,\r\n        age: '5 months',\r\n        inoculations: 'none',\r\n        diseases: 'none',\r\n        parasites: 'none',\r\n    },\r\n    {\r\n        id: 3,\r\n        name: 'Woody',\r\n        title: 'Dog - Retriever',\r\n        urlToImg: 'images/img/woody.png',\r\n        content: `Katrine is a sweet 2 months old British that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,\r\n        age: '10 months',\r\n        inoculations: 'none',\r\n        diseases: 'none',\r\n        parasites: 'none',\r\n    },\r\n    {\r\n        id: 4,\r\n        name: 'Sophia',\r\n        title: 'Dog - Retriever',\r\n        urlToImg: 'images/img/sophia.png',\r\n        content: `Katrine is a sweet 2 months old British that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,\r\n        age: '10 months',\r\n        inoculations: 'none',\r\n        diseases: 'none',\r\n        parasites: 'none',\r\n    },\r\n    {\r\n        id: 5,\r\n        name: 'Timmy',\r\n        title: 'Cat - Retriever',\r\n        urlToImg: 'images/img/timmy.png',\r\n        content: `Timmy is a sweet 2 months old British that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,\r\n        age: '10 months',\r\n        inoculations: 'none',\r\n        diseases: 'none',\r\n        parasites: 'none',\r\n    },\r\n    {\r\n        id: 6,\r\n        name: 'Charly',\r\n        title: 'Dog - Retriever',\r\n        urlToImg: 'images/img/charly.png',\r\n        content: `Charly is a sweet 2 months old British that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,\r\n        age: '10 months',\r\n        inoculations: 'none',\r\n        diseases: 'none',\r\n        parasites: 'none',\r\n    },\r\n    {\r\n        id: 7,\r\n        name: 'Scarlett',\r\n        title: 'Dog - Retriever',\r\n        urlToImg: 'images/img/scarlet.png',\r\n        content: `Scarlett is a sweet 2 months old British that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,\r\n        age: '10 months',\r\n        inoculations: 'none',\r\n        diseases: 'none',\r\n        parasites: 'none',\r\n    },\r\n    {\r\n        id: 8,\r\n        name: 'Freddie',\r\n        title: 'Cat - Retriever',\r\n        urlToImg: 'images/img/freddie.png',\r\n        content: `Freddie is a sweet 2 months old British that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.`,\r\n        age: '10 months',\r\n        inoculations: 'none',\r\n        diseases: 'none',\r\n        parasites: 'none',\r\n    },\r\n]\r\n*/\r\nwindow.onload = function() {\r\n    // Generate modal from Modal Class\r\n    addToolsClickHandler();\r\n}\r\n\r\nconst addToolsClickHandler = () => {\r\n    let buttons = document.querySelectorAll('.pets__card-btn');\r\n    console.log(buttons);\r\n    buttons.forEach(button => {\r\n        button.addEventListener('click', generateToolsModal);\r\n    });\r\n};\r\n\r\n\r\nconst generateToolsModal = () => {\r\n    renderModalWindow('Test content');\r\n}\r\n\r\nconst renderModalWindow = (content) => {\r\n    let modal = new _script_Modal__WEBPACK_IMPORTED_MODULE_0__.Modal('pets__modal');\r\n    modal.buildModal(content);\r\n}\n\n//# sourceURL=webpack://shelter/./src/index.js?");

/***/ }),

/***/ "./src/script/Modal.js":
/*!*****************************!*\
  !*** ./src/script/Modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Modal\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n    constructor(classes) {\r\n        this.classes = classes;\r\n        this.modal = '';\r\n        this.modalContent = '';\r\n        this.modalCloseBtn = '';\r\n        this.overlay = '';\r\n    }\r\n\r\n    buildModal(content) {\r\n        // Overlay\r\n        this.overlay = this.createDomNode(this.overlay, 'div', 'overlay');\r\n\r\n        // Modal \r\n        this.modal = this.createDomNode(this.modal, 'div', 'modal', this.classes);\r\n\r\n        // Modal Content\r\n        this.modalContent = this.createDomNode(this.modalContent, 'div', 'modal__content');\r\n        \r\n        // Close Button\r\n        this.modalCloseBtn = this.createDomNode(this.modalCloseBtn, 'div', 'modal__close-btn');\r\n\r\n        this.setContent(content);\r\n\r\n        this.appendModalElements();\r\n\r\n        // Open Modal\r\n        this.openModal();\r\n\r\n        // Close Modal\r\n        this.bindEvents();\r\n\r\n    }\r\n    createDomNode(node, element, ...classes) {\r\n        node = document.createElement(element);\r\n        node.classList.add(...classes)\r\n        return node;\r\n    };\r\n\r\n    setContent(content) {\r\n        if(typeof content === 'string') {\r\n            this.modalContent.innerHTML = content;\r\n        } else {\r\n            this.modalContent.innerHTML = '';\r\n            this.modalContent.appendChild(content);\r\n        }\r\n    }\r\n\r\n    appendModalElements() {\r\n        this.modal.append(this.modalCloseBtn);\r\n        this.modal.append(this.modalContent);\r\n        this.overlay.append(this.modal);\r\n    }\r\n    bindEvents() {\r\n        this.modalCloseBtn.addEventListener('click', this.closeModal);\r\n        this.overlay.addEventListener('click', this.closeModal);\r\n    }\r\n    openModal() {\r\n        document.body.append(this.overlay);\r\n    }\r\n\r\n    closeModal(e) {\r\n        let classesForClose = e.target.classList;\r\n        let overlay = document.querySelector('.overlay');\r\n        if(overlay && (classesForClose.contains('overlay') || classesForClose.contains('modal__close-btn'))) {\r\n            overlay.remove();\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack://shelter/./src/script/Modal.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;