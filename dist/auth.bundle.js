/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/assets/scripts/auth.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/scripts/auth.js":
/*!************************************!*\
  !*** ./src/assets/scripts/auth.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _toggleFace = __webpack_require__(/*! ./modules/toggleFace */ \"./src/assets/scripts/modules/toggleFace.js\");\n\nvar _toggleFace2 = _interopRequireDefault(_toggleFace);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _toggleFace2.default)();\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvYXV0aC5qcz85ZWY0Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7OztBQUVBIiwiZmlsZSI6Ii4vc3JjL2Fzc2V0cy9zY3JpcHRzL2F1dGguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9nZ2xlRmFjZSBmcm9tIFwiLi9tb2R1bGVzL3RvZ2dsZUZhY2VcIjtcclxuXHJcbnRvZ2dsZUZhY2UoKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/auth.js\n");

/***/ }),

/***/ "./src/assets/scripts/modules/toggleFace.js":
/*!**************************************************!*\
  !*** ./src/assets/scripts/modules/toggleFace.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar welcomeContainer = document.querySelector('.welcome__container');\nvar authContainer = document.querySelector('.auth__container');\nvar authBtn = document.querySelector('.auth-btn');\nvar backToMainBtn = document.querySelector('.js-back-to-main');\n\nvar toggleFace = function toggleFace() {\n  welcomeContainer.classList.toggle('js-toogle-face');\n  authContainer.classList.toggle('js-toogle-face');\n};\n\nexports.default = function () {\n  authBtn.addEventListener('click', function () {\n    toggleFace();\n    authBtn.style.display = 'none';\n  });\n  backToMainBtn.addEventListener('click', function () {\n    toggleFace();\n    authBtn.style.display = 'block';\n  });\n\n  if (window.location.href.indexOf('auth') + 1) {\n    toggleFace();\n    authBtn.style.display = 'none';\n  }\n};\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy90b2dnbGVGYWNlLmpzPzdlMzQiXSwibmFtZXMiOlsid2VsY29tZUNvbnRhaW5lciIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImF1dGhDb250YWluZXIiLCJhdXRoQnRuIiwiYmFja1RvTWFpbkJ0biIsInRvZ2dsZUZhY2UiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwic3R5bGUiLCJkaXNwbGF5Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiaW5kZXhPZiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxJQUFNQSxtQkFBbUJDLFNBQVNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQXpCO0FBQ0EsSUFBTUMsZ0JBQWdCRixTQUFTQyxhQUFULENBQXVCLGtCQUF2QixDQUF0QjtBQUNBLElBQU1FLFVBQVVILFNBQVNDLGFBQVQsQ0FBdUIsV0FBdkIsQ0FBaEI7QUFDQSxJQUFNRyxnQkFBZ0JKLFNBQVNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQXRCOztBQUVBLElBQU1JLGFBQWEsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCTixtQkFBaUJPLFNBQWpCLENBQTJCQyxNQUEzQixDQUFrQyxnQkFBbEM7QUFDQUwsZ0JBQWNJLFNBQWQsQ0FBd0JDLE1BQXhCLENBQStCLGdCQUEvQjtBQUNELENBSEQ7O2tCQUtlLFlBQU07QUFDbkJKLFVBQVFLLGdCQUFSLENBQXlCLE9BQXpCLEVBQWtDLFlBQU07QUFDdENIO0FBQ0FGLFlBQVFNLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixNQUF4QjtBQUNELEdBSEQ7QUFJQU4sZ0JBQWNJLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFlBQU07QUFDNUNIO0FBQ0FGLFlBQVFNLEtBQVIsQ0FBY0MsT0FBZCxHQUF3QixPQUF4QjtBQUNELEdBSEQ7O0FBS0EsTUFBSUMsT0FBT0MsUUFBUCxDQUFnQkMsSUFBaEIsQ0FBcUJDLE9BQXJCLENBQTZCLE1BQTdCLElBQXVDLENBQTNDLEVBQThDO0FBQzVDVDtBQUNBRixZQUFRTSxLQUFSLENBQWNDLE9BQWQsR0FBd0IsTUFBeEI7QUFDRDtBQUNGLEMiLCJmaWxlIjoiLi9zcmMvYXNzZXRzL3NjcmlwdHMvbW9kdWxlcy90b2dnbGVGYWNlLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgd2VsY29tZUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53ZWxjb21lX19jb250YWluZXInKTtcclxuY29uc3QgYXV0aENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRoX19jb250YWluZXInKTtcclxuY29uc3QgYXV0aEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hdXRoLWJ0bicpO1xyXG5jb25zdCBiYWNrVG9NYWluQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmpzLWJhY2stdG8tbWFpbicpO1xyXG5cclxuY29uc3QgdG9nZ2xlRmFjZSA9ICgpID0+IHtcclxuICB3ZWxjb21lQ29udGFpbmVyLmNsYXNzTGlzdC50b2dnbGUoJ2pzLXRvb2dsZS1mYWNlJyk7XHJcbiAgYXV0aENvbnRhaW5lci5jbGFzc0xpc3QudG9nZ2xlKCdqcy10b29nbGUtZmFjZScpO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCAoKSA9PiB7XHJcbiAgYXV0aEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgIHRvZ2dsZUZhY2UoKTtcclxuICAgIGF1dGhCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9KTtcclxuICBiYWNrVG9NYWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgdG9nZ2xlRmFjZSgpO1xyXG4gICAgYXV0aEJ0bi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9KTtcclxuXHJcbiAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoJ2F1dGgnKSArIDEpIHtcclxuICAgIHRvZ2dsZUZhY2UoKTtcclxuICAgIGF1dGhCdG4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/assets/scripts/modules/toggleFace.js\n");

/***/ })

/******/ });